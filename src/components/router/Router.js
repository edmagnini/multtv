import React from "react";
import { BrowserRouter } from 'react-router-dom';
import AnimatedRoutes from "../../pages/animatedRoutes/AnimatedRoutes";


const Router = (props) => {

    return (
        <BrowserRouter>
            <AnimatedRoutes />
        </BrowserRouter>
    )
}

export default Router;