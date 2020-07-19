//Display slides function
var slideIndex = 1;
displaySlides(slideIndex);

function nextSlide(n) {
    displaySlides(slideIndex += n);
}

function currentSlide (n) {
    displaySlides(slideIndex = n);
}

function displaySlides (n) {
    var i;
    var slides = document.querySelectorAll('.show-slide');
    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slideIndex.length;
    }

    for ( i = 0; i < slideIndex.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex-1].style.display = "block";
}