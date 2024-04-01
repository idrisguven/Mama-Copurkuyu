// SCROLL BAR SCROLL BAR SCROLL BAR SCROLL BAR SCROLL BAR SCROLL BAR SCROLL BAR SCROLL BAR SCROLL BAR 


const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Mostra o nascondi il bottone in base allo scroll della pagina
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

// Funzione per lo scrolling verso l'alto quando il bottone è cliccato
scrollToTopBtn.addEventListener("click", function() {
  document.body.scrollTop = 0; // Per Safari
  document.documentElement.scrollTop = 0; // Per Chrome, Firefox, IE e Opera
});




// SIDE BAR // SIDE BAR // SIDE BAR // SIDE BAR // SIDE BAR // SIDE BAR // SIDE BAR // SIDE BAR // SIDE BAR // SIDE BAR 



function showSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex'
}

function hideSidebar() {
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none'
}

const slideshowImages = document.querySelectorAll(".intro-slideshow img");

const nextImageDelay = 5000;
let currentImageCounter = 0; // setting a variable to keep track of the current image (slide)

// slideshowImages[currentImageCounter].style.display = "block";
slideshowImages[currentImageCounter].style.opacity = 1;

setInterval(nextImage, nextImageDelay);

function nextImage() {
// slideshowImages[currentImageCounter].style.display = "none";
slideshowImages[currentImageCounter].style.opacity = 0;

currentImageCounter = (currentImageCounter+1) % slideshowImages.length;

// slideshowImages[currentImageCounter].style.display = "block";
slideshowImages[currentImageCounter].style.opacity = 1;
}