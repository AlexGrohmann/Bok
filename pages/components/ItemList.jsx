function ItemList(props) {
    const {data} = props;
    console.log(data)
    if(data && data.length > 0) {
    for (const element of data) {
        console.log(element);
        console.log(element.HR);
        console.log(element.DE);
        console.log(element._id)
      }
    }
    return ( <div>
        <h1>
            Data
        </h1>
        
    </div> );
}

export default ItemList;