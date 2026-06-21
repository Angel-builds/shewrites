import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrism from "rehype-prism-plus";
import { getAllNotes } from "@/lib/content";

export const metadata = {
  title: "Notes",
  description: "A chronological stream of thoughts, snippets, and micro-posts.",
};

export default function NotesPage() {
  const notes = getAllNotes();

  const options = {
    mdxOptions: {
      rehypePlugins: [rehypePrism],
    },
  };

  return (
    <section className="space-y-16">
      <header className="space-y-2 border-b border-neutral-200 pb-4">
        <h1 className="text-2xl font-bold tracking-tight text-neutral-900">Notes</h1>
        <p className="text-base text-neutral-600">
          A continuous stream of thoughts, code snippets, and small ideas.
        </p>
      </header>

      {notes.length > 0 ? (
        <div className="space-y-16">
          {notes.map((note) => (
            <article key={note.slug} className="space-y-4">
              <time className="text-sm text-neutral-500 font-mono">{note.date}</time>
              <div className="prose prose-neutral">
                <MDXRemote source={note.content} options={options as any} />
              </div>
            </article>
          ))}
        </div>
      ) : (
        <p className="text-neutral-500 italic">No notes published yet.</p>
      )}
    </section>
  );
}
