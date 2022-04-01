import React, { useEffect } from "react";
import { useNavigate } from "react-router";

const Home = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem("token") != null) {
          navigate("/menuPrincipal")
        }
      }, []);
    return (
        <div>
            <p>Home</p>
        </div>
    )
}

export default Home