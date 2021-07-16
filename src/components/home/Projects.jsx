import { Container } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";

import { CryptographyApp, KivyApp, LifeApp } from "./ProjectCards";
import {
  MedTrackApp,
  ReactMessenger,
  TodoApp,
  KeeperApp,
} from "./ProjectCards";
import { SimonApp, TinDogApp, DiceApp } from "./ProjectCards";

import ProjectsHeading from "./ProjectsHeading";
import UXCards from "./UXCards";

export default function Projects() {
  return (
    <>
      <Container fluid className="row3-main-container" id="projects-heading">
        <ProjectsHeading />

        <UXCards />

        <Row id="web-design" className="projectsSubsectionRow">
          <Col xl={2} lg={12}>
            <div className="subsectionHeading">
              <div>
                <h3>Full-stack web apps</h3>
              </div>
            </div>
          </Col>

          <Col xl={3} lg={5}>
            <MedTrackApp />
          </Col>
          <Col xl={3} lg={5}>
            <ReactMessenger />
          </Col>
          <Col xl={3} lg={5}>
            <TodoApp />
          </Col>

          {/* 2nd row */}
          <Col xl={3} lg={5}>
            <KeeperApp />
          </Col>
        </Row>

        <Row id="javascript" className="projectsSubsectionRow">
          <Col xl={2} lg={12}>
            <div className="subsectionHeading">
              <div>
                <h3>JavaScript - Html - CSS</h3>
              </div>
            </div>
          </Col>

          <Col xl={3} lg={5}>
            <SimonApp />
          </Col>
          <Col xl={3} lg={5}>
            <TinDogApp />
          </Col>
          <Col xl={3} lg={5}>
            <DiceApp />
          </Col>
        </Row>

        <Row id="python-programming" className="projectsSubsectionRow">
          <Col xl={2} lg={12}>
            <div className="subsectionHeading">
              <div>
                <h3>Misc. Python</h3>
              </div>
            </div>
          </Col>

          <Col xl={3} lg={5}>
            <LifeApp />
          </Col>

          <Col xl={3} lg={5}>
            <KivyApp />
          </Col>

          <Col xl={3} lg={5}>
            <CryptographyApp />
          </Col>
        </Row>
      </Container>
    </>
  );
}
