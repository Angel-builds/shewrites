import { PostRow } from "@/components/PostRow";

const placeholderPosts = [
  { date: "2026-06-20", title: "Launching a calm corner of the internet" },
  { date: "2026-06-17", title: "Notes from building with constraints" },
  { date: "2026-06-14", title: "Designing for clarity over decoration" },
];

export default function Home() {
  return (
    <section className="space-y-10">
      <div className="space-y-4 text-base leading-7 text-neutral-800">
        <p>
          I&apos;m an engineer and writer building thoughtful software, documenting
          lessons from real projects, and sharing small experiments in public.
        </p>
        <p>
          This site is a quiet feed of articles and notes about code, craft, and
          clear communication.
        </p>
      </div>

      <section aria-labelledby="latest-posts" className="space-y-4">
        <h2 id="latest-posts" className="text-sm font-semibold uppercase tracking-wide">
          Date | Title
        </h2>
        <ul>
          {placeholderPosts.map((post) => (
            <PostRow key={`${post.date}-${post.title}`} date={post.date} title={post.title} />
          ))}
        </ul>
      </section>
    </section>
  );
}
