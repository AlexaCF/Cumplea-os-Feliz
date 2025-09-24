// ================================
// script.js
// Reproducir canción de cumpleaños
// ================================

// 1️⃣ Seleccionamos el botón por su id
const btnReproducir = document.getElementById('btnReproducir');

// 2️⃣ Creamos un objeto de audio con la canción
const audio = new Audio('asset/arrullo-de-estrellas.mp3'); 

// 3️⃣ Verificamos que todo esté cargado
console.log("Botón y audio cargados:", btnReproducir, audio);

// 4️⃣ Capturamos el evento click del botón
btnReproducir.addEventListener('click', () => {
    // Reproducir la canción
    audio.play();

    // Cambiar el texto del botón mientras se reproduce
    btnReproducir.textContent = '¡Feliz Cumpleaños! 🎶';
    const btnDetener = document.getElementById('btnDetener');

btnDetener.addEventListener('click', () => {
    audio.pause();       // Pausa la canción
    audio.currentTime = 0; // Reinicia al inicio
    btnReproducir.textContent = 'Reproducir Canción';
    btnReproducir.disabled = false;
});

    // Desactivar el botón mientras se reproduce
    btnReproducir.disabled = true;

    // Escuchamos cuando la canción termina (solo una vez)
    audio.addEventListener('ended', () => {
        btnReproducir.textContent = 'Reproducir Canción';
        btnReproducir.disabled = false;
    }, { once: true });
});


