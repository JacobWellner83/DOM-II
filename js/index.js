// Your code goes here

//Event 1- Mouseover
// Created an event which returns the altered Alt text as an allert when the intro image is moused over.
let desertBus = document.querySelector('.intro img');
let desertBusAlt = desertBus.alt;

desertBus.addEventListener('mouseover', function(event) {
window.alert(`${desertBusAlt}`)
event.stopPropagation()
});

//Event 2- Mouseleave
// Created an event which causes images that are moused over to shift to grayscale and when the mouse leaves them, to disappear.
let contentImages = document.querySelectorAll('img');
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

//Event 3- Scroll
// Created an event which returns an alert when the user scrolls to the bottom of the page.
window.addEventListener('scroll', () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      alert(`That's all there is.`)
    }
})

//Event 4- Load
//Creates an event which produces an alert on initiation.
window.addEventListener('load', function(event) {
    alert('Why did you reload me, Dave?');
})   

//Event 5- Keydown
//Creates an event in which if a key is pressed down an alert populates.
window.addEventListener('keydown', function(event){
    alert('You pressed P? Why? You just dont listen.');
})