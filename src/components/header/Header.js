import React from "react";
import MultTvLogo from "../../assets/MultTV-logo.png"
import Facebook from "../../assets/facebook.png";
import Instagram from "../../assets/instagram.png";
import Linkedin from "../../assets/linkedin.png";
import { Container, SocialContainer } from "./styled";
import { useNavigate } from "react-router";

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
            <SocialContainer>
                <div>
                    <a href="https://www.facebook.com/multtvcompartilhamento/" target="blank">
                        <img src={Facebook} alt="MultTV - Facebook profile" />
                    </a>
                </div>
                <div>
                    <a href="https://www.instagram.com/multtv.headend/" target="blank">
                        <img src={Instagram} alt="MultTV - Instagram profile" />
                    </a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/company/multtv/" target="blank">
                        <img src={Linkedin} alt="MultTV - Linkedin profile" />
                    </a>
                </div>
            </SocialContainer>
        </Container>
    )
}

export default Header