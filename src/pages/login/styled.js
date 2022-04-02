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
        width: 13vw;
        height: 4vh;
        border-width: 0px 0px 0px 0px;
        border-radius: 30px 30px 30px 30px;
        font-family: 'Montserrat', sans-serif;
        font-size: 2rem;
        margin-top: 1rem;

        transition: all .2s linear .2s;

        &:hover {
            background-color: #0AD35B;
        }
    }
    @media (max-width:450px){
        button{
            margin-top: 1rem;
            height: 4vh;
            width: 40vw;
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
        border-width: 0px 0px 0px 0px;
        border-radius: 30px 30px 30px 30px;
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
        transform: translateY(-1.1em) scale(0.8);
        color:white;
    }
    @media (max-width:450px){
        margin-top: 3vh;
        input{
            font-size: 1.5rem;
            height: 6vh;
            width: 60vw;
        }
        label{
            position: absolute;
            background-color: transparent;
            top: .6rem;
            left: 1.5rem;
            transform-origin: 0 0;
            transition: transform 0.2s ease-in-out;
            font-size: 1rem;
        }
    }
`
