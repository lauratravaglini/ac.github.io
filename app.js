// observer

const moma = document.querySelector("#moma-left");
const tate = document.querySelector("#tate-right");
const scissor = document.querySelector("#big-scissor");
const line = document.querySelector("#dott-line");

const textl = document.querySelector("#textl");
const textr = document.querySelector("#textr");

const sectionOne = document.querySelector("#section-intro");
const sectionArtwoks = document.querySelector("#artworks1");
const sectionArtists = document.querySelector("#artists1");
const sectionAcquisition = document.querySelector("#acquisition1");
const sectionCombo = document.querySelector("#combine");
const sectionGenderGap = document.querySelector("#gendergap");
const sectionNat = document.querySelector("#nationality");
const sectionCallForAction = document.querySelector("#cfa");

const sections = document.querySelectorAll("section");

const sectionOneOptions = {
    root: null,
    threshold: 0.25,
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

const sectionArtworksOptions = {
    root: null,
    threshold: 0.25,
    rootMargin: "-150px"
};

const sectionArtwoksObserver = new IntersectionObserver(function(
    entries,
    sectionArtwoksObserver) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            scissor.classList.toggle("tiny-scissor-after");
        } else {
            scissor.classList.remove("tiny-scissor-after");
        }
    });
}, 
sectionArtwoksOptions);
  
sectionArtwoksObserver.observe(sectionArtwoks);