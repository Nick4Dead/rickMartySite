async function getEpisodeInfo() {
  let episode = await fetch("http://193.124.118.129:7899/seasons/0");
  let data = await episode.json();
  return data
}

async function pushToHtml() {
  const episodes = await getEpisodeInfo();
  
  const containerId = document.getElementById("containerForImages");
  
  for(let episode of episodes) {
    const container = document.createElement("div");
    container.classList.add("episodeImg");


    const img = document.createElement("img");
    img.classList.add("picture")
    img.src = episode.image;
    container.appendChild(img);


    const descrip = document.createElement('p')
    descrip.innerText = episode.description
    descrip.classList.add('description')
    container.appendChild(descrip)


    containerId.appendChild(container);

  }
}
pushToHtml();
