import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    brand: [],
    gender: [],
};

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setBrand(state, action) {
            state.brand = action.payload;
        },
        setGender(state, action) {
            state.gender = action.payload;
        },
        resetFilters() {
            return initialState;
        },
    },
});

export const {
    setBrand,
    setGender,
    resetFilters,
} = filtersSlice.actions;

export default filtersSlice.reducer;
