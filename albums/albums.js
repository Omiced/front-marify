import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap";
import { getAllArtist, addAlbum } from "../src/services/artists.service";
const albumForm = document.querySelector("form");
const selectArtist = albumForm.querySelector("select");

const loadArtist = async () => {
  selectArtist.innerHTML =
    '<option value="" selected disabled>-- Elige tu artista --</option>';
  const data = await getAllArtist();
  const options = data
    .map((artist) => `<option value="${artist.id}">${artist.name}</option>`)
    .join("");
  selectArtist.insertAdjacentHTML("beforeend", options);
};

loadArtist();

albumForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = Object.fromEntries([...new FormData(albumForm)]);
  console.log(formData);
  const album = {
    name: formData.name,
    releaseDate: formData.releaseDate,
  };
  const result = await addAlbum(formData.artistId, album);
  console.log(result);
  showAlert(albumForm, result);
});

const showAlert = (el, text) => {
  const alert = `
  <div class="alert alert-success mt-3 w-50 mx-auto" role="alert">
    Album ${text.albums[text.albums.length - 1].name} agregado al artista ${text.name}
  </div>`;

  el.insertAdjacentHTML("afterend", alert);
};
