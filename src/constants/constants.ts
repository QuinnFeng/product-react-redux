import { ProductModel } from "../models/product.model";

export const appConstants = {
  // routes
  namesRoute: "/names",
  addNameRoute: "/add-name",
  productsRoute: "/products",
  addProductRoute: "/add-product",
  editProductRoute: "/edit-product",
  loginRoute: "/login",

  // actions
  ADD_NAME: "ADD_NAME",

  ADD_PRODUCT: "ADD_PRODUCT",
  GET_PRODUCTS: "GET_PRODUCTS",
  SAVE_OR_UPDATE_PRODUCT: "SAVE_OR_UPDATE_PRODUCT",
  GET_PRODUCT_BY_ID: "GET_PRODUCT_BY_ID",
  GET_ALL_PRODUCTS: "GET_ALL_PRODUCTS",
  DELETE_PRODUCT_BY_ID: "DELETE_PRODUCT_BY_ID",
  UPDATE_PRODUCT_STOCK: "UPDATE_PRODUCT_STOCK",
  GET_PRODUCTS_BY_BRAND: "GET_PRODUCTS_BY_BRAND",

  LOGIN: "LOGIN", // LOGIN_ACTION
  CHECK_LOGIN: "CHECK_LOGIN",
};

export interface ReduxState {
  names: string[];
  // reduxState: any,
  products: ProductModel[]; // the new reduxState
  user: { username: string };
}

export default appConstants;
