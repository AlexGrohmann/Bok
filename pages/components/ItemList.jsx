import Item from "./Item";

function ItemList(props) {
  const { data } = props;

  return (
    <div>
      <h1>Data</h1>
      {data &&
        data.map((item) => (
          <Item key={item._id} id={item._id} de={item.DE} hr={item.HR} />
        ))}
    </div>
  );
}

export default ItemList;
