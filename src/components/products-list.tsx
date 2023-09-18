type ProductListProps = {
  children: React.ReactNode;
};

function ProductsList({ children }: ProductListProps) {
  return (
    <main>
      <h1>Lista de produtos</h1>
      <ul className="product-list">
        {children}
      </ul>
    </main>
  );
}

export default ProductsList;
