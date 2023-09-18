import Product from './product';
import products from '../data';

function ProductsList() {
  return (
    <>
      <h1>Lista de produtos</h1>
      <ul>
        {products.map((item) => (
          <Product productInfo={ item } key={ item.id } />
        ))}
      </ul>
    </>
  );
}

export default ProductsList;
