import React from "react";
import Timer from "./Timer";
const Footer = ({ dispatch, index, len, answer, timer }) => {
  return (
    <footer>
      <Timer timer={timer} dispatch={dispatch}></Timer>
      {answer !== null &&
        (index >= len - 1 ? (
          <button onClick={() => dispatch({ type: "finich" })} className="btn">
            Finich
          </button>
        ) : (
          <button
            onClick={() => dispatch({ type: "moveToNextQuestion" })}
            className="btn btn-ui"
          >
            Next
          </button>
        ))}
    </footer>
  );
};

export default Footer;
