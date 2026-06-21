import Link from "next/link";

export function Header() {
  return (
    <header className="mb-12 border-b border-neutral-200 pb-4">
      <nav aria-label="Primary" className="flex gap-5 text-sm">
        <Link href="/" className="text-neutral-700 hover:text-neutral-950 hover:underline">
          About
        </Link>
        <Link href="/articles" className="text-neutral-700 hover:text-neutral-950 hover:underline">
          Articles
        </Link>
        <Link href="/notes" className="text-neutral-700 hover:text-neutral-950 hover:underline">
          Notes
        </Link>
      </nav>
    </header>
  );
}
