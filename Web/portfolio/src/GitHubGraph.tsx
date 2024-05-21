// src/GitHubGraph.tsx

import React, { useEffect } from "react";

const GitHubGraph: React.FC = () => {
  useEffect(() => {
    // Load the GitHub Calendar script
    const script = document.createElement("script");
    script.src =
      "https://cdn.rawgit.com/IonicaBizau/github-calendar/gh-pages/dist/github-calendar.min.js";
    script.async = true;
    script.onload = () => {
      // @ts-ignore
      new GitHubCalendar(".calendar", "nalindalal");
    };
    document.body.appendChild(script);

    // Clean up script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdn.rawgit.com/IonicaBizau/github-calendar/gh-pages/dist/github-calendar.css"
      />
      <div className="calendar">Loading the data just for you.</div>
    </div>
  );
};

export default GitHubGraph;
