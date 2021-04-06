import { Container } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";

import { CryptographyApp, KivyApp, LifeApp } from "./ProjectCards";
import { MedTrackApp, TodoApp, KeeperApp } from "./ProjectCards";
import { SimonApp, TinDogApp, DiceApp } from "./ProjectCards";

import ProjectsHeading from "./ProjectsHeading";

function Projects() {
  return (
    <>
      <Container fluid className="row3-main-container" id="projects-heading">
        <ProjectsHeading />

        <Row id="web-design" className="projectsSubsectionRow">
          <Col md={2}>
            <div className="subsectionHeading coloredBorderDiv">
              <h3>Full-stack web applications</h3>
            </div>
          </Col>
          <Col md={3}>
            <MedTrackApp />
          </Col>
          <Col md={3}>
            <TodoApp />
          </Col>
          <Col md={3}>
            <KeeperApp />
          </Col>
        </Row>

        <Row id="javascript" className="projectsSubsectionRow">
          <Col md={2}>
            <div className="subsectionHeading coloredBorderDiv">
              <h3>JavaScript - Html - CSS</h3>
            </div>
          </Col>

          <Col md={3}>
            <SimonApp />
          </Col>
          <Col md={3}>
            <TinDogApp />
          </Col>
          <Col md={3}>
            <DiceApp />
          </Col>
        </Row>

        <Row id="python-programming" className="projectsSubsectionRow">
          <Col md={2}>
            <div className="subsectionHeading coloredBorderDiv">
              <h3>Misc. Python</h3>
            </div>
          </Col>

          <Col md={3}>
            <LifeApp />
          </Col>

          <Col md={3}>
            <KivyApp />
          </Col>

          <Col md={3}>
            <CryptographyApp />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Projects;
