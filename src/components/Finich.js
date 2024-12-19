import React from "react";

const Finich = ({ heighestScore, points, dispatch, sumPoints }) => {
  const pourcentage = (points * 100) / sumPoints;
  return (
    <>
      <div className="result-container">
        <p className="result">
          You scored <strong>{points}</strong> out of {sumPoints}
          {` (${Math.ceil(pourcentage)}%)`}
        </p>

        <p className="highscore">(Highest score : {heighestScore}) </p>
        <button className="btn" onClick={() => dispatch({ type: "restart" })}>
          Restart
        </button>
      </div>
    </>
  );
};

export default Finich;
