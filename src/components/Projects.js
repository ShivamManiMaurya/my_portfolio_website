import React from "react";
import { Card, Row, Col, Button, ButtonGroup } from "react-bootstrap";
import netflix from "./images/NetflixClone_mainPage.png";
import keeper from "./images/KeeperNotes_main.png";
import snake from "./images/snake-gamenew.png";
import "./styles/Projects.css";

function Projects() {
    const projects = [
        {
            key: "project-netflix-clone",
            image: netflix,
            title: "Netflix Clone",
            text: "This is a React project that uses Firebase for real-time database storage. The user can interact with the movie cards and play their trailer in this project. The movies that are shown are constantly changing with time.",
            link: "https://github.com/ShivamManiMaurya/netflix-clone",
            liveSite: "https://netflix-clone-ece17.web.app/",
        },
        {
            key: "keeper-app",
            image: keeper,
            title: "Keeper App",
            text: "This is a React project its a simple app for adding notes. In this, you can add or delete the notes with animation and other stuff.",
            link: "https://github.com/ShivamManiMaurya/Keeper_App",
            liveSite: "https://shivammanimaurya.github.io/Keeper_App/",
        },
        {
            key: "project-snake-game",
            image: snake,
            title: "Snake Game",
            text: "In this game, the player can move and eat the food and try to not bump in the walls and don't eat itself.",
            link: "https://github.com/ShivamManiMaurya/Snake_Game",
            liveSite: "https://shivammanimaurya.github.io/Snake_Game/",
        },
    ];

    return (
        <section className="project-section" id="projects">
            <h1 className="project-heading">Projects</h1>
            <Row xs={1} md={3} className="g-5 ms-5 me-5">
                {Array.from({ length: 3 }).map((_, idx) => (
                    <Col>
                        <Card>
                            <Card.Img
                                variant="top"
                                src={projects[idx].image}
                                alt="project-image"
                                key={projects[idx].key}
                            />
                            <Card.Body>
                                <Card.Title>{projects[idx].title}</Card.Title>
                                <Card.Text>
                                    {`${projects[idx].text.slice(0, 150)}...`}
                                </Card.Text>
                            </Card.Body>
                            <ButtonGroup className="btnGrp">
                                <a href={projects[idx].link}>
                                    <Button variant="outline-dark">
                                        GitHub
                                    </Button>
                                </a>
                                <a href={projects[idx].liveSite}>
                                    <Button variant="outline-info">
                                        Live Site
                                    </Button>
                                </a>
                            </ButtonGroup>
                        </Card>
                    </Col>
                ))}
            </Row>
        </section>
    );
}

export default Projects;
