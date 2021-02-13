import { Container } from "react-bootstrap";

import JSCards from "./JSCards";
import ReactCards from "./ReactCards";
import PythonCards from "./PythonCards";

function Projects() {
  return (
    <>
      <Container fluid className="row3-main-container">
        <h2>Recent projects</h2>

        <PythonCards />
        <ReactCards />
        <JSCards />
        
      </Container>
    </>
  );
}

export default Projects;
