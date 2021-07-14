import React from "react";
import { Container, Col, Button } from "react-bootstrap";

import { ReactComponent as LinkIcon } from "../../public/static/media/logos-icons/squareLink.svg";

import xdScreenshot05x from "../../public/static/media/SonataImgs/coding/xdExample/xdCodingExample@0.5x.png";
import xdScreenshot1x from "../../public/static/media/SonataImgs/coding/xdExample/xdCodingExample@1x.png";

import sonataImgAssets025x from "../../public/static/media/SonataImgs/coding/imgAssets/sonataImgAssets@0.25x.png";
import sonataImgAssets05x from "../../public/static/media/SonataImgs/coding/imgAssets/sonataImgAssets@0.5x.png";
import sonataImgAssets1x from "../../public/static/media/SonataImgs/coding/imgAssets/sonataImgAssets@1x.png";

import codeExample2_05x from "../../public/static/media/SonataImgs/coding/codeExample/codeExamp2@0.5x.png";
import codeExample2_075x from "../../public/static/media/SonataImgs/coding/codeExample/codeExamp2@0.75x.png";
import codeExample2_1x from "../../public/static/media/SonataImgs/coding/codeExample/codeExamp2@1x.png";

export default function CodingSection({ handleImageClick }) {
  return (
    <>
      <CodingIntro handleImageClick={handleImageClick} />
      <CodingSec2 handleImageClick={handleImageClick} />
      <CodingSec3 handleImageClick={handleImageClick} />
    </>
  );
}

function CodingIntro({ handleImageClick }) {
  const imgSrcSet = `${xdScreenshot05x} 720w, ${xdScreenshot1x} 1440w`;

  return (
    <Container className="codingSec1">
      <div>
        <Col lg={6}>
          <h3>
            The Main Goal of this Project is to See How Quickly an Adobe XD
            Project can be Converted to Code
          </h3>
        </Col>
      </div>

      <Col lg={4}>
        <p>
          For those that are not familiar with Adobe XD's workflow (when it
          comes to converting design to code), below is a screenshot of the
          interface.
        </p>
      </Col>
      <Col lg={4}>
        <p>
          Notice the project (that was made with XD) in the main area of the
          screen. Then any element you click on (in the project) displays the
          properties of that element in the right side panel.
        </p>
      </Col>
      <Col lg={4}>
        <p>
          This is very convenient for front end developers to quickly get the
          css properties of the designed elements, preventing guess work and
          delivering a consistent quality product.
        </p>
      </Col>

      <Col lg={12}>
        <img
          srcSet={imgSrcSet}
          src={xdScreenshot05x}
          alt="XD coding review screenshot"
          onClick={() =>
            handleImageClick(
              xdScreenshot05x,
              imgSrcSet,
              "XD coding review screenshot",
              true,
              true
            )
          }
        />
      </Col>
      <Button
        href="https://xd.adobe.com/view/4964b488-e4e1-4a31-a7a9-7f74e16e77d4-1c37/"
        target="_blank"
      >
        View Developer Version on XD
      </Button>
    </Container>
  );
}

function CodingSec2({ handleImageClick }) {
  const imgSrcSet = `${sonataImgAssets025x} 509w, ${sonataImgAssets05x} 1018w, ${sonataImgAssets1x} 2035w`;

  return (
    <Container className="codingSec2">
      <Col lg={5}>
        <h3>
          Another Nice Feature XD Offers is Exporting Image Assets with Proper
          Ratios and Multiple Sizing Based on Your Design
        </h3>
      </Col>

      <Col lg={5}>
        <p>
          Because this webpage uses many images, before starting development,
          all image assets were gathered for later use. Since these images are
          pre-sized, positioning and sizing in css was much easier.
        </p>
      </Col>

      <Col lg={12} className="imageContainer4">
        <img
          srcSet={imgSrcSet}
          src={sonataImgAssets025x}
          alt="SonataEvents all image assets"
          onClick={() =>
            handleImageClick(
              sonataImgAssets025x,
              imgSrcSet,
              "SonataEvents all image assets",
              true,
              true
            )
          }
        />
      </Col>
    </Container>
  );
}

function CodingSec3() {
  const imgSrcSet = `${codeExample2_05x} 364w, ${codeExample2_075x} 545w, ${codeExample2_1x} 727w`;

  return (
    <Container className="codingSec3">
      <Col lg={4} className="textContainer5">
        <h3>Finally, The HTML Was Written and Styled with SASS!</h3>

        <Button
          href="https://github.com/StevenSigil/SonataEvents"
          target="_blank"
        >
          View Code on GitHub
        </Button>
        <Button
          href="https://stevensigil.github.io/SonataEvents/"
          target="_blank"
        >
          View Completed Project
        </Button>
      </Col>

      <Col lg={6} className="imgContainer5">
        <img
          srcSet={imgSrcSet}
          src={codeExample2_05x}
          alt="Sonata example html code"
        />
        <span className="gradientShadow1"></span>
        <span className="gradientShadow2"></span>
        <a
          href="https://github.com/StevenSigil/SonataEvents/tree/7fa518ef78cb5be5f66e11f574fb29c64770fdf1"
          target="_blank"
          className="hoverOverlay"
        >
          <h2>
            View on GitHub <LinkIcon />
          </h2>
        </a>
      </Col>
    </Container>
  );
}
