import axios from "axios";
import { getProducts } from "../../reducers/ProductReducer";

export const asyncgetproducts = () => async (dispatch, getState) => {
    console.log(getState()); // Logs the current state for debugging

    try {
        const response = await axios.get("https://fakestoreapi.com/products"); // Await the API call
        dispatch(getProducts(response.data)); // Dispatch the data from the response
    } catch (error) {
        console.log(error); // Logs the error if something goes wrong
    }
};
