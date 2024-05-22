//import React from "react";
import ReactMarkdown from "react-markdown";

const MarkdownContent = () => {
  const markdown = `
[![Nalindalal2004's LeetCode Stats](https://leetcode-stats.vercel.app/api?username=Nalindalal2004&theme=Light)](https://github.com/JeremyTsaii/leetcode-stats)


`;

  return (
    <div className="text-gray-950">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
};

export default MarkdownContent;
