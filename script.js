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


// --- FUNCIONALIDAD DE GALERÍA Y VISOR (CARRUSEL) ---

const imagenesGaleria = Array.from(document.querySelectorAll('.galeria-app img'));
const modal = document.getElementById('modal-visor');
const imgAmpliada = document.getElementById('img-ampliada');
const btnCerrar = document.getElementById('btn-cerrar');
const btnAnt = document.getElementById('btn-ant');
const btnSig = document.getElementById('btn-sig');

let indiceImagenActual = 0;

// Función para abrir el modal en una imagen específica
function mostrarImagen(index) {
    if (imagenesGaleria.length === 0) return;
    
    // Control de límites (ciclo infinito)
    if (index < 0) {
        indiceImagenActual = imagenesGaleria.length - 1;
    } else if (index >= imagenesGaleria.length) {
        indiceImagenActual = 0;
    } else {
        indiceImagenActual = index;
    }

    imgAmpliada.src = imagenesGaleria[indiceImagenActual].src;
    modal.style.display = "flex";
}

// Abrir modal al hacer clic en cualquier captura de la galería
imagenesGaleria.forEach((img, index) => {
    img.addEventListener('click', () => {
        mostrarImagen(index);
    });
});

// Botones de navegación
if (btnAnt && btnSig) {
    btnAnt.addEventListener('click', (e) => {
        e.stopPropagation();
        mostrarImagen(indiceImagenActual - 1);
    });

    btnSig.addEventListener('click', (e) => {
        e.stopPropagation();
        mostrarImagen(indiceImagenActual + 1);
    });
}

// Cerrar el visor
if (btnCerrar) {
    btnCerrar.addEventListener('click', () => {
        modal.style.display = "none";
    });
}

// Cerrar al hacer clic fuera de la imagen
if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
}

// Navegación mediante teclado (Flechas del teclado y Tecla Escape)
document.addEventListener('keydown', (e) => {
    if (modal && modal.style.display === "flex") {
        if (e.key === "ArrowLeft") {
            mostrarImagen(indiceImagenActual - 1);
        } else if (e.key === "ArrowRight") {
            mostrarImagen(indiceImagenActual + 1);
        } else if (e.key === "Escape") {
            modal.style.display = "none";
        }
    }
});
// --- MANEJO DEL FORMULARIO DE CONTACTO (AVISO PROVISIONAL) ---

const formularioContacto = document.querySelector('.formulario');

if (formularioContacto) {
    formularioContacto.addEventListener('submit', (e) => {
        e.preventDefault(); // Evita que la página se recargue

        // Crear la ventana flotante (Modal)
        const modalAviso = document.createElement('div');
        modalAviso.classList.add('modal-aviso-overlay');
        
        modalAviso.innerHTML = `
            <div class="modal-aviso-contenido">
                <i class="fa-solid fa-triangle-exclamation icono-aviso"></i>
                <h2>¡Función en construcción!</h2>
                <p>Por el momento la opción de enviar mensajes por formulario no está activa. Por favor, contáctame directamente a través de cualquiera de mis <strong>redes sociales</strong>.</p>
                <button id="btn-cerrar-aviso">Entendido</button>
            </div>
        `;

        document.body.appendChild(modalAviso);

        // Evento para cerrar la ventana emergente
        document.getElementById('btn-cerrar-aviso').addEventListener('click', () => {
            modalAviso.remove();
            formularioContacto.reset(); // Limpia los campos del formulario
        });
    });
}