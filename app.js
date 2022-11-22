// observer

const moma = document.querySelector("#moma-left");
const tate = document.querySelector("#tate-right");
const scissor = document.querySelector("#big-scissor");
const line = document.querySelector("#dott-line");

const secId0 = document.querySelector("#s-introduction");

const textl = document.querySelector("#moma-intro");
const textr = document.querySelector("#tate-intro");

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

/*
// da intro a forbice 

const slider = document.querySelector("#slider");

const sliderOptions = {
    root: null,
    threshold: 0.25,
    rootMargin: "-200px"
};

const sliderObserver = new IntersectionObserver(function(
    entries,
    sliderObserver) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            moma.classList.toggle("hidden2");
            tate.classList.toggle("hidden2");
            scissor.classList.toggle("hidden2");
        } else {
            moma.classList.remove("hidden2");
            tate.classList.remove("hidden2");
            scissor.classList.remove("hidden2");
        }
    });
}, 
sliderOptions);
  
sliderObserver.observe(slider);

const slider2Options = {
    root: null,
    threshold: 0.25,
    rootMargin: "-200px"
};

const slider2Observer = new IntersectionObserver(function(
    entries,
    slider2Observer) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            moma.classList.toggle("show2");
            tate.classList.toggle("show2");
            scissor.classList.toggle("show2");
            moma.classList.remove("moma-animated");
            tate.classList.remove("tate-animated");
            scissor.classList.remove("tiny-scissor");
        } else {
            moma.classList.remove("show2");
            tate.classList.remove("show2");
            scissor.classList.remove("show2");
        }
    });
}, 
slider2Options);
  
slider2Observer.observe(slider);

*/

// da forbice a prima sezione

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
            secId0.classList.toggle("show");
            textl.classList.toggle("text-animated");
            textr.classList.toggle("text-animated");
            
        } else {
            moma.classList.remove("moma-animated");
            tate.classList.remove("tate-animated");
            scissor.classList.remove("tiny-scissor");
            line.classList.remove("dott-line-animated");
            secId0.classList.remove("show");
            textl.classList.remove("text-animated");
            textr.classList.remove("text-animated");
        }
    });
}, 
sectionIntroOptions);
  
sectionIntroObserver.observe(sectionIntro);

const interlude = document.querySelector("#interlude");

const sectionTwoOptions = {
    root: null,
    threshold: 0.25,
    rootMargin: "-110px"
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

// section 3

const par1 = document.querySelector("#par1");
const par2 = document.querySelector("#par2");
const par3 = document.querySelector("#par3");
const par4 = document.querySelector("#par4");

const momaart = document.querySelector("#moma-art");
const tateart = document.querySelector("#tate-art");

const sectionTwo2bOptions = {
    root: null,
    threshold: 0.25,
    rootMargin: "-200px"
};

const sectionTwo2Observer = new IntersectionObserver(function(
    entries,
    sectionTwo2bObserver) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            par1.classList.toggle("hidden");
            par2.classList.toggle("hidden");
            par3.classList.toggle("hidden");
            par4.classList.toggle("hidden");
            sectionOne.classList.toggle("people");
            momaart.classList.toggle("text-animated");
            tateart.classList.toggle("text-animated");
        } else {
            par1.classList.remove("hidden");
            par2.classList.remove("hidden");
            par3.classList.remove("hidden");
            par4.classList.remove("hidden");
            sectionOne.classList.remove("people");
            momaart.classList.remove("text-animated");
            tateart.classList.remove("text-animated");
        }
    });
}, 
sectionTwo2bOptions);
  
sectionTwo2Observer.observe(sectionTwo);



const section2Options = {
    root: null,
    threshold: 0.25,
    rootMargin: "200px"
};

const section2Observer = new IntersectionObserver(function(
    entries,
    section2Observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            momaart.classList.toggle("text-animated");
            tateart.classList.toggle("text-animated");
            
        } else {
            momaart.classList.remove("text-animated");
            tateart.classList.remove("text-animated");
        }
    });
}, 
section2Options);
  
section2Observer.observe(sectionTwo);

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
  
sectionArtwoksObserver.observe(sectionArtwoks);

*/


// PureCounters 

// PC for visitors

new PureCounter({
    selector: ".pc1", // HTML query selector for spesific element
  
    start: 0, // Starting number [uint]
    end: 1160686, // End number [uint]
    duration: 3.5, // The time in seconds for the animation to complete [seconds]
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
    selector: ".pc2", // HTML query selector for spesific element
  
    start: 0, // Starting number [uint]
    end: 1156037, // End number [uint]
    duration: 3.5, // The time in seconds for the animation to complete [seconds]
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
    end: 140848, // End number [uint]
    duration: 3, // The time in seconds for the animation to complete [seconds]
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
    end: 69201, // End number [uint]
    duration: 3, // The time in seconds for the animation to complete [seconds]
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