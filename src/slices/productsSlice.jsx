import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getProducts } from '../api/requests';

const initialState = {
    products: [],
    state: 'idle',
    error: null,
};

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (filters) => {
    const params = new URLSearchParams();

    if (filters.brand.length) {
      params.append('brand', filters.brand.join(','));
    }

    if (filters.gender.length) {
      params.append('gender', filters.gender.join(','));
    }

    const res = await fetch(`http://localhost:5100/products?${params.toString()}`);
    return await res.json();
  }
);


const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.state = 'loading';
                state.error = null; 
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.state = 'done';
                state.products = action.payload; 
                state.error = null; 
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.state = 'done';
                state.error = action.error.message; 
            })
    }
});

export default productsSlice.reducer;