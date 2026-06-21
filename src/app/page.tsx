import { PostRow } from "@/components/PostRow";
import { getAllPosts } from "@/lib/content";

export default function Home() {
  const posts = getAllPosts();

  return (
    <section className="space-y-12">
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

      <section aria-labelledby="latest-posts" className="space-y-6">
        <h2 id="latest-posts" className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
          Articles
        </h2>
        {posts.length > 0 ? (
          <ul className="flex flex-col">
            {posts.map((post) => (
              <PostRow key={post.slug} date={post.date} title={post.title} slug={post.slug} />
            ))}
          </ul>
        ) : (
          <p className="text-neutral-500 italic">No articles published yet.</p>
        )}
      </section>
    </section>
  );
}
