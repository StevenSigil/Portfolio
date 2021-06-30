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
      <span className="scrollSpacing" id={id}></span>
      <div className="sectionMargin">
        <div className="imageWithHeader">
          <Row noGutters>
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
        </div>
      </div>
    </>
  );
}
