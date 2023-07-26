import React from 'react';
import { Carousel } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    #Home{
        background-color: rgba(0,0,0,0.6);
        z-index: 1;
    }

    .height img{         
        height: 93vh;
        width: 100%;
        object-fit: cover;
    }
`;


const CarouselComponent = () => {
    const foto1 = "/assets/1.jpg";
    const foto2 = "/assets/2.JPG";
    const foto3 = "/assets/3.jpg";
    const foto4 = "/assets/4.JPG";
    const foto5 = "/assets/5.jpg";
    const foto6 = "/assets/6.jpg";


    return (

        <Styles>
            <Carousel id="Home" className="height" fade>
                <Carousel.Item>
                    <img
                        className=""
                        src={foto1}
                        alt="First slide"
                    />
                    {/* <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className=""
                        src={foto2}
                        alt="Second slide"
                    />

                    {/* <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className=""
                        src={foto3}
                        alt="Third slide"
                    />

                    {/* <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className=""
                        src={foto4}
                        alt="4 slide"
                    />
                    {/* <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className=""
                        src={foto5}
                        alt="5 slide"
                    />
                    {/* <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className=""
                        src={foto6}
                        alt="6 slide"
                    />
                    {/* <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
            </Carousel>
        </Styles>
    );
}
export default CarouselComponent;