// var slideIndex;
// function showSlides(n){
//     var i;
//     var slides =  document.getElementsByClassName("item-cloned1");  
// var linkimg = [
//         '<img src="./Image/screen-1.jpg" alt>',
//         '<img src="./Image/screenshot2.jpg" alt>',
//         '<img src="./Image/screenshot3.jpg" alt>',
//         '<img src="./Image/screenshot4.jpg" alt>',
//         '<img src="./Image/screenshot5.jpg" alt>',
//     ]
// var modresult = n % 5;
//     for(i = 0; i <= slides.length - 1; i++){
//         slides[i].innerHTML = linkimg[(i+modresult) % 5];
//     }
// }
// slideIndex = 0;  

// var clicknext = document.querySelector('.next');
//     clicknext.onclick = function(){
//         slideIndex++;
//         showSlides((slideIndex % 5 + 5) % 5 );
//     }
// var clickback = document.querySelector('.prev');
//     clickback.onclick = function(){
//         slideIndex--;
//         showSlides((slideIndex % 5 + 5) % 5 );
// }

// var draggable = function(){
//     var slider = document.querySelector('.stage-outer');
//     var innerslider = document.querySelector('.stage');
//     var pressed = false, startX, x;
//     slider.addEventListener("mousedown",function(e){
//         pressed = true;
//         startX = e.offsetX - innerslider.offsetLeft;
//         slider.style.cursor = "grabbing";
//     });
//     // mouseneter
//     slider.addEventListener("mouseenter", () => {
//     slider.style.cursor = "grab";
//     });
//     // mouseup
//     slider.addEventListener("mouseup", () => {
//     slider.style.cursor = "grab";
//     });
//     // window
//     window.addEventListener("mouseup", () => {
//     pressed = false;
//     });
//     // Slider mousemove event listener
//     slider.addEventListener("mousemove", (e) => {
//     if (!pressed) return;
//     e.preventDefault();

//     x = e.offsetX;

//     innerslider.style.left = `${x - startX}px`;
//     if(x - startX >= 0 && (x - startX) % 15 == 0){
//         slideIndex++;
//         showSlides((slideIndex % 5 + 5) % 5 );
//         console.log(innerslider.style.left);
//     }   
//     else if(x - startX < 0 && ((x - startX) % 15 + 15) % 15 == 0){
//         slideIndex--;
//         showSlides((slideIndex % 5 + 5) % 5 );
//         console.log(innerslider.style.left);
//     }
//     checkBoundry();
//   });
// function checkBoundry() {
//     var slider = document.querySelector('.stage-outer');
//     var innerslider = document.querySelector('.stage');
//     let outer = slider.getBoundingClientRect(),
//       inner = innerslider.getBoundingClientRect();

//     if (parseInt(innerslider.style.left) > 0) {
//       innerslider.style.left = "0px";
//     } else if (inner.right < outer.right) {
//       innerslider.style.left = `-${inner.width - outer.width}px`;
//     }
//   }
// }
// draggable();

// function showSlides(){
//     var slides = document.getElementById("d1");
   
    // var newNode = document.createElement('div');
    // newNode.appendChild(clone);      

    // slides.insertBefore(node,slides.children[0]);     
    // slides.insertBefore(slides.children[4],slides.children[0]);
    // slides.insertBefore(slides.children[4],slides.children[0]);
    // slides.insertBefore(slides.children[4],slides.children[0]);
    // slides.insertBefore(slides.children[4],slides.children[0]);
    // console.log(slides.children[4].nextSibling);
    // slides.insertBefore(slides.children[0],slides.children[4].nextSibling);
    // slides.insertBefore(slides.children[0],slides.children[4].nextSibling);
    // slides.insertBefore(slides.children[0],slides.children[4].nextSibling);
    // slides.insertBefore(slides.children[0],slides.children[4].nextSibling);
    // slides.insertBefore(slides.children[0],slides.children[4].nextSibling);
    
    // console.log(slides.children[0]);    
// }
// showSlides();
// C2 ko thay dia chi

// var clicknext = document.querySelector('.next');
//   var clickcount = 0;
//   clicknext.onclick = function(){
//     clickcount++;
//     //next
//     var slides = document.getElementById('d1');
//     if(clickcount == 1){
//       var node = slides.children[0];
//     }
//     else if(clickcount > 1){
//       var current = clickcount;
//       var node = slides.children[--current];
//     }
//     var clone = node.cloneNode(true);
//     slides.insertBefore(clone,slides.lastChild.nextSibling);
//     var current2 = clickcount;
//     var disable = slides.children[--current2];
//     disable.style.display = 'none';

// }
// var clickback = document.querySelector('.prev');
//     clickback.onclick = function(){
//     //pre
//     var slides = document.getElementById('d1');
//     var node = slides.children[4];
//     var clone = node.cloneNode(true);
//     slides.insertBefore(clone,slides.firstChild);
//       // var slides = document.getElementById("d1");
//       // var node = slides.children[0];
//       // var clone = node.cloneNode(true);
//       // // slides.insertBefore(clone,slides.children[4].nextSibling);
//       // slides.insertBefore(clone,slides.children[0]);
// }

//C3
var screenshot = $('.screenshot-all');
        /*==========  Review Slider  ==========*/
        screenshot.owlCarousel({
            items: 5,
            margin: 15,
            nav: true,
            dots: false,
            autoplay: true,
            loop: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                700: {
                    items: 2
                },
                1000: {
                    items: 5
                }
            }
        });
        var owl = $('.owl-carousel');
        owl.owlCarousel();
        // Go to the next item
        $('.owl-next').click(function() {
            owl.trigger('next.owl.carousel');
        })
        // Go to the previous item
        $('.owl-prev').click(function() {
            // With optional speed parameter
            // Parameters has to be in square bracket '[]'
            owl.trigger('prev.owl.carousel', [300]);
        })