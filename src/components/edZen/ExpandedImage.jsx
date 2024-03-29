export default function ExpandedImage({ data, handleImageClick }) {
  if (data.img) {
    document.querySelector("html").style.overflowY = "hidden";

    return (
      <div
        className="staticLgImg"
        onClick={() => handleImageClick(null, null, null)}
      >
        {data.srcSet ? (
          <img srcSet={data.srcSet} src={data.img} alt={data.alt} />
        ) : (
          <img src={data.img} alt={data.alt} />
        )}

        <div className="transparentOverlay">
          <p>touch anywhere to close</p>
        </div>
      </div>
    );
  } else {
    document.querySelector("html").style.overflowY = "auto";
    return null;
  }
}
