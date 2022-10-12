async function getCharactersFromApi() {
  let char = await fetch("https://rickandmortyapi.com/api/character");
  let data = await char.json();
  return data.results.slice(0, 5);
}
async function test(event) {
  const removeEl = document.getElementById("cont");
  removeEl.remove();
  await getCharById(event.target.id);
}

async function addToHtml() {
  let characters = await getCharactersFromApi();
  const containerDiv = document.createElement("div");
  document.createElement("div").classList.add("charImg");

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
  }
}

function getKeyValue(key, value) {
  let element = document.createElement("div");
  element.innerHTML = `<span class = 'key'> ${key} </span>` + `${value}`;
  return element;
}
async function getCharById(id) {
  let apiInfo = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  let data = await apiInfo.json();
  const container = document.createElement("div");
  container.classList.add("char");

  container.appendChild(getKeyValue("Имя:", data.name));
  container.appendChild(getKeyValue("Разновидность:", data.species));
  container.appendChild(getKeyValue("Статус:", data.status));
  container.appendChild(getKeyValue("Пол:", data.gender));
  document.body.append(container);

  document.querySelector(".wordChar").innerHTML = "Персонаж";
}

addToHtml();
