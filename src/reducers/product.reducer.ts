import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductModel } from "../models/product.model";

interface ProductsState {
  products: ProductModel[] | null;
}

const initialState: ProductsState = {
  products: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProducts(state, action: PayloadAction<ProductModel[]>) {
      state.products = action.payload;
    },
    addProduct(state, action: PayloadAction<ProductModel>) {
      state.products = state.products
        ? [...state.products, action.payload]
        : [action.payload];
    },
    saveOrUpdateProduct(state, action: PayloadAction<ProductModel>) {
      const updatedProduct: ProductModel = action.payload;
      state.products = state.products!.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      );
    },
    getProductById(state, action: PayloadAction<ProductModel>) {
      state.products = [action.payload as ProductModel];
    },
    deleteProductById(state, action: PayloadAction<Number>) {
      state.products = state.products!.filter(
        (product) => product.id !== action.payload
      );
    },
    updateProductStock(state, action: PayloadAction<ProductModel>) {
      const updatedProduct: ProductModel = action.payload;
      state.products = state.products!.map((product) =>
        product.id === updatedProduct.id
          ? { ...product, stock: updatedProduct.stock }
          : product
      );
    },
    getProductsByBrand(state, action: PayloadAction<ProductModel[]>) {
      state.products = action.payload;
    },
  },
});

export const {
  addProduct,
  getProducts,
  saveOrUpdateProduct,
  getProductById,
  deleteProductById,
  updateProductStock,
  getProductsByBrand,
} = productsSlice.actions;

export default productsSlice.reducer;
