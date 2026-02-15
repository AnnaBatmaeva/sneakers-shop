import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './slices/productsSlice';
import productReducer from './slices/productSlice';
import filtersSlice from './slices/filtersSlice';



const store = configureStore({
  reducer: {
    products: productsReducer,
    product: productReducer,
    filters: filtersSlice
  },
});

export default store;