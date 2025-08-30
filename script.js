// Script básico para el portafolio
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portafolio cargado correctamente');
    
    // Agregar mensaje de bienvenida
    const header = document.querySelector('header');
    const mensaje = document.createElement('p');
    mensaje.textContent = '¡Bienvenido a mi portafolio digital!';
    mensaje.style.fontSize = '1.2rem';
    mensaje.style.marginTop = '1rem';
    header.appendChild(mensaje);
});
