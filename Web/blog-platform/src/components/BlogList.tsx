// src/components/BlogList.tsx
import React from "react";

const BlogList: React.FC = () => {
  // Replace with actual data fetching logic
  const posts = [
    { id: 1, title: "Post 1" },
    { id: 2, title: "Post 2" },
  ];

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};

export default BlogList;
