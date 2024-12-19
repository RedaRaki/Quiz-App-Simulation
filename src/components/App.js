import React, { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import Error from "./Error";
import Loader from "./Loader";
import StartScreen from "./StartScreen";
import Question from "./Question";
import Finich from "./Finich";
function reducer(state, action) {
  switch (action.type) {
    case "setQuestion":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFaild":
      return {
        ...state,
        questions: [],
        status: "error",
      };
    case "quizMoveQuestions":
      return {
        ...state,
        status: "active",
      };
    case "moveToNextQuestion":
      return {
        ...state,
        index: state.index + 1,
      };
    case "selectedAnswer":
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "finich":
      return {
        ...state,
        status: "finich",
        heighestScore:
          state.heighestScore < state.points
            ? state.points
            : state.heighestScore,
      };
    case "restart":
      return {
        ...state,
        status: "ready",
        index: 0,
        answer: null,
        points: 0,
      };
    case "derementTimer":
      return {
        ...state,
        timer: state.timer - 1,
        status: state.timer === 0 ? "finich" : state.status,
      };
    default:
      throw new Error("unknown action");
  }
}
const initSte = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  heighestScore: 0,
  timer: 300,
};

const App = () => {
  const [
    { questions, status, index, answer, points, heighestScore, timer },
    dispatch,
  ] = useReducer(reducer, initSte);

  useEffect(() => {
    async function getQuestions() {
      try {
        const res = await fetch("http://localhost:8000/questions");
        if (!res.ok) throw new Error("an error has apear ");
        const questions = await res.json();
        dispatch({ type: "setQuestion", payload: questions });
      } catch (err) {
        console.log(err.message);
        dispatch({ type: "dataFaild" });
      }
    }
    getQuestions();
  }, []);
  const length = questions.length;
  const sumPoints = questions.reduce((acc, cur) => acc + cur.points, 0);
  return (
    <div>
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen dispatch={dispatch} length={length} />
        )}
        {status === "active" && (
          <Question
            timer={timer}
            points={points}
            sumPoints={sumPoints}
            len={length}
            answer={answer}
            index={index}
            dispatch={dispatch}
            question={questions[index]}
          />
        )}
        {status === "finich" && (
          <Finich
            heighestScore={heighestScore}
            sumPoints={sumPoints}
            points={points}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  );
};

export default App;
