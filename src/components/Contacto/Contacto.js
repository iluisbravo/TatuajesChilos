import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/Mail';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Link } from '@material-ui/core';
import styled from 'styled-components';

const Styles = styled.div`

    @font-face {
        font-family: 'Berkahi Blackletter';
        src: url('/font/BerkahiBlackletter/.Berkahi Blackletter.otf'),
            url('/font/BerkahiBlackletter/.Berkahi Blackletter.ttf');
        font-weight: normal;
        font-style: normal;
    }
   
    .chilos{
        font-family: "Berkahi Blackletter";
        margin-top: auto;
        font-size: 150px;
        padding-top: 15px;
        padding-right: 0px;
        color: #E4CBB9;
    }

    .height100{         
        /* height: 100vh; */
        width: 100%;
        object-fit: cover;
    }

    .fontTittle{
        font-size: 150px;
    }

    .divText{
        height: 200px;
        witdth: 500px;
    }
    .iconoProp{
        background-color: #000000;

    }
    .marginCard{
        margin-left: 200px;
    }
    .MuiTypography-root{
        font-family: "Caviar Dreams";
    }
    .MuiPaper-elevation1{
        box-shadow:none
    }
    .divSeparator{
        padding-top: 10px;
        padding-bottom: 10px;
        margin-top:2px;
        margin-bottom:2px;
    }

    a{
        color: black
    }
`;


const Contacto = () => {

    return (
        <>
            <Styles>
                <div id="Contacto">
                    <div class="divSeparator bg-dark"></div>
                    <div class="bg-dark divText">
                        <h1 class="text-center chilos">chilos</h1>
                    </div>
                    <div class="divSeparator bg-dark"></div>

                    {/* <Card className="body">
                        <CardHeader
                            avatar={
                                <Avatar aria-label="recipe" >
                                    <InstagramIcon />
                                </Avatar>
                            }
                            titleTypographyProps={{ variant: 'h6' }}
                            title="Instagram"
                            subheaderTypographyProps={{ variant: 'h6' }}
                            subheader={<Link href={"https://www.instagram.com/cactusboytattoo"} target="_blank">@cactusboytattoo</Link>}
                        />
                    </Card>
                    <Card>
                        <CardHeader
                            avatar={
                                <Avatar aria-label="recipe" >
                                    <MailOutlineIcon />
                                </Avatar>
                            }
                            titleTypographyProps={{ variant: 'h6' }}
                            title="Email"
                            subheaderTypographyProps={{ variant: 'h6' }}
                            subheader={<Link href={"mailto:info@tatuajeschilos.com"}>info@tatuajeschilos.com</Link>}
                        />
                    </Card> */}
                    <Grid container>
                        <Grid item xs={6} md={6}>
                            <div className="p-5 text-center fs-1" >
                                <a href="mailto:info@tatuajeschilos.com">
                                    <MailOutlineIcon style={{ fontSize: "54px" }} />
                                </a>
                            </div>
                        </Grid>
                        <Grid item xs={6} md={6}>
                            <div className="p-5 text-center fs-1">
                                <a href="https://www.instagram.com/tatuajeschiloshmo">
                                    <InstagramIcon style={{ fontSize: "54px" }} />
                                </a>

                            </div>
                        </Grid>
                    </Grid>

                </div>
            </Styles>
        </>
    )
}

export default Contacto;