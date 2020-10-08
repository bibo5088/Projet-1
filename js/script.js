const message = "Merci pour votre message."
document.getElementById("contactForm")
        .addEventListener("submit",function(event){
            event.preventDefault();
            alert(message);
        });
        