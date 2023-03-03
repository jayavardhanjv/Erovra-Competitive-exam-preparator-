import React from 'react';
import {Outlet, Navigate } from 'react-router-dom';

const ProtectedRoute = () => {

    return(
        (localStorage.getItem("currentUser")) ? <Outlet/> :  <Navigate to='/' />
    )
};

export default ProtectedRoute;
