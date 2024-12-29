let slideIndex = 1;

// Add load event listeners to all images
document.addEventListener('DOMContentLoaded', function() {
    let slides = document.getElementsByClassName("slide");
    for(let slide of slides) {
        let img = slide.querySelector('img');
        img.addEventListener('load', function() {
            slide.classList.remove('loading');
        });
        
        // If image is already cached, remove loading class immediately
        if(img.complete) {
            slide.classList.remove('loading');
        }
    }
    showSlides(slideIndex);
});

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}
