$(document).ready(
  function() {

    // CAROUSEL SLIDER
    // Creaiamo evento click next
    $('.next').click(
      function() {
        nextImage();
      }
    );

    // Creaiamo evento click prev
    $('.prev').click(
      function() {
        prevImage();
      }
    );

  }
);


//==============FUNCTIONS===================

//Function nextImage
function nextImage() {
  // Variabili da gestire
  var activeImage = $('.images img.active');
  var activeCircle = $('.nav i.active');

  // Togliamo la classe active dalle variabili correnti
  activeImage.removeClass('active');
  activeCircle.removeClass('active');

  // Aggiungiamo la classe active all'img e cerchio sucessivo a rotazione
  // andando a destra
  if(activeImage.hasClass('last')) {
    $('.images .first').addClass('active');
    $('.nav i.first').addClass('active');
  } else {
      activeImage.next('img').addClass('active');
      activeCircle.next('i').addClass('active');
    }
}

//Function prevImage
function prevImage() {
  // Variabili da gestire
  var activeImage = $('.images img.active');
  var activeCircle = $('.nav i.active');

  // Aggiungiamo la classe active all'img e cerchio precedente a rotazione
  // andando a sinistra
  activeImage.removeClass('active');
  activeCircle.removeClass('active');

  // Togliamo la classe active
  if(activeImage.hasClass('first')) {
    $('.images img.last').addClass('active');
    $('.nav i.last').addClass('active');
  } else {
      activeImage.prev('img').addClass('active');
      activeCircle.prev('i').addClass('active');
    }
}
