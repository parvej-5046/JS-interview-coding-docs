// সহজ ভাষায়: Nested array (array এর ভেতরে array) কে একটা সমতল (flat) array বানানো। যত গভীরেই থাক, সব element এক স্তরে আসবে।
// উদাহরণ: [1, [2, [3, [4]]]] -> [1, 2, 3, 4]

export function flatten(nestedArray) {
  // nestedArray = যে nested array flat করতে চাই

  return nestedArray.reduce(
    (flatResult, currentItem) =>
      // flatResult = এখন পর্যন্ত জমা হওয়া flat array, currentItem = বর্তমান element
      Array.isArray(currentItem)
        ? flatResult.concat(flatten(currentItem)) // array হলে: নিজেকেই আবার call (recursion), ফল flatResult এর সাথে জোড়া লাগে
        : flatResult.concat(currentItem), // সাধারণ মান হলে: সরাসরি flatResult এ যোগ হয়
    [], // initialValue = শুরুতে খালি array; এটা না দিলে প্রথম element ই accumulator হয়ে যায় (এখানে number 1) এবং 1.concat() এ error আসে
  );
}

//Calling function
console.log(flatten([1, [2, [3, [4]]]])); // [1, 2, 3, 4]

// reduce() কী: array এর প্রতিটা element নিয়ে কাজ করে শেষে একটাই ফল (accumulated result) বানায়।
// Syntax:
// array.reduce((accumulator, currentItem) => {
//   // কিছু কাজ করো
//   return accumulator;
// }, initialValue);

// উদাহরণ: [10, 20, 30].reduce((acc, n) => acc + n, 0) -> 0 -> 10 -> 30 -> 60

// সারসংক্ষেপ (Summary):
// 1. reduce() এর initialValue [] দিয়ে শুরু করি।
// 2. Array.isArray(currentItem) দিয়ে দেখি element টা array কিনা।
// 3. array হলে flatten() নিজেকে call করে (recursion) এবং flat ফল concat দিয়ে জোড়া লাগে।
// 4. array না হলে element টা সরাসরি concat হয়।
// Execution: 1 -> [1] | [2,[3,[4]]] -> flatten -> [2,3,4] -> [1,2,3,4]
// Interview points: reduce() (accumulator), Array.isArray(), Recursion, concat() (নতুন array ফেরত দেয়, আগেরটা বদলায় না)।
// Interview tip: array হলে recursion, না হলে accumulator এ যোগ। এটাই মূল চিন্তা।
// মনে রাখো: Built-in দিয়ে এক লাইনে হয়: arr.flat(Infinity)। তবে interview এ নিজে implementation চাইলে reduce() + recursion বোঝাতে পারাই গুরুত্বপূর্ণ।
