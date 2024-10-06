// Función para mostrar la fecha y hora actual
function showDateTime() {
    const dateTimeElement = document.getElementById('currentDateTime');
    const currentDateTime = new Date().toLocaleString('es-CL', { timeZone: 'America/Santiago' });
    dateTimeElement.textContent = currentDateTime;
}

// Función para mostrar una pantalla específica
function showPage(pageId) {
    // Ocultar todas las pantallas
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.classList.add('hidden'));

    // Mostrar la pantalla seleccionada
    document.getElementById(pageId).classList.remove('hidden');
}

// Inicializar la aplicación
function init() {
    // Mostrar la fecha y hora actual al cargar la página
    showDateTime();
    setInterval(showDateTime, 1000); // Actualizar cada segundo

    // Configurar evento para el botón de login
    document.getElementById('loginBtn').addEventListener('click', function () {
        showPage('login-screen');
    });

    // Al enviar el formulario de login, mostrar el menú principal
    document.getElementById('loginForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevenir el envío del formulario
        showPage('main-menu'); // Mostrar el menú principal después del login
    });

    // Mostrar la pantalla inicial (splash-screen) al cargar la página
    showPage('splash-screen');
}

// Llamar a la función de inicialización cuando se cargue la página
window.onload = init;
