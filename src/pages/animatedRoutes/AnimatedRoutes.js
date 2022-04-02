import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router";
import Home from "../home/Home";
import Login from "../login/Login";
import MenuPrincipal from "../menuPrincipal/MenuPrincipal";
import { AnimatePresence } from "framer-motion";


const AnimatedRoutes = () => {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}
            >
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/menuPrincipal" element={<MenuPrincipal />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes