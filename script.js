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

    // Enviar la información al correo electrónico mediante un servicio de backend (simulación)
    // Aquí usarías un servicio como EmailJS, Zapier, o un servidor backend real.
    // Por ejemplo:
    // emailjs.send('service_id', 'template_id', formData)
    //     .then(response => {
    //         console.log('Correo enviado exitosamente', response.status, response.text);
    //     }, error => {
    //         console.log('Falló el envío del correo', error);
    //     });

    // Simulación de envío exitoso
    console.log('Datos enviados:', formData);
    
    // Mostrar ventana emergente de confirmación
    alert('¡Gracias por contactarnos! Pronto nos comunicaremos contigo.');

    // Limpiar el formulario
    document.getElementById('contactForm').reset();
});
