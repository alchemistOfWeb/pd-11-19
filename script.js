//НЕ ГОВНОКОД
let last_known_scroll_position = 0;
let ticking = false;
let cardsContainer =document.querySelector('.cards-container');
//   //\\       ||||||  ||||   ||||\  ||   ||   ||||   || //   ||||     |||     ||  /||  || || ||    ||||||
//  //__\\      ||     ||  ||  || //  ||   ||  ||  ||  ||//   ||  ||   || ||    || //||  || || ||    || 
// //----\\     ||     ||  ||  || \\  |||||||  ||  ||  ||\\   ||  ||   || ||    ||// ||  || || ||    ||||||
////      \\    ||      ||||   ||||/  ||   ||   ||||   || \\   ||||  |||||||||  ||/  ||  ||||||||||  ||
//                                                                   \\     //                   ||  ||||||

function movePerspective(scroll_pos) {
  // Do something with the scroll position
  let perspect= scroll_pos + 400;
  perspect.toString();
  console.log(perspect);
  cardsContainer.style.perspectiveOrigin='50%'+ perspect +'px';
}

function alingingOnCircle(our_circle, cenText){
  let numPuncts =0;
  numPuncts = our_circle.querySelectorAll('.menu-square').length;
  
  let radPunctSecond = 360/numPuncts;
  let radPunctNowSecond =90;
  let minRadPunctNowSecond =-90;
  let ourTextRing = document.querySelector('.text-ring');

  Array.from(document.querySelector('.second').querySelectorAll('.menu-punct'),function(e){
    e.style.transform = 'rotate('+ radPunctNowSecond+'deg)';
    e.querySelector('.menu-square').style.transform = 'rotate('+ minRadPunctNowSecond+'deg)';
    radPunctNowSecond +=radPunctSecond;
    minRadPunctNowSecond-=radPunctSecond;
  });
  Array.from(document.querySelector('.second').querySelectorAll('.menu-square'), function(e){
    e.addEventListener('mouseenter', function(){
      ourTextRing.textContent = this.innerText;
    });
    e.addEventListener('mouseleave', function(){
      ourTextRing.textContent = cenText;
    });
    
  });
  Array.from(document.querySelectorAll('.back'), function(e){
    e.addEventListener('click', function(e){
      document.querySelector('.first').style.display = 'flex';
      document.querySelector('.second').style.display = 'none';
      centerText = 'PD-11-19';
      ourTextRing.textContent = centerText;
    });
  });

}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      movePerspective(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});
let textRing = document.querySelector('.text-ring');
let sidebarButton = document.querySelector('.sidebar-button');
let mainMenu =document.querySelector('.main-menu');
let menuOnclick=0;
var centerText = "";
sidebarButton.addEventListener('click', function(e){
  if(menuOnclick==0){
    mainMenu.style.display = 'flex';
    document.querySelector('.first').style.display = 'flex';
    document.querySelector('.second').style.display = 'none';
    centerText = "PD-11-19";
    textRing.textContent = centerText;
    menuOnclick = 1;
  }
  else{
    mainMenu.style.display = 'none';
    menuOnclick = 0;
  }
});



let numberPunctsFirst= 0;

// Make events for puncts
Array.from(document.querySelector('.first').querySelectorAll('.menu-square-first'), function(e){
  
  e.addEventListener('mouseenter', function(){
    textRing.textContent = this.innerText;
  });
  e.addEventListener('mouseleave', function(){
    textRing.textContent = centerText;
  });
  e.addEventListener('click', function(){
    document.querySelector('.first').style.display = 'none';
    document.querySelector('.second').style.display = 'flex';
    document.querySelector('.second').innerHTML=e.parentNode.querySelector('.html-for-second').innerHTML;
    centerText = e.textContent;
    textRing.textContent = centerText;
    alingingOnCircle(document.querySelector('.second'), centerText);
    
  });
  numberPunctsFirst++;
});



let radPunctFirst = 360/numberPunctsFirst;
let radPunctNow =90;
let minRadPunctNow =-90;
//transformer circle
Array.from(document.querySelector('.first').querySelectorAll('.menu-punct-first'),function(e){

  e.style.transform = 'rotate('+ radPunctNow+'deg)';
  e.querySelector('.menu-square').style.transform = 'rotate('+ minRadPunctNow+'deg)';
  radPunctNow +=radPunctFirst;
  minRadPunctNow-=radPunctFirst;
});


//for cards
let viewerWindow = document.querySelector('.viewer-window');
let viewerContent = viewerWindow.querySelector('.viewer-content');
Array.from(document.querySelectorAll('.card-info'),function(e){
  e.addEventListener('click', function(){
    viewerContent.innerHTML = this.querySelector('.card-content').innerHTML;
    viewerWindow.style.display = 'flex';
  });
});
let viewerCloseSpace = viewerWindow.querySelector('.viewer-close-space');
viewerCloseSpace.addEventListener('click', function(e){
  viewerWindow.style.display = 'none';
});




