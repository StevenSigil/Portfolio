export default function ScrollGroupItem({ headText, img, imgAlt, func }) {
  return (
    <div className="scrollItemWithHeading">
      {/* leaving a space in <p> for expanding space... */}
      {headText ? <h4>{headText}</h4> : <p> </p>}
      <img src={img} alt={imgAlt} onClick={() => func(img, null, imgAlt)} />
    </div>
  );
}
