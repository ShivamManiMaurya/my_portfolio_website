import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import html from "./images/kisspng-logo-responsive-web-design-html5-web-page-5ba31dfac1a6f5.2517253915374166987932.jpg";
import "./styles/Skills.css";

function Skills() {
    return (
        <section className="skills-section" id="skills">
            <Container>
                <Row>
                    <Col>
                        <h1>Skills heading</h1>
                    </Col>
                </Row>
                <Row className="">
                    <Col>
                        <div className="skills-html">
                            <div className="skills-html-scale"></div>
                            <img
                                className="skills-html-img"
                                src={html}
                                alt="html-logo"
                            />
                        </div>
                        <h1>Skills</h1>
                        <h1>Skills</h1>
                        <h1>Skills</h1>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Skills;
