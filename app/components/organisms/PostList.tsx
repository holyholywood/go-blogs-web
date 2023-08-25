import PostItem from "@/app/home/components/PostItem";
import { post } from "@/model/Post";
import React from "react";
type postListProps = {
  posts: post[];
};
const PostList = ({ posts }: postListProps) => {
  return (
    <div className="space-y-4 ">
      {posts.length > 0 ? (
        <>
          {posts.map((post) => (
            <PostItem {...post} key={post.id} />
          ))}
        </>
      ) : (
        <div className="flex flex-col gap-4 py-8 justify-center items-center">
          <div className="text-5xl">☹️</div>
          <h1 className="text-xl text-dark-hover">Tidak ada post saat ini</h1>
        </div>
      )}
    </div>
  );
};

export default PostList;
