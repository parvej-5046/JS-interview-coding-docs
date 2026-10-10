import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <section className="flex flex-col gap-4">
        <p className="font-mono text-sm text-foreground/60">
          {"// my personal code notebook"}
        </p>
        <h1 className="text-4xl font-bold tracking-tight">
          Solved JavaScript &amp; React problems, ready when I need them.
        </h1>
        <p className="max-w-2xl text-lg text-foreground/70">
          A place to practise, store and quickly look up my own solutions while
          working on job tasks.
        </p>
      </section>
    </div>
  );
}
