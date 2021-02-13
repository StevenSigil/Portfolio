import React from "react";
import { Card, Button, Image } from "react-bootstrap";

import GithubMark from "../public/static/media/logos/GitHub-Mark-32px.png";

// TODO: Convert the above PNG to SVG - OK to do per website

function ProjectCardFooter(props) {
  const btnName = props.btnName.toString();
  const links = props.links;

  return (
    <Card.Footer className="projectCard-footer">
      <Button type="link" href={links.github} variant="outline-secondary">
        <Image src={GithubMark} />
      </Button>

      {links.website !== null ? (
        <Button type="link" href={links.website} variant="outline-secondary">
          {btnName}
        </Button>
      ) : null}
    </Card.Footer>
  );
}

export default ProjectCardFooter;
