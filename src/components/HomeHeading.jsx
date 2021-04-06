import { Container, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function HomeHeading() {
  return (
    <>
      <Container fluid className="topRow-container">
        <h1>STEVEN ELLIOTT</h1>

        <div className="linkDiv">
          <Col sm={3} xs={6} className="">
            <a href="#my-summary">Who I am</a>
          </Col>
          <Col sm={3} xs={6} className="">
            <a href="#projects-heading">Projects</a>
          </Col>
          <Col sm={3} xs={6} className="">
            <a href="#certifications">Certifications</a>
          </Col>
          <Col sm={3} xs={6} className="">
            <Link to="/resume">Resume</Link>
          </Col>
        </div>
      </Container>
    </>
  );
}

export default HomeHeading;
