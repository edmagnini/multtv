import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from "../../pages/home/Home";
import Login from "../../pages/login/Login";
import MenuPrincipal from "../../pages/menuPrincipal/MenuPrincipal";
import Header from "../header/Header";




const Router = (props) => {

    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login />} />
                <Route path="/menuPrincipal" element={<MenuPrincipal />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;