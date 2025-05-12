const btnPerfil = document.getElementById("btn-perfil");
const overlay = document.getElementById("overlay");
const menu = document.getElementById("menu-perfil");
const fechar = document.getElementById("fechar-menu");

btnPerfil.addEventListener("click", () => {
  overlay.classList.add("visivel");
  menu.classList.add("aberto");
});

overlay.addEventListener("click", fecharMenu);
fechar.addEventListener("click", fecharMenu);

function fecharMenu() {
  overlay.classList.remove("visivel");
  menu.classList.remove("aberto");
}
