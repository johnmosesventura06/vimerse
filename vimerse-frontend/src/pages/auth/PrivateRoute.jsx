import React from "react";
import { Route, Router } from "react-router-dom";


const PrivateRoute = () => {
    var isLoggedIn = localStorage.getItem("usertype") != null;
    console.log('isLoggedIn', isLoggedIn)
    if(isLoggedIn == ''){
        window.location.href='/signin'
    }
    else{
        isLoggedIn = true
    }

    return (
        <Router
            
        />
    );
};

export default PrivateRoute;