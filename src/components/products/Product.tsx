import { useEffect } from "react";
import { getProducts } from "../../actions/product.action";
import { AppDispatch, RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { ProductModel } from "../../models/product.model";

const Products: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) => state.products.products);

  // Fetch products on component load
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  // Display a loading state if products are null
  if (!products) {
    return <div>Loading products...</div>;
  }

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product: ProductModel) => (
          <li key={product.id}>
            <strong>{product.name}</strong> - Stock: {product.stock}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
