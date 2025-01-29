$(document).ready(function() {
    $("#confirmarReserva").click(function() {
        // Obtener los valores del formulario
        var nombre = $("#nombre").val();
        var correo = $("#correo").val();
        var fecha = $("#fecha").val();
        var hora = $("#hora").val();
        var personas = $("#personas").val();

        // Crear el mensaje para enviar a WhatsApp
        var mensaje = encodeURIComponent(`
            *Reserva Confirmada*
            Nombre: ${nombre}
            Correo: ${correo}
            Fecha: ${fecha}
            Hora: ${hora}
            Personas: ${personas}
        `);

        // Número de teléfono de WhatsApp (Ejemplo: +1234567890)
        var telefono = "+584246516245"; // Reemplaza con tu número

        // Crear el enlace de WhatsApp
        var urlWhatsApp = `https://wa.me/${telefono}?text=${mensaje}`;

        // Redirigir al usuario a WhatsApp
        window.open(urlWhatsApp, '_blank');
    });
});

