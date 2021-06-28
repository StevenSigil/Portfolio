import React from "react";
import { Row } from "react-bootstrap";

export default function SingleImageWithHeader({
  id,
  hText,
  srcSet,
  img,
  alt,
  handleImageClick,
}) {
  return (
    <>
      <Row noGutters id={id}>
        <h3>{hText}</h3>
      </Row>
      <Row noGutters className="imgContainer">
        <img
          srcSet={srcSet}
          src={img}
          alt={alt}
          onClick={() => handleImageClick(img, srcSet, alt)}
        />
      </Row>
    </>
  );
}
