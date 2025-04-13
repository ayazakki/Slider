var row = document.querySelector(".row");
var images = Array.from(document.images);
var slider = document.querySelector(".slider");
var sliderItem = document.querySelector(".slider-item");
var nextBtn = document.querySelector("#nextBtn");
var prevBtn = document.querySelector("#prevBtn");
var closeBtn = document.querySelector("#closeBtn");
var currentSrc;
var currentIndex;
row.addEventListener("click", function (e) {
  if (e.target.tagName == "IMG") {
    currentSrc = e.target.getAttribute("src");
    currentIndex = images.indexOf(e.target);
    sliderItem.style.backgroundImage = `url(${currentSrc})`;
    slider.classList.replace("d-none", "d-flex");
  }
});
nextBtn.addEventListener("click", function () { 
  sliderChange(1)
  
});
prevBtn.addEventListener("click", function () {
  sliderChange(-1)
  
});
function sliderChange(step){
    currentIndex=currentIndex+step
    if (currentIndex == images.length) {
      currentIndex = 0;
    }
    if (currentIndex < 0) {
      currentIndex = images.length - 1;
    }
    currentSrc = images[currentIndex].getAttribute("src");
    sliderItem.style.backgroundImage = `url(${currentSrc})`;

}
closeBtn.addEventListener("click", function () {
  close();
});
document.addEventListener("keydown", function (e) {
  if (e.key == "ArrowRight") {
    currentIndex++;
    if (currentIndex == images.length) {
      currentIndex = 0;
    }
    currentSrc = images[currentIndex].getAttribute("src");
    sliderItem.style.backgroundImage = `url(${currentSrc})`;
  }else if(e.key=="ArrowLeft"){
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = images.length - 1;
    }
    currentSrc = images[currentIndex].getAttribute("src");
    sliderItem.style.backgroundImage = `url(${currentSrc})`;
  }else if(e.key=="Escape"){
    close()
  }
});
function close(){
  slider.classList.replace("d-flex", "d-none");
}
slider.addEventListener("click",function(e){
  if(e.target==slider){
  close()
  }
  
})
