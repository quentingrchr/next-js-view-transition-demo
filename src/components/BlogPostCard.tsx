import { Post } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { unstable_ViewTransition as ViewTransition } from 'react';
import { twMerge } from 'tailwind-merge';

interface BlogPostCardProps {
  post: Post;
  variant?: 'small' | 'large';
}

export default function BlogPostCard({
  post,
  variant = 'large',
}: BlogPostCardProps) {
  return (
    <ViewTransition
      name={`blog-cover-${post.id}`}
      className="via-blur"
      exit="duration-200"
    >
      <Link
        href={`/blog/post/${post.slug}`}
        className="cursor-pointer no-underline"
      >
        <article
          className={twMerge(
            'bg-white rounded-md overflow-hidden shadow-md transition-transform duration-200 ease-in-out relative w-full h-full group',
            variant === 'small' &&
              'bg-transparent flex flex-col justify-end items-stretch'
          )}
        >
          {variant === 'small' && (
            <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-30"></div>
          )}
          <div
            className={twMerge(
              'relative w-full h-[200px]',
              variant === 'small' && 'absolute top-0 left-0 w-full h-full z-20'
            )}
          >
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className={twMerge(
                'w-full h-[200px] object-cover',
                variant === 'small' &&
                  'group-hover:scale-[1.02] transition-transform group-hover:duration-700 duration-75 linear'
              )}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div
            className={twMerge(
              'p-6',
              variant === 'small' &&
                'relative z-40 bg-black/10 h-full flex flex-col justify-end items-stretch'
            )}
          >
            <h2
              className={twMerge(
                'text-xl font-bold text-neutral-900 mb-2',
                variant === 'small' && 'text-white'
              )}
            >
              {post.title}
            </h2>
            {variant !== 'small' && (
              <p className={'text-neutral-700 text-sm leading-relaxed mb-4'}>
                {post.excerpt}
              </p>
            )}
            {variant !== 'small' && (
              <div className="flex justify-start gap-2 items-center text-neutral-500 text-xs">
                <span>{post.country}</span>
                <span>Created in {post.date}</span>
              </div>
            )}
          </div>
        </article>
      </Link>
    </ViewTransition>
  );
}
