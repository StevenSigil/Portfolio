import React from "react";
import { Link } from "react-router-dom";
import { Container, Col } from "react-bootstrap";

import { ReactComponent as BackArrow } from "../../public/static/media/logos-icons/backArrow.svg";

import headImg05x from "../../public/static/media/SonataImgs/cardImg/cardImg@0.5x.png";
import headImg075x from "../../public/static/media/SonataImgs/cardImg/cardImg@0.75x.png";
import headImg1x from "../../public/static/media/SonataImgs/cardImg/cardImg@1x.png";

export default function SonataHeading({ handleImageClick }) {
  const imgSrcSet = `${headImg05x} 960w, ${headImg075x} 1440w, ${headImg1x} 1920w`;

  return (
    <div id="sonataTop" className="sHead">
      <Link to="/home">
        <div className="absoluteHomeArrow">
          <BackArrow />
        </div>
      </Link>

      <Container>
        <Col lg={5}>
          <h1 className="sLogo">SonataEvents</h1>
          <p>A Concept for an Exciting and Modern Landing Page</p>
          <a href="https://stevensigil.github.io/SonataEvents/" target="_blank">
            View Final Release
          </a>
        </Col>

        <Col lg={7}>
          <img
            srcSet={imgSrcSet}
            src={headImg05x}
            alt="Full screen height Everyday Zen image"
            width="615px"
            height="345px"
            onClick={() =>
              handleImageClick(
                headImg05x,
                imgSrcSet,
                "Full screen height Everyday Zen image",
                true
              )
            }
          />
        </Col>
      </Container>
    </div>
  );
}
