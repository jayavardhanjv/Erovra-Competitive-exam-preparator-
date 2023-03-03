import React from 'react';
import {Outlet, Navigate } from 'react-router-dom';


const RedirectRoute = () => {
    return(
        !(localStorage.getItem("currentUser")) ? <Outlet/> :  <Navigate to='/home' />
    )

};

export default RedirectRoute;
