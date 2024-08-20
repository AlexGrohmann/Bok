function Menu(props) {
  const { onClick, onClickAll, onClickAdd, goHome } = props;
  return (
    <div>
      <h1>Menü<button onClick={goHome}>back</button></h1>
      <button onClick={onClick}>Quiz</button>
      <button onClick={onClickAll}>All items</button>
      <button onClick={onClickAdd}>Add items</button>
    </div>
  );
}

export default Menu;
