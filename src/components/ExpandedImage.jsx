export default function ExpandedImage({ data, handleImageClick }) {
  if (data.img) {
    document.querySelector("html").style.overflowY = "hidden";

    const classStyle = () => {
      if (data.bg && !data.dark) {
        return "imgWithBg";
      } else if (data.dark) {
        return "imgWithBgDark";
      }
      return null;
    };

    console.log(data);

    return (
      <div
        className="staticLgImg"
        onClick={() => handleImageClick(null, null, null, false, false)}
      >
        {data.srcSet ? (
          <img
            srcSet={data.srcSet}
            src={data.img}
            alt={data.alt}
            // className={data.bg ? "imgWithBg" : null}
            className={classStyle()}
          />
        ) : (
          <img
            src={data.img}
            alt={data.alt}
            // className={data.bg ? "imgWithBg" : null}
            className={classStyle()}
          />
        )}

        <div className="textOverlay">
          <p>Push to Close</p>
        </div>
      </div>
    );
  } else {
    document.querySelector("html").style.overflowY = "auto";
    return null;
  }
}
