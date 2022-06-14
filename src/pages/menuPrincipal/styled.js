import styled from "styled-components"
import { YellowMain, GrayMain } from "../../constants/color"

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
    padding:15px;
    height: 85vh;
    width: 100vw;
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
    
`
export const ListVideoContainer = styled.div`
   display: flex;
   flex:1 1 350px;
   height: 15vh;
   position: absolute;
   bottom: 0px;
   overflow-x: auto;
   border-radius: 5px;
   cursor: pointer;
   box-shadow: 0 5px 15px rgba(0,0,0,.1);
   padding:15px;
   width: 95vw;
   ::-webkit-scrollbar{
    display:none;
    }
    ::-webkit-scrollbar-track{
        display:none;
    }
    ::-webkit-scrollbar-thumb{
        display:none;
    }
    .list.active{
        display: flex;
        align-items: center;
        height: 15vh;
        padding: .2rem;
        background-color: black;
        border-radius: 5px;
        border: 3px solid ${YellowMain};
        .epg{
            display: flex;
            flex-direction: column;
            height: 13vh;
            width: 30vw;
            justify-content: space-between;
            
        }
    }
    .list{
        display: flex;
        align-items: center;
        gap:15px;
        margin: 0.2vw;
        padding: .2rem;
        height: 15vh;
        color: white;
        background-color: black;
        border-radius: 5px;
        margin-bottom: 10px;
        border-radius: 5px;
    }
    .list-video{
        display: none;
    }
    .epg{
        display: none;
    }
    .list-title{
        display: none;
    }
    .list-index{
        display: none;
    }
    .c-loader{
        position: relative;
        left: 50%;
        top: 25%;
        animation:is-rotating 1s infinite;
        border:6px solid#e5e5e5;
        border-radius:50%;
        border-top-color:#FCCF00;
        height: 100px;
        width: 100px;
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

