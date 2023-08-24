import styled from "styled-components";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import { Link } from "react-router-dom";
import { HiOutlineHome } from "react-icons/hi";
import footerBackground from "./Assets/FooterBackground.jpg"

const Footer = () => {

    return(
        <>
        <Container>
            <HomeDiv>
                <Home href="#top"><HiOutlineHome/></Home>
            </HomeDiv>
            <FooterBoxDiv>
            <FooterBox>
                <WordLink href="#About">About</WordLink>
                <WordLink href="#Contact">Contact</WordLink>                
                <WordLink href="#Work">Work</WordLink>
            </FooterBox>
            </FooterBoxDiv>

            <LowerFooter>
                <CompanyTitleDiv>
                    <CompanyTitle>&copy; Paul Szavay 2023</CompanyTitle>
                </CompanyTitleDiv>
                <Links>
                    <NavLink href="https://www.linkedin.com/in/paul-szavay-209b13226/" ><AiFillLinkedin/></NavLink>
                    <NavLink href="https://github.com/PaulSzavay"><AiFillGithub/></NavLink>
                    <NavLink href="https://discord.gg/vEXVz4Dn"><BsDiscord/></NavLink>
                </Links>
                <ImprintDiv>
                    <Imprint to="/Imprint">Imprint</Imprint>
                </ImprintDiv>
            </LowerFooter>
        </Container>
        </>
    )
}

export default Footer; 

const Container = styled.section`
width:100%;
height: 100%;
margin: 0;
padding: 0;
background-image: url(${footerBackground});
/* Photo by David Jorre on Unsplash */
`

const WordLink = styled.a`
padding: 0.75em;
text-decoration: none;
font-family: 'Rajdhani', sans-serif;
font-size: 1.25em;
font-weight: 500;
color:#fbffff;

&:hover{
    opacity: 0.75;
}
`

const FooterBox = styled.div`
width: 15em;
border-bottom: 0.1em solid black;
border-top: 0.1em solid black;
`

const LowerFooter = styled.div`
display: flex;
justify-content: space-between;
`

const HomeDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const NavLink = styled.a`
margin-right: 1em;
padding: 0.5em;
font-size: 1.5em;
color:#fbffff;
&:hover{
    opacity: 0.75;
}
`

const Imprint = styled(Link)`
font-size: 1em;
padding-top: 1em;
display: flex;
flex-direction: column;
justify-content: end;
align-items: center;
color:#fbffff;
`

const CompanyTitle = styled.h2`
font-size: 1em;
padding-top: 0.25em;
color:#fbffff;
`

const Home = styled.a`
box-sizing: border-box;
font-size: 3em;
margin-top: 0.5em;
color:#fbffff;
`

const Links = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
margin-right: 2.75em;
`

const FooterBoxDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
`

const CompanyTitleDiv = styled.div`
margin-left: 2em;
`

const ImprintDiv = styled.div`
margin-right: 2em;
`