import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { ProductModel } from '../models/product.model';


interface ProductsState {
  products: ProductModel[] | null;
}

const initialState: ProductsState = {
  products: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<ProductModel>) {
      state.products = state.products ? [...state.products, action.payload] : [action.payload];
    },
    getProducts(state, action: PayloadAction<AxiosResponse>) {
      state.products = action.payload.data;
    },
    saveOrUpdateProduct(state, action: PayloadAction<AxiosResponse>) {
      const updatedProduct: ProductModel = action.payload.data;
      state.products = state.products!.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      );
    },
    getProductById(state, action: PayloadAction<AxiosResponse>) {
      state.products = [action.payload.data as ProductModel];
    },
    deleteProductById(state, action: PayloadAction<AxiosResponse>) {
      const idToDelete = action.payload.data.id;
      state.products = state.products!.filter((product) => product.id !== idToDelete);
    },
    updateProductStock(state, action: PayloadAction<AxiosResponse>) {
      const updatedProduct: ProductModel = action.payload.data;
      state.products = state.products!.map((product) =>
        product.id === updatedProduct.id
          ? { ...product, stock: updatedProduct.stock }
          : product
      );
    },
    getProductsByBrand(state, action: PayloadAction<AxiosResponse>) {
      state.products = action.payload.data;
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
