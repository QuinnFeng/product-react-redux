import { ProductModel } from "../../models/product.model";

export const Product = (product: ProductModel) => {
  if (!product) {
    return null;
  }

  const { id, name, brand, price, stock, image } = product;

  return (
    <>
      <div className="product">
        <img
          src={image}
          alt={name}
        />
        <div>
          <p>#{id}</p>
          <p>{brand} - { name}</p>
        </div>
        <div>
          <p>${price}</p>
          <p>Available: {stock}</p>
        </div>
      </div>
    </>
  );
};
