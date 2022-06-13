function getImages() {
  fetch("https://jsonplaceholder.typicode.com/albums")
    .then((r) => r.json())
    .then((json) => {
      let max = 30;
      for (const album of json) {
        if (max != 0) {
          addAlbums(album.albumId, album.id, album.title);
          max--;
        }
      }
    });
}

function addImages(main, albumId, id, title, url, thumbnailUrl) {}

function addAlbums(albumId, id, title) {}

window.addEventListener("load", getImages);
