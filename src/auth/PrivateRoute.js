import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Route } from "react-router-dom";
import Login from './Login';

export const PrivateRoute = ({ component, ...options }) => {
    const {currentUser} = useContext(AuthContext);

    const routeComponent = currentUser ? component : Login;

    return <Route {...options} component={routeComponent} />;
};