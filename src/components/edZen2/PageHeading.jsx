import React from "react";
import { Link } from "react-router-dom";
import { Container, Col } from "react-bootstrap";

import { ReactComponent as BackArrow } from "../../public/static/media/logos-icons/backArrow.svg";
import { ReactComponent as EdZenLogo } from "../../public/static/media/edZen_imgs/edZenLogoWhite.svg";

import exProtoHome05x from "../../public/static/media/edZen_imgs/Prototype2/fullVhHome/100vhHome@0.5x.png";
import exProtoHome075x from "../../public/static/media/edZen_imgs/Prototype2/fullVhHome/100vhHome@0.75x.png";

export default function PageHeading({ handleImageClick }) {
  const imgSrcSet = `${exProtoHome05x} 960w, ${exProtoHome075x} 1440w`;

  return (
    <div className="eHead4">
      <Link to="/home">
        <div className="absoluteHomeArrow">
          <BackArrow />
        </div>
      </Link>

      <Container>
        <Col lg={5}>
          <EdZenLogo />
          <p>A concept project for a blog grown beyond Wordpress</p>
        </Col>

        <Col lg={7}>
          <img
            srcSet={imgSrcSet}
            src={exProtoHome05x}
            alt="Full screen height Everyday Zen image"
            width="615px"
            height="345px"
            onClick={() =>
              handleImageClick(
                exProtoHome05x,
                imgSrcSet,
                "Full screen height Everyday Zen image"
              )
            }
          />
        </Col>
      </Container>
    </div>
  );
}
