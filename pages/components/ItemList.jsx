import Item from "./Item";

function ItemList(props) {
  const { data, goHome } = props;

  return (
    <div>
      <h1>Data<button onClick={goHome}>back</button></h1>
      {data &&
        data.map((item) => (
          <Item key={item._id} id={item._id} de={item.DE} hr={item.HR} />
        ))}
    </div>
  );
}

export default ItemList;
