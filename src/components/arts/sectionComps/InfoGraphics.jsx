import { Container } from "react-bootstrap";

import inf1 from "../../../public/static/media/arts/facing_imgs/InfoGraphics/1.png";
import inf2 from "../../../public/static/media/arts/facing_imgs/InfoGraphics/2.png";
import inf3 from "../../../public/static/media/arts/facing_imgs/InfoGraphics/3.png";
import inf4 from "../../../public/static/media/arts/facing_imgs/InfoGraphics/4.png";

export default function InfoGraphics() {
  return (
    <Container className="secContainer">
      <h2>Info Graphics</h2>

      <div className="doubleWide">
        <img src={inf1} alt="Info Graphic 1" />
        <img src={inf2} alt="Info Graphic 2" />
        <img src={inf3} alt="Info Graphic 3" />
        <img src={inf4} alt="Info Graphic 4" />
      </div>
    </Container>
  );
}
