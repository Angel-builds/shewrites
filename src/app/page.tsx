import { PostRow } from "@/components/PostRow";
import { getAllPosts } from "@/lib/content";

export default function Home() {
  const posts = getAllPosts();

  return (
    <section className="space-y-12">
      <div className="space-y-4 text-base leading-7 text-neutral-800">
        <p>
          Hi!! Angel here and welcome to my website. I am a student at Grambling State University. I study Computer Science and no, I haven&apos;t been coding since I was 2 (lol).
          I am learning about dev, engineering, ml, embroidery, fashion, and some other things as well, and I need a place to voice this out, hence the birth of this render you see right now.
        </p>
        <p>
          So I am writing to learn, share what I learn, and hear from others. I am open to conversations, questions, and even critiques.
        </p>
        <p>
          P.S. This is a quiet feed of my thoughts, musings, notes, and articles about code, embroidery, and
          the human side of building cool things (website design inspo from the goated <a href="https://healeycodes.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-neutral-950">healycodes</a>).
        </p>
        <p>
          Github: <a href="https://github.com/Angel-builds" target="_blank" rel="noopener noreferrer" className="underline hover:text-neutral-950">Angel-builds</a>
          </p>
          <p>
          LinkedIn: <a href="https://www.linkedin.com/in/angelantwi77/" target="_blank" rel="noopener noreferrer" className="underline hover:text-neutral-950">Angel Antwi</a>
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
