import React from "react";
import { Container, Col, Button } from "react-bootstrap";

export default function IntroSection() {
  return (
    <Container className="introSection">
      <Col lg={6}>
        <h3>Overview</h3>

        <p>
          Everyday Zen is a online publication website providing a place for the
          exploration and education of alternative ways of living.
        </p>
        <p>
          In addition to producing articles, they generate revenue through
          partner sponsorships, and the sale of branded or recommended
          merchandise from the articles via an Amazon.com storefront.
        </p>
      </Col>

      <Col lg={6}>
        <h3>Objective</h3>
        <p>
          Design a desktop sized website that puts
          <strong> content at the forefront</strong>,
          <strong> draws attention to key growth sections</strong>, and is
          styled with a<strong> unique {"&"} consistent theme </strong>
          that
          <strong> solidifies brand identity </strong>
        </p>
      </Col>

      <Col lg={6}>
        <h3>Problem</h3>

        <p>
          Recently, Everyday Zen has made a shift from only publishing articles
          from their in-house writers to including guest writers who make
          exclusive content. This change in strategy has led to steady growth.
        </p>
        <p>
          Currently being limited to a generic wordpress blog setup, this
          audience growth is not reflected in email subscription sign-ups nor to
          a gain in traffic to the Amazon store/partnering brands.
        </p>
      </Col>

      <Col lg={6} className="roleScope">
        <div>
          <h3>Role</h3>
          <p>UX Research {"&"} Implementation</p>
          <p>UI Design</p>
        </div>

        <div>
          <h3>Scope</h3>
          <p>
            Analyze Business and Customer Interest for Clarification of Project
          </p>
          <p>
            Provide an interactive prototype of the product formatted for
            standard desktop browser sizes
          </p>
          {/* <p>(Self-Directed Project)</p> */}
        </div>

        <Button href="https://xd.adobe.com/view/d4155688-0edc-460a-9a10-0f1ae6d83d83-8146/?fullscreen">
          View Prototype on XD
        </Button>
      </Col>
    </Container>
  );
}
