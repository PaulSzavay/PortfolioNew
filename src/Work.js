import styled from "styled-components";
import workBackground from "./Assets/WorkBackground2.jpg";
import project1 from "./Assets/Project.JPG";

const Work = () => {

    return(
        <>
        <Container>
                            <WorkTitle>My work</WorkTitle>
            <Projects>
            <Project1 href="https://project-js-nyan-cat.vercel.app/">
                <ProjectTitle>Project1</ProjectTitle>
            </Project1>
            <Project2 href="https://google.com/">
                <ProjectTitle>Coming Soon!</ProjectTitle>
            </Project2>
            <Project3 href="https://google.com/">
                <ProjectTitle>Coming Soon!</ProjectTitle>
            </Project3>
            <Project4 href="https://google.com/">
                <ProjectTitle>Coming Soon!</ProjectTitle>
            </Project4>
            </Projects>

        </Container>
        </>
        
    )

}

export default Work;

const Container = styled.section`
width:100%;
height: 100vh;
background-image: url(${workBackground});
/* Photo by Joshua Reddekopp on Unsplash */
background-size: cover;
z-index: 1;
font-family: 'Rajdhani', sans-serif;
font-weight: 700;
display: flex;
flex-direction: column;
flex-wrap: wrap;
justify-content: center;
align-items: center;
`

const Project1 = styled.a`
background-image: url(${project1});
background-size: cover;
width: 8em;
height: 8em;
border-radius: 2em;
display: flex;
justify-content: center;
align-items: center;
color: #FCF6F5;
text-shadow: 2px 2px grey;
font-size:2.5em;
text-decoration: none;
margin: 0.5em 1.5em;
`
const Project2 = styled.a`
background-color: #000000bf;
background-size: cover;
width: 8em;
height: 8em;
border-radius: 2em;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
color: #FCF6F5;
text-shadow: 2px 2px grey;
font-size:2.5em;
text-decoration: none;
margin: 0.5em 1.5em;
`

const Project3 = styled.a`
background-color: #000000bf;
background-size: cover;
width: 8em;
height: 8em;
border-radius: 2em;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
color: #FCF6F5;
text-shadow: 2px 2px grey;
font-size:2.5em;
text-decoration: none;
margin: 0.5em 1.5em;
`

const Project4 = styled.a`
background-color: #000000bf;
background-size: cover;
width: 8em;
height: 8em;
border-radius: 2em;
display: flex; 
justify-content: center;
align-items: center;
text-align: center;
color: #FCF6F5;
text-shadow: 2px 2px grey;
font-size:2.5em;
text-decoration: none;
margin: 0.5em 1.5em;
`

const Projects = styled.div`
display: grid;
grid-template-columns: 2fr 2fr;
`

const WorkTitle = styled.h1`
font-size: 3em;
color:#FFFFF0;
font-weight: 700;
margin-top: -0.75em;
`

const ProjectTitle = styled.h2`
font-size: 1em;
color: #FCF6F5;
opacity: 1;
`