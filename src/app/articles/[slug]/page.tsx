import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrism from "rehype-prism-plus";
import { getAllPosts, getPostBySlug } from "@/lib/content";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const options = {
    mdxOptions: {
      rehypePlugins: [rehypePrism],
    },
  };

  return (
    <article className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-2xl font-bold tracking-tight text-neutral-900">
          {post.meta.title}
        </h1>
        <time className="block text-sm text-neutral-500">{post.meta.date}</time>
      </header>
      
      <div className="prose">
        <MDXRemote source={post.content} options={options as any} />
      </div>
    </article>
  );
}

