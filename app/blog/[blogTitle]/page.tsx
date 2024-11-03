import React from "react";
import { posts } from "@/constants/posts";
import Image from "next/image";
import Comment from "@/components/Comment";

export default async function page({
  params,
}: {
  params: Promise<{ blogTitle: string }>;
}) {
  const BlogTitle = (await params).blogTitle;
  const post = posts.find((p) => p.slug == BlogTitle);
  if (!post) {
    <div>Post Not Found</div>;
  } else {
    return (
      <div className="max-w-screen-xl mx-auto p-4">
        <div className="text-xl sm:text-5xl font-bold">{post.blogTitle}</div>
        <div className="flex items-center gap-4 my-4">
          <Image src={post.authorImage} alt="" width={40} height={24} />
          <h1 className="text-gray-400 text-sm sm:text-lg">
            {post.authorName}
          </h1>
          <p className="text-gray-400 text-sm sm:text-lg">{post.blogDate}</p>
        </div>
        <div>
          <Image
            src={post.blogImage}
            alt=""
            width={700}
            height={500}
            className="mx-auto my-8"
          />
        </div>
        <div>
          <p className="text-lg text-justify">{post.blogContent}</p>
        </div>
        <div className="flex items-center w-full my-8">
          <Comment />
        </div>
      </div>
    );
  }
}
