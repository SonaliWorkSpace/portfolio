let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-x');
    navbar.classList.toggle('active')
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('fa-x');
    navbar.classList.remove('active');
};

ScrollReveal({
distance: '80px',
duration: 2000,
delay: 200,

});

ScrollReveal().reveal('.home-content, heading', {origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact-form' , {origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right' });



const typed = new Typed('.multiple-text' ,  {
    strings: ['Frontend Developer' , 'Web Designer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
})
   



                             /*************LINKING PROJECTS ***********/




// Select project elements
let project1 = document.querySelector('#project1');
let project2 = document.querySelector('#project2');
let project3 = document.querySelector('#project3');
let project4 = document.querySelector('#project4');
let project5 = document.querySelector('#project5');


// Select project links

let project1Link = project1.querySelector('a');
let project2Link = project2.querySelector('a');
let project3Link = project3.querySelector('a');
let project4Link = project4.querySelector('a');
let project5Link = project5.querySelector('a');


// Define URLs for each project
let project1URL = 'https://sonaliworkspace.github.io/Cafe.Pulse/';
let project2URL = 'https://sonaliworkspace.github.io/Move.pulse/'; 
let project3URL = 'https://sonaliworkspace.github.io/Style-Pulse/'; 
let project4URL = 'https://sonaliworkspace.github.io/Shop-Pulse/';
let project5URL = 'https://sonaliworkspace.github.io/Play-Tic-tac-toe-/';


// Update project links' href attributes
project1Link.href = project1URL;
project2Link.href = project2URL;
project3Link.href = project3URL;
project4Link.href = project4URL
project5Link.href = project5URL;





                                /*************LINKING SOCIAL MEDIA ***********/

/*************LINKING SOCIAL MEDIA ***********/

// Select social media icon elements
let instagramLink = document.querySelector('.social-media a:nth-of-type(1)');
let linkedinLink = document.querySelector('.social-media a:nth-of-type(2)');
let githubLink = document.querySelector('.social-media a:nth-of-type(3)');
let telegramLink = document.querySelector('.social-media a:nth-of-type(4)');
// let gmailLink = document.querySelector('.social-media a:nth-of-type(5)');

// Define URLs for each social media platform
let instagramURL = 'https://www.instagram.com/_sonali_m_ig/';
let linkedinURL = 'https://www.linkedin.com/in/sonali-mohapatra-3297182ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app';
let githubURL = 'https://github.com/SonaliWorkSpace';
let telegramURL = 'https://t.me/sonaliworkspace';
// let gmailURL = 'mailto:sonalimw20@gmail.com';

// Assign URLs to the elements
if (instagramLink) instagramLink.href = instagramURL;
if (linkedinLink) linkedinLink.href = linkedinURL;
if (githubLink) githubLink.href = githubURL;
if (telegramLink) telegramLink.href = telegramURL;
// if (gmailLink) gmailLink.href = gmailURL;
