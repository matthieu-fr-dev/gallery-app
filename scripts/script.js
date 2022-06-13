// Récupération du bouton Menu
const menuBtn = document.getElementById("more");
// Récupération de l'élement HTML "main"
const main = document.getElementsByTagName("main")[0];
// Récuperation de l'overlay du Menu
const menuOverlay = document.getElementsByTagName("nav")[0];
// Récuperation du body
const body = document.getElementsByTagName("body")[0];
// Récuperation de la div qui sert a fermer le menu
const menuCloseDiv = document.getElementsByTagName("div")[0];

// Ajout de l'évènement click sur le Menu
menuBtn.addEventListener("click", activateMenu);
menuCloseDiv.addEventListener("click", activateMenu);

/**
 * Detecte si le menu est ouvert ou fermé et gère l'affichage
 */
function activateMenu() {
  menuOverlay.classList.toggle("active");
  menuCloseDiv.classList.toggle("active");
}

window.addEventListener("load", getAlbums);

function getAlbums() {
  fetch("https://jsonplaceholder.typicode.com/albums/")
    .then((r) => r.json())
    .then((json) => {
      for (const album of json) {
        addAlbum(album.id, album.title);
      }
    });
}

function addAlbum(albumId, albumTitle) {
  let section = document.createElement("section");
  section.setAttribute("id", albumId);
  let title = document.createElement("h2");
  title.textContent = albumTitle;
  section.appendChild(title);
  let span = document.createElement("span");
  span.classList.add("material-symbols-outlined");
  span.textContent = "Folder";
  section.appendChild(span);
  let hr = document.createElement("hr");
  section.appendChild(hr);
  main.appendChild(section);
}
