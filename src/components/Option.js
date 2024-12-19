const Option = ({ question, dispatch, answer }) => {
  return (
    <div className="options">
      {question.options.map((option, i) => (
        <button
          key={option}
          disabled={answer === null ? false : true}
          onClick={() => dispatch({ type: "selectedAnswer", payload: i })}
          className={`btn btn-option ${i === answer ? "answer" : ""} ${
            answer === null
              ? ""
              : i === question.correctOption
              ? "correct"
              : "wrong"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Option;
