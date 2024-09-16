import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncRegisterUser } from '../reducers/RegisterReducer'

const Register = () => {
    const dispatch = useDispatch();
    const { isLoading, error, user } = useSelector((state) => state.auth); // Access user data from state

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(asyncRegisterUser(formData));
    };

    return (
        <div>
            <h2>Register</h2>
            {error && <p>{error}</p>}
            {user && (
                <div>
                    <h3>Registration successful!</h3>
                    <p>Username: {user.username}</p>
                    <p>Email: {user.email}</p>
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                />
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
                    {isLoading ? "Registering..." : "Register"}
                </button>
            </form>
        </div>
    );
};

export default Register;
