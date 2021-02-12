import { Card, Col, Row } from "react-bootstrap";
import simon from "../public/static/media/simon.png";
import diceGame from "../public/static/media/dice_game.png";
import tinDog from "../public/static/media/tin_dog.png";

function JSCards() {
  return (
    <>
      <h3>JavaScript, Html, CSS (vanilla) </h3>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Img src={simon} />
            <Card.Body>
              <Card.Title>Simon</Card.Title>
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
            <Card.Img src={diceGame} />
            <Card.Body>
              <Card.Title>Dice.random</Card.Title>
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
            <Card.Img src={tinDog} />
            <Card.Body>
              <Card.Title>Tindog</Card.Title>
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

export default JSCards;
