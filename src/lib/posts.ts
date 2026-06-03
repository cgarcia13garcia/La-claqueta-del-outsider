import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'src/posts');

export type PostMeta = {
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  image?: string;
  featured?: boolean;
  portada?: boolean;
  order?: number;
};

export type Post = PostMeta & {
  contentHtml: string;
};

export function getAllPosts(): PostMeta[] {
  const fileNames = fs.readdirSync(postsDirectory);

  const posts = fileNames
    .filter((name) => name.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title as string,
        category: data.category as string,
        date: data.date as string,
        excerpt: data.excerpt as string,
        image: (data.image as string) ?? undefined,
        featured: (data.featured as boolean) ?? false,
        portada: (data.portada as boolean) ?? false,
        order: (data.order as number) ?? undefined,
      };
    });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    title: data.title as string,
    category: data.category as string,
    date: data.date as string,
    excerpt: data.excerpt as string,
    image: (data.image as string) ?? undefined,
    featured: (data.featured as boolean) ?? false,
    contentHtml,
  };
}

export function getAllSlugs(): string[] {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((name) => name.endsWith('.md'))
    .map((fileName) => fileName.replace(/\.md$/, ''));
}
