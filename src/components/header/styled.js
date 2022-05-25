import styled from "styled-components"
import { White, GrayMain, YellowMain } from "../../constants/color"


export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${White};
    height: 7vh;
    width: 100vw;
    border-bottom: .3vh solid ${YellowMain};
    p{
        position: relative;
        right: 20px;
        font-family: 'Montserrat', sans-serif;
        font-size: 2rem;
        :hover{
            color: ${YellowMain};
        }
    }
    div{
        img{
            position: relative;
            left: 20px;
            height: 2.5vh;
            :hover{
                cursor:pointer;
            }
        }
    }
`
