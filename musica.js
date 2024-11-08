// Referencias al icono y al audio
const musicIcon = document.getElementById('musicIcon');
const musicAudio = document.getElementById('musicAudio');

// Función para alternar la reproducción
function toggleMusic() {
    if (musicAudio.paused) {
        musicAudio.play();
        musicIcon.classList.add('playing'); // Añade la clase para el efecto "pop"
    } else {
        musicAudio.pause();
        musicIcon.classList.remove('playing'); // Remueve la clase cuando se pausa
    }
}

// Evento de click en el icono de música
musicIcon.addEventListener('click', toggleMusic);
