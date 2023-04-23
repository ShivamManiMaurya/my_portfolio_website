import React, { useState } from "react";
import { Navbar, Container, Nav, Button, Offcanvas } from "react-bootstrap";
import logo from "./images/shivam_logo_transparentBackground.png";
import "./styles/NavBar.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

function NavBar() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Navbar className="fixed-top" expand="lg" variant="dark">
            <Container className="magicpattern-navbar">
                <Navbar.Brand href="#home" className="home-container">
                    <a href="#home">
                        <img className="logo" src={logo} alt="navbar-logo" />
                    </a>
                </Navbar.Brand>
                <Navbar.Toggle
                    className="toggle-btn"
                    aria-controls="basic-navbar-nav"
                />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#skills">Skills</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#aboutme">About Me</Nav.Link>
                    </Nav>
                    <Nav className="connections">
                        <Nav className="social d-flex flex-row">
                            <Nav.Link
                                className="social-icon"
                                href="https://www.linkedin.com/in/shivammanimaurya/"
                            >
                                <LinkedInIcon />
                            </Nav.Link>
                            <Nav.Link
                                className="social-icon"
                                href="https://github.com/ShivamManiMaurya"
                            >
                                <GitHubIcon />
                            </Nav.Link>
                            <Nav.Link
                                className="social-icon"
                                href="https://www.instagram.com/"
                            >
                                <InstagramIcon />
                            </Nav.Link>
                        </Nav>

                        <Nav.Link className="lets-connect-btn" href="#contact">
                            <Button
                                variant="outline-light"
                                onClick={handleShow}
                            >
                                Let's Connect
                            </Button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>

            <Offcanvas show={show} onHide={handleClose} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        <h2>You Can Connect with me on: </h2>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <h4>
                        My Email - <span>shivammaurya097@gmail.com</span>
                    </h4>
                </Offcanvas.Body>
            </Offcanvas>
        </Navbar>
    );
}

export default NavBar;
