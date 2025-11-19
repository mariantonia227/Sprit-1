const modal = document.getElementById("modalLogin");
const btnLogin = document.getElementById("btn-login");
const btnCerrar = document.getElementById("btn-cerrar");

btnLogin.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "flex";
});


btnCerrar.addEventListener("click", () => {
    modal.style.display = "none";
});