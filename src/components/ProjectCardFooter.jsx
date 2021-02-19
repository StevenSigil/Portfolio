import React from "react";
import { Card, Button, Image } from "react-bootstrap";

import GithubMark from "../public/static/media/logos/GitHub-Mark-32px.png";

// TODO: Convert the above PNG to SVG - OK to do per website

function ProjectCardFooter(props) {
  const btnName = props.btnName.toString();
  const links = props.links;

  return (
    <Card.Footer className="projectCard-footer">
      <Button
        className="github-btn"
        type="link"
        href={links.github}
        variant="outline-dark"
        alt={links.github}
        rel="noreferrer"
        target="_blank"
      >
        <Image src={GithubMark} width="100%" height="100%" alt={links.github} />
      </Button>

      {links.website !== null ? (
        <Button
          type="link"
          href={links.website}
          variant="outline-dark"
          rel="noreferrer"
          target="_blank"
        >
          {btnName}
        </Button>
      ) : null}
    </Card.Footer>
  );
}

export default ProjectCardFooter;
