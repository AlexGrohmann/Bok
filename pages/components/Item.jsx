function Item(props) {
  const { de, hr, id } = props;

  return (
    <div id={id}>
      <div>DE: {de}</div>
      <div>HR: {hr}</div>
    </div>
  );
}

export default Item;
