import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isLoading: false,
    error: null,
    user: null, // To store registered user data
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        registerUserStart: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        registerUserSuccess: (state, action) => {
            state.isLoading = false;
            state.user = action.payload; // Store the user data in state
        },
        registerUserFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export const { registerUserStart, registerUserSuccess, registerUserFailure } =
    authSlice.actions;

export const asyncRegisterUser = (userData) => async (dispatch) => {
    dispatch(registerUserStart());
    try {
        const response = await axios.post("http://localhost:5000/api/register", userData); // API call
        dispatch(registerUserSuccess(response.data)); // Store user data after success
    } catch (error) {
        dispatch(registerUserFailure(error.message)); // Handle error
    }
};

export default authSlice.reducer;
