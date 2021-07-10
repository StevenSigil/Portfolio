import { Col, Row } from "react-bootstrap";

import { SimonApp, TinDogApp, DiceApp } from "./ProjectCards";

function JSCards() {
  return (
    <>
      <Row className="row3-inner-container">
        <Col md={2}>
          <div className="h3-p-title">
            <h3>JavaScript</h3>
            <h5>- (vanilla)</h5>
          </div>
          <h3>Html/CSS</h3>
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
    </>
  );
}

export default JSCards;
