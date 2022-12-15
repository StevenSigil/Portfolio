import { Container } from "react-bootstrap";

import br2 from "../../../public/static/media/arts/facing_imgs/Brujet/2.png";
import br3 from "../../../public/static/media/arts/facing_imgs/Brujet/3.png";
import br4 from "../../../public/static/media/arts/facing_imgs/Brujet/4.png";

export default function Brujet() {
  return (
    <>
      <Container className="secContainer">
        <h2>Brujet Email Marketing</h2>

        <div className="tripleWide">
          <img src={br2} alt="Brujet 2" />
          <img src={br3} alt="Brujet 3" />
          <img src={br4} alt="Brujet 4" />
        </div>
      </Container>
    </>
  );
}
