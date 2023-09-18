type ProductProps = {
  productInfo: {
    id?: number,
    title: string,
    description?: string,
    price: number,
    discountPercentage?: number,
    rating?: number,
    stock?: number,
    brand?: string,
    category?: string,
    image: string
  }
};

function Product({ productInfo }: ProductProps) {
  const { title, price, image } = productInfo;
  return (
    <li>
      <h2>{title}</h2>
      <img src={ image } alt={ title } />
      <p>{price}</p>
    </li>
  );
}

export default Product;
