import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-foreground/10">
      <div className="mx-auto w-full max-w-5xl px-4 py-6 text-sm text-foreground/60">
        {siteConfig.name} · Personal learning notes · JavaScript &amp; React
      </div>
    </footer>
  );
}
