import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myPic from "./images/IMG_20220912_085234.jpg";
import "./styles/MainPage.css";

function MainPage() {
    return (
        <section id="home" className="home-section">
            <Container>
                <Row>
                    <Col>
                        <div className="container myPic-div">
                            <img className="myPic" src={myPic} alt="my pic" />
                        </div>
                    </Col>
                    <Col className="details">
                        <h1>
                            <span className="details-span span-one">Hi...</span>{" "}
                            This is{" "}
                            <span className="details-span span-two">
                                Shivam Maurya
                            </span>
                        </h1>
                        <h4>
                            I'm a{" "}
                            <span className="span-three">
                                react web developer
                            </span>
                        </h4>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default MainPage;
