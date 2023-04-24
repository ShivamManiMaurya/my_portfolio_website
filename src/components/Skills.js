import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import html from "./images/htmlnew.png";
import css from "./images/cssnewnew.png";
import js from "./images/jsnewtransparent.png";
import react from "./images/reactjs.png";
import bootstrap from "./images/bootstrap-icon-png-28.jpg";
import "./styles/Skills.css";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";

function Skills() {
    const [htmlflag, setHtmlFlag] = useState(false);
    const [cssFlag, setCssFlag] = useState(false);
    const [jsFlag, setJsFlag] = useState(false);
    const [reactFlag, setReactFlag] = useState(false);
    const [bootFlag, setBootFlag] = useState(false);
    const [allFlag, setAllFlag] = useState(false);

    return (
        <section className="skills-section" id="skills">
            <Container>
                <Row>
                    <Col>
                        <h1
                            className="skills-heading"
                            onMouseEnter={() => setAllFlag(true)}
                            onMouseLeave={() => setAllFlag(false)}
                        >
                            Skills heading
                        </h1>
                    </Col>
                </Row>
                <Row className="">
                    <Col>
                        <div className="all-skills">
                            <div className="skills-html">
                                <div
                                    className={
                                        htmlflag || allFlag
                                            ? "showing show-html"
                                            : "hide"
                                    }
                                >
                                    <h3>
                                        <StarIcon></StarIcon>
                                        <StarIcon></StarIcon>
                                        <StarIcon></StarIcon>
                                        <StarIcon />
                                    </h3>
                                </div>
                                <img
                                    onMouseEnter={() => setHtmlFlag(true)}
                                    onMouseLeave={() => setHtmlFlag(false)}
                                    className="skills-html-img skills-img"
                                    src={html}
                                    alt="html-logo"
                                />
                            </div>
                            <div className="skills-css">
                                <div
                                    className={
                                        cssFlag || allFlag
                                            ? "showing show-css"
                                            : "hide"
                                    }
                                >
                                    <h3>
                                        <StarIcon />
                                        <StarIcon />
                                        <StarIcon />
                                    </h3>
                                </div>{" "}
                                <img
                                    onMouseEnter={() => setCssFlag(true)}
                                    onMouseLeave={() => setCssFlag(false)}
                                    src={css}
                                    alt="css-logo"
                                    className="skills-css-img skills-img"
                                />
                            </div>
                            <div className="skills-js">
                                <div
                                    className={
                                        jsFlag || allFlag
                                            ? "showing show-js"
                                            : "hide"
                                    }
                                >
                                    <h3>
                                        <StarIcon></StarIcon>
                                        <StarIcon></StarIcon>
                                        <StarIcon></StarIcon>
                                        <StarHalfIcon />
                                    </h3>
                                </div>{" "}
                                <img
                                    onMouseEnter={() => setJsFlag(true)}
                                    onMouseLeave={() => setJsFlag(false)}
                                    src={js}
                                    alt="js-logo"
                                    className="skills-js-img skills-img"
                                />
                            </div>
                            <div className="skills-react">
                                <div
                                    className={
                                        reactFlag || allFlag
                                            ? "showing show-react"
                                            : "hide"
                                    }
                                >
                                    <h3>
                                        <StarIcon></StarIcon>
                                        <StarIcon></StarIcon>
                                        <StarIcon />
                                    </h3>
                                </div>{" "}
                                <img
                                    onMouseEnter={() => setReactFlag(true)}
                                    onMouseLeave={() => setReactFlag(false)}
                                    src={react}
                                    alt="react-logo"
                                    className="skills-react-img skills-img"
                                />
                            </div>
                            <div className="skills-bootstrap">
                                <div
                                    className={
                                        bootFlag || allFlag
                                            ? "showing show-bootstrap"
                                            : "hide"
                                    }
                                >
                                    <h3>
                                        <StarIcon />
                                        <StarIcon />
                                        <StarHalfIcon />
                                    </h3>
                                </div>{" "}
                                <img
                                    onMouseEnter={() => setBootFlag(true)}
                                    onMouseLeave={() => setBootFlag(false)}
                                    src={bootstrap}
                                    alt="bootstrap-logo"
                                    className="skills-bootstrap-img skills-img"
                                />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Skills;
