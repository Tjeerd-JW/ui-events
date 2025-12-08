/* De eerste interactie is al voor jullie uitgewerkt
   Als je op het 2e linkje klikt (Design), springt deze omhoog */

// Stap 1: selecteer het Design linkje, en sla deze op in een variabele
let designLink = document.querySelector('a[href="#design"]')

// Stap 2: voeg de (click) event listener toe aan de link, met een callback functie
// In dit geval wordt de jumpHandler functie aangeroepen, zodra je op het linkje klikt
designLink.addEventListener('click', jumpHandler)

// Deze jumpHandler functie staat klaar voor als we 'm aanroepen; deze wordt dus
// _niet_ meteen bij het laden van de pagina aangeroepen
function jumpHandler() {
  // Stap 3: toggle een class op het element (zodra er dus op een link wordt geklikt)
  designLink.classList.toggle('jump')
}

// Extraatje, waardoor de class weer weggehaald wordt zodra de animatie afgelopen is
// Dit is trouwens geen UIEvent, maar een AnimationEvent
designLink.addEventListener('animationend', jumpHandler)




// Ga zelf verder met de overige elementen, aan de hand van de instructies
// Maak bijvoorbeeld een scale animatie als je op de Frontend link klikt

// Stap 1: querySelector
// let scaleLink = document.querySelector...

// Stap 2: addEventListener
// scaleLink.addEventListener...

// Stap 3: (Callback functie met) classList (.toggle(), .add(), etc.)
// scaleLink.classList.toggle...


// Frontend
let frontendLink = document.querySelector('a[href="#frontend"]')

frontendLink.addEventListener('click', frontendHandler);

function frontendHandler() {
  frontendLink.classList.toggle('frontend')

}

frontendLink.addEventListener('animationend', frontendHandler)

// and

let andLink = document.querySelector('a[href="#and"]')
andLink.addEventListener('click', andHandler)

function andHandler() {
  andLink.classList.toggle('translate')
}

andLink.addEventListener('animationend', andHandler)

// development
let devLink = document.querySelector('a[href="#development"]')
devLink.addEventListener('dblclick', devHandler)

function devHandler() {
  devLink.classList.toggle('shake')
}

devLink.addEventListener('animationend', devHandler)

// focus
let focusLink = document.querySelector('a[href="#sprint-5"]')
focusLink.addEventListener('focusin', focusInHandler)

focusLink.addEventListener('focusout', focusOutHandler)

function focusInHandler() {
  focusLink.classList.add('inFocus')
}

function focusOutHandler() {
  focusLink.classList.remove('inFocus')
  focusLink.classList.toggle('outFocus')
}

focusLink.addEventListener('animationend', focusOutHandler)

// fix
let fixLink = document.querySelector('a[href="#fix"]')
fixLink.addEventListener('mouseover', fixOnHandler)

fixLink.addEventListener('click', fixOutHandler)


function fixOnHandler() {
  fixLink.textContent = "Je fixt helemaal niets"
}

function fixOutHandler() {
fixLink.textContent = "Fix"

}

// the
let theLink = document.querySelector('a[href="#the"]')
theLink.addEventListener('mouseout', theHandler)

function theHandler() {
  theLink.classList.toggle('rotate')
}

theLink.addEventListener('animationend', theHandler)

// flow

let flowLink = document.querySelector('a[href="#flow"]')
flowLink.addEventListener('mousedown', flowDownHandler)
flowLink.addEventListener('mouseup', flowUpHandler)
flowLink.addEventListener('mouseout', flowUpHandler)
flowLink.addEventListener('mouseleave', flowUpHandler)

let intervallie;
let progress = 0;

function flowDownHandler() {
  intervallie = setInterval(() => {
    if (progress >= 1) {
      return
    }
    progress = progress + 0.1
    console.log(progress)
    flowLink.style.setProperty('--progress', progress)
  }, 100)
}

function flowUpHandler() {
  console.log("up")
  progress = 0
  clearInterval(intervallie);
  intervallie = null;
  flowLink.style.setProperty('--progress', progress)

}

// User