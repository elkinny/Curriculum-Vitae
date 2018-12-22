document.querySelector('.burger__button').addEventListener('click', function(e) {
  var burgerList = e.currentTarget.parentNode.querySelector('.burger__list');
  e.currentTarget.classList.toggle('active');
  if (burgerList.classList.length != 2) burgerList.classList.toggle('in-active');
  burgerList.classList.toggle('active');
});
