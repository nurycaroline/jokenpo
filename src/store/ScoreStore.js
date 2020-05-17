import { useState, useEffect } from "react";

export default () => {
  const [score, setScore] = useState(0);

  useEffect(() => {
    setScore(localStorage.getItem("jokenpo-score") || 0);
  }, []);

  const addScore = () => {
    setScore(parseInt(score) + 1);
    localStorage.setItem("jokenpo-score", parseInt(score) + 1);
  };

  return {
    score,
    addScore,
  };
};
