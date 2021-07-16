import React from "react";
import { Container, Col, Button } from "react-bootstrap";

export default function SonataIntro() {
  return (
    <Container className="introSection">
      <Col lg={6} className="textCol">
        <h3>Overview</h3>

        <p>
          This project was made to expand my understanding of creating
          user-facing mockups and prototypes made with Adobe XD. Specifically,
          with a focus on converting a prototype to a usable webpage. For this
          purpose, the company SonataEvents was conceptualized.
        </p>
        <p>
          SonataEvents is an event planning company, focusing on large scale,
          younger, excitement seeking clients. From banquets to concerts,
          SonataEvents will take care of the details, allowing you to focus on
          your guests.
        </p>
      </Col>

      <Col lg={6} className="textCol">
        <h3>Objective</h3>
        <p>
          Create a landing page prototype for a service-oriented company which
          caters to trends; both in styles and content. This page will
          prominently display the "ask", offer a limited time deal, and provide
          links to other pages for additional information.
        </p>
        <p>
          After the prototype has been created, use the tools and packages
          provide with Adobe XD to convert the page into a useable webpage using
          HTML and CSS.
        </p>
      </Col>

      <Col className="btnCol">
        <Button
          href="https://stevensigil.github.io/SonataEvents/"
          target="_blank"
        >
          View Final Webpage
        </Button>

        <Button
          href="https://xd.adobe.com/view/77288260-790f-4201-8214-d1b91da77538-227b/?fullscreen"
          target="_blank"
        >
          View Prototype on XD
        </Button>
      </Col>
    </Container>
  );
}
