import './App.css';
import Header from './Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TitlePage from './TitlePage';
import GlobalStyle from "./GlobalStyle"
import Imprint from './Imprint';
import {useState, useEffect} from "react"
import styled from 'styled-components';



function App() {

  // const [loading, setLoading] = useState(false)

  // useEffect(() => {
  //   setTimeout(() => setLoading(true), console.log("loading"), 6000);
  // }, []);


  return (
    <>
    {/* {!loading ? <div></div>
    : */}
    <BrowserRouter>
    <GlobalStyle/>
    <Header/>
    <Routes>
      <Route path="/" element={<TitlePage/>}/>
      <Route path="/Imprint" element={<Imprint/>}/>
    </Routes>
    </BrowserRouter>
  </>);
}

export default App;


// const Loading = styled.h1`
// display: flex;
// justify-content: center;
// align-items: center;
// text-align: center;
// color:black;
// `