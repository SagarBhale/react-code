import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isLoading: false,
    error: null,
    user: null, // To store logged-in user data
    isAuthenticated: false,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginUserStart: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        loginUserSuccess: (state, action) => {
            state.isLoading = false;
            state.isAuthenticated = true;
            state.user = action.payload; // Store the logged-in user's data
        },
        loginUserFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        logoutUser: (state) => {
            state.isAuthenticated = false;
            state.user = null;
        },
    },
});

export const { loginUserStart, loginUserSuccess, loginUserFailure, logoutUser } =
    authSlice.actions;

export const asyncLoginUser = (userData) => async (dispatch) => {
    dispatch(loginUserStart());
    try {
        const response = await axios.post("http://localhost:5000/api/auth/login", userData)
        .then(response => {
            console.log("Login successful:", response.data);
        })
        .catch(error => {
            console.error("Error logging in:", error);
        }); // API call
        dispatch(loginUserSuccess(response.data)); // Store user data after success
    } catch (error) {
        dispatch(loginUserFailure(error.message)); // Handle error
    }
};

export default authSlice.reducer;
