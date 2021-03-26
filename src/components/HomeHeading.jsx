import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function HomeHeading() {
  return (
    <>
      <Container fluid className="topRow-container">
        <Row>
          <Col sm={8} xs={12} className="topRow-nameItem">
            <h1>STEVEN ELLIOTT</h1>
          </Col>

          <Col sm={4} xs={12} className="topRow-list">
            <p>
              <a href="#my-summary"> Who I am </a>
            </p>

            <p>
              <a href="#projects-heading"> What I do </a>
            </p>

            <p>
              <a href="#certifications">How I learn</a>
            </p>

            <p>
              <Link to="/resume">Public resume</Link>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HomeHeading;
