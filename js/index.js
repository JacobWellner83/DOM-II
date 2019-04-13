// Your code goes here

//Event 1
// Created an event which returns the altered Alt text as an allert when the intro image is moused over.
let desertBus = document.querySelector('.intro img');
let desertBusAlt = desertBus.alt;

desertBus.addEventListener('mouseover', function(event) {
window.alert(`${desertBusAlt}`)
event.stopPropagation()
});

//Event 2
// Created an event which causes images that are moused over to shift to grayscale and when the mouse leaves them, to disappear.
let contentImages = document.querySelectorAll('img')
contentImages.forEach(img => {
    img.addEventListener('mouseover', function() {
        this.style.filter = 'grayscale(100%)'
        this.style.opacity = 1
    })

    img.addEventListener('mouseleave', function() {
        this.style.filter = 'grayscale(0%)'
        this.style.opacity = 0
    })
})