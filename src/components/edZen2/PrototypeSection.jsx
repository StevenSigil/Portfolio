import React from "react";
import { Container, Col, Button } from "react-bootstrap";

import protoAll05x from "../../public/static/media/edZen_imgs/Prototype2/allPages@0.5x.png";

import { ReactComponent as ColorPallet } from "../../public/static/media/edZen_imgs/Prototype2/ColorPallet.svg";

import subscribeForm05x from "../../public/static/media/edZen_imgs/Prototype2/subscriptionSignup@0.5x.png";

import scrollDemo from "../../public/static/media/edZen_imgs/Prototype2/scrollGroupDemo.gif";

import imgGradientDemo1x from "../../public/static/media/edZen_imgs/Prototype2/imgGradientDemo@1x.png";

export default function PrototypeSection() {
  return (
    <Container className="finalProto">
      <Heading />
      <ColorsSection />
      <EmailSection />
      <ScrollGroupSec />
      <ArticlesSection />
    </Container>
  );
}

function Heading() {
  return (
    <div className="imgTextHeading">
      <Col lg={3}>
        <h2 className="sectionTitle">Final Mockups</h2>
        <Button>View Interactive Prototype</Button>
      </Col>

      <Col lg={9}>
        <img src={protoAll05x} alt="t" />
      </Col>
    </div>
  );
}

function ColorsSection() {
  return (
    <div className="colorScheme">
      <Col lg={5}>
        <ColorPallet />
      </Col>
      <Col lg={7}>
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

function EmailSection() {
  return (
    <div className="subscriptArea">
      <Col lg={5} className="protoTextArea2">
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
        <img src={subscribeForm05x} alt="Email Subscription Form" />
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

function ArticlesSection() {
  return (
    <div className="imgGradients">
      <Col lg={7}>
        <img src={imgGradientDemo1x} alt="Gradients added to article images" />
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
