// Slider
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let slides = document.querySelectorAll(".slide");



function nextImage() {
    

    for (let i = 0; i < slides.length; i++) {
        
        if(slides[i].classList.contains("show")){
            slides[i].classList.remove("show");
            if(i >= slides.length-1){
                slides[0].classList.add("show");
                break;
            }else{
                slides[i+1].classList.add("show");
                break;
            }
        }
    }
}

function prevImage() {    
    for (let i = 0; i < slides.length; i++) {
        if(slides[i].classList.contains("show")){
            slides[i].classList.remove("show");
            
            if(i <= 0){
                slides[slides.length-1].classList.add("show");
                break;
            }else{
                slides[i-1].classList.add("show");
                break;
            }
        }
    }
}

prev.addEventListener("click", prevImage);
next.addEventListener("click", nextImage);

setInterval(nextImage, 2500);


// Modal image

let popupImage = document.querySelector(".publicat-img-wrap");
let popup = document.querySelector(".popup");
let popupI = document.querySelector(".popup-image");

// Show image full screen
popupImage.addEventListener("click", function() {
    popup.classList.add("show");
    document.querySelector("body").classList.add("no-scroll");

    console.log(popup);
});

// Hide image full screen
popup.addEventListener("click", function() {
    popup.classList.remove("show");
    document.querySelector("body").classList.remove("no-scroll");
});

// Click only around image
popupI.addEventListener("click", function(event) {
    event.stopPropagation();
});
