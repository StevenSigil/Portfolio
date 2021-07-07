import React from "react";
import { Container, Col, Button } from "react-bootstrap";

import protoAll05x from "../../public/static/media/edZen_imgs/Prototype2/allPages/allPages@0.5x.png";
import protoAll075x from "../../public/static/media/edZen_imgs/Prototype2/allPages/allPages@0.75x.png";
import protoAll1x from "../../public/static/media/edZen_imgs/Prototype2/allPages/allPages@1x.png";

import { ReactComponent as ColorPallet } from "../../public/static/media/edZen_imgs/Prototype2/ColorPallet.svg";

import subscribeForm05x from "../../public/static/media/edZen_imgs/Prototype2/subForm/subscriptionSignup@0.5x.png";
import subscribeForm1x from "../../public/static/media/edZen_imgs/Prototype2/subForm/subscriptionSignup@1x.png";

import scrollDemo from "../../public/static/media/edZen_imgs/Prototype2/scrollGroupDemo.gif";

import imgGradientDemo05x from "../../public/static/media/edZen_imgs/Prototype2/imgGradientDemo@0.5x.png";
import imgGradientDemo1x from "../../public/static/media/edZen_imgs/Prototype2/imgGradientDemo@1x.png";

export default function PrototypeSection({ handleImageClick }) {
  return (
    <Container className="finalProto">
      <Heading imgClickFunc={handleImageClick} />
      <ColorsSection imgClickFunc={handleImageClick} />
      <EmailSection imgClickFunc={handleImageClick} />
      <ScrollGroupSec imgClickFunc={handleImageClick} />
      <ImgGradientsSec imgClickFunc={handleImageClick} />
    </Container>
  );
}

function Heading({ imgClickFunc }) {
  const imgSrcSet = `${protoAll05x} 961w, ${protoAll075x} 1440w, ${protoAll1x} 1921 w`;

  return (
    <div className="imgTextHeading">
      <Col lg={3} className="textButtonOuter">
        <h2 className="sectionTitle">Final Mockups</h2>
        <Button>View Interactive Prototype</Button>
      </Col>

      <Col lg={9} className="headImg">
        <img
          srcSet={imgSrcSet}
          src={protoAll05x}
          alt="Key Prototype Pages"
          onClick={() =>
            imgClickFunc(protoAll05x, imgSrcSet, "Key Prototype Pages")
          }
        />
      </Col>
    </div>
  );
}

function ColorsSection({ imgClickFunc }) {
  return (
    <div className="colorScheme">
      <Col lg={4} md={5} className="svgOuter">
        <ColorPallet />
      </Col>
      <Col lg={6} md={7} className="colorsTextArea">
        <h3>Color Scheme</h3>
        <p>
          To keep with earthy tones, a (mostly) monotone color scheme was
          decided on to provide consistency and simplicity; with a goal of
          aligning the brand as a whole with the color green.
        </p>
        <p>
          To further differentiate Everyday Zen with the competition, an
          off-white background was used for the body of all pages. This provides
          an interesting contrast with the greens and worked well with the
          darker red link text.
        </p>
      </Col>
    </div>
  );
}

function EmailSection({ imgClickFunc }) {
  const imgSrcSet = `${subscribeForm05x} 641w, ${subscribeForm1x} 1281w`;

  return (
    <div className="subscriptArea">
      <Col xl={5} lg={6} className="protoTextArea2">
        <h3>
          The "Join our Email Subscription" form was given extra attention
        </h3>
        <p>
          Most competitors either had a small area asking for an email address
          or an annoying overlay that disrupted the flow of the site.{" "}
        </p>
        <p>
          My approach was to give it a colored section with high contrast font
          and icons to make it unavoidable when browsing. Then adding it on the
          pages following the user flow almost guarantees it can't be missed.
        </p>
      </Col>
      <Col lg={6} className="subsImgContainer">
        <img
          srcset={imgSrcSet}
          src={subscribeForm05x}
          alt="Email Subscription Form"
          onClick={() =>
            imgClickFunc(subscribeForm05x, imgSrcSet, "Email Subscription Form")
          }
        />
      </Col>
    </div>
  );
}

function ScrollGroupSec() {
  return (
    <div className="scrollGroupsDemo">
      <Col lg={6}>
        <h3>
          Scroll groups were used to display lists of article previews and
          product images.
        </h3>
      </Col>
      <img src={scrollDemo} alt="Scroll Group Demo" />
    </div>
  );
}

function ImgGradientsSec({ imgClickFunc }) {
  const imgSrcSet = `${imgGradientDemo05x} 445w, ${imgGradientDemo1x} 890w`;

  return (
    <div className="imgGradients">
      <h3>Components Made with Universality and Reusability in Mind</h3>
      <Col lg={7}>
        <img
          srcSet={imgSrcSet}
          src={imgGradientDemo1x}
          alt="Gradients added to article images"
          onClick={() =>
            imgClickFunc(
              imgGradientDemo1x,
              imgSrcSet,
              "Gradients added to article images",
              true
            )
          }
        />
      </Col>

      <Col lg={4} className="protoTextArea1">
        <p>
          To provide a more reusable component, and keep spacing consistent, the
          author and title of an article were placed on top of the article
          image.
        </p>
        <p>
          Subtle gradients were then placed behind the text providing much
          needed contrast which keeps these elements prominent and easy to read.
        </p>
      </Col>
    </div>
  );
}
