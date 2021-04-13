import { Container } from "react-bootstrap";

export default function ProjectsHeading() {
  return (
    <Container className="projectsHeadingSection">
      <div className="innerDiv">
        <Container className="title">
          <h1>Recent projects</h1>
          {/* <h3> */}
          {/* Some of the more interesting projects recently created */}
          {/* A collection of the more <em>fun/cool/large</em> projects recently
            created */}
          {/* </h3> */}
        </Container>

        <Container className="outer-list-group">
          <h2>Skip to:</h2>
          <ul className="custom-list-group">
            <li>
              <a href="#web-design">Full Stack Web Applications</a>
            </li>
            <li>
              <a href="#javascript">Javascript, HTML & CSS Pages</a>
            </li>
            <li>
              <a href="#python-programming">Misc. Python Projects</a>
            </li>
          </ul>
        </Container>
      </div>
    </Container>
  );
}
