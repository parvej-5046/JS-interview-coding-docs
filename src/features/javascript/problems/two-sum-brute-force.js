// প্রশ্ন: একটা array তে কোন দুইটা সংখ্যার যোগফল target এর সমান? তাদের index দিন।
// সহজ ভাষায়: প্রতিটা সংখ্যাকে তার পরের সব সংখ্যার সাথে জোড়া লাগিয়ে যোগ করে দেখি, target এর সমান হয় কিনা।
// উদাহরণ: nums = [2, 7, 11, 15], target = 9 -> 2 + 7 = 9, তাই উত্তর [0, 1]

export function twoSum(nums, target) {
  // nums = সংখ্যার array, target = যে যোগফল খুঁজছি

  for (let i = 0; i < nums.length; i++) {
    // বাইরের loop = প্রথম সংখ্যার index

    for (let j = i + 1; j < nums.length; j++) {
      // ভেতরের loop = দ্বিতীয় সংখ্যার index; i + 1 থেকে শুরু, তাই একই সংখ্যা দুইবার ব্যবহার হয় না এবং জোড়া repeat হয় না

      if (nums[i] + nums[j] === target) {
        return [i, j]; // যোগফল মিললে দুইটা index সাথে সাথে ফেরত দেয়
      }
    }
  }

  return []; // কোনো জোড়া না মিললে খালি array
}

//Calling function
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]

// সারসংক্ষেপ (Summary):
// 1. প্রতিটা সংখ্যার জন্য তার পরের সব সংখ্যার সাথে যোগ করে দেখি।
// 2. যোগফল target এর সমান হলে দুইটা index ফেরত দিই।
// 3. কোনোটাই না মিললে [] ফেরত দিই।
// Complexity: Time O(n²) (nested loop), Space O(1) (বাড়তি memory লাগে না)।
// Interview points: Nested loop, Time vs Space complexity, i + 1 থেকে শুরু করার কারণ।
// মনে রাখো: সবচেয়ে সহজ কিন্তু ধীর উপায়। Array বড় হলে Hash Map (two-sum-hashmap.js) দিয়ে O(n) এ করা যায়।
