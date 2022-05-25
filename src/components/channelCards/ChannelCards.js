import { ChannelEPG, ChannelImg, Container } from "./styled"

const ChannelCard = (props) => {
    return (
        <>
            <Container>
                <ChannelImg src={props.channel.logo} alt={`${props.channel.nome} logo`} />
                <ChannelEPG>
                    <p>{props.channel.nome}</p>
                    <p>{props.channel.agora}</p>
                    <p>{props.channel.depois}</p>
                </ChannelEPG>
            </Container>
        </>
    )
}

export default ChannelCard;