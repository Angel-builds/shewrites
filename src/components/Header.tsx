import Link from "next/link";

export function Header() {
  return (
    <header className="mb-12">
      <nav aria-label="Primary" className="flex gap-5 text-sm pb-4">
        <Link href="/" className="text-neutral-700 hover:text-neutral-950 hover:underline">
          Angel
        </Link>
        <Link href="/articles" className="text-neutral-700 hover:text-neutral-950 hover:underline">
          Articles
        </Link>
        <Link href="/notes" className="text-neutral-700 hover:text-neutral-950 hover:underline">
          Notes
        </Link>
      </nav>
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
    </header>
  );
}
