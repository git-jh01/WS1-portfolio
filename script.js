let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick =() => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const typed = new Typed('.multiple-text', {
    strings: ['Web Developer', 'Web Designer'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true
  });

  const typed2= new Typed('.multiple-texts', {
    strings: ['Web Developer', 'Web Designer'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true
  });

  function toggleMore(id) {
    var moreText = document.getElementById(id);
    var button = document.querySelector(`button[onclick="toggleMore('${id}')"]`);

    if (moreText.style.display === "none") {
        moreText.style.display = "block";
        button.textContent = "Read Less";  
    } else {
        moreText.style.display = "none";   
        button.textContent = "Read More";  
    }
}

const form = document.querySelector('form');
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const message = document.getElementById("message");


function sendEmail(){
  const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Subject: ${subject.value}<br> Message: ${message.value}`

  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "orallergerald@gmail.com",
    Password : "F4F7E4C758E4EC5059B7EF18A599363DB181",
    To : 'orallergerald@gmail.com',
    From : "orallergerald@gmail.com",
    Subject : subject.value,
    Body : bodyMessage
}).then(
  message => {
    if(message == "OK"){
      Swal.fire({
        title: "Success!",
        text: "Message Sent Successfully!",
        icon: "success"
      });
    }
  }
);
}


form.addEventListener('submit', (e) =>{
  e.preventDefault();

  sendEmail();

});