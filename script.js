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
