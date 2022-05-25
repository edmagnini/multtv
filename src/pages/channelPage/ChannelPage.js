import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { motion } from "framer-motion";
import Home from "../../assets/home.png"
import { ChannelNext, ChannelPrev, Container, Footer, Header, ImgHome } from "./styled";
import axios from "axios";
import ReactPlayer from 'react-player/lazy'
import { Line } from 'rc-progress';
import GlobalStateContext from "../../components/contexts/GlobalStateContext";

const ChannelPage = () => {
    let { url } = useParams();
    let { url1 } = useParams();
    const navigate = useNavigate();
    const [channelUrl, setChannelUrl] = useState("");
    const [channelIndex, setChannelIndex] = useState(undefined);
    const [channelPrevIndex, setChannelPrevIndex] = useState(undefined);
    const [channelNextIndex, setChannelNextIndex] = useState(undefined);
    const [onFocus, setOnFocus] = useState(true)
    const { channelsList } = useContext(GlobalStateContext);


    useEffect(() => {
        if (localStorage.getItem("token") === null) {
            navigate("/login")
        }
        const concatUrl = () => {
            if (url1 === undefined) {
                return url
            } else {
                return (`${url}/${url1}`)
            }
        }
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
        getChannelUrl(concatUrl());

        const channelsListSetIndex = (channelsList) => {
            for (let i in channelsList) {
                if (channelsList[i].url === concatUrl()) {
                    const number = i
                    setChannelIndex(Number(number))
                    if ((Number(i) - 1) < 0) {
                        setChannelPrevIndex(Number(channelsList.length) - 1)
                        setChannelNextIndex(Number(Number(i) + 1))
                    } else if ((Number(i) + 1) > (Number(channelsList.length) - 1)) {
                        setChannelPrevIndex(Number(Number(i) - 1))
                        setChannelNextIndex(Number(0))
                    } else {
                        setChannelPrevIndex(Number(Number(i) - 1))
                        setChannelNextIndex(Number(Number(i) + 1))
                    }
                }
            }
        }
        channelsListSetIndex(channelsList);

    }, [channelIndex, channelPrevIndex, channelNextIndex, url])

    useEffect(() => {
        var timeout;
        var duration = 2500;
        document.addEventListener('mouseover', function () {
            setOnFocus(true)
            clearTimeout(timeout);
            timeout = setTimeout(function () {
                setOnFocus(false)
            }, duration)
        });
    }, [])


    useEffect(() => {
        document.addEventListener("keydown", (e) => {
            if (e.keyCode == 38) {
                e.preventDefault();
                navigate(`/channelPage/${channelsList[channelNextIndex].url}`)
            }
            if (e.keyCode == 40) {
                e.preventDefault();
                navigate(`/channelPage/${channelsList[channelPrevIndex].url}`)
            }
            if (e.keyCode == "KEYCODE_BACK") {
                e.preventDefault();
                navigate(`/menuPrincipal`)
            }
        });
    }, [channelIndex])





    return (

        <Container>

            <ReactPlayer
                className='react-player'
                url={channelUrl}
                playing={true}
                width='100%'
                height='100%'
                onError={() => alert("Erro ao exibir o canal.")}
            />
            {onFocus
                ? <Header>
                    <ImgHome onClick={() => navigate("/menuPrincipal")} src={Home} />

                </Header>
                : ""}


            {onFocus
                ? <Footer className="footer">
                    <ChannelPrev onClick={() => { channelPrevIndex !== undefined ? navigate(`/channelPage/${channelsList[channelPrevIndex].url}`) : alert("erro") }}>
                        {channelPrevIndex !== undefined ? [
                            <img src={channelsList[channelPrevIndex].logo} />, <p>{channelsList[channelPrevIndex].nome}</p>
                        ] : <div className="c-loader"></div>}
                    </ChannelPrev>
                    {channelIndex !== undefined ? [
                        <div>
                            <img src={channelsList[channelIndex].logo} />
                            <div>
                                <p>{channelsList[channelIndex].nome}</p> <p>Transmitindo: {channelsList[channelIndex].agora}</p> <p>Início: {channelsList[channelIndex].inicio.split(/(?:)/u, 19)}</p> <Line percent={(Date.now()-new Date(channelsList[channelIndex].inicio.toString()).getTime())/100000} strokeWidth={4} strokeColor="#D3D3D3" /> <p>Término: {channelsList[channelIndex].fim.split(/(?:)/u, 19)}</p> <p>Sequencia: {channelsList[channelIndex].depois}</p>
                            </div>
                        </div>
                    ] : <div className="c-loader"></div>}
                    <ChannelNext onClick={() => { channelNextIndex !== undefined ? navigate(`/channelPage/${channelsList[channelNextIndex].url}`) : alert("erro") }}>
                        {channelNextIndex !== undefined ? [
                            <img src={channelsList[channelNextIndex].logo} />, <p>{channelsList[channelNextIndex].nome}</p>
                        ] : <div className="c-loader"></div>}
                    </ChannelNext>
                </Footer>
                : ""}



        </Container>

    )
}

export default ChannelPage