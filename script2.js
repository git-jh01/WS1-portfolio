let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const typed = new Typed('.typed-text', {
    strings: ['{ Web Developer }'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true,
});

const typed2 = new Typed('.multiple-texts', {
    strings: ['{ Web Developer }'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true
  });

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var params = {
        from_name: document.getElementById("fullName").value,
        email_id: document.getElementById("email_id").value,
        message: document.getElementById("message").value
    };

    emailjs.send("service_c9a0aam", "template_alkqg0g", params)
    .then(function(response) {
        alert("Success! Your message has been sent. Status: " + response.status);
        document.getElementById('contactForm').reset();
    }, function(error) {
        alert("Failed to send message. Please try again. Error: " + error.text);
    });
});
