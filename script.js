// Mantenemos el código del chatbot
const _0x5751ae = _0x4299;

document.addEventListener("DOMContentLoaded", () => {
    const chatBox = document.getElementById("chat-box");
    const userInput = document.getElementById("user-input");
    const chatContainer = document.getElementById("chat-container");
    const chatBtn = document.getElementById("chat-btn");

    const welcomeMessage = "¡Bienvenido a Luna Mágica! Soy tu asistente virtual. ¿En qué puedo ayudarte hoy?";
    const optionsMessage = "Por favor, elige una opción:";
    const mainOptions = ["Menú", "Ubicación", "Reservaciones", "Contacto", "Reseñas", "Horarios"];

    function addMessage(message, sender = "bot", scroll = true) {
        let messageDiv = document.createElement("div");
        messageDiv.classList.add("message", sender === "user" ? "user-message" : "bot-message");
        messageDiv.innerHTML = message;
        chatBox.appendChild(messageDiv);
        if (scroll) chatBox.scrollTop = chatBox.scrollHeight;
    }

    function showMainOptions() {
        addMessage(optionsMessage, "bot", false);
        let optionsContainer = document.createElement("div");
        optionsContainer.classList.add("options-container");
        mainOptions.forEach(option => {
            let optionButton = document.createElement("button");
            optionButton.classList.add("option-button");
            optionButton.innerText = option;
            optionButton.onclick = function () {
                processOption(option);
            };
            optionsContainer.appendChild(optionButton);
        });
        chatBox.appendChild(optionsContainer);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function processOption(option) {
        addMessage(`Cliente: He seleccionado la opción: "${option}"`, "user");
        let response = "";
        switch (option) {
            case "Reservaciones":
                response = 'Para reservaciones, llámanos al <strong>+58 987 654 321</strong> o reserva a través de nuestra página web.';
                break;
            case "Menú":
                response = "Selecciona una categoría para más detalles.";
                break;
            case "Ubicación":
                response = "Estamos en la Avenida Central, Edificio Luna Mágica, Ciudad, Estado, Venezuela.";
                break;
            case "Contacto":
                response = "Contáctanos al número <strong>+58 987 654 321</strong> o en nuestras redes sociales @lunaMagicaRestaurante.";
                break;
            case "Reseñas":
                response = 'Esto dicen nuestros clientes:<br><strong>Juan Pérez</strong>: "La comida es espectacular y el ambiente mágico."<br><strong>María López</strong>: "¡El mejor restaurante para una cena romántica!"';
                break;
            case "Horarios":
                response = "Nuestro horario es de lunes a domingo de 12:00 pm a 11:00 pm. ¡Te esperamos!";
                break;
            default:
                response = "Opción no válida, por favor selecciona una opción del menú.";
        }
        addMessage(response, "bot");
        askIfWantMore();
    }

    function askIfWantMore() {
        addMessage("¿Deseas hacer otra consulta o cerrar el chat?", "bot", true);
    }

    function sendMessage() {
        let message = userInput.value.trim();
        if (message !== "") {
            addMessage(message, "user");
            userInput.value = "";
            processUserResponse(message);
        }
    }

    function processUserResponse(message) {
        if (message.toLowerCase() === "si") {
            showMainOptions();
        } else {
            addMessage("¡Gracias por visitarnos! Te esperamos pronto en Luna Mágica.");
        }
    }

    function toggleChat() {
        if (chatContainer.style.display === "none" || chatContainer.style.display === "") {
            chatContainer.style.display = "block";
            chatBtn.style.display = "none";
        } else {
            chatContainer.style.display = "none";
            chatBtn.style.display = "block";
        }
    }

    document.getElementById("send-btn").addEventListener("click", sendMessage);
    addMessage(welcomeMessage, "bot", false);
    showMainOptions();

    // 🔽🔽🔽 INICIO: Código para la reserva por WhatsApp 🔽🔽🔽
    if (document.getElementById("confirmarReserva")) {
        document.getElementById("confirmarReserva").addEventListener("click", function () {
            // Obtener los valores del formulario
            let nombre = document.getElementById("nombre").value;
            let correo = document.getElementById("correo").value;
            let fecha = document.getElementById("fecha").value;
            let hora = document.getElementById("hora").value;
            let personas = document.getElementById("personas").value;

            // Crear el mensaje para enviar a WhatsApp
            let mensaje = encodeURIComponent(`
                *Reserva Confirmada*
                Nombre: ${nombre}
                Correo: ${correo}
                Fecha: ${fecha}
                Hora: ${hora}
                Personas: ${personas}
            `);

            // Número de teléfono de WhatsApp
            let telefono = "1234567890"; // Reemplaza con tu número

            // Crear el enlace de WhatsApp
            let urlWhatsApp = `https://wa.me/${telefono}?text=${mensaje}`;

            // Redirigir al usuario a WhatsApp
            window.open(urlWhatsApp, '_blank');
        });
    }
    // 🔼🔼🔼 FIN: Código para la reserva por WhatsApp 🔼🔼🔼
});






                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
   
