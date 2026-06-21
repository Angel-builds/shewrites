import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "src/content/posts");
const NOTES_DIR = path.join(process.cwd(), "src/content/notes");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  description?: string;
  isFeatured?: boolean;
};

export type Note = {
  slug: string;
  date: string;
  content: string;
};

function ensureDirExists(dirPath: string) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

export function getAllPosts(): PostMeta[] {
  ensureDirExists(POSTS_DIR);
  const files = fs.readdirSync(POSTS_DIR);
  
  const posts = files
    .filter((fileName) => fileName.endsWith(".md") || fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx?$/, "");
      const filePath = path.join(POSTS_DIR, fileName);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContent);

      return {
        slug,
        title: data.title || slug,
        date: data.date || "1970-01-01",
        description: data.description,
        isFeatured: data.isFeatured === true,
      };
    })
    .sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));

  return posts;
}

export function getPostBySlug(slug: string) {
  ensureDirExists(POSTS_DIR);
  let filePath = path.join(POSTS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    filePath = path.join(POSTS_DIR, `${slug}.md`);
  }
  
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    meta: {
      slug,
      title: data.title || slug,
      date: data.date || "1970-01-01",
      description: data.description,
      isFeatured: data.isFeatured === true,
    },
    content,
  };
}

export function getAllNotes(): Note[] {
  ensureDirExists(NOTES_DIR);
  const files = fs.readdirSync(NOTES_DIR);

  const notes = files
    .filter((fileName) => fileName.endsWith(".md") || fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx?$/, "");
      const filePath = path.join(NOTES_DIR, fileName);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(fileContent);

      return {
        slug,
        date: data.date || slug.split("-").slice(0, 3).join("-"),
        content,
      };
    })
    .sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));

  return notes;
}
