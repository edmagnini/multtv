import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router";


import VideoJS from "../../components/videoJs/VideoJS";

import TvSenadoImg from "../../assets/TV_SENADO_400_400.png";
import TVSenadoVideo from "../../assets/Senado.mp4"
import TVJusticaVideo from "../../assets/TV_JUSTICA.mp4"
import { Container } from "./styled";

const MenuPrincipal = () => {

    const videoJsOptions = {
        autoplay: false,
        controls: true,
        playbackRates: [0.5, 1, 1.5, 2],
        responsive: true,
        sources: [
            {
                src: TVSenadoVideo,
                type: 'video/mp4'
            },
            {
                src: TVJusticaVideo,
                type: 'video/mp4'
            }
        ]
    }

    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem("token") === null) {
            navigate("/login")
        }
    }, [])


    return (
        <Container>
            <VideoJS options={videoJsOptions} />
        </Container>
    )
}

export default MenuPrincipal