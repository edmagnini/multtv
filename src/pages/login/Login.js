import React, { useEffect } from "react"
import useForm from "../../hooks/useForm";
import { Container, Form, FormContainer, InputContainer } from "./styled";
import axios from "axios";
import MultTV_LOGO_WHITE from "../../assets/MultTV_LOGO_WHITE.PNG"
import { useNavigate } from "react-router";
import { motion } from "framer-motion";


const Login = (props) => {
  const navigate = useNavigate();
  const { form, onChange, cleanFields } = useForm({
    user: "",
    senha: "",
    opid: ""
  });

  const handleLogin = async (event) => {
    event.preventDefault();
    const body = form
    try {
      const response = await axios.post(`https://authmass.multtv.tv.br:6445/jlogin.php`, body)


      localStorage.setItem("token", response.data.token)
      navigate("/menuPrincipal")
    } catch (error) {
      alert("Falha ao realizar o login. Por favor, tente novamente.")
      // console.log(error)
    }
    cleanFields();
  };

  useEffect(() => {
    if (localStorage.getItem("token") != null) {
      navigate("/menuPrincipal")
    }
  }, []);


  return (
    <motion.div
      intial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <Container><img src={MultTV_LOGO_WHITE} alt={"MultTV - Logo WHITE"}/></Container>
      <Form onSubmit={handleLogin}>
        <FormContainer>
        <InputContainer>
            <input
              name={"opid"}
              value={form.opid}
              onChange={onChange}
              placeholder=""
              required
              type={"opid"}
            />
            <label>Operação</label>
          </InputContainer>
          <InputContainer>
            <input
              name={"user"}
              value={form.user}
              onChange={onChange}
              placeholder=""
              required
              pattern={"^.{3,}"}
              title={"Username must contain at least 3 letters"}
            />
            <label>Usuário</label>
          </InputContainer>
          <InputContainer>
            <input
              name={"senha"}
              value={form.senha}
              onChange={onChange}
              placeholder=""
              required
              type={"password"}
            />
            <label>Senha</label>
          </InputContainer>
          <button>Login</button>
        </FormContainer>
      </Form>
    </motion.div>
  )
}

export default Login;