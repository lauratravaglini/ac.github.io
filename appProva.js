// da forbice a prima sezione

const moma = document.querySelector("#moma-left");
const tate = document.querySelector("#tate-right");
const scissor = document.querySelector("#big-scissor");
const line = document.querySelector("#dott-line");
const logo = document.querySelector("#intro-logo");

const secId0 = document.querySelector("#s-introduction");

const sectionIntro = document.querySelector("#section1");

const sectionIntroOptions = {
    root: null,
    threshold: 0.25,
    rootMargin: "-100px"
};

const sectionIntroObserver = new IntersectionObserver(function(
    entries,
    sectionIntroObserver) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            moma.classList.toggle("moma-animated");
            tate.classList.toggle("tate-animated");
            scissor.classList.toggle("tiny-scissor");
            line.classList.toggle("dott-line-animated");
            secId0.classList.toggle("show");     
        } else {
            moma.classList.remove("moma-animated");
            tate.classList.remove("tate-animated");
            scissor.classList.remove("tiny-scissor");
            line.classList.remove("dott-line-animated");
            secId0.classList.remove("show");
        }
    });
}, 
sectionIntroOptions);
  
sectionIntroObserver.observe(sectionIntro);