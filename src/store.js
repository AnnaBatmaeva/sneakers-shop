import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './slices/productsSlice';
import productReducer from './slices/productSlice';


const store = configureStore({
  reducer: {
    products: productsReducer,
    product: productReducer
  },
});

export default store;