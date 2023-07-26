import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-scroll';
import Settings from '../../providers/settings';
import Contact from '../../providers/contact';
import styled from 'styled-components';

const Styles = styled.div`
    .logoBrand{ 
        /* margin: 5px; */
        height: 50px !important;
    }

    .bgOrange{
        background-color: #CE7344 !important;
        color: #FFF !important;
    }

    .navbar-light .navbar-nav .nav-link {
        color: #FFF !important;
    }
    .menu-right{
        text-align: right;
    }
    a{
        font-size: large;
    }

    .navbar-light .navbar-toggler{
        filter: brightness(0) invert(1);
        border: none;
    }
`;

const Appbar = () => {
    let Logo = "/assets/tc-logo.png";
    // const ContactNew = async () =>{
    //     const data = {
    //         firstname:'Panfilo', 
    //         lastname:'Rosas', 
    //         phone:'6621234862', 
    //         email:'panfilo@gmail.com', 
    //         confirmacion_de_edad: true
    //     };
    //     const result = await Contact.New(data);
    //     console.log(result);
    // }
    return (
        <>
            <Styles>
                {/* <Navbar className="bgOrange" expand="lg">

                <Navbar.Brand href="#home">
                    <img alt="logo.png" src={Logo} className="logoBrand" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link href="#home">Cotizar</Nav.Link>
                        <Nav.Link href="#link">Ubicación</Nav.Link>
                        <Nav.Link href="#link">Instagram</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Navbar> */}
                {/* <button onClick={ContactNew}>PROBAR ESTO</button> */}
                <Navbar collapseOnSelect className="bgOrange" expand="lg" fixed="top">
                    <Container>
                        <Navbar.Brand href="#home">
                            <Link to="Home" smooth={true} duration={100} offset={-75}>
                                <img alt="logo.png" src={Logo} className="logoBrand" />
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Link to="Cotizar" smooth={true} duration={100} offset={-75}><Nav.Link href="#">Cotizar</Nav.Link></Link>
                                <Link to="Ubicacion" smooth={true} duration={100} offset={-75}><Nav.Link href="#">Ubicación</Nav.Link></Link>
                                <Link to="Instagram" smooth={true} duration={100} offset={-75}><Nav.Link href="#">Instagram</Nav.Link></Link>
                                <Link to="Contacto" smooth={true} duration={100} ><Nav.Link href="#">Contacto</Nav.Link></Link>
                                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Cotizar</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Ubicación</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Instagram</NavDropdown.Item>                                
                            </NavDropdown> */}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>



            </Styles>
        </>
    );
}

export default Appbar;