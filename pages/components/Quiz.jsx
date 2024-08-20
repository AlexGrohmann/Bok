function Quiz(props) {
  const { onClick, goHome } = props;
  return (
    <div>
      <h1>
        Quiz<button onClick={goHome}>back</button>
      </h1>
      <button onClick={onClick}>Start</button>
    </div>
  );
}

export default Quiz;
