import React from "react";
import "./App.css";
import GitHubGraph from "./GitHubGraph";
//import LeetCodeStats from "./LeetCodeStats";

function App() {
  return (
    <>
      <div>
        <p>Hi there this will be a porfolio site made by</p>
        <code>us i.e. me i.e. nalin aka author </code>
        <br />
        <br />
        <a href="https://github.com/nalindalal">Github</a>
        {/* Github link */}
        <br />
        <a href="https://www.linkedin.com/in/nalindalal/">Linkedin</a>
        {/* Linkedin link */}
        <br />
        <a href="https://twitter.com/nalindalal">Twitter</a>
        {/* Twitter link */}
        <br />
        <br />
        <br />
        <br />
        <p className="{color=#10b981}">
          {" "}
          My GitHub Activity and Contribution Graph:
        </p>
        <GitHubGraph />
        <p> My LeetCode Stats:</p>
      </div>
    </>
  );
}

export default App;
