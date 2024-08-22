import { useState } from "react";

const NUMBER_OF_QUESTIONS = 10;

const renderQuiz = (data) => {
  for (let i = 0; i < NUMBER_OF_QUESTIONS; i++) {
    console.log(data);
    if (!data) {
      return "wait";
    }
    const i = Math.floor(Math.random() * data.length);
    return (
      <div>
        <div>DE: {data[i].DE}</div>
        <input placeholder="enter solution" />
        <div>Solution: {data[i].HR}</div>
      </div>
    );
  }
};

function Quiz(props) {
  const { goHome, data } = props;
  const [started, setStarted] = useState(false);

  return (
    <div>
      <h1>
        Quiz<button onClick={goHome}>back</button>
      </h1>
      {!started ? (
        <button onClick={() => setStarted(true)}>Start</button>
      ) : (
        <div>{renderQuiz(data)}</div>
      )}
    </div>
  );
}

export default Quiz;
