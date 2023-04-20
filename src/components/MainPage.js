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
                        <h1>Hi This is Shivam Maurya</h1>
                        <h4>I'm a react web developer</h4>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default MainPage;
