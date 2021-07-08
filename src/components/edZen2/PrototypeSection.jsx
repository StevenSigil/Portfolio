import React from "react";
import { Container, Col, Button } from "react-bootstrap";

import protoAll05x from "../../public/static/media/edZen_imgs/Prototype2/allPages/allPages@0.5x.png";
import protoAll075x from "../../public/static/media/edZen_imgs/Prototype2/allPages/allPages@0.75x.png";
import protoAll1x from "../../public/static/media/edZen_imgs/Prototype2/allPages/allPages@1x.png";

import { prototypeData } from "../../util-data/everydayZen/prototypeData";

import { ReactComponent as ColorPallet } from "../../public/static/media/edZen_imgs/Prototype2/ColorPallet.svg";

import subscribeForm05x from "../../public/static/media/edZen_imgs/Prototype2/subForm/subscriptionSignup@0.5x.png";
import subscribeForm1x from "../../public/static/media/edZen_imgs/Prototype2/subForm/subscriptionSignup@1x.png";

import scrollDemo from "../../public/static/media/edZen_imgs/Prototype2/scrollGroupDemo.gif";

import imgGradientDemo05x from "../../public/static/media/edZen_imgs/Prototype2/imgGradientDemo/imgGradientDemo@0.5x.png";
import imgGradientDemo1x from "../../public/static/media/edZen_imgs/Prototype2/imgGradientDemo/imgGradientDemo@1x.png";

export default function PrototypeSection({ handleImageClick }) {
  return (
    <Container className="finalProto">
      <Heading imgClickFunc={handleImageClick} />
      <ColorsSection imgClickFunc={handleImageClick} />
      <EmailSection imgClickFunc={handleImageClick} />
      <ScrollGroupSec imgClickFunc={handleImageClick} />
      <ImgGradientsSec imgClickFunc={handleImageClick} />
      <ProtoScrollSec imgClickFunc={handleImageClick} />
    </Container>
  );
}

function Heading({ imgClickFunc }) {
  const imgSrcSet = `${protoAll05x} 961w, ${protoAll075x} 1440w, ${protoAll1x} 1921w`;

  return (
    <div className="imgTextHeading">
      <Col lg={3} className="textButtonOuter">
        <h2 className="">Final Mockups</h2>

        <Button href="https://xd.adobe.com/view/d4155688-0edc-460a-9a10-0f1ae6d83d83-8146/?fullscreen">
          View Prototype on XD
        </Button>
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
          srcSet={imgSrcSet}
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
      <div className="outer">
        <Col lg={7} md={12} className="col1">
          <h3>
            Scroll groups were used to display lists of article previews and
            product images.
          </h3>
        </Col>
        <Col sm={12} className="col2">
          <img src={scrollDemo} alt="Scroll Group Demo" />
        </Col>
      </div>
    </div>
  );
}

function ImgGradientsSec({ imgClickFunc }) {
  const imgSrcSet = `${imgGradientDemo05x} 445w, ${imgGradientDemo1x} 890w`;

  return (
    <div className="imgGradients">
      <Col xl={7} lg={12}>
        <h3>Components Made with Universality and Reusability in Mind</h3>
      </Col>
      <Col lg={7} className="imgGradImgOuter">
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

function ProtoScrollSec({ imgClickFunc }) {
  function ScrollItem({ element }) {
    return (
      <div>
        <h4>{element.heading}</h4>
        <img
          src={element.img}
          alt={element.alt}
          onClick={() => imgClickFunc(element.img, null, element.alt, false)}
        />
      </div>
    );
  }

  return (
    <>
      <Container className="protoScrollOuter">
        <div className="resultsHead">
          <h2>Results</h2>
          <Button href="https://xd.adobe.com/view/d4155688-0edc-460a-9a10-0f1ae6d83d83-8146/?fullscreen">
            View Prototype on XD
          </Button>
        </div>

        <h3>Key Pages</h3>

        <div className="ScrollInner">
          <div className="protoScroll">
            {prototypeData.map((el, index) => {
              return <ScrollItem key={index} element={el} />;
            })}
          </div>
        </div>
      </Container>
    </>
  );
}
