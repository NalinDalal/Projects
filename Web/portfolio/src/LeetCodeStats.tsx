// src/LeetCodeStats.tsx
import React, { useState, useEffect } from "react";

export const LeetCodeStats: React.FC = () => {
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://alfa-leetcode-api.onrender.com/Nalindalal2004",
        );
        const data = await response.json();
        setStats(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching LeetCode stats:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!stats) {
    return <div>Unable to fetch LeetCode stats.</div>;
  }

  return (
    <div>
      <h2>LeetCode Statistics for {stats.username}</h2>
      <ul>
        <li>Total problems solved: {stats.total_problems_solved}</li>
        <li>Total submissions: {stats.total_submissions}</li>
        <li>Acceptance rate: {stats.acceptance_rate}%</li>
        {/* Add more stats here as needed */}
      </ul>
    </div>
  );
};
