import styled from "styled-components";
import { YellowMain } from "../../constants/color";

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 4rem;
    font-family: 'Montserrat', sans-serif;
    font-size: 2rem;
    color: ${YellowMain};
    p{
       text-align: center; 

    }
    button{
        position: relative;
        border: none;
        font-family: 'Montserrat', sans-serif;
        font-size: 2rem;
        margin-top: 2rem;
        text-align: center;
        transition: all .2s linear .2s;
        border-width: 0px 0px 0px 0px;
        border-radius: 30px 30px 30px 30px;
        background-color: ${YellowMain};

        &:hover {
            background-color: #0AD35B;
        }   
    }
`