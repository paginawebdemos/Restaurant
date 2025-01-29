// reserva.js

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("confirmarReserva").addEventListener("click", function () {
        // Obtener los valores del formulario
        var nombre = document.getElementById("nombre").value;
        var correo = document.getElementById("correo").value;
        var fecha = document.getElementById("fecha").value;
        var hora = document.getElementById("hora").value;
        var personas = document.getElementById("personas").value;

        // Crear el mensaje para enviar a WhatsApp
        var mensaje = encodeURIComponent(`
            *Reserva Confirmada*
            Nombre: ${nombre}
            Correo: ${correo}
            Fecha: ${fecha}
            Hora: ${hora}
            Personas: ${personas}
        `);

        // Número de teléfono de WhatsApp (ejemplo: +1234567890)
        var telefono = "1234567890"; // Reemplázalo con tu número

        // Crear el enlace de WhatsApp
        var urlWhatsApp = `https://wa.me/${telefono}?text=${mensaje}`;

        // Redirigir al usuario a WhatsApp
        window.open(urlWhatsApp, '_blank');
    });
});

