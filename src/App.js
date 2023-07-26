import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, CssBaseline } from '@material-ui/core';

import Appbar from './components/Appbar/Appbar';
import Carousel from './components/Carousel/Carousel';
import Ubicacion from './components/Ubicacion/Ubicacion';
import Cotizar from './components/Cotizar/Cotizar';
import Instagram from './components/Instagram/Instagram';
import Contacto from './components/Contacto/Contacto';

import './App.css';
import styled from 'styled-components';

const Styles = styled.div`

    @font-face {
        font-family: 'Caviar Dreams';
        src: url('/font/CaviarDreams/caviardreams-webfont.woff2') format('woff2'),
            url('/font/CaviarDreams/caviardreams-webfont.woff') format('woff');
        font-weight: normal;
        font-style: normal;

    }

    @font-face {
        font-family: 'caviar_dreamsbold';
        src: url('/font/CaviarDreams/caviardreams_bold-webfont.woff2') format('woff2'),
            url('/font/CaviarDreams/caviardreams_bold-webfont.woff') format('woff');
        font-weight: normal;
        font-style: normal;

    }

    @font-face {
        font-family: 'caviar_dreamsbold_italic';
        src: url('/font/CaviarDreams/caviardreams_bolditalic-webfont.woff2') format('woff2'),
            url('/font/CaviarDreams/caviardreams_bolditalic-webfont.woff') format('woff');
        font-weight: normal;
        font-style: normal;

    }

    @font-face {
        font-family: 'caviar_dreamsitalic';
        src: url('/font/CaviarDreams/caviardreams_italic-webfont.woff2') format('woff2'),
            url('/font/CaviarDreams/caviardreams_italic-webfont.woff') format('woff');
        font-weight: normal;
        font-style: normal;

    }

    .body{
      font-family: "Caviar Dreams";
    }

    .orange{
      color:#CE7344;
    }

    .green{
      color: #5B6E11;
    }

    .yellow{
      color: #E9CC64;
    }

    .sage{
      color: #B4AE82;
    }

    .bg-green{
      background-color: #5B6E11;
      color: #FFF;
    }

    .bg-yellow{
      background-color: #E9CC64;
      color: #FFF;
    }

    .bg-sage{
      background-color: #B4AE82;
      color: #FFF;
    }

    .bg-dark-opacity{
      background-color: rgba(0, 0, 0, 0.4);
    }

    .bg-orange-opacity{
      background-color: rgba(233,204,100,0.4);      
    }

    .bg-sage-opacity{
      background-color: rgba(180,174,130,0.4);      
    }

    .bg-green-opacity{
      background-color: rgba(91,110,17,0.4);
      color: #FFF;
    }

    
    .text{        
        background-color: rgb(0, 0, 0, 0.6);
        padding: 10px;
        /* margin: 10px auto; */
        width: fit-content;
        color: #FFF;
        margin-left: auto;
        margin-right: auto;
        border-radius:5px;
    }
    
    .textTitle{
        font-weight: 700; 
        margin-left: auto;
        margin-right: auto;
        letter-spacing:5px;
        border-radius:5px;
    }

    .titleGreenNeon{
      /* animation: flicker 1.5s infinite alternate;  */
        color: #fff;
        text-shadow:
          0 0 7px #fff,
          0 0 10px #fff,
          0 0 21px #fff,
          0 0 42px #5B6E11,
          0 0 82px #5B6E11,
          0 0 92px #5B6E11,
          0 0 102px #5B6E11,
          0 0 151px #5B6E11; 
    }

    .titleOrangeNeon{
      /* animation: flicker 1.5s infinite alternate;  */
        color: #fff;
        text-shadow:
          0 0 7px #fff,
          0 0 10px #fff,
          0 0 21px #fff,
          0 0 42px #CE7344,
          0 0 82px #CE7344,
          0 0 92px #CE7344,
          0 0 102px #CE7344,
          0 0 151px #CE7344; 
    }

    @keyframes flicker {
    
    0%, 18%, 22%, 25%, 53%, 57%, 100% {
  
        text-shadow:
        0 0 4px #fff,
        0 0 11px #fff,
        0 0 19px #fff,
        0 0 40px #CE7344,
        0 0 80px #CE7344,
        0 0 90px #CE7344,
        0 0 100px #CE7344,
        0 0 150px #CE7344;
    
    }
    
    20%, 24%, 55% {        
        text-shadow: none;
    }    
 
 
 
    }   

    .height100{         
        /* min-height: 100vh; */
        width: 100%;      
    }

    .imgBG{
        /* object-fit: cover;
        min-height: 100vh;
        width: 100%;      
        padding: 0px !important;
        z-index: -1; */
        /* opacity: 0.8; */
        background-image: url("/assets/Back.JPG");
        /* background-repeat: no-repeat; */
        /* background-size: contain;
        background-position: center;
        background-attachment: fixed;
        background-repeat: no-repeat, repeat-y;    */

        /* background: url('../assets/test_pic.jpg'); */
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        position: fixed;
        height: 100vh;
        width: 100vw;
        top:0px;
    }

    .contentBG{
      position: absolute;      
      width: 100%;
    }

    .MuiButtonBase-root{
      font-family: 'caviar_dreamsbold' !important;
    }

    .pngNeon{
      -webkit-filter: drop-shadow(-2px -1px 7px rgba(233, 204, 100, 0.5));
      filter: drop-shadow(-2px -1px 7px rgba(233, 204, 100, 0.5));
      /* animation: flickerImg 1.5s infinite alternate;  */
    }

    @keyframes flickerImg {
    
      0%, 18%, 22%, 25%, 53%, 57%, 100% {
    
        -webkit-filter: drop-shadow(1px 1px 10px rgba(233,204,100,0.5));
        filter: drop-shadow(1px 1px 10px rgba(233,204,100,0.5));
      
      }
      
      20%, 24%, 55% {        
        -webkit-filter: drop-shadow(0px 0px 00px rgba(0,0,0,0.5));
        filter: drop-shadow(0px 0px 00px rgba(0,0,0,0.5));
      }   
 
    } 
    
`;


const App = () => {
  return (
    <>
      <Styles>
        <div className="body">
          <Appbar />
          <Carousel />
          <div class="imgBG" role="img"></div>
          <div className="contentBG">
            <Cotizar />
            <Ubicacion />
            <Instagram />
            <Contacto />
          </div>


        </div>
      </Styles>
    </>
  )
};

export default App;