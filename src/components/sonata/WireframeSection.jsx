import React from "react";
import { Col, Container } from "react-bootstrap";

import wf2_05x from "../../public/static/media/SonataImgs/wireframe/sonataWireframe2@0.5x.png";
import wf2_075x from "../../public/static/media/SonataImgs/wireframe/sonataWireframe2@0.75x.png";
import wf2_1x from "../../public/static/media/SonataImgs/wireframe/sonataWireframe2@1x.png";

export default function WireframeSection({ handleImageClick }) {
  const imgSrcSet2 = `${wf2_05x} 960w, ${wf2_075x} 1440w, ${wf2_1x} 1920w`;

  return (
    <Container className="wireframeSection">
      <Col lg={4} className="textContainer1">
        <h3>
          Flashy In-Trend Elements were Used Along with Traditional Bullet Point
          Formatting
        </h3>
        <p>
          After doing competitive research, I found most of the competition
          SonataEvents has, are either exclusively wedding planning company's or
          are extremely flashy.
        </p>

        <p>
          For this project I decided to go with the flashy route, using similar
          elements from entertainment companies, like{" "}
          <a href="https://spotify.com/" target="_blank">
            Spotify
          </a>
          , and mix it with traditional, bullet point style, product landing
          pages.
        </p>

        <p>
          For example, deciding to use a large animated "Hero" background image
          to draw attention and build excitement. Using a prominently displayed
          call to action form. Focused spacing between section elements. Etc.
        </p>
      </Col>

      <Col lg={5} className="imgContainer1">
        <img
          srcSet={imgSrcSet2}
          src={wf2_05x}
          alt="SonataEvents wireframe - top sections"
          onClick={() =>
            handleImageClick(
              wf2_05x,
              imgSrcSet2,
              "SonataEvents wireframe - top sections"
            )
          }
        />
      </Col>
    </Container>
  );
}
