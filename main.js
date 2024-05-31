// toogle icon navbar
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

// scroll section link

const sections = document.querySelectorAll('section');
const navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop -150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id')

        if(top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        };
    });

    // sticky navbar
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

// gestion envoie email

const form = document.querySelector('form');
const fullname = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const subject = document.getElementById('sujet');
const message = document.getElementById('message');


function sendEmail () {
    const bodyMessage = `Full Name: ${fullname.value}<br> Email: ${email.value}<br>
                        Phone: ${phone.value}<br> Message: ${message.value}`   

    Email.send({
        SecureToken :"c6a6abff-e65e-492c-9726-1b4c3b8fa57d",
        To : 'splendor_untaken989@simplelogin.com',
        From : "splendor_untaken989@simplelogin.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if(message == "OK") {
            Swal.fire({
                title: "Succes!",
                text: "votre message à bien été envoyé!",
                icon: "success"
              });
        form.reset()      
        }
      }
    );
}


function checkinputs() {
    const items = document.querySelectorAll('.item')
    const error = document.querySelector(".error-message")

    for (const item of items) {
        if(item.value == "") {
           item.classList.add("alert");
           error.style.display = 'block'
            
        item.addEventListener("keyup", () => {
            if(item.value != "") {
                item.classList.remove("alert");
                error.style.display = 'none'          
            }
        } )   
        }
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkinputs();

    if(!fullname.classList.contains("alert") && !email.classList.contains("alert") &&
       !phone.classList.contains("alert") && !subject.classList.contains("alert") && !message.classList.contains("alert")) {
        sendEmail();
       };

    
})

