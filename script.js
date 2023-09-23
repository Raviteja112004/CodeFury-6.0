document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const searchbar = document.querySelector('.search-bar');

    hamburger.addEventListener('click', function () {
      navLinks.classList.toggle('active');
      searchbar.classList.toggle('active');
    });
  });
  
function displayName(){
  const userN = document.getElementById('userName').value;
  document.getElementById('user').innerHTML='Hello, '+ userN;
  alert('Welcome to Healthify, '+ userN)
}