import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../actions/product.action";
import { AxiosResponse } from "axios";
import { appConstants } from "../constants/constants";
import { ProductModel } from "../models/product.model";

const initialState = {
  products: [],
  loading: false,
  error: null,
};

// Create the products slice
export const productsReducer = (
  state: ProductModel[] | null,
  action: ProductsReducerAction
) => {
  switch (action.type) {
    case appConstants.ADD_PRODUCT:
      return state ? [...state, action.payload] : [action.payload];

    case appConstants.GET_PRODUCTS:
      return (action.payload as AxiosResponse).data;

    case appConstants.SAVE_OR_UPDATE_PRODUCT:
      const updatedProduct: ProductModel = action.payload.data;
      return state!.map((product) =>
        product.id === updatedProduct.id
          ? updatedProduct // Update the stock
          : product
      );

    case appConstants.GET_PRODUCT_BY_ID:
      return [action.payload.data as ProductModel];

    case appConstants.DELETE_PRODUCT_BY_ID:
      state!.splice(
        state!.findIndex((element) => element.id === action.payload.data.id)
      );
      return state;

    case appConstants.UPDATE_PRODUCT_STOCK:
      return state!.map((product) =>
        product.id === updatedProduct.id
          ? { ...product, stock: updatedProduct.stock } // Update the stock
          : product
      );

    case appConstants.GET_PRODUCTS_BY_BRAND:
      return action.payload;

    default:
      return state;
  }
};

interface ProductsReducerAction {
  type: string;
  // payload: ProductModel;
  payload: AxiosResponse;
}
