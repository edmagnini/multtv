import styled from "styled-components"
import {YellowMain, GrayMain} from "../../constants/color"

export const Container = styled.div`
    max-width: 1200px;
    margin:100px auto;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    gap:20px;
`
export const MainVideoContainer = styled.div`
    position: relative;
    flex: 1 1 700px;
    border-radius: 5px;
    box-shadow: 0 5px 15px rgba(0,0,0,.1);
    background-color: ${GrayMain};
    padding:15px;
    
    .main-vid-title{
        font-size: 20px;
        color: ${YellowMain};
    }
    img{
        position: absolute;
        width: 5rem;
        opacity: 0.4;
        top: 20rem;
        left: 2rem;
    }    
`
export const MainVideo = styled.video`
    margin-bottom: 7px;
    border-radius: 5px;
    width: 100%;
`
export const ListVideoContainer = styled.div`
   flex:1 1 350px;
   height: 450px;
   overflow-y: scroll;
   border-radius: 5px;
   cursor: pointer;
   box-shadow: 0 5px 15px rgba(0,0,0,.1);
   background-color: ${GrayMain};
   padding:15px;
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
        background-color: ${YellowMain};
        border-radius: 5px;
        margin-bottom: 10px;
        border-radius: 5px;
    }
    .list{
        display: flex;
        align-items: center;
        gap:15px;
        padding: .2rem;
        background-color: #eee;
        border-radius: 5px;
        margin-bottom: 10px;
        border-radius: 5px;
    }
`
export const ListActive = styled.div`
    
    img{
        width: 5rem;
    }
`
export const List = styled.div`
    img{
        width: 5rem;
    }
`
export const ListVideo = styled.video`
    width: 100px;
    border-radius: 5px;
    :last-child{
        margin-bottom: 0;
    }
`

