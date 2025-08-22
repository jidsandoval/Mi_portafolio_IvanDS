// ======== Script de contacto ======== //
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let name = this.name.value;
  let email = this.email.value;
  let message = this.message.value;

  // Simulación de envío (aquí podrías conectar a un backend real o servicio como EmailJS)
  document.getElementById("formMessage").innerText =
    "¡Gracias " + name + "! Tu mensaje ha sido enviado correctamente.";

  // Resetear formulario
  this.reset();
});
