//import React from "react";
import "./App.css";
import GitHubGraph from "./GitHubGraph";
import MarkdownContent from "./MarkdownContent";
import MyDeployment from "./my_deployment";

function App() {
  return (
    <>
      <div>
        <div>
          <div>
            <p>Hi there this will be a porfolio site made by</p>
            <p className="text-gray-950">Demo text</p>
            <code>us i.e. me i.e. nalin aka author </code>

            {/* My img through github */}
            <img src="https://avatars.githubusercontent.com/u/116961144?v=4" />
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
            <a href="https://leetcode.com/u/Nalindalal2004/">LeetCode</a>
            {/* LeetCode link */}
            <br />
            <br />
            <br />
            <p className="{color=#10b981}"> My GitHub Activity</p>
            <GitHubGraph />

            <br />
            <h1>My LeetCode Stats</h1>
            <MarkdownContent />

            <div>
              <MyDeployment />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
