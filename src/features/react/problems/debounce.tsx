"use client";
import React, { useEffect, useState } from "react";
import { useDebounce } from "@/hooks/use-debounce";

// সহজ ভাষায়: User টাইপ থামানোর 1 সেকেন্ড পর শুধু একবার API call হবে। প্রতি অক্ষরে call হবে না।
export default function Debounce() {
  const [query, setQuery] = useState<string>(""); // input এর বর্তমান text; প্রতিবার টাইপ করলে বদলায়
  const [products, setProducts] = useState([]); // API থেকে পাওয়া product list
  const debouncedQuery = useDebounce(query, 1000); // query থামার 1 সেকেন্ড পর বদলায়

  // ================= Version 1: useEffect দিয়ে সরাসরি (পুরনো code) =================

  // // query বদলালেই এই effect চলে (dependency = [query])
  // useEffect(() => {
  //   console.log("effect run:", query); // প্রতি keystroke এ print হয়
  //
  //   // 1 সেকেন্ড পর API call হবে (এখনই না); timer ID save করি যাতে cancel করা যায়
  //   const timer = setTimeout(() => {
  //     console.log("API call:", query); // শুধু টাইপ থামার পর print হয়
  //     fetch(`https://dummyjson.com/products/search?q=${query}`).then(
  //       (res) => res.json().then((data) => setProducts(data.products)), // result state এ রাখি, UI update হয়
  //     );
  //   }, 1000);
  //
  //   // cleanup: query আবার বদলালে (নতুন টাইপ) React আগে এটা চালায় -> আগের pending timer cancel
  //   // এটাই debounce এর কাজ (JS এর clearTimeout(timer) এর সমান)
  //   return () => clearTimeout(timer);
  // }, [query]);

  // ================= Version 2: useDebounce hook দিয়ে =================

  // dependency debouncedQuery; তাই শুধু টাইপ থামার পর API call হয়, timer এর কাজ hook এ
  useEffect(() => {
    console.log("API call:", debouncedQuery);
    fetch(`https://dummyjson.com/products/search?q=${debouncedQuery}`).then(
      (res) => res.json().then((data) => setProducts(data.products)),
    );
  }, [debouncedQuery]);

  return (
    <div className="max-w-md space-y-4">
      <input
        className="w-full rounded-lg bg-white px-4 py-2 text-black"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)} // টাইপ করলেই query state বদলায় (API call না)
      />

      {/* Typing: তাৎক্ষণিক, Debounced: 1 সেকেন্ড পর */}
      <p className="text-sm opacity-70">Typing: {query}</p>
      <p className="text-sm opacity-70">Debounced: {debouncedQuery}</p>

      <ul className="space-y-2.5">
        {products.map((product: any) => (
          <li key={product.id} className="border-2 p-2 rounded-2xl text-sm">
            {product.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
