import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import edZen05x from "../../public/static/media/edZen_imgs/Prototype2/allPages/allPages@0.5x.png";
import edZen075x from "../../public/static/media/edZen_imgs/Prototype2/allPages/allPages@0.75x.png";
import edZen1x from "../../public/static/media/edZen_imgs/Prototype2/allPages/allPages@1x.png";

import sonata05x from "../../public/static/media/SonataImgs/cardImg/cardImg@0.5x.png";
import sonata075x from "../../public/static/media/SonataImgs/cardImg/cardImg@0.75x.png";
import sonata1x from "../../public/static/media/SonataImgs/cardImg/cardImg@1x.png";

export default function UXCards() {
  return (
    <div>
      <Row id="UX" className="projectsSubsectionRow uxCards">
        <Col xl={2} lg={12}>
          <div className="subsectionHeading">
            <div>
              <h3>UX Designs and Case Studies</h3>
            </div>
          </div>
        </Col>

        <Col xl={5} lg={12}>
          <EdZenCard />
        </Col>

        <Col xl={5} lg={12} className="projCardSideways">
          <SonataCard />
        </Col>
      </Row>
    </div>
  );
}

function EdZenCard() {
  const edZenSrcSet = `${edZen05x} 960w, ${edZen075x} 1440w, ${edZen1x} 1920w`;

  return (
    <Card>
      <Link to={{ pathname: "/edZen2", hash: "#top" }}>
        <Card.Img
          srcSet={edZenSrcSet}
          src={edZen05x}
          alt="Everyday Zen UI/UX Project"
          width="100%"
          height="100%"
        />
      </Link>

      <Card.Body>
        <Card.Title>Everyday Zen</Card.Title>
        <Card.Subtitle className="text-muted">
          A Concept Project for a Blog Grown Beyond Wordpress
        </Card.Subtitle>

        <Card.Text>
          Everyday Zen is a online publication website providing a place for the
          exploration and education of alternative ways of living. My objective
          was to design a website that puts content at the forefront, draws
          attention to key growth sections, and is styled with a unique {"&"}{" "}
          consistent theme that solidifies brand identity.
        </Card.Text>

        <Card.Footer className="projectCard-footer">
          <Button
            type="link"
            href="/edZen2#top"
            variant="outline-dark"
            rel="noreferrer"
          >
            View Case Study
          </Button>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
}

function SonataCard() {
  const imgSrcSet = `${sonata05x} 960w, ${sonata075x} 1440w, ${sonata1x} 1920w`;

  return (
    <Card>
      <Link to={{ pathname: "/sonataEvents", hash: "#top" }}>
        <Card.Img
          srcSet={imgSrcSet}
          src={sonata05x}
          alt="Sonata Events UX/UI Project"
        />
      </Link>

      <Card.Body>
        <Card.Title>Sonata Events</Card.Title>
        <Card.Subtitle className="text-muted">
          UI Web Design turned Web Page
        </Card.Subtitle>

        <Card.Text>
          Everyday Zen is a online publication website providing a place for the
          exploration and education of alternative ways of living. My objective
          was to design a website that puts content at the forefront, draws
          attention to key growth sections, and is styled with a unique {"&"}{" "}
          consistent theme that solidifies brand identity.
        </Card.Text>

        <Card.Footer className="projectCard-footer">
          <Button
            type="link"
            href="/sonataEvents"
            variant="outline-dark"
            rel="noreferrer"
          >
            View Case Study
          </Button>

          <Button
            type="link"
            target="_blank"
            href="https://stevensigil.github.io/SonataEvents/"
            variant="outline-dark"
            rel="noreferrer"
          >
            Sonata Events
          </Button>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
}
