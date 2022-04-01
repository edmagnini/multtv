import styled from "styled-components"
import { White, GrayMain, YellowMain } from "../../constants/color"


export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: ${White};
    height: 7vh;
    width: 100vw;
    border-bottom: .3vh solid ${YellowMain};
    p{
        font-family: 'Montserrat', sans-serif;
        font-size: 2rem;
        :hover{
            color: ${YellowMain};
        }
    }
    div{
        img{
            height: 3vh;
            :hover{
                background-color: ${YellowMain};
            }
        }
    }
`
export const SocialContainer = styled.div`
        display: flex;
        align-items: center;
    div{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 3vw;
        height: 4vh;
        padding: .2rem;
        background-color: ${GrayMain};
        margin: .1rem;
        border-radius: 50%;
        :hover{
            background-color: ${YellowMain};
        }
        a{
            text-decoration: none;
            img{
                
            }
        }
    }
`
