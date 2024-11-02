const container = document.querySelectorAll(".gallery_container");

const lightbox = document.querySelector(".agregar-imagen");

const title = document.querySelector(".titulo-imagen");
const description = document.querySelector(".descripcion-imagen");
const ubicacion = document.querySelector(".img-ubicacion");
const fundador = document.querySelector(".meta-img .Fundador");
const fecha = document.querySelector(".meta-img .Fecha");

const light = document.querySelector(".img-light");
const close = document.querySelector(".close");

container.forEach((gallery) => {
  gallery.addEventListener("click", () => {
    try {
      var content = gallery.querySelector(".over");
      var image = gallery.querySelector("img");

      // Comprobar si los elementos existen antes de acceder a sus propiedades
      if (!content) throw new Error("Falta el contenedor '.over' en la galería.");
      if (!image) throw new Error("Falta la imagen en la galería.");

      title.textContent = content.querySelector(".name")?.textContent || "Falta el título";
      description.textContent = content.querySelector(".gallery-description")?.textContent || "No disponible";
      fundador.textContent = content.querySelector(".gallery_Fundador")?.textContent || "No disponible";
      fecha.textContent = content.querySelector(".gallery_fecha")?.textContent || "No disponible";
      ubicacion.src = content.querySelector("link")?.href || "";

      light.classList.toggle("show");
      lightbox.classList.toggle("show_image");
      lightbox.src = image.src;
    } catch (error) {
      console.error(error.message);
    }
  });
});

// Función para cerrar el lightbox
function closeLightbox() {
  light.classList.toggle("show");
  lightbox.classList.toggle("show_image");
}

// Detectar cuando se presiona 'Esc' en PC
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && light.classList.contains('show')) {
    light.classList.remove('show');
    lightbox.classList.remove('show_image');
  }
});

// Detectar cuando se presiona el botón de "atrás" en móviles
window.addEventListener('popstate', () => {
  if (light.classList.contains('show')) {
    light.classList.remove('show');
    lightbox.classList.remove('show_image');
  }
});

// Evento para el botón 'close'
close.addEventListener('click', () => {
  if (light.classList.contains('show')) {
    light.classList.toggle('show');
    console.log(light.classList);
    lightbox.classList.toggle('show_image');
  }
});
