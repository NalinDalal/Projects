import React from "react";

export const Project = () => {
  return (
    <div>
      <ul>
        <li>
          <a href="https://projects-woon.vercel.app/">
            <p className="block mt-1 text-lg leading-tight font-small text-indigo-600 hover:underline">
              portfolio site
            </p>
          </a>
        </li>
        <li>
          <a href="https://gitglance.vercel.app/NalinDalal">
            <p className="block mt-1 text-lg leading-tight font-small text-indigo-600 hover:underline">
              viusalise github
            </p>
          </a>
        </li>
        <li>
          <a href="https://worker-morning-cloud-e73a-todoapp.nalindalal2004.workers.dev/">
            <p className="block mt-1 text-lg leading-tight font-small text-indigo-600 hover:underline">
              ToDo App
            </p>
          </a>
        </li>
      </ul>
    </div>
  );
};
