import React from "react";
import { Card, Row, Col, Button, ButtonGroup } from "react-bootstrap";
import netflix from "./images/NetflixClone_mainPage.png";
import todo from "./images/to-do-list-apps.png";
import snake from "./images/Snake OG Image.png";
import "./styles/Projects.css";

function Projects() {
    const projects = [
        {
            key: "project-netflix-clone",
            image: netflix,
            title: "Netflix Clone",
            text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
            link: "https://github.com/ShivamManiMaurya/netflix-clone",
            liveSite: "https://netflix-clone-ece17.web.app/",
        },
        {
            key: "project-todo-list",
            image: todo,
            title: "Todo List",
            text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
            link: "#",
            liveSite: "#",
        },
        {
            key: "project-snake-game",
            image: snake,
            title: "Snake Game",
            text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
            link: "#",
            liveSite: "#",
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
                                <Card.Text>{projects[idx].text}</Card.Text>
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
