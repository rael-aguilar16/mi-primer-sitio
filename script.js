// --- FUNCIONALIDAD DE MODO OSCURO CON MEMORIA (LOCALSTORAGE) ---

const toggleSwitch = document.querySelector('#checkbox-tema');
const currentTheme = localStorage.getItem('theme');

// 1. Al cargar la página, verificamos si ya había un tema guardado
if (currentTheme) {
    document.body.classList.add(currentTheme);

    if (currentTheme === 'oscuro') {
        toggleSwitch.checked = true;
    }
}

// 2. Función para cambiar el tema al hacer clic en el switch
function switchTheme(e) {
    if (e.target.checked) {
        document.body.classList.add('oscuro');
        localStorage.setItem('theme', 'oscuro'); // Guarda 'oscuro' en la memoria del navegador
    } else {
        document.body.classList.remove('oscuro');
        localStorage.setItem('theme', 'claro');  // Guarda 'claro' en la memoria del navegador
    }
}

// Escuchamos cuando se mueve el switch
if (toggleSwitch) {
    toggleSwitch.addEventListener('change', switchTheme, false);
}


// --- FUNCIONALIDAD PARA ABRIR IMÁGENES EN PANTALLA COMPLETA ---

function abrirModal(src) {
    const modal = document.getElementById('modal-imagen');
    const imgAmpliada = document.getElementById('img-ampliada');
    
    if (modal && imgAmpliada) {
        modal.style.display = 'flex';
        imgAmpliada.src = src;
    }
}

function cerrarModal() {
    const modal = document.getElementById('modal-imagen');
    if (modal) {
        modal.style.display = 'none';
    }
}