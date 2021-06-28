export function getUpdatedAnchorPositions() {
  // Positions from directory component -- used for "next" btn in NavBtns

  const anchorPositions = [
    { "#intro": document.querySelector("#intro").offsetTop },
    { "#analysis": document.querySelector("#analysis").offsetTop },
    { "#requirements": document.querySelector("#requirements").offsetTop },
    { "#addInfo": document.querySelector("#addInfo").offsetTop },
    { "#persona": document.querySelector("#persona").offsetTop },
    { "#ivfChart": document.querySelector("#ivfChart").offsetTop },
    { "#compLogos": document.querySelector("#compLogos").offsetTop },
    { "#compWebsites": document.querySelector("#compWebsites").offsetTop },
    { "#decisionPaths": document.querySelector("#decisionPaths").offsetTop },
    { "#journeyPath": document.querySelector("#journeyPath").offsetTop },
    { "#moodBoard": document.querySelector("#moodBoard").offsetTop },
    { "#siteMap": document.querySelector("#siteMap").offsetTop },
    { "#finalLogos": document.querySelector("#finalLogos").offsetTop },
    { "#wireFrame": document.querySelector("#wireFrame").offsetTop },
    { "#prototype": document.querySelector("#prototype").offsetTop },
    { "#footer": document.querySelector("#footer").offsetTop },
  ];
  // console.log("Retrieving new anchor positions...");
  return anchorPositions;
}

export function handleNextScrollPosition() {
  // When "next" btn is clicked -> scroll page to next closest anchorPosition

  const curPos = window.pageYOffset;
  const anchorPositions = getUpdatedAnchorPositions();

  const closestSection = anchorPositions.find((sections) => {
    return Object.values(sections) > curPos + 100;
  });

  // console.log(curPos, closestSection);
  if (closestSection) {
    const scrollOptions = {
      left: 0,
      top: Object.values(closestSection),
      behavior: "smooth",
    };

    window.scrollTo(scrollOptions);
  }
}
