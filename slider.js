//declraing necessary variables for the first slider
var images = document.getElementById("slider1").querySelectorAll("img");
var nextButton = document.getElementsByClassName("nextImg");
var prevButton = document.getElementsByClassName("prevImg");
var row = document.querySelector(".row");
var currentImg = 0;

//declraing necessary variables for the second slider
var images2 = document.getElementById("slider2").querySelectorAll("img");
var prevImg2 = document.querySelector(".prevImg2");
var nextImg2 = document.querySelector(".nextImg2");
var row = document.querySelector(".row");
var offSet = 0;

for(var i = 0; i < images2.length; i++){
    images2[i].style.width = "250px";
    console.log(images2[i].clientWidth);
    
}

nextButton[0].addEventListener("click", function () {
    images[currentImg].classList.remove("activeImg")
    console.log(currentImg);
    currentImg++;
    console.log(currentImg);
    if (currentImg == images.length) {
        currentImg = 0;
    }
    console.log(currentImg);
    images[currentImg].classList.add("activeImg")
});

prevButton[0].addEventListener("click", function () {
    images[currentImg].classList.toggle("activeImg")
    currentImg--;
    if (currentImg < 0) {
        currentImg = images.length - 1;
    }
    images[currentImg].classList.toggle("activeImg")
});



nextImg2.addEventListener("click", function () {
    offSet += images2[0].clientWidth;
    console.log(offSet);
    console.log(images2.length * images2[0].clientWidth);
    console.log(images2[0].clientWidth);
    if (offSet == images2.length * images2[0].clientWidth) {
        offSet = 0;
    }
    row.style.right = offSet + "px";
});
prevImg2.addEventListener("click", function () {
    if (offSet == 0) {
        offSet = images2.length * images2[0].clientWidth;
    }
    offSet -= images2[0].clientWidth;
    console.log(offSet);
    row.style.right = offSet + "px";
});
