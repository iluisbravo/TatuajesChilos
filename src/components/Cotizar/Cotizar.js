import React from 'react';
import VerticalLinearStepper from './Wizard';
import Settings from '../../providers/settings';
import styled from 'styled-components';
import { Button, Grid } from '@material-ui/core';

const Styles = styled.div`

    /* img{
        object-fit: cover;
        height: inherit;
        width: 100%;
        position: absolute;
    } */

    .btnCotizar{
        font-size: x-large;
        font-weight: bolder;
    }

    .MuiButton-containedPrimary{
      background-color: #E9CC64 !important;
      color:white;
    }

    .MuiButton-containedPrimary:hover{
      background-color: #B4AE82 !important;     
    }

    .sectionContent{
        position: relative;
        padding-top: 0px;
        padding: 30px;
    }

    .MuiTypography-body1 ,
    .MuiTypography-body2 ,
    .MuiButton-root
    {
        font-family: "Caviar Dreams" !important;
        
    }

    .MuiTypography-body1    
    {        
        font-weight: 500;
    }

    .MuiTypography-body2   
    {        
        font-weight: 600;
    }

    .MuiStepLabel-label.MuiStepLabel-completed {    
        font-weight: 900;
    }

    .MuiStepLabel-label.MuiStepLabel-active {    
        font-weight: 900;
    }

    div.neonBtn {
        text-align:center;
        border:5px solid #CE7344;
        border-radius:5px;
        animation: border-flicker 2s linear infinite;   
        padding: 10px;
        background-color: rgba(0,0,0,0.6);     
    }

    div.neonBtn:hover {
        cursor:pointer;       
    }

    .neonBtn h1 {
        color:#E9CC64;
        font-size:32px;
        letter-spacing:8px;
        animation: text-flicker 5s linear infinite;
        margin-bottom: 0px;
        font-weight: bolder;
    }

    .neonBtn .offset {
    animation: letter-flicker 2s linear infinite;
    }

    @keyframes text-flicker {
    0% {
        opacity:0.1;
        text-shadow: 0px 0px 29px rgba(233,204,100,1);
    }
    
    2% {
        opacity:1;
        text-shadow: 0px 0px 29px rgba(233,204,100,1);
    }
    8% {
        opacity:0.1;
        text-shadow: 0px 0px 29px rgba(233,204,100,1);
    }
    9% {
        opacity:1;
        text-shadow: 0px 0px 29px rgba(233,204,100,1);
    }
    12% {
        opacity:0.1;
        text-shadow: 0px 0px rgba(233,204,100,1);
    }
    20% {
        opacity:1;
        text-shadow: 0px 0px 29px rgba(233,204,100,1)
    }
    25% {
        opacity:0.3;
        text-shadow: 0px 0px 29px rgba(233,204,100,1)
    }
    30% {
        opacity:1;
        text-shadow: 0px 0px 29px rgba(233,204,100,1)
    }
    
    70% {
        opacity:0.7;
        text-shadow: 0px 0px 29px rgba(233,204,100,1)
    }
    
    72% {
        opacity:0.2;
        text-shadow:0px 0px 29px rgba(233,204,100,1)
    }
    
    77% {
        opacity:.9;
        text-shadow: 0px 0px 29px rgba(233,204,100,1)
    }
    100% {
        opacity:.9;
        text-shadow: 0px 0px 29px rgba(233,204,100,1)
    }
    }

    @keyframes border-flicker {
    0% {
        opacity:0.1;
        -webkit-box-shadow: 0px 0px 78px 4px rgba(206, 115, 68, 0.73);
    -moz-box-shadow: 0px 0px 78px 4px rgba(206, 115, 68, 0.73);
    box-shadow: 0px 0px 78px 4px rgba(206, 115, 68, 0.73);
    }
    2% {
        opacity:1;
        -webkit-box-shadow: 0px 0px 78px 4px rgba(206, 115, 68, 0.73);
    -moz-box-shadow: 0px 0px 78px 4px rgba(206, 115, 68, 0.73);
    box-shadow: 0px 0px 78px 4px rgba(206, 115, 68, 0.73);
    }
    4% {
        opacity:0.1;
        -webkit-box-shadow: 0px 0px 78px 4px rgba(206, 115, 68, 0.73);
    -moz-box-shadow: 0px 0px 78px 4px rgba(206, 115, 68, 0.73);
    box-shadow: 0px 0px 78px 4px rgba(206, 115, 68, 0.73);
    }
    
    8% {
        opacity:1;
        -webkit-box-shadow: 0px 0px 78px 4px rgba(206, 115, 68, 0.73);
    -moz-box-shadow: 0px 0px 78px 4px rgba(206, 115, 68, 0.73);
    box-shadow: 0px 0px 78px 4px rgba(206, 115, 68, 0.73);
    }
    70% {
        opacity:0.7;
        -webkit-box-shadow: 0px 0px 78px 4px rgba(206, 115, 68, 0.73);
    -moz-box-shadow: 0px 0px 78px 4px rgba(206, 115, 68, 0.73);
    box-shadow: 0px 0px 78px 4px rgba(206, 115, 68, 0.73);
    }
    100% {
        opacity:1;
        -webkit-box-shadow: 0px 0px 78px 4px rgba(206, 115, 68, 0.73);
    -moz-box-shadow: 0px 0px 78px 4px rgba(206, 115, 68, 0.73);
    box-shadow: 0px 0px 78px 4px rgba(206, 115, 68, 0.73);
    }
    }

    @keyframes letter-flicker {
    0% {
        opacity:0.1;
        text-shadow: 0px 0px 29px rgba(233,204,100,1);
    }
    2% {
        opacity:0.1;
        text-shadow: 0px 0px 29px rgba(233,204,100,1);
    }
    4% {
        opacity:1;
        text-shadow: 0px 0px 29px rgba(233,204,100,1);
    }
    
    
    19% {
        opacity:1;
        text-shadow: 0px 0px 29px rgba(233,204,100,1);
    }
    21% {
        opacity:0.1;
        text-shadow: 0px 0px 29px rgba(233,204,100,1);
    }
    23% {
        opacity:1;
        text-shadow: 0px 0px 29px rgba(233,204,100,1);
    }
    
    80% {
        opacity:1;
        text-shadow: 0px 0px 29px rgba(233,204,100,1);
    }
    83% {
        opacity:0.4;
        text-shadow: 0px 0px 29px rgba(233,204,100,1);
    }
    87% {
        opacity:1;
        text-shadow: 0px 0px 29px rgba(233,204,100,1);
    }
    }
`;


const Cotizar = () => {

    let cactus = "/assets/cactus_blanco.png";


    const [isOnline, setIsOnline] = React.useState(true);
    const [showCotizador, setShowCotizador] = React.useState(false);

    const getIsOnline = async () => {
        let result = await Settings.GetStatus();
        setIsOnline(result.isOnline);
    }

    const clickShowCotizador = () => {
        setShowCotizador(true);
    }

    React.useEffect(() => {
        getIsOnline();
    });

    return (
        <>
            <Styles>
                <div className="height100 bg-dark-opacity" id="Cotizar">
                    <div className="sectionContent">

                        <Grid container spacing={0}>
                            <Grid item xs={12} md={12}>
                                <div className="text-center">
                                    <img src={cactus} alt="cactus" height="150" width="auto" className="pngNeon" />
                                </div>
                            </Grid>

                            {(showCotizador !== true) && (
                                <>
                                    <Grid item xs={12} md={4}>  </Grid>
                                    <Grid item xs={12} md={4}>
                                        <div className="text-center mx-4">

                                            {/* <h1
                                                variant="contained"
                                                color="primary"
                                                onClick={clickShowCotizador}
                                                size="large"
                                                className="btnCotizar btnNeon"
                                                fullWidth
                                            >
                                                COTIZAR
                                            </h1> */}

                                            <div className="neonBtn" onClick={clickShowCotizador}>
                                                {/* <h1>O<span id="offset">P</span>EN</h1> */}
                                                <h1>C<span className="offset">O</span>TIZAR</h1>
                                            </div>


                                        </div>
                                    </Grid>
                                </>
                            )}

                            <Grid item xs={12} md={12}>

                                {(isOnline === "true" && showCotizador === true) && (<VerticalLinearStepper setShowCotizador={setShowCotizador} />)}
                                {(isOnline !== "true" && showCotizador === true) && (<p className="text">
                                    Por el momento la agenda se encuentra cerrada se abrirá en los primeros días del siguiente mes.
                                </p>)}

                            </Grid>
                        </Grid>




                    </div>
                </div>
            </Styles>
        </>
    )
}

export default Cotizar;