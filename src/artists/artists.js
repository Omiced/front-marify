import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap";
import { createArtist } from "../services/artists.service";

const artistForm = document.querySelector("form");

artistForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const artist = Object.fromEntries([...new FormData(artistForm)]);
  const data = await createArtist(artist);
  if (!data.ok) {
    showAlert(artistForm, "danger", "Algo salio mal al crear el artista");
  }
  showAlert(artistForm, "success", "Artista creado uwu");
  artistForm.reset();
});

const showAlert = (el, res, text) => {
  const alert = `
  <div class="alert alert-${res} mt-3 w-50 mx-auto" role="alert">
    ${text}
  </div>`;

  el.insertAdjacentHTML("afterend", alert);
};
