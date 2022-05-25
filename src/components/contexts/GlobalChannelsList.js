import axios from "axios";
import { useEffect, useState } from "react";
import GlobalStateContext from './GlobalStateContext'

const GlobalChannelsList = props => {
    const token = localStorage.getItem("token");
    const [channelsList, setChannelsList] = useState({});

    useEffect(() => {
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
    }, [channelsList])
    

    const data = {
        channelsList,
        setChannelsList
    }

    return (
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalChannelsList