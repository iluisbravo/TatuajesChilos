import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Grid } from '@material-ui/core';

import styled from 'styled-components';

const map = "/assets/TatuajesChilosMap2.png";

const Styles = styled.div`

    .mapHeight{
        height: 60vh;
        /* width: 500px; */
        margin: auto;
    }
   
    .img{
        object-fit: cover;
        height: 350px;
        width: 100%;
      
        background-image: url("/assets/TatuajesChilosMap2.png");
        background-repeat: no-repeat;
        background-size: cover;
    }

    .mapImg{
        height: 296px;        
        image-rendering: -webkit-optimize-contrast;          
        background-image: url("/assets/TatuajesChilosMap2.png");
        background-repeat: no-repeat;
        background-size: contain;
    }

    .mapImg:hover{
       cursor: pointer;
    }
`;


const Ubicacion = () => {

    const goGoogleMaps = () => {
        window.location.href = "https://www.google.com.mx/maps/place/Tatuajes+Chilos/@29.0854806,-110.9921096,18.5z/data=!4m5!3m4!1s0x86ce85cde38b1fc7:0x64d290ac12c0e474!8m2!3d29.0978086!4d-110.9456351";
    }

    return (
        <>
            <Styles>
                <div className="height100 bg-green-opacity" id="Ubicacion">

                    <Grid container spacing={0} className="p-4">

                        <Grid item xs={12} md={12}>
                            <h2 className="textTitle text titleGreenNeon">
                                ENCUÉNTRANOS
                            </h2>

                            <p className="text">
                                Tatuajes Chilos es un estudio privado donde atendemos solamente con cita previa para poder
                                brindarle un mejor servicio y dedicar ese tiempo solo a ti.
                            </p>

                        </Grid>

                        <Grid item xs={12} md={12}>

                            {/* <Grid container spacing={0}>
                                <Grid item xs={0} md={4}>

                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <a target="_blank" rel="noreferrer" href="https://www.google.com.mx/maps/place/Tatuajes+Chilos/@29.0854806,-110.9921096,18.5z/data=!4m5!3m4!1s0x86ce85cde38b1fc7:0x64d290ac12c0e474!8m2!3d29.0978086!4d-110.9456351">
                                        <div className="mapImg">

                                        </div>
                                    </a>

                                </Grid>
                            </Grid> */}

                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3486.6846786405486!2d-110.99337588490707!3d29.085461382241252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x64d290ac12c0e474!2sTatuajes%20Chilos!5e0!3m2!1ses-419!2smx!4v1631229654889!5m2!1ses-419!2smx"
                                width="100%"
                                height="350"
                                style={{ border: "0px" }}
                                allowfullscreen=""
                                title="Ubicacion"
                                loading="lazy">

                            </iframe>






                            {/* <MapContainer className="mapHeight" center={[29.085963302573685, -110.99108771548272]} zoom={16} scrollWheelZoom={false}>
                                <TileLayer
                                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <Marker position={[29.085963302573685, -110.99108771548272]}>
                                    <Popup>
                                        A pretty CSS3 popup. <br /> Easily customizable.
                                    </Popup>
                                </Marker>
                            </MapContainer> */}

                        </Grid>

                    </Grid>

                </div>
            </Styles>
        </>
    )
}

export default Ubicacion;