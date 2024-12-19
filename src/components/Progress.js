import React from "react";
const Progress = ({ index, length, sumPoints, points, answer }) => {
  return (
    <header className="progress">
      <progress value={index + Number(answer !== null)} max={length}></progress>
      <p>
        Questions <strong>{index + 1}</strong> / {length}
      </p>
      <p>
        Questions <strong>{points}</strong> / {sumPoints}
      </p>
    </header>
  );
};

export default Progress;
