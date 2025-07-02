// check list //
const params = new URLSearchParams(location.search);

params.forEach((item) => {
  const element = document.querySelector(`[type="radio"][value="${item}"]`);
  if (element) element.checked = true;
});

const dts = document.querySelectorAll("dt");

dts.forEach((dt) => {
  dt.addEventListener("click", () => {
    dt.parentElement.classList.toggle("ativa");
  });
});

// Menu ativo //
const links = document.querySelectorAll(".header-menu a");

links.forEach((link) => {
  if (location.href.includes(link.href)) {
    link.classList.add("ativo");
  }
});

// Galeria //
const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

galeria.forEach((img) => {
  img.addEventListener("click", () => {
    if (matchMedia("(min-width: 1000px)").matches) {
      galeriaContainer.prepend(img);
    }
  });
});

// animação //
if (window.SimpleAnime){
  new SimpleAnime();
}