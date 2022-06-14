import React from "react";
import MultTvLogo from "../../assets/MultTV-logo.png"
import { Container } from "./styled";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";

const Header = () => {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate("/")
    }
    const goToLogin = () => {
        navigate("/login")
    }

    return (
        <Container>
            <div onClick={() => goToHome()}>
                <img src={MultTvLogo} alt="MultTv Logo" />
            </div>
            {
                localStorage.getItem("token") === null ? <p onClick={() => goToLogin()}>Login</p> : <p onClick={() => {
                    localStorage.removeItem("token")
                    goToHome()
                }}>Logout</p>
            }
        </Container>
    )
}

export default Header