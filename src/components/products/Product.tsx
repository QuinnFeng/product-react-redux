import { Component } from "react";
import { getProducts } from "../../actions/product.action";
import { ProductModel } from "../../models/product.model";
import { connect } from "react-redux";
import { RootState } from "../../store";

interface ProductsProps {
  products: ProductModel[] | null;
  getProducts: () => Promise<void>;
}

class Products extends Component<ProductsProps> {
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    const { products } = this.props;

    return (
      <div>
        <h1>Product List</h1>

        {!products ? (
          <div>Loading products...</div>
        ) : (
          <ul>
            {products?.map((product: ProductModel) => (
              <li key={product.id}>
                <strong>{product.name}</strong> - Stock: {product.stock}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ products }: RootState) => ({
  products: products.products,
});

export default connect(mapStateToProps, { getProducts })(Products);
