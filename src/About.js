import styled from "styled-components";
import me from "./Assets/Me.jpg"
import plainBackground from "./Assets/PlainBackground3.jpg"

const About = () => {

    return(
        <>
        <Container>
            <Left>
            </Left>
            <Right>
                <Title>About</Title>
                <Description>Hi! I'm Paul. I am a Full-Stack Web Developper. I love travelling the world and playing the card game Magic the Gathering.
                </Description>
            </Right>
        </Container>
        </>
        
    )

}

export default About;

const Container = styled.section`
width:100%;
height: 100vh;
display: flex;
`

const Left = styled.div`
background-image: url(${me});
background-size: cover;
height: 100vh;
width: 50%;
`

const Right = styled.div`
background-image: url(${plainBackground});
/* Photo by Valentin Salja on Unsplash */
background-size: cover;
height: 100vh;
width: 50%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-family: 'Rajdhani', sans-serif;
`

const Title = styled.h1`
font-size: 3em;
color:#FFFFF0;
font-weight: 700;
`

const Description = styled.p`
font-size: 1.75em;
width: 18em;
color:#FFFFF0;
font-weight: 600;
`