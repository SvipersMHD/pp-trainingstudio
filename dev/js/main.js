let btnBurger = document.querySelector(".burger__wrapper")
let nav = document.querySelector("nav")
let navLink = document.querySelectorAll("nav a")
let classCat = document.querySelectorAll(".class__categ")
let classText = document.querySelectorAll(".class__txt")
var main = document.querySelector(".main");

const overlay = document.createElement("div");
overlay.classList.add("overlay");

// burger menu + nav ///////////////////////////
btnBurger.addEventListener("click", () => {
    btnBurger.classList.toggle("isActive");
    nav.classList.toggle("isActive");
    if (nav.classList.contains("isActive")) {
        // Ajouter la classe qui désactive le scroll
        document.body.classList.add("no-scroll");
        // Ajouter l'overlay et le style pour le filtre gris
        main.appendChild(overlay);
        overlay.addEventListener("click", () => {
            btnBurger.classList.remove("isActive");
            nav.classList.remove("isActive");
            document.body.classList.remove("no-scroll");
            main.removeChild(overlay);
        });
    } else {
        // Enlever la classe qui désactive le scroll et l'overlay
        document.body.classList.remove("no-scroll");
        main.removeChild(overlay);
    }
});
// retire les état active 
navLink.forEach(function(navlien){
    navlien.addEventListener("click", () => {
        btnBurger.classList.remove("isActive")
        nav.classList.remove("isActive")
        document.body.classList.remove('no-scroll');
        main.removeChild(overlay);
    })
})
//////////////////////////////////////////////////////
// classes ///////////////////////////
classCat.forEach(function(classCatUnique,index){
    classCatUnique.addEventListener("click",function(){
        classCat.forEach(function(item) {
            item.classList.remove("isActive");
        });
        classText.forEach(function(classTextUnique){
            classTextUnique.classList.remove("isActive")
        })
        classCatUnique.classList.add("isActive")
        classText[index].classList.add("isActive")
    })
})
//////////////////////////////////////////////////////
// schedules ///////////////////////////
const mondaySpans = document.querySelectorAll('.monday');
mondaySpans.forEach(span => {
    span.style.display = 'block';
});

const days = document.querySelectorAll('.day');
days.forEach(day => {
    day.addEventListener('click', () => {
        const allSpans = document.querySelectorAll('span');
        allSpans.forEach(span => {
            span.style.display = 'none';
        });
        const dayClass = day.classList[0];
        const spans = document.querySelectorAll(`.${dayClass}`);
        spans.forEach(span => {
            span.style.display = 'block';
        });
        days.forEach(day => {
            day.classList.remove('isActive');
        });
        day.classList.add('isActive');
    });
});
//////////////////////////////////////////////////////
// scroll nav 
var header = document.querySelector(".header")
window.addEventListener("scroll", function(){
    
    let windowPos = window.scrollY
    if(windowPos >= 900){
        header.classList.add("isActive") 
    }
    else if(windowPos < 990099){
        header.classList.remove("isActive") 
    }
})
//////////////////////////////////////////////////////
// nav scroll couleur 
const sections = document.querySelectorAll("section:not(.expert)");
const navLinks = document.querySelectorAll(".nav__link");

function highlightNavLink() {
    const currentPos = window.scrollY;
    const pageBottom = document.body.clientHeight - window.innerHeight;
    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (currentPos >= sectionTop - sectionHeight * 0.25 && currentPos < sectionTop + sectionHeight * 0.75) {
            navLinks[index].classList.add("isActive");
        } else {
            navLinks[index].classList.remove("isActive");
        }
    });
    if (currentPos >= pageBottom - 5) {
        navLinks[navLinks.length - 1].classList.add("isActive");
    } else {
        navLinks[navLinks.length - 1].classList.remove("isActive");
    }
}

window.addEventListener("scroll", highlightNavLink);

