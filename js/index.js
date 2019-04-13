// Your code goes here

//Event 1
// Created which returns the altered Alt text as an allert when the intro image is moused over.
let desertBus = document.querySelector('.intro img');
let desertBusAlt = desertBus.alt;

desertBus.addEventListener('mouseover', function(event) {
window.alert(`${desertBusAlt}`)
event.stopPropagation()
});
