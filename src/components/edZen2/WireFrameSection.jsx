import React from "react";
import { Container, Col, Button } from "react-bootstrap";

import wireframe1 from "../../public/static/media/edZen_imgs/WireFrame2/wireframe1.svg";
import wireframe2 from "../../public/static/media/edZen_imgs/WireFrame2/wireframe2.svg";
import wireframe3 from "../../public/static/media/edZen_imgs/WireFrame2/wireframe3.gif";

import { wireFrameData } from "../../util-data/everydayZen/wireFrameData";

export default function WireFrameSection({ handleImageClick }) {
  return (
    <Container fluid className="wireframe">
      <WfHead />
      <Sec1 imgClickFunc={handleImageClick} />
      <Sec2 imgClickFunc={handleImageClick} />
      <Sec3 imgClickFunc={handleImageClick} />
      <WfScrollSec imgClickFunc={handleImageClick} />
    </Container>
  );
}

function WfHead() {
  return (
    <Container className="wfPre">
      <h2 className="sectionTitle">Wireframe</h2>

      <Col lg={6}>
        <h3>
          All Available Screen Space was Used to Draw Attention to Important
          Content Giving a More Unique and Minimalistic Experience
        </h3>
      </Col>

      <Col lg={5}>
        <p>
          As discussed, most competitors use only the middle area of a page to
          display content. This helps with converting layouts for smaller
          (mobile) screen sizes and aids in readability. My approach was to use
          all available screen space, like a desktop application, with larger,
          targeted text to draw attention to what matters most to both the
          business and the consumer.
        </p>
      </Col>
    </Container>
  );
}

function Sec1({ imgClickFunc }) {
  return (
    <Container className="wf1">
      <Col lg={4}>
        <p>
          The nav bar was moved from the usual top of the page to be fixed on
          the left of the screen and consume 100% of the height.{" "}
        </p>
        <p>
          This keeps the clean look by hiding navigation links behind a menu
          button and leaves the middle area to be optimally sized for
          readability.
        </p>
      </Col>

      <Col lg={7} className="wfImgOuter">
        <img
          src={wireframe1}
          alt="Wireframe - Basic Layout"
          onClick={() =>
            imgClickFunc(wireframe1, null, "Wireframe - Basic Layout")
          }
        />
      </Col>
    </Container>
  );
}

function Sec2({ imgClickFunc }) {
  return (
    <Container className="wf2">
      <Col lg={4}>
        <p>
          The body's of each page is broken up into {">"}50% vertical screen
          height sections, leaving enough room to see the next section is just a
          scroll away.
        </p>

        <p>
          Horizontal scroll groups were used to show large previews of articles
          on the home page and article section pages, as well as product groups.
          This is to give a more unique, "modern" experience.
        </p>
      </Col>

      <Col lg={7} className="wfImgOuter">
        <img
          src={wireframe2}
          alt="Wireframe - 100% Height Layout"
          onClick={() =>
            imgClickFunc(wireframe2, null, "Wireframe - 100% Height Layout")
          }
        />
      </Col>
    </Container>
  );
}

function Sec3({ imgClickFunc }) {
  return (
    <Container className="wf3">
      <Col lg={4}>
        <p>
          As the pages grew in length, it became obvious that the{" "}
          <strong>
            large gaps between page sections made intra-page navigation an issue
          </strong>
          ; as it took much effort to scroll to any single section.
        </p>
        <p>
          To fix this, section headings were placed on the right side of each
          page. Then anchor links to these headings were added in the left-side
          navigation bar for intra-page navigation.
        </p>
        <p>
          This removed unnecessary headings in the body and allows for section
          navigation via click instead of scroll if preferred.
        </p>
      </Col>

      <Col lg={7} className="wfImgOuter">
        <img
          src={wireframe3}
          alt="Wireframe - 100% Height Layout"
          onClick={() =>
            imgClickFunc(wireframe3, null, "Wireframe - 100% Height Layout")
          }
        />
      </Col>
    </Container>
  );
}

function WfScrollSec({ imgClickFunc }) {
  function ScrollItem({ element }) {
    return (
      <div>
        <h4>{element.heading}</h4>
        <img src={element.img} alt={element.alt} />
      </div>
    );
  }

  return (
    <Container className="wfScrollOuter">
      <h3>Key Wireframe Pages</h3>
      <Button variant="outline-light">View on XD</Button>

      <div className="wfScrollInner">
        <div className="wireframeScroll">
          {wireFrameData.map((el, index) => {
            return <ScrollItem key={index} element={el} />;
          })}
        </div>
      </div>
    </Container>
  );
}
