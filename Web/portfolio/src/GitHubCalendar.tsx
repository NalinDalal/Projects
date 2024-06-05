import React, { useEffect } from "react";

const GitHubCalendar: React.FC = () => {
  useEffect(() => {
    const username = "nalindalal";
    // Include the library
    const script = document.createElement("script");
    script.src =
      "https://unpkg.com/github-calendar@latest/dist/github-calendar.min.js";
    script.async = true;
    document.body.appendChild(script);

    // Optionally, include the theme
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://unpkg.com/github-calendar@latest/dist/github-calendar-responsive.css";
    document.head.appendChild(link);

    // Prepare a container for your calendar
    const calendarContainer = document.createElement("div");
    calendarContainer.className = "calendar";
    calendarContainer.innerHTML = "Loading the data just for you";
    document.body.appendChild(calendarContainer);

    // Execute GitHubCalendar function
    const GitHubCalendarFunction = () => {
      if (
        typeof window !== "undefined" &&
        typeof window.GitHubCalendar === "function"
      ) {
        window.GitHubCalendar(".calendar", username);
        // or enable responsive functionality
        window.GitHubCalendar(".calendar", username, { responsive: true });
      }
    };

    // Call the function after the script is loaded
    script.onload = GitHubCalendarFunction;

    // Clean up
    return () => {
      document.body.removeChild(script);
      document.head.removeChild(link);
      document.body.removeChild(calendarContainer);
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default GitHubCalendar;
//find a way to utilise this into main app.tsx
