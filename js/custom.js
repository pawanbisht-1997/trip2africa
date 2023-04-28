const tabBtn = document.querySelectorAll(".tab__btn");
const tabContents = document.querySelectorAll(".tab__item");

tabBtn.forEach(function(element) {
   element.addEventListener("click", openTabs);
});

function openTabs(evt) {
  const btnTarget = evt.currentTarget;
  const item = btnTarget.dataset.item;

   tabContents.forEach(function(item) {
      item.classList.remove("tab__item--active");
   });

   tabBtn.forEach(function(item) {
      item.classList.remove("tab__btn--active");
   });

   document.querySelector(`#${item}`).classList.add("tab__item--active");

   btnTarget.classList.add("tab__btn--active"); 
}


$('.owl-carousel').owlCarousel({
   loop:true,
   margin:10,
   nav:false,
   dots:false,
   autoplay:true,
   dots:true,
   autoplayHoverPause:true,
   responsive:{
       0:{
           items:1
       },
       600:{
           items:1
       },
       1000:{
           items:1
       }
   }
})

// responsive header 
function barBtn() {
   var x = document.getElementById('bar');
   var y = document.getElementById('cross');
   var m = document.getElementById('menu');
   if (x.style.display === 'none') {
     x.style.display = 'block';
   } else {
     x.style.display = 'none';
     y.style.display ='block';
     m.classList.add("menu-open");
   }
 }
//  close btn 
 function crossBtn() {
   var x = document.getElementById('bar');
   var y = document.getElementById('cross');
   var m = document.getElementById('menu');
   if (y.style.display === 'none') {
     y.style.display = 'block';
   } else {
     y.style.display = 'none';
     x.style.display ='block';
     m.classList.remove("menu-open");
  
   }
 }