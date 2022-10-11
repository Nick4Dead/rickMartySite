async function getCharactersFromApi() {
  let char = await fetch("https://rickandmortyapi.com/api/character");
  let data = await char.json();
  const sliced = data.results.slice(0, 5);
  // const arrWithImg = [];
  // for (item of sliced) {
  //   arrWithImg.push(item);
  // }
  return sliced;
}

async function addToHtml() {
  let characters = await getCharactersFromApi();
  const containerDiv = document.createElement("div");
  containerDiv.classList.add("charImg");

  let container = document.getElementById("cont");
  container.appendChild(containerDiv);

  for (item of characters) {
    let link = document.createElement("a");
    link.href = "#";
    let image = document.createElement("img");
    image.id = item.id;

    image.src = item.image;
    link.appendChild(image);
    containerDiv.appendChild(link);
    image.addEventListener("click", test);
    async function test(event) {
      const removeEl = document.getElementById("cont");
      removeEl.remove();

      const id = event.target.id;
      await getCharById(id);
    }
  }
}


async function getCharById(id) {
  let apiInfo = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  let data = await apiInfo.json();
  const container = document.createElement("div");
  container.classList.add('char')
  const infoGender = document.createElement('div')
  infoGender.innerHTML = "<span class = 'key'> Пол: </span>" + data.gender
  const infoStatus = document.createElement("div")
  infoStatus.innerHTML = "<span class = 'key'> Статус: </span>" + data.status
  const infoName = document.createElement("div")
  infoName.innerHTML = "<span class = 'key'> Имя: </span>" + data.name
  container.appendChild(infoName)
  container.appendChild(infoStatus)
  container.appendChild(infoGender)
  document.body.append(container)
  console.log(container);
}


addToHtml();