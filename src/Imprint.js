import imprintBackground from "./Assets/ImprintBackground.jpg";
import styled from "styled-components";

const Imprint = () => {

    return(
        <>
        <Container>
            <Title>Imprint</Title>
            <SubTitle>Details</SubTitle>
            <Paragraph>Paul Szavay Enterprises</Paragraph>
            <Paragraph>Paul Szavay</Paragraph>
            <Paragraph>Somewhere located in Quebec</Paragraph>
            <Paragraph>Some PO box number</Paragraph>
            <SubTitle2>Contact Information</SubTitle2>
            <Paragraph>Email: <Span>szavay.paul@gmail.com</Span></Paragraph>
        </Container>
        </>
        
    )
}

export default Imprint


const Container = styled.section`
background-image: url(${imprintBackground});
background-size: cover;
height: 100vh;
width: 100vw;
overflow: hidden;
color: #fbffff;
display: flex;
flex-direction: column;
justify-content: center;
align-items: start;
`

const Title = styled.h1`
font-size: 4.5em;
margin-left: 4rem;
margin-bottom: 0.5rem;
font-weight: 700;
`

const SubTitle = styled.h2`
font-size: 3em;
margin: 0.25rem 4rem;
`

const SubTitle2 = styled.h2`
font-size: 3em;
margin-left: 4rem;
margin-top: 1rem;
`

const Paragraph = styled.p`
font-size: 1.25em;
margin: 0 4rem 0;
font-weight: 550;
`

const Span = styled.span`
text-decoration: underline;
`