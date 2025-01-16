import axios from "axios";
import { ProductModel } from "../models/product.model";
import appConstants from "../constants/constants";

const API_BASE_URL = `${import.meta.env.VITE_REACT_APP_API}/api/products`;

// Define the async thunk
export const getProducts = () => {
  const getProductsPromise = axios.get("http://localhost:8080/api/products");

  return {
    type: appConstants.GET_PRODUCTS,
    payload: getProductsPromise,
  };
};

// Save or update a product
export const saveOrUpdateProduct = (product: ProductModel) => {
  const saveOrUpdateProductPromise = axios.post(API_BASE_URL, product);
  
  return {
    type: appConstants.SAVE_OR_UPDATE_PRODUCT,
    payload: saveOrUpdateProductPromise,
  };
};

// Retrieve a product by ID
export const getProductById = (id: number) => {
  const getProductByIdPromise = axios.get(`${API_BASE_URL}/${id}`);

  return {
    type: appConstants.GET_PRODUCT_BY_ID,
    payload: getProductByIdPromise,
  };
};

// Retrieve all products
export const getAllProducts = () => {
  const getAllProductsPromise = axios.get(API_BASE_URL);

  return {
    type: appConstants.GET_ALL_PRODUCTS,
    payload: getAllProductsPromise,
  };
};

// Delete a product by ID
export const deleteProductById = (id: number) => {
  const deleteProductByIdPromise = axios.delete(`${API_BASE_URL}/${id}`);

  return {
    type: appConstants.DELETE_PRODUCT_BY_ID,
    payload: deleteProductByIdPromise,
  };
};

// Update stock of a product
export const updateProductStock = (id: number, newStock: number) => {
  const updateProductStockPromise = axios.put(`${API_BASE_URL}/${id}/stock`, null, {
    params: { newStock },
  });

  return {
    type: appConstants.UPDATE_PRODUCT_STOCK,
    payload: updateProductStockPromise,
  };
};

// Retrieve products by brand
export const getProductsByBrand = (brand: string)  => {
  const getProductsByBrandPromise = axios.get(`${API_BASE_URL}/brand/${brand}`);

  return {
    type: appConstants.GET_PRODUCTS_BY_BRAND,
    payload: getProductsByBrandPromise,
  };
};
