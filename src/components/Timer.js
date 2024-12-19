import React, { useEffect } from "react";

const Timer = ({ dispatch, timer }) => {
  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "derementTimer" });
    }, 1000);
    return () => clearInterval(id);
  }, [dispatch]);
  return (
    <div className="timer">{`${Math.floor(timer / 60)}:${
      String(timer % 60).length < 2 ? `${timer % 60}0` : timer % 60
    } `}</div>
  );
};

export default Timer;
