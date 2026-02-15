import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    brands: [],
    genders: [],
};

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setBrand(state, action) {
            state.brands = action.payload;
        },
        setGender(state, action) {
            state.genders = action.payload;
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
