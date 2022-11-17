// observer

const moma = document.querySelector("#moma-left");
const tate = document.querySelector("#tate-right");
const scissor = document.querySelector("#big-scissor");
const line = document.querySelector("#dott-line");
const sectionOne = document.querySelector(".section-intro");
const seections = document.querySelectorAll("section");

const sectionOneOptions = {
    root: null,
    threshold: 0,
    rootMargin: "-150px"
};

const sectionOneObserver = new IntersectionObserver(function(
    entries,
    sectionOneObserver) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            moma.classList.toggle("moma-animated");
            tate.classList.toggle("tate-animated");
            scissor.classList.toggle("tiny-scissor");
            line.classList.toggle("dott-line-animated");
        } else {
            moma.classList.remove("moma-animated");
            tate.classList.remove("tate-animated");
            scissor.classList.remove("tiny-scissor");
            line.classList.remove("dott-line-animated");
        }
    });
}, 
sectionOneOptions);
  
sectionOneObserver.observe(sectionOne);