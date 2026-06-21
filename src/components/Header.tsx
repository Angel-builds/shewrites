import Link from "next/link";

const links = [
  { href: "/about", label: "About" },
  { href: "/articles", label: "Articles" },
  { href: "/notes", label: "Notes" },
];

export function Header() {
  return (
    <header className="mb-12 border-b border-neutral-200 pb-4">
      <nav aria-label="Primary" className="flex gap-5 text-sm">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-neutral-700 hover:text-neutral-950 hover:underline"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
