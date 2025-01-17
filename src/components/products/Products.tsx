import { Component } from "react";
import {
  getProducts,
  updateProductStock,
  deleteProductById,
} from "../../actions/product.action";
import { ProductModel } from "../../models/product.model";
import { connect } from "react-redux";
import { RootState } from "../../store";
import { Product } from "./Product";

interface ProductsProps {
  products: ProductModel[] | null;
  getProducts: () => Promise<void>;
  deleteProductById: (id: number) => void;
  updateProductStock: (id: number, stock: number) => void;
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
                <div className="product-container">
                  <Product {...product} />
                  <button
                    onClick={() => this.props.deleteProductById(product.id!)}
                  >
                    Delete
                  </button>
                  <button
                    onClick={() =>
                      this.props.updateProductStock(
                        product.id!,
                        product.stock + 1
                      )
                    }
                  >
                    Add Stock
                  </button>
                  <button
                    onClick={() =>
                      this.props.updateProductStock(
                        product.id!,
                        product.stock - 1
                      )
                    }
                  >
                    Remove Stock
                  </button>
                </div>
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

export default connect(mapStateToProps, {
  getProducts,
  deleteProductById,
  updateProductStock,
})(Products);
