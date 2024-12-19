import React from "react";
import Option from "./Option";
import { useEffect } from "react";
import Progress from "./Progress";
import Timer from "./Timer";
import Footer from "./Footer";
const Question = ({
  sumPoints,
  points,
  len,
  answer,
  index,
  dispatch,
  question,
  timer,
}) => {
  useEffect(() => {
    dispatch({ type: "selectedAnswer", payload: null });
  }, [index]);
  return (
    <div>
      <Progress
        index={index}
        length={len}
        points={points}
        sumPoints={sumPoints}
        answer={answer}
      />
      <h4>{question.question}</h4>
      <Option
        dispatch={dispatch}
        index={index}
        answer={answer}
        question={question}
      ></Option>
      <Footer
        dispatch={dispatch}
        index={index}
        len={len}
        answer={answer}
        timer={timer}
      ></Footer>
    </div>
  );
};

export default Question;
