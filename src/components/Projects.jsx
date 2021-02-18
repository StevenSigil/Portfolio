import { Container } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";

import { CryptographyApp, KivyApp, LifeApp } from "./ProjectCards";
import { MedTrackApp, TodoApp, KeeperApp } from "./ProjectCards";
import { SimonApp, TinDogApp, DiceApp } from "./ProjectCards";

import ProjectsHeading from "./ProjectsHeading";

// import JSCards from "./JSCards";
// import ReactCards from "./ReactCards";
// import PythonCards from "./PythonCards";

function Projects() {
  return (
    <>
      <Container fluid className="row3-main-container">
        
        <ProjectsHeading />

        <Row id="python-programming" className="row3-inner-container">
          <Col md={2}>
            <div className="ppf-top">
              <h3>Python</h3>
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

        <Row id="web-design" className="row3-inner-container">
          <Col md={2}>
            <div className="ppf-top">
              <h3>React & Django</h3>
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

        <Row className="row3-inner-container">
          <Col md={2}>
            {/* <div className="h3-p-title"> */}
            <div className="ppf-top">
              <h3>JavaScript/Html</h3>
            </div>
            {/* <h5>- (vanilla)</h5> */}
            {/* </div> */}
            {/* <h3></h3> */}
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

        {/* <PythonCards /> */}
        {/* <ReactCards /> */}
        {/* <JSCards /> */}
      </Container>
    </>
  );
}

export default Projects;
