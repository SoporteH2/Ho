document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Recopilar la información del formulario
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        event: document.getElementById('event').value,
        date: document.getElementById('date').value,
        message: document.getElementById('message').value
    };

    // Enviar la información a través de EmailJS
    emailjs.send('FunzyPrueba1', 'template_id', formData)
        .then(response => {
            console.log('Correo enviado exitosamente', response.status, response.text);
            // Mostrar ventana emergente de confirmación
            alert('¡Gracias por contactarnos! Pronto nos comunicaremos contigo.');
            // Limpiar el formulario
            document.getElementById('contactForm').reset();
        }, error => {
            console.log('Falló el envío del correo', error);
            alert('Hubo un problema al enviar el mensaje. Por favor, inténtalo de nuevo.');
        });
});
