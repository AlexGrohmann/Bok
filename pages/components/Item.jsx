import { deleteData } from "../api-helper";

function Item(props) {
  const { de, hr, id } = props;

  return (
    <div id={id}>
      <div>DE: {de}</div>
      <div>HR: {hr}</div>
      <button onClick={() => deleteData(id)}>delete item</button>
    </div>
  );
}

export default Item;
