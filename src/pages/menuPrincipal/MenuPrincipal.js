import React, { useEffect } from "react";
import { useNavigate } from "react-router";

import TvSenadoImg from "../../assets/TV_SENADO_400_400.png";
import TvCanalDoBoiImg from "../../assets/Canal do Boi.png";
import TvCancaoNovaImg from "../../assets/Canção Nova.png";
import TvRedeVidaImg from "../../assets/Rede Vida.png";
import TvJusticaImg from "../../assets/TV Justiça.png";

import TVSenadoVideo from "../../assets/Senado.mp4"
import TVCanalDoBoiVideo from "../../assets/CANAL_DO_BOI.mp4"
import TVJusticaVideo from "../../assets/TV_JUSTICA.mp4"
import TVCancaoNova from "../../assets/CANCAO_NOVA.mp4"
import TVRedeVida from "../../assets/REDE_VIDA.mp4"

import {
    Container, MainVideoContainer, MainVideo, ListVideoContainer, ListActive, ListVideo, List
} from "./styled";

import { motion } from "framer-motion";

const MenuPrincipal = () => {

    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem("token") === null) {
            navigate("/login")
        }
    }, [])

    useEffect(() => {
        let videoList = document.querySelectorAll('.video-list-container .list');

        videoList.forEach(vid => {
            vid.onclick = () => {
                console.log(vid)
                videoList.forEach(remove => { remove.classList.remove('active') });
                vid.classList.add('active');
                let src = vid.querySelector('.list-video').src;
                let title = vid.querySelector('.list-title').innerHTML;
                let img = vid.querySelector('.list-img').src;
                document.querySelector('.main-video-container .main-video').src = src;
                document.querySelector('.main-video-container .main-video').play();
                document.querySelector('.main-video-container .main-vid-title').innerHTML = title;
                document.querySelector('.main-video-container .main-vid-img').src = img;
            };
        });
    }, [])
    return (
        <motion.div
            intial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
        >
            <Container>

                <MainVideoContainer className="main-video-container">
                    <MainVideo src={TVSenadoVideo} loop controls className="main-video" />
                    <img src={TvSenadoImg} alt="Tv Senado Logo" className="main-vid-img" />
                    <h3 className="main-vid-title">Tv Senado</h3>

                </MainVideoContainer>


                <ListVideoContainer className="video-list-container">

                    <ListActive className="list active">

                        <ListVideo src={TVSenadoVideo} className="list-video" />
                        <img src={TvSenadoImg} alt="Tv Senado logo" className="list-img" />
                        <h3 className="list-title">Tv Senado</h3>

                    </ListActive>

                    <List className="list">

                        <ListVideo src={TVCancaoNova} className="list-video" />
                        <img src={TvCancaoNovaImg} alt="Tv Canção Nova logo" className="list-img" />
                        <h3 className="list-title">Tv Canção Nova</h3>

                    </List>

                    <List className="list">

                        <ListVideo src={TVRedeVida} className="list-video" />
                        <img src={TvRedeVidaImg} alt="Tv Rede Vida logo" className="list-img" />
                        <h3 className="list-title">Tv Rede Vida</h3>

                    </List>

                    <List className="list">

                        <ListVideo src={TVJusticaVideo} className="list-video" />
                        <img src={TvJusticaImg} alt="Tv Justiça logo" className="list-img" />
                        <h3 className="list-title">Tv Justiça</h3>

                    </List>

                    <List className="list">

                        <ListVideo src={TVCanalDoBoiVideo} className="list-video" />
                        <img src={TvCanalDoBoiImg} alt="Tv Canal do Boi logo" className="list-img" />
                        <h3 className="list-title">Tv Canal do Boi</h3>

                    </List>

                </ListVideoContainer>

            </Container>
        </motion.div>
    )
}

export default MenuPrincipal