import ArticleItem from "@/app/home/components/ArticleItem";
import { post } from "@/model/Post";
import React from "react";
type articleListProps = {
  posts: post[];
};
const ArticleList = ({ posts }: articleListProps) => {
  return (
    <div className="space-y-4 ">
      {posts.map((post) => (
        <ArticleItem {...post} key={post.id} />
      ))}
    </div>
  );
};

export default ArticleList;
