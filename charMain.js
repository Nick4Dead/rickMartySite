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
  }
}

function getKeyValue(key, value) {
  let element = document.createElement("div");
  element.innerHTML = `<span class = 'key'> ${key} </span>` + `${value}`;
  return element;
}
async function getCharById(id) {
  let apiInfo = await fetch(`http://193.124.118.129:7899/characters/${id}`);
  let data = await apiInfo.json();
  const container = document.createElement("div");
  container.classList.add("char");
  const h2 = document.createElement("h2");
  h2.classList.add("h2");
  h2.innerText = data.name;
  const h3 = document.createElement("h3");
  h3.classList.add("h3");
  h3.innerText = "Биография";
  const p = document.createElement("p")
  p.classList.add('bio')
  p.innerText = data.bio

  container.appendChild(h2);
  container.appendChild(getKeyValue("Разновидность:", data.species));
  container.appendChild(getKeyValue("Статус:", data.status));
  container.appendChild(getKeyValue("Пол:", data.gender));
  container.appendChild(h3);
  container.appendChild(p);

  // container.appendChild(data.bio);
  document.body.append(container);

  document.querySelector(".wordChar").innerHTML = "Персонаж";
}

addToHtml();
