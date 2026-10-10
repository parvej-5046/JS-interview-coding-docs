import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center space-y-5 p-8">
      <h1 className="font-bold text-2xl tracking-wider">Page not found</h1>
      <Link href="/" className="bg-cyan-600 p-5 rounded-2xl">
        Back to Home
      </Link>
    </div>
  );
}
