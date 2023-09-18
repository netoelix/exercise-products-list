import './App.css';
import Product from './components/product';
import products from './data';
import ProductsList from './components/products-list';

function App() {
  return (
    <ProductsList>
      {products.map((item) => (
        <Product productInfo={ item } key={ item.id } />
      ))}
    </ProductsList>
  );
}

export default App;
