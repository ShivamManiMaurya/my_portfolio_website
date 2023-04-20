import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import logo from "./images/shivam_logo_transparentBackground.png";
import "./styles/NavBar.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

function NavBar() {
    return (
        <Navbar className="fixed-top" expand="lg" variant="dark">
            <Container className="magicpattern-navbar">
                <Navbar.Brand href="#home" className="home-container">
                    <a href="#home">
                        <img className="logo" src={logo} alt="navbar-logo" />
                    </a>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#skills">Skills</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#Education">Education</Nav.Link>
                    </Nav>
                    <Nav className="connections">
                        <Nav className="social">
                            <Nav.Link className="social-icon" href="#">
                                <LinkedInIcon />
                            </Nav.Link>
                            <Nav.Link className="social-icon" href="#">
                                <GitHubIcon />
                            </Nav.Link>
                            <Nav.Link className="social-icon" href="#">
                                <InstagramIcon />
                            </Nav.Link>
                        </Nav>

                        <Nav.Link href="#contact">
                            <Button variant="outline-light">
                                Let's Connect
                            </Button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
