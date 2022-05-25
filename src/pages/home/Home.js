import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import { Container } from "./styled";

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token") != null) {
      navigate("/menuPrincipal")
    }
  }, []);

  const goToLogin = () => {
    navigate("/login")
}

  return (
    <motion.div
      intial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <Container>
        <p>Acesse já o seu serviço de streaming!</p>
        <button onClick={() => goToLogin()}>Faça o login</button>
      </Container>
    </motion.div>
  )
}

export default Home