import BlogPostCard from '@/components/BlogPostCard';
import { blogPosts } from '@/data';

export default function Home() {
  return (
    <div>
      <h1 className="text-5xl font-bold text-neutral-900 text-center mt-8 mb-12">
        War Machines of WWII
      </h1>
      <div className="grid [grid-template-columns:repeat(auto-fit,_minmax(300px,_1fr))] gap-8 px-8 max-w-[1200px] mx-auto">
        {blogPosts.map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
