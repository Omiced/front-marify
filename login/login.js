import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap";
import { loginUser } from "../src/services/user.service";

const loginForm = document.querySelector("form");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const user = Object.fromEntries([...new FormData(loginForm)]);
  const response = await loginUser(user);
  loginForm.reset();
  if (!response) {
    showAlert(loginForm, "danger", "Credenciales incorrectas");
    return;
  }
  showAlert(loginForm, "success", "Login exitoso redirigiendo");
  setTimeout(() => {
    window.location.href = "/artists/artists.html";
  }, 3000);
});

const showAlert = (el, res, text) => {
  const alert = `
  <div class="alert alert-${res} mt-3 w-50 mx-auto" role="alert">
    ${text}
  </div>`;

  el.insertAdjacentHTML("afterend", alert);
};
