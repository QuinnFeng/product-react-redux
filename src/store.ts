import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducers/product.reducer"; // Update with the correct path

const store = configureStore({
  reducer: {
    products: productsReducer, // Add more reducers if needed
  },
});

export default store;

// For TypeScript: Export RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
