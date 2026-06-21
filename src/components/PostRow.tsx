type PostRowProps = {
  date: string;
  title: string;
};

export function PostRow({ date, title }: PostRowProps) {
  return (
    <li className="grid grid-cols-[9rem_1fr] gap-4 border-b border-neutral-200 py-3 text-sm">
      <time className="text-neutral-500">{date}</time>
      <span className="text-neutral-900">{title}</span>
    </li>
  );
}
