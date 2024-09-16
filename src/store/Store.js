import { configureStore } from '@reduxjs/toolkit'
import UserReducer from '../reducers/UserReducer';
import ProductReducer from '../reducers/ProductReducer';
import LoginReducers from '../reducers/LoginReducers'
import RegisterReducer from '../reducers/RegisterReducer';
export const store = configureStore({
  reducer: {
    UserReducer:UserReducer,
    ProductReducer:ProductReducer,
    auth: LoginReducers,
    auth: RegisterReducer,


  },
});