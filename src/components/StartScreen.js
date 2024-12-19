import React from "react";

const StartScreen = ({ dispatch, length }) => {
  return (
    <div className="start">
      <h2>Welcom to React Quiz !</h2>
      <h3>{length} Questions to Test your React Mastery </h3>
      <button
        className="btn"
        onClick={() => dispatch({ type: "quizMoveQuestions" })}
      >
        let's start
      </button>
    </div>
  );
};

export default StartScreen;
