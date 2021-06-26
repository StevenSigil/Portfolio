import React from "react";
import { HashLink } from "react-router-hash-link";
import { Row, Col, Container } from "react-bootstrap";

export default function Directory() {
  return (
    <Container className="outerDiv">
      <Row noGutters>
        <h2>Directory</h2>
      </Row>

      <Row noGutters>
        <Col xl={3} md={6} sm={12}>
          <h3>Research</h3>

          <ul>
            <HashLink smooth to="#intro">
              <li>Introduction & Overview</li>
            </HashLink>

            <HashLink smooth to="#analysis">
              <li>Business Analysis</li>
            </HashLink>

            <HashLink smooth to="#requirements">
              <li>Project Requirements</li>
            </HashLink>

            <HashLink smooth to="#addInfo">
              <li>Additional Information</li>
            </HashLink>

            <HashLink smooth to="#persona">
              <li>User Persona's</li>
            </HashLink>
          </ul>
        </Col>

        <Col xl={3} md={6} sm={12}>
          <h3>Business Analysis</h3>

          <ul>
            <HashLink smooth to="#ivfChart">
              <li>Goals: Importance vs. Feasibility</li>
            </HashLink>

            <HashLink smooth to="#compLogos">
              <li>Competitive Logo's</li>
            </HashLink>

            <HashLink smooth to="#compWebsites">
              <li>Competitive Websites</li>
            </HashLink>
          </ul>
        </Col>

        <Col xl={3} md={6} sm={12}>
          <h3>Pre-Project Planning</h3>

          <ul>
            <HashLink smooth to="#decisionPaths">
              <li>User Decision Path's</li>
            </HashLink>

            <HashLink smooth to="#journeyPath">
              <li>Extended Journey Path (Initial User)</li>
            </HashLink>

            <HashLink smooth to="#moodBoard">
              <li>Mood Board (Website & Logo)</li>
            </HashLink>

            <HashLink smooth to="#siteMap">
              <li>Site Map</li>
            </HashLink>
          </ul>
        </Col>

        <Col xl={3} md={6} sm={12}>
          <h3>Final Designs</h3>

          <ul>
            <HashLink smooth to="#finalLogos">
              <li>Final Logo Designs</li>
            </HashLink>

            <HashLink smooth to="#wireFrame">
              <li>Website Wireframe</li>
            </HashLink>

            <HashLink smooth to="#prototype">
              <li>Website Prototype</li>
            </HashLink>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
