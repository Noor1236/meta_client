// PrivateRoute.js
import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { useAuth } from '../../context/ThemeContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { isAuthenticated } = useAuth()
    // Add your authentication logic here
    return isAuthenticated ? <Component {...rest} /> : <Navigate to="/login" replace />;
};
export default PrivateRoute;


