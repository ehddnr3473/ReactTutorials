
function List() {
  const products = [
    { title: 'A', id: 1}, 
    { title: 'B', id: 2}, 
    { title: 'C', id: 3}, 
  ];

  const listItems = products.map(product => 
    <li key={product.id}>
      {product.title}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}

export default List;