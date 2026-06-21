import Link from "next/link";

type PostRowProps = {
  date: string;
  title: string;
  slug: string;
};

export function PostRow({ date, title, slug }: PostRowProps) {
  return (
    <li className="grid grid-cols-[8rem_1fr] gap-4 py-2 text-base">
      <time className="text-neutral-500">{date}</time>
      <Link href={`/articles/${slug}`} className="text-neutral-900 hover:underline">
        {title}
      </Link>
    </li>
  );
}
