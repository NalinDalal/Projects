// src/App.tsx
import React from "react";
import Auth from "./components/Auth";
import BlogEditor from "./components/BlogEditor";
import BlogList from "./components/BlogList";

const App: React.FC = () => {
  return (
    <div>
      <Auth />
      <BlogEditor />
      <BlogList />
    </div>
  );
};

export default App;
