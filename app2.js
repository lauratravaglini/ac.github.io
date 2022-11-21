// PureCounters 

// PC for visitors

new PureCounter({
    selector: ".pc1", // HTML query selector for spesific element
  
    start: 0, // Starting number [uint]
    end: 1160686, // End number [uint]
    duration: 0.5, // The time in seconds for the animation to complete [seconds]
    delay: 5, // The delay between each iteration (the default of 10 will produce 100 fps) [miliseconds]
    once: false, // Counting at once or recount when the element in view [boolean]
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
    duration: 0.5, // The time in seconds for the animation to complete [seconds]
    delay: 5, // The delay between each iteration (the default of 10 will produce 100 fps) [miliseconds]
    once: false, // Counting at once or recount when the element in view [boolean]
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
    duration: 2, // The time in seconds for the animation to complete [seconds]
    delay: 5, // The delay between each iteration (the default of 10 will produce 100 fps) [miliseconds]
    once: false, // Counting at once or recount when the element in view [boolean]
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
    duration: 2, // The time in seconds for the animation to complete [seconds]
    delay: 5, // The delay between each iteration (the default of 10 will produce 100 fps) [miliseconds]
    once: false, // Counting at once or recount when the element in view [boolean]
    pulse: false, // Repeat count for certain time [boolean:false|seconds]
    decimals: 0, // How many decimal places to show. [uint]
    legacy: true, // If this is true it will use the scroll event listener on browsers
    filesizing: false, // This will enable/disable File Size format [boolean]
    currency: false, // This will enable/disable Currency format. Use it for set the symbol too [boolean|char|string]
    formater: "us-US", // Number toLocaleString locale/formater, by default is "en-US" [string|boolean:false]
    separator: false, // This will enable/disable comma separator for thousands. Use it for set the symbol too [boolean|char|string]
  });
  
// End PureCounters  

// Observer

const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -250px 0px"
  };
  
  const appearOnScroll = new IntersectionObserver(function(
    entries,
    appearOnScroll
  ) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("appear");
        appearOnScroll.unobserve(entry.target);
      }
    });
  },
  appearOptions);
  
  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
  
  sliders.forEach(slider => {
    appearOnScroll.observe(slider);
  });

// da forbice a prima sezione

const moma = document.querySelector("#moma-left");
const tate = document.querySelector("#tate-right");
const scissor = document.querySelector("#big-scissor");
const line = document.querySelector("#dott-line");

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

