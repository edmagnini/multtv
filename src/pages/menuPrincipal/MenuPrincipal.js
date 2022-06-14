import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { globalUrl } from "../../constants/globalUrl";
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
    const [channelIndex, setChannelIndex] = useState(undefined);
    const [channelUrl, setChannelUrl] = useState(undefined);
    const [channelName, setChannelName] = useState(undefined)
    const [channelImg, setChannelImg] = useState(undefined)
    const [isPlaying, setIsPlaying] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("token") === null || localStorage.getItem("token") === "undefined") {
            localStorage.removeItem("token")
            navigate("/login")
        }
        document.querySelector('.video-list-container .list')?.focus()
        const getChannelsList = async (token) => {
            const body = { token }
            try {
                const response = await axios
                    .post(`${globalUrl}/jcanais.php/`, body)
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
                function () {
                    setIsPlaying(false)
                    videoList.forEach(remove => { remove.classList.remove('active') });
                    vid.classList.add('active');
                    let url = vid.querySelector('.list-video').innerHTML;
                    getChannelUrl(url);
                    setChannelImg(vid.querySelector('.list-img')?.src);
                })
        });
    }, [channelsList])
    useEffect(() => {
        let videoList = document.querySelectorAll('.video-list-container .list');

        videoList.forEach(vid => {
            vid.addEventListener('mouseenter',
                function () {
                    setIsPlaying(false)
                    videoList.forEach(remove => { remove.classList.remove('active') });
                    vid.classList.add('active');
                    let url = vid.querySelector('.list-video').innerHTML;
                    getChannelUrl(url);
                    setChannelName(vid.querySelector('.list-title')?.innerHTML);
                    setChannelImg(vid.querySelector('.list-img')?.src);
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
    useEffect(() => {
        document.addEventListener("keydown", (e) => {
            if (e.key == "ArrowDown") {
                e.preventDefault();
                document.querySelector('.video-list-container .list')?.focus()
            }
        });
    }, [])

    return (
        <
            >
            <Header />
            <Container>

                <MainVideoContainer className="main-video-container">
                    {channelsList !== undefined && channelUrl !== undefined ? [
                        <ReactPlayer
                            className='main-video'
                            url={channelUrl}
                            playIcon={channelImg}
                            onReady={() => setIsPlaying(true)}
                            playing={isPlaying}
                            muted={true}
                            width='100%'
                            height='100%'
                            disableDeferredLoading={true}
                            onError={() => (e) => console.log(e)}
                        />
                    ] : channelsList && channelUrl == undefined && channelUrl == null ?
                        <ReactPlayer
                            className='main-video'
                            url={getChannelUrl(channelsList[0]?.url)}
                            playIcon={channelsList[0]?.logo}
                            onReady={() => setIsPlaying(true)}
                            playing={isPlaying}
                            muted={true}
                            width='100%'
                            height='100%'
                            disableDeferredLoading={true}
                            onError={() => (e) => console.log(e)}
                        /> :
                        <div className="c-loader"></div>}

                </MainVideoContainer>


                <ListVideoContainer className="video-list-container">

                    {channelsList && channelsList[0] !== undefined ? channelsList.map((channel) => {
                        for (let i in channel) {
                            return (
                                <List className="list" key={channel.nome} tabIndex={channel[i]} onClick={() => [isPlaying == true ? navigate(`/channelPage/${channel.url}`) : ""]} >
                                    <img className="list-img" src={channel.logo} alt={`${channel.nome} logo`} />
                                    <h4 className="list-title">{channel.nome}</h4>
                                    <h4 className="list-index">{channel[i]}</h4>
                                    <h4 className="list-video">{channel.url}</h4>
                                    <div className="epg">
                                        <div>Transmitindo: <strong>{channel.agora}</strong></div>
                                        <div>Andamento<Line percent={(Date.now() - new Date(channel.inicio.toString()).getTime()) / 100000} strokeWidth={2} strokeColor="#D3D3D3" /></div>
                                        <div>Programação: <strong>{channel.depois}</strong></div>
                                    </div>
                                </List>
                            );
                        }
                    }) : <div className="c-loader"></div>}
                </ListVideoContainer>

            </Container>
        </>
    )

}

export default MenuPrincipal