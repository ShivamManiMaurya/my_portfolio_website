import React, { useState } from "react";
import { ButtonGroup, Button, Container, Row, Col } from "react-bootstrap";
import "./styles/AboutMe.css";

function AboutMe() {
    const [introFlag, setIntroFlag] = useState(true);
    const [expFlag, setExpFlag] = useState(false);
    const [eduFlag, setEduFlag] = useState(false);

    const handleIntroClick = () => {
        setIntroFlag(true);
        setExpFlag(false);
        setEduFlag(false);
    };

    const handleExpClick = () => {
        setIntroFlag(false);
        setExpFlag(true);
        setEduFlag(false);
    };

    const handleEduClick = () => {
        setIntroFlag(false);
        setExpFlag(false);
        setEduFlag(true);
    };

    return (
        <section className="aboutme-section" id="aboutme">
            <h1 className="aboutme-title">About Me</h1>
            <ButtonGroup size="lg" className="aboutme-btn-grp">
                <Button variant="warning" onClick={handleIntroClick}>
                    Introduction
                </Button>
                <Button variant="warning" onClick={handleExpClick}>
                    Experience
                </Button>
                <Button variant="warning" onClick={handleEduClick}>
                    Education
                </Button>
            </ButtonGroup>
            <Container>
                <Row>
                    <Col>
                        <div
                            className={
                                introFlag
                                    ? "aboutme-intro aboutme-content"
                                    : "aboutme-intro-hide"
                            }
                        >
                            <div className="aboutme-intro-div">
                                <h1>Introduction</h1>
                                <p className="aboutme-intro-details">
                                    I am a qualified reactJS developer with
                                    seven months of experience in front-end
                                    development and design and worked in an
                                    agile/scrum development environment. Strong
                                    creative and analytical skills. Team player
                                    with an eye for detail and always hungry to
                                    learn.
                                </p>
                            </div>
                        </div>
                        <div
                            className={
                                expFlag
                                    ? "aboutme-exp aboutme-content"
                                    : "aboutme-exp-hide"
                            }
                        >
                            <h1>Experience</h1>
                            <h4>
                                Worked at Accenture as a Application Development
                                Associate
                            </h4>
                            <h6>From 09/2021 to 03/2022</h6>
                            <div className="work-details">
                                <ul>
                                    <li>
                                        Worked with the Aon team in the Aon
                                        Arora project on the front-end
                                        development part. Developed code
                                        according to the business requirement.
                                        Developed high-quality web application
                                        with 4 interns and 2 senior developers.
                                    </li>
                                    <li>
                                        Built react components using HTML, CSS,
                                        and javascript. Delivered, analyzed, and
                                        resolved technical issues, and
                                        participated in the continuous
                                        enhancement of established development
                                        processes
                                    </li>
                                    <li>
                                        Wrote clean, maintainable, scalable, and
                                        well-tested code. Discovered and fixed
                                        programming bugs. Having hands-on
                                        experience in the functional programming
                                        aspects of reactJS, Knowledge Transfers,
                                        and Business Analysis.{" "}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div
                            className={
                                eduFlag
                                    ? "aboutme-edu aboutme-content"
                                    : "aboutme-edu-hide"
                            }
                        >
                            <h1 className="aboutme-heading">Education</h1>
                            <h2 className="aboutme-edu-details">
                                Bachelor of technoLOGY,Computer science with
                                honours
                            </h2>
                            <h4>
                                At IMS Engineering college, Ghaziabad, U.P.,
                                India.
                            </h4>
                            <h6>From 2017 to 2021</h6>
                            <br />
                            <br />
                            <h2 className="aboutme-edu-details">
                                Intermediate
                            </h2>
                            <h4>At Kailashi Devi Inter College</h4>
                            <h6>From 2015 to 2017</h6>
                            <br />
                            <br />
                            <h1 className="aboutme-heading">Certification</h1>
                            <h2 className="aboutme-edu-details">
                                The Complete Web Development Bootcamp
                            </h2>
                            <h4>By Angela Yu from Udemy</h4>
                            <h6>2022/2023</h6>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default AboutMe;
