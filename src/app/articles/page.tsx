import { PostRow } from "@/components/PostRow";
import { getAllPosts } from "@/lib/content";

export const metadata = {
  title: "Articles",
  description: "Thoughts, tutorials, and reflections.",
};

export default function ArticlesPage() {
  const posts = getAllPosts();

  return (
    <section className="space-y-12">
      <header className="space-y-2 border-b border-neutral-200 pb-4">
        <h1 className="text-2xl font-bold tracking-tight text-neutral-900">Articles</h1>
        <p className="text-base text-neutral-600">
          Thoughts on code, craft, and building software.
        </p>
      </header>

      <section className="space-y-6">
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
