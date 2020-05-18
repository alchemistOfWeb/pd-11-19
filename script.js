let last_known_scroll_position = 0;
let ticking = false;
let cardsContainer =document.querySelector('.cards-container');

function doSomething(scroll_pos) {
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
      doSomething(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});