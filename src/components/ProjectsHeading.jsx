import { Container } from "react-bootstrap";

function ProjectsHeading() {
  return (
    <div className="row3-heading" id="projects-heading">
      <div className="r3-head-inner">
        <Container className="title">
          <h2>Recent projects</h2>
          <h3>
            A collection of the more <em>fun/cool/large</em> projects recently
            created
          </h3>
        </Container>
        <Container className="outer-list-group">
          <h4>Jump to:</h4>
          <div className="custom-list-group">
            <div>
              <a href="#web-design">
                - Full Stack Applications with React & Django
              </a>
            </div>
            <div>
              <a href="#javascript">- Simple Javascript and HTML Design</a>
            </div>
            <div>
              <a href="#python-programming">- Misc. Python Projects</a>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default ProjectsHeading;
