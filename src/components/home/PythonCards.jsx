import { Col, Row } from "react-bootstrap";

import {
  CryptographyApp,
  ImageMatcher,
  KivyApp,
  LifeApp,
} from "./ProjectCards";

export default function PythonCards() {
  return (
    <>
      <Row id="python-programming" className="row3-inner-container">
        <Col md={2}>
          <h3>Python</h3>
        </Col>

        <Col md={3}>
          <ImageMatcher />
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
    </>
  );
}
