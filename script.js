let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}

// Function to toggle the search bar when the search icon is clicked
function toggleSearchBar() {
  const searchContainer = document.getElementById('search-container');
  const searchInput = document.getElementById('animated-search-input');

  searchContainer.classList.toggle('active');

  // If the search bar is active, focus on the input
  if (searchContainer.classList.contains('active')) {
      searchInput.focus();
  }
}

// Event listener for the search icon
document.getElementById('search-icon').addEventListener('click', toggleSearchBar);

// Event listener to close the search bar when clicking outside of it
document.addEventListener('click', function (event) {
  const searchContainer = document.getElementById('search-container');
  if (!searchContainer.contains(event.target) && !event.target.matches('#search-icon')) {
      searchContainer.classList.remove('active');
  }
});

// Event listener for the search input
document.getElementById('animated-search-input').addEventListener('input', function () {
  const searchQuery = this.value;
  filterCourses(searchQuery);
});

// Add this at the end of your existing JavaScript

// Get the modal and button elements
var modal = document.getElementById('loginModal');
var loginBtn = document.getElementById('loginBtn');
var closeBtn = document.querySelector('.close');

// Display the modal when the login button is clicked
loginBtn.addEventListener('click', function() {
  modal.style.display = 'block';
});

// Close the modal when the close button is clicked
closeBtn.addEventListener('click', function() {
  modal.style.display = 'none';
});

// Close the modal if the user clicks outside the modal
window.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});




