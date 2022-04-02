import React, { useEffect } from "react"
import useForm from "../../hooks/useForm";
import { Form, FormContainer, InputContainer } from "./styled";
import axios from "axios";
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
      const response = await axios.post(`https://authbee.multtv.tv.br:5892/multtv/apps/entrevista/login`, body)


      localStorage.setItem("token", response.data.subscriberToken)
      navigate("/menuPrincipal")
    } catch (error) {
      alert("Falha ao realizar o login. Por favor, tente novamente.")
      console.log(error)
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
      <Form onSubmit={handleLogin}>
        <FormContainer>
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
            <label>USER</label>
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
            <label>SENHA</label>
          </InputContainer>
          <InputContainer>
            <input
              name={"opid"}
              value={form.opid}
              onChange={onChange}
              placeholder=""
              required
              type={"opid"}
            />
            <label>OPERATOR CODE</label>
          </InputContainer>
          <button>LOGIN</button>
        </FormContainer>
      </Form>
    </motion.div>
  )
}

export default Login;