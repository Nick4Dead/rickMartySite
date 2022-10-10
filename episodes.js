async function getEpisodeInfo() {
  let episode = await fetch("http://193.124.118.129:7899/seasons/0");
  let data = await episode.json();
  const arrWithImg = [];
  for (item of data) {
    arrWithImg.push(item.image);
  }
  return arrWithImg;
}

async function pushToHtml() {
  const arrOfImages = await getEpisodeInfo();
  const container = document.createElement("div");
  container.classList.add("episodeImg");

  const containerId = document.getElementById("container-for-images");
  containerId.appendChild(container);

  for (item of arrOfImages) {
    const img = document.createElement("img");
    img.classList.add("picture")
    img.src = item;
    container.appendChild(img);
  }
}
pushToHtml();
