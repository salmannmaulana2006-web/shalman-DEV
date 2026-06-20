/* ==================================
   LOADING SCREEN
================================== */

window.addEventListener("load", () => {

    setTimeout(() => {

        const loader = document.getElementById("loader");

        if(loader){
            loader.style.opacity = "0";

            setTimeout(() => {
                loader.style.display = "none";
            }, 500);
        }

    }, 4000);

});


/* ==================================
   HERO TYPING ANIMATION
================================== */

const typingElement = document.getElementById("typing-text");

const texts = [
    "Mahasiswa IT semester 2",
    "Web Developer",
    "Pengajar Al-Qur'an",
    "NIM:2511080006",
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter(){

    if(!typingElement) return;

    const currentText = texts[textIndex];

    if(!isDeleting){

        typingElement.textContent =
        currentText.substring(0, charIndex + 1);

        charIndex++;

        if(charIndex === currentText.length){

            isDeleting = true;

            setTimeout(typeWriter, 1500);

            return;
        }

    }else{

        typingElement.textContent =
        currentText.substring(0, charIndex - 1);

        charIndex--;

        if(charIndex === 0){

            isDeleting = false;

            textIndex++;

            if(textIndex >= texts.length){
                textIndex = 0;
            }

        }

    }

    setTimeout(
        typeWriter,
        isDeleting ? 50 : 100
    );
}

typeWriter();


/* ==================================
   DARK / LIGHT MODE
================================== */

const themeToggle =
document.getElementById("themeToggle");

if(themeToggle){

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");

        const icon =
        themeToggle.querySelector("i");

        if(document.body.classList.contains("light-mode")){

            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");

        }else{

            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");

        }

    });

}


/* ==================================
   CURSOR GLOW EFFECT
================================== */

const cursorGlow =
document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {

    if(cursorGlow){

        cursorGlow.style.left =
        e.clientX + "px";

        cursorGlow.style.top =
        e.clientY + "px";

    }

});


/* ==================================
   SKILL BAR ANIMATION
================================== */

let skillAnimated = false;

function animateSkills(){

    const skillSection =
    document.querySelector("#skills");

    if(!skillSection) return;

    const sectionTop =
    skillSection.getBoundingClientRect().top;

    const trigger =
    window.innerHeight - 150;

    if(sectionTop < trigger && !skillAnimated){

        skillAnimated = true;

        const html =
        document.querySelector(".html");

        const css =
        document.querySelector(".css");

        const js =
        document.querySelector(".js");

        const github =
        document.querySelector(".github");

        const quran =
        document.querySelector(".quran");

        if(html) html.style.width = "85%";
        if(css) css.style.width = "80%";
        if(js) js.style.width = "70%";
        if(github) github.style.width = "75%";
        if(quran) quran.style.width = "95%";

    }

}

window.addEventListener(
    "scroll",
    animateSkills
);


/* ==================================
   SCROLL REVEAL
================================== */

const revealElements =
document.querySelectorAll(
    ".section, .project-card, .exp-card, .hobby-card"
);

revealElements.forEach((el) => {
    el.classList.add("reveal");
});

function revealOnScroll(){

    const reveals =
    document.querySelectorAll(".reveal");

    reveals.forEach((element) => {

        const windowHeight =
        window.innerHeight;

        const elementTop =
        element.getBoundingClientRect().top;

        const revealPoint = 120;

        if(elementTop < windowHeight - revealPoint){

            element.classList.add("active");

        }

    });

}

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();


/* ==================================
   DOSEN TYPING EFFECT
================================== */

const mentorElement =
document.getElementById("mentorTyping");

if(mentorElement){

    const mentorName =
    "Yusuf Abdilhaq, S.Kom.";

    mentorElement.textContent = "";

    let mentorIndex = 0;

    function mentorTyping(){

        if(mentorIndex < mentorName.length){

            mentorElement.textContent +=
            mentorName.charAt(mentorIndex);

            mentorIndex++;

            setTimeout(
                mentorTyping,
                120
            );

        }

    }

    setTimeout(
        mentorTyping,
        1500
    );

}


/* ==================================
   ACTIVE NAVBAR LINK
================================== */

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(
    ".nav-links a"
);

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop =
        section.offsetTop - 150;

        const sectionHeight =
        section.clientHeight;

        if(
            pageYOffset >= sectionTop &&
            pageYOffset < sectionTop + sectionHeight
        ){
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if(
            link.getAttribute("href") ===
            "#" + current
        ){
            link.classList.add("active");
        }

    });

});


/* ==================================
   SMOOTH BUTTON HOVER
================================== */

const buttons =
document.querySelectorAll(
    ".btn-primary, .btn-secondary"
);

buttons.forEach((btn) => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform =
        "translateY(-5px)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform =
        "translateY(0px)";

    });

});


/* ==================================
   FLOATING SOCIAL ICONS
================================== */

const socialButtons =
document.querySelectorAll(".social-btn");

socialButtons.forEach((button) => {

    button.addEventListener("mouseenter", () => {

        button.style.transform =
        "translateY(-10px) scale(1.1)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform =
        "translateY(0px) scale(1)";

    });

});


/* ==================================
   STARTUP FUNCTIONS
================================== */

animateSkills();
revealOnScroll();

console.log(
    "SHALMAN.DEV Portfolio Loaded Successfully 🚀"
);