// 1. Seleccionamos los elementos del HTML con los que vamos a interactuar
const boton = document.getElementById('btn-tema');
const tarjeta = document.getElementById('tarjeta');
const cuerpo = document.body;

// 2. Escuchamos el clic en el botón
boton.addEventListener('click', () => {
    // Alternamos las clases CSS para cambiar el tema
    cuerpo.classList.toggle('oscuro');
    tarjeta.classList.toggle('modo-oscuro');

    // Cambiamos el texto del botón dependiendo del estado actual
    if (tarjeta.classList.contains('modo-oscuro')) {
        boton.textContent = 'Cambiar a Modo Claro';
    } else {
        boton.textContent = 'Cambiar a Modo Oscuro';
    }
});