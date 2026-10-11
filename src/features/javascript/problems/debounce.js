// সহজ ভাষায়: User থামার পর কাজ হবে। প্রতিবার টাইপ করলে timer নতুন করে শুরু হয়। Search box এ API call কমাতে ব্যবহার হয়।
// উদাহরণ: "phone" টাইপ করলে 5টা call না, শুধু 1টা call হয়।

export function debounce(fn, wait) {
  // fn = যে function দেরিতে চালাবো (execute না করে, শুধু পাঠানো), wait = কত ms অপেক্ষা করবে

  let timer; // setTimeout এর timer ID রাখে; শুরুতে undefined। closure এর কারণে ভেতরের function এটা মনে রাখে

  return (...args) => {
    // নতুন function ফেরত দেয়; ...args (rest) = পাঠানো সব argument কে array তে জমা করে

    clearTimeout(timer); // এই লাইনের কাজ হলো আগে চালু করা timeout থাকলে সেটিকে cancel করা। (প্রথমবার undefined হলেও safe)

    timer = setTimeout(() => fn(...args), wait); // wait ms পরে fn চালাবে (...args = spread, array খুলে argument হিসেবে দেয়); নতুন timer ID save করে
  };
}

//Calling funciton
const search = debounce((text) => console.log(text), 500); // debounce() একটা নতুন function ফেরত দেয়, সেটা search এ রাখি
search("R"); // বাতিল হবে
search("Re"); // বাতিল হবে
search("React"); // শুধু এটা চলবে, 500ms পর -> console এ "React"

// সারসংক্ষেপ (Summary):
// 1. প্রতিবার call হলে আগের pending timer বাতিল (clearTimeout) হয়।
// 2. নতুন timer শুরু হয় (setTimeout)।
// 3. call আসা থামলে, wait ms পর শুধু শেষ call এর argument দিয়ে fn একবার চলে।
// উদাহরণ: search("R"), search("Re"), search("React") পরপর -> console.log শুধু 1 বার, "React" দিয়ে।
// Interview points: Closure (timer), Rest/Spread (...args), clearTimeout + setTimeout।
// মনে রাখো: wait শেষ হওয়ার ঠিক সেই ms এ চলার নিশ্চয়তা নেই, event loop এর কারণে একটু দেরি হতে পারে।
