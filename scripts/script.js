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
  span.addEventListener("click", (event) => {
    showAlbum(event.target.parentNode.id);
  });
  section.appendChild(span);
  section.addEventListener("mouseenter", () => {
    span.textContent = "folder_open";
  });
  section.addEventListener("mouseleave", () => {
    span.textContent = "folder";
  });
  main.appendChild(section);
}

function showAlbum(albumId) {
  main.innerHTML = "";
  fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
    .then((r) => r.json())
    .then((json) => {
      for (const image of json) {
        getAlbumImage(image.id, image.title, image.url, image.thumbnailUrl);
      }
    });
}

function getAlbumImage(imageId, imageTitle, imageUrl, imageThumbnailUrl) {
  let section = document.createElement("section");
  let image = document.createElement("img");
  let title = document.createElement("h2");

  image.src = imageThumbnailUrl;
  title.textContent = imageTitle.substring(0, 39);
  image.alt = imageTitle.substring(0, imageTitle.indexOf(" "));

  section.classList.add("img");
  section.appendChild(title);
  section.appendChild(image);
  main.appendChild(section);
}
