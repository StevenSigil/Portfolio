import { Container, Button } from "react-bootstrap";

import edz1 from "../../../public/static/media/arts/facing_imgs/EDZen/1.png";
import edz2 from "../../../public/static/media/arts/facing_imgs/EDZen/2.png";
import edz3 from "../../../public/static/media/arts/facing_imgs/EDZen/3.png";

export default function EdZen() {
  return (
    <Container className="secContainer">
      <h2>Everyday Zen Logo's and Original Banner</h2>

      <div className="singleWide">
        <img src={edz1} alt="Everyday Zen 1" />
        <img src={edz2} alt="Everyday Zen 2" />
        <img src={edz3} alt="Everyday Zen 3" style={{maxHeight: '300px'}} />

        <Button type="link" href="/edZen2" variant="primary">
          View Case Study
        </Button>
      </div>
    </Container>
  );
}
