// প্রশ্ন: একটা array তে কোন দুইটা সংখ্যার যোগফল target এর সমান? তাদের index দিন।
// সহজ ভাষায়: array একবার ঘুরি। প্রতিটা সংখ্যার জন্য দেখি তার "জোড়ার সংখ্যা" আগে দেখেছি কিনা। দেখে থাকলে উত্তর পেয়ে গেলাম।
// উদাহরণ: nums = [2, 7, 11, 15], target = 9 -> 7 এর জোড়া 2 আগেই দেখেছি, তাই উত্তর [0, 1]

export function twoSum(nums, target) {
  // nums = সংখ্যার array, target = যে যোগফল খুঁজছি

  const seenIndices = new Map(); // এখন পর্যন্ত দেখা সংখ্যা -> তার index। const দেওয়া জরুরি, না দিলে এটা accidental global হয়ে যায়

  for (let index = 0; index < nums.length; index++) {
    const complement = target - nums[index]; // এই সংখ্যার সাথে যোগ করে target পেতে হলে যে সংখ্যা লাগবে

    if (seenIndices.has(complement)) {
      return [seenIndices.get(complement), index]; // জোড়ার সংখ্যা আগেই দেখা হয়েছে; তার index আর বর্তমান index ফেরত দেয়
    }

    seenIndices.set(nums[index], index); // মেলেনি, তাই বর্তমান সংখ্যাটা পরের জন্য মনে রাখি
  }

  return []; // কোনো জোড়া না মিললে খালি array
}

//Calling function
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]

// সারসংক্ষেপ (Summary):
// 1. প্রতিটা সংখ্যার complement (target - সংখ্যা) বের করি।
// 2. Map এ complement আছে কিনা দেখি। থাকলে দুইটা index ফেরত দিই।
// 3. না থাকলে বর্তমান সংখ্যা ও index Map এ রাখি।
// Execution: index 0 -> complement 7, Map খালি, Map = {2: 0} | index 1 -> complement 2, Map এ আছে -> [0, 1]
// Complexity: Time O(n) (একবারই loop), Space O(n) (Map এ সংখ্যা জমে)।
// Interview points: Map/Hash Map lookup O(1), Complement, Time-Space trade-off (বেশি memory দিয়ে কম সময়)।
// মনে রাখো: Brute force এর O(n²) কে O(n) করা হলো। Map এ চেক করার পরে set করি, তাই একই সংখ্যা নিজের সাথে জোড়া লাগে না।
