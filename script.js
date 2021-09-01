'use strict';

let openButton = document.querySelector('.nav-link-btn');
let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');
let closeButton = document.querySelector('.form-close-btn');
// let slideOne = document.querySelector('.slide-1');
// let slideTwo = document.querySelector('.slide-2');
// let slideThee = document.querySelector('.slide-3');
let rightButton = document.querySelector('.btn1');
let backButton = document.querySelector('.btn2');
let slides = document.querySelectorAll('.slide');

openButton.addEventListener('click' , function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden')
})

closeButton.addEventListener('click' , ()=> {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');

})

let curSlide = 0;
let maxSlide=slides.length;

rightButton.addEventListener('click' , function(){

  if (curSlide === maxSlide-1) {
    curSlide=0;
  }
  else{
  curSlide++; }
  slides.forEach((s , i ) => 
   ( s.style.transform = `translateX(${100*(i-curSlide)}%)` ) )
}
);

backButton.addEventListener('click' , function(){

  if (curSlide === maxSlide-1) {
    curSlide=0;
  }
  else{
  curSlide--; }
  slides.forEach((s , i ) => 
   ( s.style.transform = `translateX(${100*(i+curSlide)}%)` ) )
}
);