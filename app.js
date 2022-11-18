// observer

const moma = document.querySelector("#moma-left");
const tate = document.querySelector("#tate-right");
const scissor = document.querySelector("#big-scissor");
const line = document.querySelector("#dott-line");

const textl = document.querySelector("#text-left");
const textr = document.querySelector("#text-right");

const sectionIntro = document.querySelector("#section-intro");

const sectionOne = document.querySelector("#section1");
const sectionTwo = document.querySelector("#section2");

const sectionArtwoks = document.querySelector("#artworks1");
const sectionArtists = document.querySelector("#artists1");
const sectionAcquisition = document.querySelector("#acquisition1");
const sectionCombo = document.querySelector("#combine");
const sectionGenderGap = document.querySelector("#gendergap");
const sectionNat = document.querySelector("#nationality");
const sectionCallForAction = document.querySelector("#cfa");

const sections = document.querySelectorAll("section");

const sectionIntroOptions = {
    root: null,
    threshold: 0.25,
    rootMargin: "-200px"
};

const sectionIntroObserver = new IntersectionObserver(function(
    entries,
    sectionIntroObserver) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            moma.classList.toggle("moma-animated");
            tate.classList.toggle("tate-animated");
            scissor.classList.toggle("tiny-scissor");
            line.classList.toggle("dott-line-animated");
            textl.classList.toggle("text-animated");
            textr.classList.toggle("text-animated");
            
        } else {
            moma.classList.remove("moma-animated");
            tate.classList.remove("tate-animated");
            scissor.classList.remove("tiny-scissor");
            line.classList.remove("dott-line-animated");
            textl.classList.remove("text-animated");
            textr.classList.remove("text-animated");
        }
    });
}, 
sectionIntroOptions);
  
sectionIntroObserver.observe(sectionIntro);


const sectionTwoOptions = {
    root: null,
    threshold: 0.25,
    rootMargin: "-150px"
};

const sectionTwoObserver = new IntersectionObserver(function(
    entries,
    sectionTwoObserver) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            moma.classList.toggle("hidden");
            tate.classList.toggle("hidden");
        } else {
            moma.classList.remove("hidden");
            tate.classList.remove("hidden");
        }
    });
}, 
sectionTwoOptions);
  
sectionTwoObserver.observe(sectionTwo);



/*

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
  
sectionArtwoksObserver.observe(sectionArtwoks);*/


// PureCounters 

// PC for visitors

new PureCounter({
    // Setting that can't' be overriden on pre-element
    selector: ".pc1", // HTML query selector for spesific element
  
    // Settings that can be overridden on per-element basis, by `data-purecounter-*` attributes:
    start: 0, // Starting number [uint]
    end: 1160686, // End number [uint]
    duration: 1, // The time in seconds for the animation to complete [seconds]
    delay: 10, // The delay between each iteration (the default of 10 will produce 100 fps) [miliseconds]
    once: true, // Counting at once or recount when the element in view [boolean]
    pulse: false, // Repeat count for certain time [boolean:false|seconds]
    decimals: 0, // How many decimal places to show. [uint]
    legacy: true, // If this is true it will use the scroll event listener on browsers
    filesizing: false, // This will enable/disable File Size format [boolean]
    currency: false, // This will enable/disable Currency format. Use it for set the symbol too [boolean|char|string]
    formater: "us-US", // Number toLocaleString locale/formater, by default is "en-US" [string|boolean:false]
    separator: false, // This will enable/disable comma separator for thousands. Use it for set the symbol too [boolean|char|string]
  });
  
  new PureCounter({
    // Setting that can't' be overriden on pre-element
    selector: ".pc2", // HTML query selector for spesific element
  
    // Settings that can be overridden on per-element basis, by `data-purecounter-*` attributes:
    start: 0, // Starting number [uint]
    end: 1156037, // End number [uint]
    duration: 1, // The time in seconds for the animation to complete [seconds]
    delay: 10, // The delay between each iteration (the default of 10 will produce 100 fps) [miliseconds]
    once: true, // Counting at once or recount when the element in view [boolean]
    pulse: false, // Repeat count for certain time [boolean:false|seconds]
    decimals: 0, // How many decimal places to show. [uint]
    legacy: true, // If this is true it will use the scroll event listener on browsers
    filesizing: false, // This will enable/disable File Size format [boolean]
    currency: false, // This will enable/disable Currency format. Use it for set the symbol too [boolean|char|string]
    formater: "us-US", // Number toLocaleString locale/formater, by default is "en-US" [string|boolean:false]
    separator: false, // This will enable/disable comma separator for thousands. Use it for set the symbol too [boolean|char|string]
  });

  // PC for artworks

  new PureCounter({
    // Setting that can't' be overriden on pre-element
    selector: ".pc3", // HTML query selector for spesific element
  
    // Settings that can be overridden on per-element basis, by `data-purecounter-*` attributes:
    start: 0, // Starting number [uint]
    end: 1160686, // End number [uint]
    duration: 1, // The time in seconds for the animation to complete [seconds]
    delay: 10, // The delay between each iteration (the default of 10 will produce 100 fps) [miliseconds]
    once: true, // Counting at once or recount when the element in view [boolean]
    pulse: false, // Repeat count for certain time [boolean:false|seconds]
    decimals: 0, // How many decimal places to show. [uint]
    legacy: true, // If this is true it will use the scroll event listener on browsers
    filesizing: false, // This will enable/disable File Size format [boolean]
    currency: false, // This will enable/disable Currency format. Use it for set the symbol too [boolean|char|string]
    formater: "us-US", // Number toLocaleString locale/formater, by default is "en-US" [string|boolean:false]
    separator: false, // This will enable/disable comma separator for thousands. Use it for set the symbol too [boolean|char|string]
  });
  
  new PureCounter({
    // Setting that can't' be overriden on pre-element
    selector: ".pc4", // HTML query selector for spesific element
  
    // Settings that can be overridden on per-element basis, by `data-purecounter-*` attributes:
    start: 0, // Starting number [uint]
    end: 1156037, // End number [uint]
    duration: 1, // The time in seconds for the animation to complete [seconds]
    delay: 10, // The delay between each iteration (the default of 10 will produce 100 fps) [miliseconds]
    once: true, // Counting at once or recount when the element in view [boolean]
    pulse: false, // Repeat count for certain time [boolean:false|seconds]
    decimals: 0, // How many decimal places to show. [uint]
    legacy: true, // If this is true it will use the scroll event listener on browsers
    filesizing: false, // This will enable/disable File Size format [boolean]
    currency: false, // This will enable/disable Currency format. Use it for set the symbol too [boolean|char|string]
    formater: "us-US", // Number toLocaleString locale/formater, by default is "en-US" [string|boolean:false]
    separator: false, // This will enable/disable comma separator for thousands. Use it for set the symbol too [boolean|char|string]
  });
  
// End PureCounters  