export function getUpdatedAnchorPositions() {
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
