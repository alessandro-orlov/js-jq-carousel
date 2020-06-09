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

  var nextActiveImage = activeImage.next()

  // Togliamo la classe active dalle variabili correnti
  activeImage.fadeOut().removeClass('active').hide();
  activeCircle.removeClass('active');

  // Aggiungiamo la classe active all'img e cerchio sucessivo a rotazione
  // andando a destra
  if(activeImage.hasClass('last')) {
    $('.images .first').fadeIn().addClass('active');
    $('.nav i.first').addClass('active');
  } else {
      nextActiveImage.fadeIn().addClass('active');
      activeCircle.next('i').addClass('active');
    }
}

//Function prevImage
function prevImage() {
  // Variabili da gestire
  var activeImage = $('.images img.active');
  var activeCircle = $('.nav i.active');

  var prevActiveImage = activeImage.prev('img');

  // Aggiungiamo la classe active all'img e cerchio precedente a rotazione
  // andando a sinistra
  activeImage.fadeOut().removeClass('active').hide();
  activeCircle.removeClass('active');

  // Togliamo la classe active
  if(activeImage.hasClass('first')) {
    $('.images img.last').fadeIn().addClass('active');
    $('.nav i.last').addClass('active');
  } else {
      prevActiveImage.fadeIn().addClass('active');
      activeCircle.prev('i').addClass('active');
    }
}
