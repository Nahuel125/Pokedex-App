const button = document.getElementById("buttonSearch");

button.addEventListener("click", async () => {
  try {
    const namePokemon = document.getElementById("inputSearch").value;
    const data = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${namePokemon}`
    );
    const json = await data.json();
    seeInformation(json);
  } catch {
    seeError();
  }
  document.getElementById("inputSearch").value = "";
});

function seeInformation(data) {
  document
    .getElementById("descriptionPokemon")
    .classList.remove("ocultDescription");
  document.getElementById("errorContainer").classList.add("ocultDescription");
  document.getElementById("imgPokemon").src = `${data.sprites.front_default}`;
  document.getElementById("namePokemon").innerText = `${data.name}`;
  document.getElementById("hp").innerText = `${data.stats[0].base_stat}`;
  document.getElementById("defense").innerText = `${data.stats[2].base_stat}`;
  document.getElementById("attack").innerText = `${data.stats[1].base_stat}`;
}

function seeError() {
  document
    .getElementById("descriptionPokemon")
    .classList.add("ocultDescription");
  document
    .getElementById("errorContainer")
    .classList.remove("ocultDescription");
  document.getElementById("imgPokemon").src = "images/pikachu2.png";
}
