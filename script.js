let last_known_scroll_position = 0;
let ticking = false;
let cardsContainer =document.querySelector('.cards-container');


function movePerspective(scroll_pos) {
  // Do something with the scroll position
  let perspect= scroll_pos + 400;
  perspect.toString();
  console.log(perspect);
  cardsContainer.style.perspectiveOrigin='50%'+ perspect +'px';
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

let sidebarButton = document.querySelector('.sidebar-button');
let mainMenu =document.querySelector('.main-menu');
let menuOnclick=0;
sidebarButton.addEventListener('click', function(e){
  if(menuOnclick==0){
    mainMenu.style.display = 'flex';
    menuOnclick = 1;
  }
  else{
    mainMenu.style.display = 'none';
    menuOnclick = 0;
  }
});

