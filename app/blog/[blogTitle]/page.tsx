import React from "react";
import { posts } from "@/constants/posts";
import Image from "next/image";
import Comment from "@/components/Comment";

const page = ({ params }: { params: { blogTitle: string } }) => {
  const post = posts.find((p) => p.slug == params.blogTitle);
  if (!post) {
    <div>Post Not Found</div>;
  } else {
    return (
      <div className="max-w-screen-xl mx-auto p-4">
        <div className="text-xl sm:text-5xl font-bold">{post.title}</div>
        <div className="flex items-center gap-4 my-4">
          <Image src={post.AImage} alt="" width={40} height={24} />
          <h1 className="text-gray-400 text-sm sm:text-lg">
            {post.authorName}
          </h1>
          <p className="text-gray-400 text-sm sm:text-lg">{post.Date}</p>
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
          <p className="text-lg text-justify">{post.content}</p>
        </div>
        <div className="flex items-center w-full my-8">
          <Comment />
        </div>
      </div>
    );
  }
};
export default page;
