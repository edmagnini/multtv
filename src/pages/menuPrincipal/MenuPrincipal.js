import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import ReactPlayer from 'react-player/lazy'

import {
    Container, MainVideoContainer, ListVideoContainer, List
} from "./styled";

import { motion } from "framer-motion";
import Header from "../../components/header/Header";
import GlobalStateContext from "../../components/contexts/GlobalStateContext";
import axios from "axios";
import { Line } from 'rc-progress';

const MenuPrincipal = () => {
    const token = localStorage.getItem("token");
    const { channelsList, setChannelsList } = useContext(GlobalStateContext);
    const [channelUrl, setChannelUrl] = useState(undefined);

    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem("token") === null || localStorage.getItem("token") === "undefined") {
            localStorage.removeItem("token")
            navigate("/login")
        }
        const getChannelsList = async (token) => {
            const body = { token }
            try {
                const response = await axios
                    .post(`https://authmass.multtv.tv.br:6445/jcanais.php/`, body)
                const channels = response.data.canais
                setChannelsList(channels);
            } catch (error) {
                console.log(error.message)
            }
        };
        getChannelsList(token);
        
    }, [])
    
    useEffect(() => {
        let videoList = document.querySelectorAll('.video-list-container .list');
  
        videoList.forEach(vid => {
            vid.addEventListener('focusin',
            function(){ 
                videoList.forEach(remove => { remove.classList.remove('active') });
                vid.classList.add('active');
                let url = vid.querySelector('.list-video').innerHTML;
                getChannelUrl(url); 
                let title = vid.querySelector('.list-title').innerHTML;
                document.querySelector('.main-video-container .main-vid-title').innerHTML = title;
            })
        });
    }, [channelsList])
    useEffect(() => {
        let videoList = document.querySelectorAll('.video-list-container .list');
  
        videoList.forEach(vid => {
            vid.addEventListener('mouseover',
            function(){ 
                videoList.forEach(remove => { remove.classList.remove('active') });
                vid.classList.add('active');
                let url = vid.querySelector('.list-video').innerHTML;
                getChannelUrl(url); 
                let title = vid.querySelector('.list-title').innerHTML;
                document.querySelector('.main-video-container .main-vid-title').innerHTML = title;
            })
        });
    }, [channelsList])
    
    const getChannelUrl = async (url) => {
        const body = { cdnip: 1, device: "ios", url: url }
        try {
            const response = await axios.post("https://authmass.multtv.tv.br:6445/jgeturl.php/", body)
            const url = response.data.url
            setChannelUrl(url)
        } catch (error) {
            console.log(error.message)
        }
    }
    
    return (
        <motion.div
            intial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
        >
            <Header />
            <Container>

                <MainVideoContainer className="main-video-container">
                    {channelsList !== undefined && channelUrl !== undefined ? [
                        <ReactPlayer
                            className='main-video'
                            url={channelUrl}
                            playing={true}
                            muted={true}
                            width='100%'
                            height='100%'
                            onError={() => (e) => console.log(e)}
                        />,
                        <h3 className="main-vid-title"></h3>
                    ] : <div className="c-loader"></div>}

                </MainVideoContainer>


                <ListVideoContainer className="video-list-container">

                    {channelsList && channelsList[0] !== undefined ? channelsList.map((channel) => {
                        return (
                            <List className="list" key={channel.url} onClick={() => { navigate(`/channelPage/${channel.url}`)}} >
                                <img src={channel.logo} alt={`${channel.nome} logo`} />
                                <h4 className="list-title">{channel.nome}</h4>
                                <h4 className="list-video">{channel.url}</h4>
                                <p>Transmitindo: <strong>{channel.agora}</strong></p>
                                <p>Andamento<Line percent={(Date.now()-new Date(channel.inicio.toString()).getTime())/100000} strokeWidth={5} strokeColor="#000000" /></p>
                                <p>Programação: <strong>{channel.depois}</strong></p>
                            </List>
                        );
                    }) : <div className="c-loader"></div>}
                </ListVideoContainer>

            </Container>
        </motion.div>
    )

}

export default MenuPrincipal