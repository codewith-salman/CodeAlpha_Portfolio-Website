/* ----- NAVIGATION BAR FUNCTION ----- */

function myMenuFunction(){
  var menuBtn = document.getElementById("myNavMenu");

  if(menuBtn.className === "nav-menu"){
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */

window.onscroll = function() {headerShadow()};

function headerShadow() {
  const navHeader =document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";

  } else {

    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";

  }
}


/* ----- TYPING EFFECT ----- */

var typingEffect = new Typed(".typedText",{
  strings : ["Designer","Developer"],
  loop : true,
  typeSpeed : 100, 
  backSpeed : 80,
  backDelay : 2000
})

/** -- Hire BUtton Opening Gmail */

document.getElementById("hireMeBtn").addEventListener("click", function() {
  const gmailUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=msalmanwebdev@gmail.com&su=Exciting%20Job%20Opportunity%20-%20Let's%20Work%20Together!&body=Hello%20Salman,%0A%0AI%20hope%20you're%20doing%20well.%20I%20came%20across%20your%20work%20and%20was%20really%20impressed%20by%20your%20skills.%0A%0AI%20would%20love%20to%20discuss%20an%20opportunity%20to%20collaborate%20with%20you.%0A%0APlease%20let%20me%20know%20a%20convenient%20time%20to%20connect.%20Looking%20forward%20to%20your%20response.%0A%0ABest%20regards,%0A%5BYour%20Name%5D%0A%5BYour%20Company%5D";

  window.open(gmailUrl, "_blank", "width=800,height=600,noopener,noreferrer");
});

/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */

const sr = ScrollReveal({
      origin: 'top',
      distance: '80px',
      duration: 2000,
      reset: true     
})

/* -- HOME -- */

sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})


/* -- PROJECT BOX -- */

sr.reveal('.project-box',{interval: 200})

/* -- HEADINGS -- */

sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */

const srLeft = ScrollReveal({
origin: 'left',
distance: '80px',
duration: 2000,
reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

/* -- ABOUT SKILLS & FORM BOX -- */

const srRight = ScrollReveal({
origin: 'right',
distance: '80px',
duration: 2000,
reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})



/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
const scrollY = window.scrollY;

sections.forEach(current =>{
  const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
    sectionId = current.getAttribute('id')

  if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

  }  else {

    document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

  }
})
}

window.addEventListener('scroll', scrollActive)

/** -- Scroll Button Animation -- */

 window.addEventListener("scroll", function() {
        let scrollBtn = document.querySelector(".scroll-btn");
        if (window.scrollY > 100) { // If scrolled more than 100px, hide it
            scrollBtn.classList.add("scroll-hidden");
        } else {
            scrollBtn.classList.remove("scroll-hidden");
        }
});