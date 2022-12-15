import { Container } from "react-bootstrap";

import pb1 from "../../../public/static/media/arts/facing_imgs/PipBoy/1.png";
import pb2 from "../../../public/static/media/arts/facing_imgs/PipBoy/2.png";
import pb3 from "../../../public/static/media/arts/facing_imgs/PipBoy/3.png";
import pb4 from "../../../public/static/media/arts/facing_imgs/PipBoy/4.png";
import pb5 from "../../../public/static/media/arts/facing_imgs/PipBoy/5.png";

export default function PipBoy() {
  return (
    <Container className="secContainer">
      <h2>Pip-Boy Project (on-going)</h2>

      <div className="doubleWide darkBG">
        <img src={pb1} alt="Pip-Boy Screen 1" />
        <img src={pb2} alt="Pip-Boy Screen 2" />
        <img src={pb3} alt="Pip-Boy Screen 3" />
        <img src={pb4} alt="Pip-Boy Screen 4" />
        <img src={pb5} alt="Pip-Boy Screen 5" />
      </div>
    </Container>
  );
}
