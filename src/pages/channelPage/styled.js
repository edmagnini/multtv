import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.3rem;
    padding-top: 52.70%;
    position: relative;
    .react-player{
        position: absolute;
        top: 0;
        left: 0;
    }
    @media (min-height:2160px){
        
        font-size: 2.6rem;
    }
`
export const Header = styled.div`
    position: absolute;
    top: 0;
    background-color: rgba(0,0,0,0.5);
    height: 10vh;
    width: 100vw;
`

export const ImgHome = styled.img`
    position: relative;
    top: 25%;
    left: 5%;
    @media (min-height:2160px){
        top: 5%;
        width: 200px;
    }
`

export const Footer = styled.div`
    display: flex;
    justify-content: center;
    background-color: rgba(0,0,0,0.5);
    position: absolute;
    bottom: 0px;
    width: 100vw;
    height: 215px;
    div{
        display: flex;
        
        div{
            display: flex;
            flex-direction: column;
            justify-content:center;
            align-items: center;
            color: #ffffff;
        }
    }
    img{
        
    }
    .c-loader{
        position: relative;
        left: 0%;
        top: 15%;
        animation:is-rotating 1s infinite;
        border:6px solid#e5e5e5;
        border-radius:50%;
        border-top-color:#FCCF00;
        height:100px;
        width:100px;
    }
    @keyframes is-rotating{
        to{
            transform:rotate(1turn)
        }
    }
    .container-progress{
        height:25px;
        background-color:#CCC;
        position:relative;
    }
    .container-progress .progress-bar{
        position:absolute;
        height:100%;
        background-color:rgb(125,44,255);
        animation:progress-animation 5s forwards;
    }
    @keyframes progress-animation{
        0%{width:0%;}
        100%{width:100%;}
    }
    @media (min-height:2160px){
        height: 415px;
    }
`

export const ChannelPrev = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0px;
    left: 0px;
    background-image: linear-gradient(337deg, rgba(33,25,25,1) 7%, rgba(255,255,255,1) 36%, rgba(172,158,158,1) 68%, rgba(66,66,66,1) 100%);
    border: 7px solid #525659;
    width: 200px;
    height: 200px;
    z-index: 2;
    border-radius: 50%;
    color: #000000;
    img{
        width: 120px;
    }
    .c-loader{
        position:: relative;
        top: 0%;
        animation:is-rotating 1s infinite;
        border:6px solid#e5e5e5;
        border-radius:50%;
        border-top-color:#FCCF00;
        height:100px;
        width:100px;
    }
    @keyframes is-rotating{
        to{
            transform:rotate(1turn)
        }
    }
    @media (min-height:2160px){
        width: 400px;
        height: 400px;
        img{
            width: 240px;
        }
    }
`
export const ChannelNext = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0px;
    background-image: linear-gradient(337deg, rgba(33,25,25,1) 7%, rgba(255,255,255,1) 36%, rgba(172,158,158,1) 68%, rgba(66,66,66,1) 100%);
    border: 7px solid #525659;
    width: 200px;
    height: 200px;
    right: 5px;
    z-index: 2;
    border-radius: 50%;
    color: #000000;
    img{
        width: 120px;
    }
    .c-loader{
        position:: relative;
        top: 0%;
        animation:is-rotating 1s infinite;
        border:6px solid#e5e5e5;
        border-radius:50%;
        border-top-color:#FCCF00;
        height:100px;
        width:100px;
    }
    @keyframes is-rotating{
        to{
            transform:rotate(1turn)
        }
    }
    @media (min-height:2160px){
        width: 400px;
        height: 400px;
        img{
            width: 240px;
        }
    }
`