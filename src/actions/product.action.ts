import axios from "axios";
import { Dispatch } from "redux";
import {
  getProducts as getProductsAction,
  addProduct as addProductAction,
  saveOrUpdateProduct as saveOrUpdateProductAction,
  getProductById as getProductByIdAction,
  deleteProductById as deleteProductByIdAction,
  updateProductStock as updateProductStockAction,
  getProductsByBrand as getProductsByBrandAction,
} from "../reducers/product.reducer"; // Import the actions from the slice
import { ProductModel } from "../models/product.model";

const API_BASE_URL = `${import.meta.env.VITE_REACT_APP_API}/api/products`;

export const getProducts = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get(`${API_BASE_URL}`);
      dispatch(getProductsAction(response.data)); // Dispatch the action from the slice
    } catch (error) {
      console.error("Failed to fetch products:", error);
      // Handle error (e.g., dispatch an error action)
    }
  };
};

export const saveOrUpdateProduct = (product: ProductModel) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.post(API_BASE_URL, product);
      dispatch(saveOrUpdateProductAction(response.data)); // Dispatch the action from the slice
    } catch (error) {
      console.error("Failed to save or update product:", error);
      // Optionally dispatch an error action
    }
  };
};

export const addProduct = (product: ProductModel) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.post(API_BASE_URL, product);
      dispatch(addProductAction(response.data)); // Dispatch the action from the slice
    } catch (error) {
      console.error("Failed to add product:", error);
      // Optionally dispatch an error action
    }
  };
};

export const getProductById = (id: number) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/${id}`);
      dispatch(getProductByIdAction(response.data)); // Dispatch the action from the slice
    } catch (error) {
      console.error("Failed to fetch product by id:", error);
      // Optionally dispatch an error action
    }
  };
};

export const deleteProductById = (id: number) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/${id}`);
      if (response.status === 204) {
        dispatch(deleteProductByIdAction(id));
      }
    } catch (error) {
      console.error("Failed to delete product by id:", error);
      // Optionally dispatch an error action
    }
  };
};

export const updateProductStock = (id: number, stock: number) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.put(
        `${API_BASE_URL}/${id}/stock?newStock=${stock}`,
        {}
      );
      dispatch(updateProductStockAction(response.data)); // Dispatch the action from the slice
    } catch (error) {
      console.error("Failed to update product stock:", error);
      // Optionally dispatch an error action
    }
  };
};

export const getProductsByBrand = (brand: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get(`${API_BASE_URL}?brand=${brand}`);
      dispatch(getProductsByBrandAction(response.data)); // Dispatch the action from the slice
    } catch (error) {
      console.error("Failed to fetch products by brand:", error);
      // Optionally dispatch an error action
    }
  };
};
