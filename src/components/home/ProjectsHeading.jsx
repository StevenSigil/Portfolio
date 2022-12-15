import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function ProjectsHeading() {
  return (
    <Container className="projectsHeadingSection">
      <h2>Recent projects</h2>

      {/* Some of the more interesting projects recently created */}
      {/* A collection of the more <em>fun/cool/large</em> projects recently
            created */}

      <Container className="outer-list-group">
        <h3>Skip to:</h3>

        <HashLink smooth to="#UX">
          <p>UX Design/Case Studies</p>
        </HashLink>

        <HashLink smooth to="#web-design">
          <p>Full Stack Web Applications</p>
        </HashLink>

        <HashLink smooth to="#javascript">
          <p>Javascript, HTML & CSS Pages</p>
        </HashLink>

        <HashLink smooth to="#python-programming">
          <p>Python Projects</p>
        </HashLink>

        {/* <Link to="/digitalmedia">
          <p>Digital Media</p>
        </Link> */}
      </Container>
    </Container>
  );
}
