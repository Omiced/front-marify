import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap";
import { registerUser } from "./services/user.service";

const registerForm = document.querySelector("form");

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = Object.fromEntries([...new FormData(registerForm)]);
  registerUser(user);
  registerForm.reset();
  showAlert(registerForm);
  setTimeout(() => {
    window.location.href = "/login/login.html";
  }, 3000);
});

const showAlert = (el) => {
  const alert = `
  <div class="alert alert-success mt-3 w-50 mx-auto" role="alert">
    Registro exitoso redirigiendo al login
  </div>`;

  el.insertAdjacentHTML("afterend", alert);
};
