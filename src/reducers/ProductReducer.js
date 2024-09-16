import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [], // Initial state, an empty array of products
};

export const ProductSlice = createSlice({
    name: "products", // Name of the slice
    initialState,
    reducers: {
        getProducts: (state, action) => {
            console.log(action); // Debug: Log the action to the console
            state.products = action.payload; // Update the state with the fetched products
        },
    },
});

// Export the reducer for the store configuration
export default ProductSlice.reducer;

// Export the action creator for dispatching
export const { getProducts } = ProductSlice.actions;
