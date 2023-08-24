import styled from "styled-components";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import { useState } from "react";
import { useLocation, Link } from "react-router-dom";



const Header = () => {
    const [navBar, setNavBar] = useState(false)
    const location = useLocation();
    // console.log(location);

    const changeNavBarBackground = () => {
        const heightFirstSection = window.innerHeight*.9
        // console.log(window.scrollY)
        if(window.scrollY >= heightFirstSection){
            setNavBar(true)
        }
        else{
            setNavBar(false)
        }
    }

    window.addEventListener('scroll', changeNavBarBackground)



    return(
        <>
        <Nav navBar = {navBar}>
            <Logo>Paul Szavay</Logo>
            <Navigations>
                <div>
                    {location.pathname === "/" ?
                    <>
                    <WordLink href="#About">About</WordLink>
                    <WordLink href="#Work">Work</WordLink>
                    <WordLink href="#Contact">Contact</WordLink>
                    </>
                    :
                    <>
                    <WordLinkImprint to="/#About" >About</WordLinkImprint>
                    <WordLinkImprint to="/#Work">Work</WordLinkImprint>
                    <WordLinkImprint to="/#Contact">Contact</WordLinkImprint>
                    </>
                
                }
                </div>
                <NavLink href="https://www.linkedin.com/in/paul-szavay-209b13226/" ><AiFillLinkedin/></NavLink>
                <NavLink href="https://github.com/PaulSzavay"><AiFillGithub/></NavLink>
                <NavLink href="https://discord.gg/vEXVz4Dn"><BsDiscord/></NavLink>
            </Navigations>
        </Nav>
        </>
    )
}

export default Header

const Logo = styled.h1`
color: white;
`

const Nav = styled.div`
position: fixed;
padding: 0 3em;
width: 100%;
z-index: 1000;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
box-sizing: border-box;
background-color: ${({navBar}) => (navBar ? "rgba(1,1,1,0.5)" : "transparent")};
transition: all 0.5s ease-in-out;
`

const NavLink = styled.a`
padding: 0.2em;
font-size: 1.5em;
color:#FFFF00;
`

const WordLink = styled.a`
padding: 0.75em;
text-decoration: none;
font-family: 'Rajdhani', sans-serif;
font-size: 1.75em;
font-weight: 500;
color:#FFFF00;
transition: all 0.5s ease-in-out; 
`

const Navigations = styled.div`
    display: flex;
    padding: 1em;
    /* margin-right: 6em; */
`


const WordLinkImprint = styled(Link)`
padding: 0.75em;
text-decoration: none;
font-family: 'Rajdhani', sans-serif;
font-size: 1.75em;
font-weight: 500;
color:#FFFF00;
transition: all 0.5s ease-in-out; 
`