/**
 * 
 * -------------------------------------
 * DOM Manipulation / Traversal Activity
 * -------------------------------------
 * 
 * 1. Create and attach an event handler (function) to each ".image" 
 * element so that when the ".image" element is clicked, the corresponding 
 * image loads in the .featured image element.
 * 
 * 2. Create event handlers for the next and previous buttons. The next button should
 *    show the next image in the thumbnail list. The previous should show the previous.
 * 
 * 3. If you get to the end, start at the beginning. 
 * 
 * 4. If you get to the beginning, loop around to the end.
 * 
 * 
 */

const images = [
    'images/field1.jpg',
    'images/purple.jpg',
    'images/jar.jpg',
    'images/green.jpg',
    'images/green1.jpg',
    'images/purple1.jpg',
    'images/magnolias.jpg',
    'images/daisy1.jpg'
];
let currentIndex = 0;

const initScreen = () => {
    images.forEach((image, idx) => {
        document.querySelector('.cards').innerHTML += `
            <li class="card">
                <div class="image" 
                    style="background-image:url('${image}')"
                    data-index="${idx}"></div>
            </li>`;
        document.querySelector('.swiper-wrapper').innerHTML += `
            <div class= "swiper-slide"
                    style=background-image:url('${image}')"
                    data-index="${idx}"></div>
            </div>`;
    });
};
const imageElements = document.querySelectorAll('.image');
const showImage = (ev) => {
    const elem = ev.currentTarget;
    console.log(elem. style.backgroundImage);
    currentIndex = parseInt(elem.dataset.index);
    console.log("currentIndex:", currentIndex);
    document.querySelector('.swiper-image').style.backgroundImage = elem.style.backgroundImage;

}
// const indexCalc = (currentIndex, length) => {
//     if (currentIndex < 0) {
//         console.log("currentindex: ", currentIndex);
//         return currentIndex = length- Math.abs(currentIndex);
//     }
//     else {
//         return currentIndex = currentIndex % length;
//     }
    
// };
// const showNext = (ev) => {
//     currentIndex = (indexCalc(currentIndex+1, imageElements.length));
//     console.log("currentIndex:", currentIndex);
//     // update .featured_image
//     document.querySelector('.featured_image').style.backgroundImage=imageElements[currentIndex].style.backgroundImage;
// };

// const showPrev = (ev) => {
//     currentIndex = (indexCalc(currentIndex-1, imageElements.length))
//     console.log("currentIndex:", currentIndex);
//     // update .featured_image
//     document.querySelector('.featured_image').style.backgroundImage=imageElements[currentIndex].style.backgroundImage;

// };

const swiper = new Swiper('.preview_box', {
    // Optional parameters
    // direction: 'vertical',
    // loop: true,
    effect: 'cube', grabCursor: true, cubeEffect:{
                                              shadow: true,
                                              slideShadow: true,
                                              shadowOffset: 20,
                                              shadowScale: 0.94,
                                              },

  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.next',
      prevEl: '.prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

initScreen();



// then loop through each one and attach an event handler
// to each element's click event:
// for (const elem of imageElements) {
//     elem.onclick = showImage;
// }

// document.querySelector('.next').onclick = showNext;
// document.querySelector('.prev').onclick = showPrev;

// document.querySelector('.featured_image').onclick = showNext;