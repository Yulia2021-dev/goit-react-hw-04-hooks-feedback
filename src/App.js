import { useState } from "react";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions.jsx";
import Statistics from "./components/statistics/Statistics.jsx";

import "./App.css";

const initialRating = 0;

export default function App() {
  const [good, setGood] = useState(initialRating);
  const [neutral, setNeutral] = useState(initialRating);
  const [bad, setBad] = useState(initialRating);

  const incrementOption = (option) => {
    switch (option) {
      case "good":
        setGood(good + 1);
        break;
      case "neutral":
        setNeutral(neutral + 1);
        break;
      case "bad":
        setBad(bad + 1);
        break;
      default:
        console.error("No matched option");
    }
  };

  const total = good + neutral + bad;
  let expr = good / total;
  if (isNaN(expr)) {
    expr = 0;
  }
  const positivePercentage = Math.floor(expr * 100);
  const options = ["good", "neutral", "bad"];
  return (
    <div className="App">
      <FeedbackOptions options={options} onLeaveFeedback={incrementOption} />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        positivePercentage={positivePercentage}
      />
    </div>
  );
}
