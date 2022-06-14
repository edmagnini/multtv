import React, { useContext, useEffect, useRef, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import Home from "../../assets/home.png"
import { ChannelNext, ChannelPrev, Container, Footer, Header, ImgHome } from "./styled";
import axios from "axios";
import ReactPlayer from 'react-player/lazy'
import { Line } from 'rc-progress';
import GlobalStateContext from "../../components/contexts/GlobalStateContext";
import { globalUrl } from "../../constants/globalUrl";

const ChannelPage = () => {
    let { url } = useParams();
    let { url1 } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const [channelUrl, setChannelUrl] = useState("");
    const [channelIndex, setChannelIndex] = useState(undefined);
    const [channelPrevIndex, setChannelPrevIndex] = useState(undefined);
    const [channelNextIndex, setChannelNextIndex] = useState(undefined);
    const [onFocus, setOnFocus] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);
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
                const response = await axios.post(`${globalUrl}/jgeturl.php/`, body)
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
        var timeout;
        var duration = 4000;
        document.addEventListener('keydown', function () {
            setOnFocus(true)
            clearTimeout(timeout);
            timeout = setTimeout(function () {
                setOnFocus(false)
            }, duration)
        });
    }, [])


    useEffect(() => {
        document.addEventListener("keydown", (e) => {
            if (location.pathname.split("/", 10)[1] === "channelPage") {
                if (e.key == "ArrowUp") {
                    e.preventDefault();
                    navigate(`/channelPage/${channelsList[channelNextIndex].url}`, { replace: true })
                }
                if (e.key == "CHANNEL_UP") {
                    e.preventDefault();
                    navigate(`/channelPage/${channelsList[channelNextIndex].url}`, { replace: true })
                }
                if (e.key == "ArrowDown") {
                    e.preventDefault();
                    navigate(`/channelPage/${channelsList[channelPrevIndex].url}`, { replace: true })
                }
                if (e.key == "CHANNEL_DOWN") {
                    e.preventDefault();
                    navigate(`/channelPage/${channelsList[channelPrevIndex].url}`, { replace: true })
                }
                if (e.key == "ArrowLeft") {
                    e.preventDefault();
                    document.querySelector('[tabIndex="0"]').blur()
                }
                if (e.key == "ArrowRight") {
                    e.preventDefault();
                    document.querySelector('[tabIndex="0"]').focus()
                }
                if (e.key == "BACK") {
                    e.preventDefault();
                    navigate(`/menuPrincipal`)
                }
            }
        });
    }, [channelIndex])





    return (

        <Container>

            <ReactPlayer
                className='react-player'
                url={channelUrl}
                onReady={() => setIsPlaying(true)}
                playing={isPlaying}
                previewTabIndex={channelsList[channelIndex]?.logo}
                width='100%'
                height='100%'
                disableDeferredLoading={true}
            />
            {onFocus
                ? <Header >
                    <ImgHome tabIndex={"0"}
                        onClick={() => [navigate("/menuPrincipal") , document.location.reload(true)]} src={Home} />

                </Header>
                : ""}


            {onFocus
                ? <Footer className="footer">
                    <ChannelPrev onClick={() => { channelPrevIndex !== undefined ? navigate(`/channelPage/${channelsList[channelPrevIndex].url}`, { replace: true }) : alert("erro") }}>
                        {channelPrevIndex !== undefined ? [
                            <img src={channelsList[channelPrevIndex].logo} />, <p>{channelsList[channelPrevIndex].nome}</p>
                        ] : <div className="c-loader"></div>}
                    </ChannelPrev>
                    {channelIndex !== undefined ? [
                        <div>
                            <img src={channelsList[channelIndex].logo} />
                            <div>
                                <p>{channelsList[channelIndex].nome}</p> <p>Transmitindo: {channelsList[channelIndex].agora}</p> <p>Início: {channelsList[channelIndex].inicio.split(/(?:)/u, 19)}</p> <Line percent={(Date.now() - new Date(channelsList[channelIndex].inicio.toString()).getTime()) / 100000} strokeWidth={4} strokeColor="#D3D3D3" /> <p>Término: {channelsList[channelIndex].fim.split(/(?:)/u, 19)}</p> <p>Sequencia: {channelsList[channelIndex].depois}</p>
                            </div>
                        </div>
                    ] : <div className="c-loader"></div>}
                    <ChannelNext onClick={() => { channelNextIndex !== undefined ? navigate(`/channelPage/${channelsList[channelNextIndex].url}`, { replace: true }) : alert("erro") }}>
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