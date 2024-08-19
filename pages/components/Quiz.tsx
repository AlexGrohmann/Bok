import React from "react";

function Quiz(props) {
  const { onClick } = props;
  return (
    <div>
      <h1>Quiz</h1>
      <button onClick={onClick}>Start</button>
    </div>
  );
}

export default Quiz;
