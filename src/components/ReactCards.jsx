import { Card, Col, Row } from "react-bootstrap";
import MedTrack from "../public/static/media/drug_keep.png";
import Keeper from "../public/static/media/keeper.png";
import Todo from "../public/static/media/todo-djreact.png";

function ReactCards() {
  return (
    <>
      <h3>React & Django</h3>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Img src={MedTrack} />
            <Card.Body>
              <Card.Title>Med-Track</Card.Title>
              <Card.Text>
                Similique sunt in culpa qui officia deserunt mollitia animi, id
                est laborum et dolorum fuga. Et harum quidem rerum facilis est
                et expedita distinctio.Nam libero tempore, cum soluta nobis est
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <Card.Img src={Keeper} />
            <Card.Body>
              <Card.Title>Keeper</Card.Title>
              <Card.Text>
                Similique sunt in culpa qui officia deserunt mollitia animi, id
                est laborum et dolorum fuga. Et harum quidem rerum facilis est
                et expedita distinctio.Nam libero tempore, cum soluta nobis est
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <Card.Img src={Todo} />
            <Card.Body>
              <Card.Title>Todo</Card.Title>
              <Card.Text>
                Similique sunt in culpa qui officia deserunt mollitia animi, id
                est laborum et dolorum fuga. Et harum quidem rerum facilis est
                et expedita distinctio.Nam libero tempore, cum soluta nobis est
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default ReactCards;
