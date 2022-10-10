async function getImagesFromApi() {
  let char = await fetch("https://rickandmortyapi.com/api/character");
  let data = await char.json();
  const sliced = data.results.slice(0, 5);
  const arrWithImg = [];
  for (item of sliced) {
    arrWithImg.push(item.image);
  }
  return arrWithImg;
}

async function addToHtml() {
    let arrFromApi = await getImagesFromApi()
  const containerDiv = document.createElement("div");
  containerDiv.classList.add("charImg");

  let container = document.getElementById("cont");
  container.appendChild(containerDiv);

  for (item of arrFromApi) {
    let link = document.createElement("a");
    link.href = "ссылка на персонажа";
    let image = document.createElement("img");
    image.src = item;
    link.appendChild(image);
    containerDiv.appendChild(link);
  }
}
addToHtml()
