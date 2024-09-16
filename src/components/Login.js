import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncLoginUser } from '../reducers/LoginReducers'

const Login = () => {
    const dispatch = useDispatch();
    const { isLoading, error, user, isAuthenticated } = useSelector((state) => state.auth); // Access user data

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(asyncLoginUser(formData));
    };

    return (
        <div>
            <h2>Login</h2>
            {error && <p>{error}</p>}
            {isAuthenticated && user && (
                <div>
                    <h3>Login successful!</h3>
                    <p>Username: {user.username}</p>
                    <p>Email: {user.email}</p>
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <button type="submit" disabled={isLoading}>
                    {isLoading ? "Logging in..." : "Login"}
                </button>
            </form>
        </div>
    );
};

export default Login;
