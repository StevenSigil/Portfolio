import { Col, Row } from "react-bootstrap";

import { MedTrackApp, TodoApp, KeeperApp } from "./ProjectCards";

function ReactCards() {
  return (
    <>
      <Row id="web-design" className="row3-inner-container">
        <Col md={2}>
          <h3>React & Django</h3>
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
    </>
  );
}

export default ReactCards;
