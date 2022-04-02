import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import AnimatedRoutes from "../../pages/animatedRoutes/AnimatedRoutes";
import Home from "../../pages/home/Home";
import Login from "../../pages/login/Login";
import MenuPrincipal from "../../pages/menuPrincipal/MenuPrincipal";
import Header from "../header/Header";




const Router = (props) => {

    return (
        <BrowserRouter>
            <Header/>
            <AnimatedRoutes />
        </BrowserRouter>
    )
}

export default Router;