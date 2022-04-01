import styled from 'styled-components'
import { YellowMain } from '../../constants/color'

export const Form = styled.form`
font-family: 'Montserrat', sans-serif;
font-size: 2rem;
`
export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    button{
        background-color: ${YellowMain};
        color: #ffffff;
        width: 28vw;
        height: 4vh;
        border-width: 0px 0px 0px 0px;
        border-radius: 30px 30px 30px 30px;
        font-family: 'Montserrat', sans-serif;
        font-size: 2rem;

        transition: all .2s linear .2s;

        &:hover {
            background-color: #0AD35B;
        }
    }
`
export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;  
    position: relative;
    margin-top: 3vh;
    input{
        padding: .2vh;
        margin: .8vh;
        width: 30vw;
        height: 4vh;
        font-family: 'Montserrat', sans-serif;
        font-size: 2rem;
        /* border-width: 0px 0px 0px 0px; */
        outline: none;
    } 
    label{
        position: absolute;
        background-color: transparent;
        top: .6rem;
        left: .8rem;
        transform-origin: 0 0;
        transition: transform 0.2s ease-in-out;
    } 
    input:focus ~ label,
    input:valid ~ label{
        transform: translateY(-1em) scale(0.8);
        color:white;
    }
`
