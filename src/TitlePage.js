import styled from "styled-components"
import background from "./Assets/Background2.png"
import About from './About';
import Work from "./Work";
import Contact from "./Contact";
import Footer from "./Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom"

const TitlePage = () => {

    const location = useLocation();


    useEffect(()=>{
        // console.log(location)
        if(location.hash){
            const idToScroll = location.hash.slice(1);
            // console.log(idToScroll)
            const sectionToScroll = document.getElementById(idToScroll);
            // console.log(element)
            sectionToScroll.scrollIntoView({ behavior: "smooth" })
        }
    },[])


    return(
        <>
        <Body id="top">
        <Container>
                <Title>Your programming projects start here.</Title>
        </Container>
        <Section id="About">
            <About />
        </Section>
        <Section id="Work">
            <Work />
        </Section>
        <Section id="Contact">
            <Contact />
        </Section>
        <FooterSection>
            <Footer/>
        </FooterSection>
        </Body>
        </>
        
    )
}

export default TitlePage

const Container = styled.section`
    margin:0;
    overflow: hidden;
    background-image: url(${background});
    /* Photo by USGS on Unsplash */
    background-size: cover;
    width: 100%;
    height: 100vh;
    position: sticky;
    top:0;
    z-index: -10000;

`

const Title = styled.h1`
color: white;
margin: 25vh 0;
display: flex;
justify-content: center;
align-items: center;
font-size: 8em;
padding: 0 3em;
text-align: center;
color:#fec8c1;
text-shadow: 0 0 5px #E60283, 0 0 15px #E60283, 0 0 20px #E60283, 0 0 40px #E60283, 0 0 60px #851e3e, 0 0 98px #851e3e;
font-family: 'Rajdhani', sans-serif;
`


const Body = styled.div`
height: 400vh;
width: 100%;
`

const Section = styled.section`
`
const FooterSection = styled.section`
    margin: 0;
`