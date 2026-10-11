// সহজ ভাষায়: নির্দিষ্ট সময়ে সর্বোচ্চ একবার চলবে। Scroll বা resize event এ লাগে।
// Debounce vs Throttle: Debounce শেষে একবার চলে। Throttle নিয়মিত বিরতিতে চলে।
// উদাহরণ: Scroll করার সময় প্রতি 200ms এ সর্বোচ্চ 1 বার handleScroll চলে, শত শত বার না।

export function Throttle(fn, limit) {
  // fn = যে function সীমিত বার চালাবো, limit = দুই call এর মাঝে কত ms অপেক্ষা করতে হবে

  let waiting = false; // এখন "অপেক্ষার সময়" চলছে কিনা তার flag; closure এর কারণে ভেতরের function এটা মনে রাখে

  return (...args) => {
    // নতুন function ফেরত দেয়; ...args (rest) = পাঠানো সব argument কে array তে জমা করে

    if (waiting) return; // অপেক্ষার সময়ে call এলে কিছু না করে বাদ দেয় (Debounce এর মতো পরে চালায় না, একদম ignore করে)

    fn(...args); // প্রথম call সাথে সাথে চলে (...args = spread, array খুলে argument হিসেবে দেয়)
    waiting = true; // এখন থেকে limit ms পর্যন্ত নতুন call block থাকবে
    setTimeout(() => (waiting = false), limit); // limit ms পরে flag false, তখন আবার call চলতে পারবে
  };
}

//Calling function
const onScroll = Throttle(() => console.log("scrolling"), 200); // Throttle() একটা নতুন function ফেরত দেয়, সেটা onScroll এ রাখি
window.addEventListener("scroll", onScroll); // scroll হলে প্রতি 200ms এ সর্বোচ্চ একবার চলবে

// সারসংক্ষেপ (Summary):
// 1. প্রথম call হলে fn সাথে সাথে চলে।
// 2. এরপর waiting = true হয় এবং limit ms এর জন্য সব call ignore হয়।
// 3. limit ms পর waiting = false হয়, তখন পরের call আবার চলতে পারে।
// উদাহরণ: 1 সেকেন্ড ধরে scroll করলে (limit = 200) -> fn প্রায় 5 বার চলে, শত শত বার না।
// Interview points: Closure (waiting flag), Rest/Spread (...args), setTimeout।
// মনে রাখো: এই version leading edge এ চলে (প্রথম call সাথে সাথে)। শেষ call টা ignore হতে পারে, দরকার হলে trailing call যোগ করতে হয়।
