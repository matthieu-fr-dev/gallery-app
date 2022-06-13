// Récupération du bouton Menu
const menuBtn = document.getElementById("more");
// Récupération de l'élement HTML "main"
const main = document.getElementsByTagName("main")[0];
// Récuperation de l'overlay du Menu
const menuOverlay = document.getElementsByTagName("nav")[0];

// Ajout de l'évènement click sur le Menu
menuBtn.addEventListener("click", activateMenu);

/**
 * Detecte si le menu est ouvert ou fermé et gère l'affichage
 */
function activateMenu() {
  let menuOpened = menuBtn.classList.contains("active");

  let menuCloser = document.createElement("div");

  if (!menuOpened) {
    menuOverlay.classList.toggle("active");
  }
}
