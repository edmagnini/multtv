import React, { useEffect } from "react";
import { Route, Routes, useLocation, } from "react-router";
import Home from "../home/Home";
import Login from "../login/Login";
import MenuPrincipal from "../menuPrincipal/MenuPrincipal";
import { AnimatePresence } from "framer-motion";
import ChannelPage from "../channelPage/ChannelPage";


const AnimatedRoutes = () => {
    const location = useLocation();
    return (
        <AnimatePresence >
            <Routes  location={location} key={location.pathname}
            >
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/menuPrincipal" element={<MenuPrincipal />} />
                <Route path="/channelPage/:url" element={<ChannelPage />} />
                <Route path="/channelPage/:url/:url1" element={<ChannelPage />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes