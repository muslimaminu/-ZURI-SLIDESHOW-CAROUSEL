let img = document.getElementById("img");
let imgArray = ['IMG/slide1.png', 'IMG/slide2.png', 'IMG/slide3.png', 'IMG/slide4.png', 'IMG/slide5.png', 'IMG/slide6.png']
let imgIndex = 0;

function slideShow(){
    img.setAttribute('src', imgArray[imgIndex])
    imgIndex++;
    
    if (imgIndex >= imgArray.length){
        imgIndex = 0
    }

}
setInterval(slideShow, 2000);

nextRound() = getElementById("next");
previousRound() = getElementById("prev");

//const icon = document.querySelector("[data-carousel-button]");
//icon.forEach(icon => {
  //  icon.addEventListener("click", () => {
    //    const offset = icon.dataset.carouselButton === "next" ? 1 : -1;
      //  const slides = icon
        //.closest("[data-carousel]")
        //.querySelector("swiper-slide")

 //const activeSlide = slides.querySelector('data-active')
 //let newIndex = [...slides.children].indexOf(activeSlide) + offset

 //if (newIndex < 0) newIndex = slides.children.length - 1
 //if (newIndex >= slides.children.length) newIndex = 0

 //slides.children[newIndex].dataset.active = true
// delete activeSlide.dataset.active
   /// })
//}
//)