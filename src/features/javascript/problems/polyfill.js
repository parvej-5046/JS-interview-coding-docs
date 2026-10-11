// সহজ ভাষায়: Polyfill মানে built-in feature নিজে বানানো। এখানে Array এর map() নিজে বানাচ্ছি।
// Interviewer দেখে আপনি this আর callback বোঝেন কিনা।
// উদাহরণ: [1, 2, 3].map(n => n * 2) -> [2, 4, 6]; আমাদেরটা দিয়েও একই ফল পাবো।

Array.prototype.customMap = function (callbackFn) {
  // callbackFn = প্রতিটা element এর জন্য যে function চলবে; Array.prototype এ রাখলে সব array এ পাওয়া যায়
  // এখানে arrow function না, normal function দিয়েছি, কারণ arrow function এর নিজের this থাকে না

  const mappedArray = []; // নতুন array, এতে প্রতিটা callback এর ফল জমা হবে (original array বদলায় না)

  for (let index = 0; index < this.length; index++) {
    // this = যে array এর উপর customMap call করা হয়েছে (যেমন [1, 2, 3])

    mappedArray.push(callbackFn(this[index], index, this)); // callback কে 3টা জিনিস দেয়: element, index, পুরো array (ঠিক built-in map এর মতো)
  }

  return mappedArray; // নতুন array ফেরত দেয়
};

//Calling function
const doubled = [1, 2, 3].customMap((num) => num * 2); // প্রতিটা number কে 2 দিয়ে গুণ করবে
console.log("Output of Polyfill: ", doubled); // [2, 4, 6]

// সারসংক্ষেপ (Summary):
// 1. Array.prototype এ নতুন method যোগ করি, তাই সব array এ customMap পাওয়া যায়।
/// JavaScript-এ প্রতিটা object-এর একটা লুকানো "বাবা" object থাকে, যাকে prototype বলে। কোনো object-এ একটা method না পেলে JS তার prototype-এ খোঁজে।
// সেখানেও না পেলে আরও উপরের prototype-এ খোঁজে। এই চেইনকে prototype chain বলে।
// 2. loop এ প্রতিটা element এর জন্য callbackFn(element, index, array) চলে।
// 3. callback এর ফল নতুন array তে push হয় এবং শেষে সেটা ফেরত আসে।
// উদাহরণ: [1, 2, 3].customMap(n => n * 2) -> [2, 4, 6]
// Interview points: this (call করা array), Prototype, Callback function, normal function vs arrow function।
// মনে রাখো: Original array বদলায় না। Built-in map এ sparse array (ফাঁকা slot) skip হয় আর callback function কিনা check করে, এই version এ সেটা নেই।
