const message =
  "Merci pour votre message. Nous nous efforçons d'y répondre dans les plus brefs délais.";

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
  });
