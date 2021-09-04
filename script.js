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


// console.log(maxSlide);

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

let backCurslide = slides.length-1;
let minSlide = 0;

backButton.addEventListener('click' , function(){

  if (backCurslide === 0) {
    backCurslide= slides.length-1 ;

  }
  else{
    backCurslide--;
  }
 
  
  slides.forEach((s , i ) => 
   ( s.style.transform = `translateX(${(100*(i-backCurslide))}%)` ) )
  //  console.log(i);
}
);

// OPERATION TAB //
let cont1 = document.querySelector('.operation-content-1');
let cont2 = document.querySelector('.operation-content-2');
let cont3 = document.querySelector('.operation-content-3');

let tab3 = document.querySelector('.operation-tab-3');
let tab2 = document.querySelector('.operation-tab-2');
let tab1 = document.querySelector('.operation-tab-1');

tab3.addEventListener('click' , function(){

  cont1.classList.remove('operations-content-active')
  cont2.classList.remove('operations-content-active')
  cont3.classList.add('operations-content-active')
})

tab2.addEventListener('click' , function(){

  cont1.classList.remove('operations-content-active')
  cont2.classList.add('operations-content-active')
  cont3.classList.remove('operations-content-active')
})

tab1.addEventListener('click' , function(){

  cont2.classList.remove('operations-content-active')
  cont3.classList.remove('operations-content-active')
  cont1.classList.add('operations-content-active')
})

let buttonScrollto = document.querySelector('.btnScroll');
let sec1 = document.querySelector('.section-1');
let nava = document.querySelector('.nav');

buttonScrollto.addEventListener('click' , function(e){
  // e.preventDefault;
  const cordsec1 = sec1.getBoundingClientRect();
  console.log(e.target.getBoundingClientRect()); 
  console.log(cordsec1);

  console.log(`x/y: ${window.pageXOffset}/${window.pageYOffset}`);

  // window.scrollTo (
  //  { left : (cordsec1.left +window.pageXOffset) ,
  //   top : ( cordsec1.top + window.pageYOffset),
  //   behavior : "smooth"
  //  }
  // );

  sec1.scrollIntoView({behavior:"smooth"});

})

let cordsec1 = sec1.getBoundingClientRect();
window.addEventListener('scroll' , function () {

  console.log(cordsec1);
  
  if (window.scrollY >= cordsec1.top ){ 
    nava.classList.add('sticky')}
  else {nava.classList.remove('sticky')
  }
})
