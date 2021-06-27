import react from "react";

export default function ScrollGroupItem({ headText, img, imgAlt, func }) {
  return (
    <div className="scrollItemWithHeading">
      {headText ? <h4>{headText}</h4> : null}
      <img src={img} alt={imgAlt} onClick={() => func(img, null, imgAlt)} />
    </div>
  );
}
