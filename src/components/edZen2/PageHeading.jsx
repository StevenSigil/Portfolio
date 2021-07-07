import React from "react";
import { Container, Col } from "react-bootstrap";

import { ReactComponent as EdZenLogo } from "../../public/static/media/edZen_imgs/edZenLogo.svg";
import exProtoHome05x from "../../public/static/media/edZen_imgs/Prototype2/100vhHome@0.5x.png";

export default function PageHeading() {
  return (
    <div className="eHead4">
      <Container>
        <Col lg={5}>
          <EdZenLogo />
          <p>A concept project for a blog grown beyond Wordpress</p>
        </Col>
        <Col lg={7}>
          <img src={exProtoHome05x} alt="t" />
        </Col>
      </Container>
    </div>
  );
}
