import { Card, Col, Row } from "react-bootstrap";
import Encrypted from "../public/static/media/encryption.png";
import Life from "../public/static/media/glider-static.png";
import Kivy from "../public/static/media/kivy.png";

function PythonCards() {
  return (
    <>
      <h3>Python</h3>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Img src={Life} />
            <Card.Body>
              <Card.Title>Conway's Game of Life</Card.Title>
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
            <Card.Img src={Kivy} />
            <Card.Body>
              <Card.Title>Kivy - Messaging App.</Card.Title>
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
            <Card.Img src={Encrypted} />
            <Card.Body>
              <Card.Title>Fernet Cryptography</Card.Title>
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

export default PythonCards;
