import React from "react";
import { Container, Col, Button } from "react-bootstrap";

import heroDemo03x from "../../public/static/media/SonataImgs/prototype/protoSec1/HeroSection@640w.mp4";
import heroDemo06x from "../../public/static/media/SonataImgs/prototype/protoSec1/HeroSection@1280w.mp4";

import specialsCard05x from "../../public/static/media/SonataImgs/prototype/protoSec2/SpecialsCard@0.5x.png";
import specialsCard075x from "../../public/static/media/SonataImgs/prototype/protoSec2/SpecialsCard@0.75x.png";
import specialsCard1x from "../../public/static/media/SonataImgs/prototype/protoSec2/SpecialsCard@1x.png";

import moreInfoForm05x from "../../public/static/media/SonataImgs/prototype/protoSec3/MoreInfoCard2@0.5x.png";
import moreInfoForm075x from "../../public/static/media/SonataImgs/prototype/protoSec3/MoreInfoCard2@0.75x.png";
import moreInfoForm1x from "../../public/static/media/SonataImgs/prototype/protoSec3/MoreInfoCard2@1x.png";

import finalPage025x from "../../public/static/media/SonataImgs/prototype/protoSec4/FinalPage2@0.25x.png";
import finalPage05x from "../../public/static/media/SonataImgs/prototype/protoSec4/FinalPage2@0.5x.png";
import finalPage075x from "../../public/static/media/SonataImgs/prototype/protoSec4/FinalPage2@0.75x.png";

export default function PrototypeSection({ handleImageClick }) {
  return (
    <>
      <ProtoSec1 />
      <ProtoSec2 handleImageClick={handleImageClick} />
      <ProtoSec3 handleImageClick={handleImageClick} />
      <ProtoSec4 handleImageClick={handleImageClick} />
    </>
  );
}

function ProtoSec1() {
  return (
    <Container className="prototypeSection1">
      <Col lg={12}>
        <h3>
          Using a "Z Layout Pattern" and a Moving Background Makes for an Eye
          Catching First Impression
        </h3>
      </Col>

      <Col lg={5} className="textContainer2">
        <p>
          A large, animated background was found and edited to serve as the
          "Hero" background Image.
        </p>
        <p>
          Then, attempting to follow the Z-Pattern layout, a translucent navbar
          was placed on top of the image, followed by the first Call-to-Action
          right in the middle of the image.
        </p>
        <p>
          Intra-page section links were finally placed under the animated
          background to finish the "Z" and guide the user.
        </p>
      </Col>

      <Col lg={7} className="videoContainer">
        <video playsInline autoPlay loop muted>
          <source
            srcSet={`${heroDemo03x} 640w, ${heroDemo06x} 1280w`}
            src={heroDemo03x}
            type="video/mp4"
          />
        </video>
      </Col>
    </Container>
  );
}

function ProtoSec2({ handleImageClick }) {
  const imgSrcSet = `${specialsCard05x} 634w, ${specialsCard075x} 951w, ${specialsCard1x} 1268w`;

  return (
    <Container className="prototypeSection2">
      <Col lg={5} className="textHead">
        <h3>
          Reusing the Pink Button's Style for an Entire Section Keeps the Theme
          Consistent, Bold, and Eye Catching
        </h3>
      </Col>

      <Col lg={6} className="textContainer3">
        <p>
          With the first impression finished, I decided any promotional offers
          should be prominently displayed next.
        </p>
        <p>
          Keeping with the theme, the pink button from the "Hero" image was
          turned into its own section displaying the Limited Special.
        </p>
        <p>
          The pinks being on top of the dark gray background kept the contrast
          high. Adding a subtle white box shadow with a 1px border made the area
          pop!
        </p>
      </Col>

      <div
        className="imgContainer2"
        onClick={() =>
          handleImageClick(
            specialsCard05x,
            imgSrcSet,
            "Special Offer Card",
            true,
            true
          )
        }
      >
        <img
          width="951"
          height="364"
          srcSet={imgSrcSet}
          src={specialsCard05x}
          alt="Special Offer Card"
        />
      </div>
    </Container>
  );
}

function ProtoSec3({ handleImageClick }) {
  const imgSrcSet = `${moreInfoForm05x} 727w, ${moreInfoForm075x} 1090w, ${moreInfoForm1x} 1453w`;

  return (
    <Container className="prototypeSection3">
      <Col lg={4} className="textContainer4">
        <h3>
          The Call-to-Action Forms were Made to be Non-Intimidating Via Easy to
          Fill Out Forms, Minimal Styling and Tempting Buttons & Images.
        </h3>
      </Col>
      <Col lg={8} className="imgContainer3">
        <img
          width="727"
          height="236"
          srcSet={imgSrcSet}
          src={moreInfoForm05x}
          alt="Request More Info (CTA) Form"
          onClick={() =>
            handleImageClick(
              moreInfoForm05x,
              imgSrcSet,
              "Request More Info (CTA) Form",
              true,
              true
            )
          }
        />
      </Col>
    </Container>
  );
}

function ProtoSec4({ handleImageClick }) {
  const imgSrcSet = `${finalPage025x} 480w, ${finalPage05x} 1020w, ${finalPage075x} 1530w`;

  return (
    <Container className="prototypeSection4">
      <Col lg={6} className="textContainer5">
        <h3>Final Full-Page Prototype</h3>

        <Button
          href="https://xd.adobe.com/view/77288260-790f-4201-8214-d1b91da77538-227b/?fullscreen"
          target="_blank"
        >
          View Interactive Prototype on XD
        </Button>
      </Col>

      <Col lg={6}>
        <img
          srcSet={imgSrcSet}
          src={finalPage025x}
          alt="SonataEvents Full Landing Page"
          onClick={() =>
            handleImageClick(
              finalPage025x,
              imgSrcSet,
              "SonataEvents Full Landing Page"
            )
          }
        />
      </Col>
    </Container>
  );
}
