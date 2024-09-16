import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Users from "./components/Users";
import Register from "./components/Register";
import Login from "./components/Login";

const App = () => {
    return (
        <>
            <div className="dashboard">
                <nav className="navbar">
                    <Link to={"/"}>Home</Link>
                    <Link to={"/users"}>Users</Link>
                    <Link to={"/products"}>Products</Link>
                    <Link to={"/register"}>Register</Link>
                    <Link to={"/login"}>Login</Link>
                </nav>
                <hr></hr>

                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/users" element={<Users />}></Route>
                    <Route path="/products" element={<Products />}></Route>
                    <Route path="/register" element={<Register />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                </Routes>
            </div>
        </>
    );
};

export default App;
