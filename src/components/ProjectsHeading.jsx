import { Container } from "react-bootstrap";

function ProjectsHeading() {
  return (
    <div className="projectsHeadingSection" id="projects-heading">
      <div className="innerDiv">
        <Container className="title">
          <h2>Recent projects</h2>
          <h3>
            Some of the more interesting projects recently created
            {/* A collection of the more <em>fun/cool/large</em> projects recently
            created */}
          </h3>
        </Container>
        <Container className="outer-list-group">
          <h4>Jump to:</h4>
          <div className="custom-list-group">
            <div>
              -{" "}
              <a href="#web-design">
                Full Stack Web Applications
              </a>
            </div>
            <div>
              - <a href="#javascript">Javascript, HTML & CSS Pages</a>
            </div>
            <div>
              - <a href="#python-programming">Misc. Python Projects</a>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default ProjectsHeading;
