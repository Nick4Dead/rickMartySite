async function getImgChar() {
  let char = await fetch("https://rickandmortyapi.com/api/character");
  let data = await char.json();
  const containerDiv = document.createElement("div");
  containerDiv.classList.add("charImg");

  let container = document.getElementById("cont");
  container.appendChild(containerDiv);

  const sliced = data.results.slice(0, 5);
  const arrWithImg = [];
  for (let i = 0; i < sliced.length; i++) {
    arrWithImg.push(sliced[i].image);
  }
  for (item of arrWithImg) {
    let link = document.createElement("a");
    link.href = "ссылка на персонажа";
    let image = document.createElement("img");
    image.src = item;
    link.appendChild(image);
    containerDiv.appendChild(link);
  }
}
getImgChar();
