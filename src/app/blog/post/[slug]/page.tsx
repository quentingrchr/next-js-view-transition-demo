import { BlogCoverImage } from '@/components/BlogCoverImage';
import BlogPostCard from '@/components/BlogPostCard';
import { blogPosts } from '@/data';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function BlogPostPage({
  params,
}: Readonly<{
  params: Promise<{ slug: string }>;
}>) {
  const { slug } = await params;
  const article = blogPosts.find((post) => post.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="flex flex-col p-8 justify-center">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-neutral-500 no-underline mb-8 text-sm transition-colors duration-200 ease-in hover:text-neutral-700"
      >
        ← Back to all articles
      </Link>
      <main className="w-full md:w-[90vw] md:max-w-7xl mx-auto mt-8 flex flex-col-reverse md:flex-row gap-8">
        <div className="w-full md:w-[70%] my-0 mx-auto">
          <article className="my-0 mx-auto max-w-full w-full">
            <BlogCoverImage
              src={article.coverImage}
              alt={article.title}
              id={article.id}
            />

            <header className="mb-8">
              <h1 className="text-4xl font-bold text-neutral-800 mb-2">
                {article.title}
              </h1>
              <div className="flex gap-4 text-neutral-500 text-sm">
                <span>{article.country}</span>
                <span>Created in {article.date}</span>
              </div>
            </header>

            <p className="text-neutral-600 text-base leading-relaxed mb-2 italic">
              {article.excerpt}
            </p>

            <div className="mb-8">
              <p className="text-base text-neutral-900">
                {article.content.main}
              </p>
            </div>

            <div className="mb-12 rounded-lg">
              <h2 className="text-xl text-neutral-900 mb-4">Key Features</h2>
              <ul className="list-none p-0 grid gap-3">
                {article.content.keyFeatures.map((feature, index) => (
                  <li
                    className="relative text-neutral-900 text-base pl-6 before:content-['-'] before:text-neutral-400 before:absolute before:left-0"
                    key={index}
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
        <aside className="flex flex-col gap-4 w-full md:w-[30%]">
          <div className="w-full grid-cols-2 grid md:grid-cols-1 md:[grid-template-rows:repeat(10,180px)] gap-2">
            {blogPosts
              .filter((post) => post.id !== article.id)
              .map((post) => (
                <BlogPostCard key={post.id} post={post} variant="small" />
              ))}
          </div>
        </aside>
      </main>
    </div>
  );
}
