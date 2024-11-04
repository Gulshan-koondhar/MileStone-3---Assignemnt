import { posts } from "@/constants/posts";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Featured = () => {
  const post = posts.filter(
    (post) => post.featured === true && post.priority === "high"
  );
  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <h1 className="font-bold text-2xl">Featured</h1>
      <div className="flex justify-center items-center relative">
        <div className="my-4">
          {post.map((data) => (
            <Link href={`/blog/${data.slug}`} key={data.blogTitle}>
              <div className="w-[300px] sm:w-[500px] xl:w-[700px] h-full">
                <Image
                  src={data.blogImage}
                  alt=""
                  width={300}
                  height={100}
                  className="w-full h-full rounded-lg"
                />
                <div className="absolute bg-white top-24 border p-2 -left-3 px-8 sm:left-20 sm:top-52 lg:left-60 xl:left-64 xl:top-72 rounded-md">
                  <h1 className="text-[#4B6BFB] text-sm font-light bg-gray-200 w-28 rounded text-center px-3 py-1 ">
                    {data.blogCategory}
                  </h1>
                  <h1 className="text-xl font-semibold mt-2">
                    {data.blogTitle}
                  </h1>
                  <div className="flex gap-4 items-center">
                    <Image
                      src={data.authorImage}
                      alt=""
                      width={24}
                      height={24}
                    />
                    <h1>{data.authorName}</h1>
                    <p>{data.blogDate}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
