import Image from "next/image";
import React from "react";
import Image1 from "@/public/Rectangle 38.png";

import { posts } from "@/constants/posts";
import Link from "next/link";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface Post {
  title: string;
  category: string;
  authorName: string;
  Date: string;
  blogImage: string | StaticImport;
  AImage: string;
  slug: string;
  content: string;
}

const Blog = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-4 px-2">
      <div>
        <h1 className="text-bold text-2xl">Latest Posts</h1>
        <div className="flex flex-col items-center justify-center flex-wrap sm:flex-row gap-8 my-5">
          {posts.map((post: Post, index: number) => (
            <Link href={`/blog/${post.slug}`} key={index}>
              <div className="w-[300px] flex flex-col gap-2 ring-1 ring-[#E8E8EA] p-3 rounded-md">
                <div>
                  <Image src={Image1} alt="" width={300} height={200} />
                </div>
                <h1 className="text-[#4B6BFB] text-sm font-light bg-gray-200 rounded w-24 text-center px-3 py-1 ">
                  {post.category}
                </h1>
                <h1 className="font-semibold text-xl">{post.title}</h1>
                <div className="flex items-center gap-2">
                  <Image src={post.AImage} alt="" width={24} height={24} />
                  <h1 className="text-sm font-medium text-[#97989F]">
                    {post.authorName}
                  </h1>
                  <p className="text-sm font-medium text-[#97989F]">
                    {post.Date}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
