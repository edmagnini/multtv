import styled from "styled-components"
import {YellowMain, GrayMain} from "../../constants/color"

export const Container = styled.div` 
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    position: relative;
    margin: 1vh;
    gap:10px;
`
export const MainVideoContainer = styled.div`
    position: relative;
    flex: 1 1 700px;
    border-radius: 5px;
    box-shadow: 0 5px 15px rgba(0,0,0,.1);
    background-color: ${GrayMain};
    padding:15px;
    height: 85vh;
    .main-vid-title{
        font-size: 20px;
        position: relative;
        bottom: 10px;
        color: ${YellowMain};
    }
    img{
        position: absolute;
        width: 5rem;
        opacity: 0.4;
        top: 20rem;
        left: 2rem;
    }    
    .c-loader{
        position: relative;
        left: 40%;
        top: 45%;
        animation:is-rotating 1s infinite;
        border:6px solid#e5e5e5;
        border-radius:50%;
        border-top-color:#FCCF00;
        height:200px;
        width:200px;
    }
    @keyframes is-rotating{
        to{
            transform:rotate(1turn)
        }
    }
    @media (min-height:2160px){
        .main-vid-title{
        font-size: 40px;
        bottom: 40px;
        }
    }
`
export const MainVideo = styled.video`
    margin-bottom: 7px;
    border-radius: 5px;
    height: 80vh;
    width: 100%;
`
export const ListVideoContainer = styled.div`
   flex:1 1 350px;
   height: 85vh;
   overflow-y: scroll;
   border-radius: 5px;
   cursor: pointer;
   box-shadow: 0 5px 15px rgba(0,0,0,.1);
   background-color: ${GrayMain};
   padding:15px;
   max-width: 30vw;
   ::-webkit-scrollbar{
        width: 10px;
    }
    ::-webkit-scrollbar-track{
        background-color: #fff;
        border-radius: 5px;
    }
    ::-webkit-scrollbar-thumb{
        background-color: #444;
        border-radius: 5px;
    }
    .list.active{
        display: flex;
        align-items: center;
        gap:15px;
        padding: .2rem;
        background-image: linear-gradient(337deg, rgba(33,25,25,1) 7%, rgba(255,255,255,1) 36%, rgba(226,204,2,1) 68%, rgba(66,66,66,1) 100%);;
        border-radius: 5px;
        margin-bottom: 10px;
        border-radius: 5px;
    }
    .list{
        display: flex;
        align-items: center;
        gap:15px;
        padding: .2rem;
        background-image: linear-gradient(337deg, rgba(33,25,25,1) 7%, rgba(255,255,255,1) 36%, rgba(172,158,158,1) 68%, rgba(66,66,66,1) 100%);
        border-radius: 5px;
        margin-bottom: 10px;
        border-radius: 5px;
    }
    .list-video{
        display: none;
    }
    .list-title{
        display: none;
    }
    .c-loader{
        position: relative;
        left: 25%;
        top: 15%;
        animation:is-rotating 1s infinite;
        border:6px solid#e5e5e5;
        border-radius:50%;
        border-top-color:#FCCF00;
        height:200px;
        width:200px;
    }
    @keyframes is-rotating{
        to{
            transform:rotate(1turn)
        }
    }
    
`
export const ListActive = styled.div`
    
    img{
        width: 5rem;
    }
    @media (min-height:2160px){
        img{
            width: 10rem;
        }
        p{
            font-size: 30px;
        }
    }
`
export const List = styled.div`
    img{
        width: 5rem;
    }
    p{
        font-size: 15px;
    }
    @media (min-height:2160px){
        img{
            width: 10rem;
        }
        p{
            font-size: 30px;
        }
    }
`
export const ListVideo = styled.video`
    width: 100px;
    border-radius: 5px;
    :last-child{
        margin-bottom: 0;
    }
`

