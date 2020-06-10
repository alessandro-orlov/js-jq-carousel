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


    // Click sul Cerchietto
    $('.nav i').click(
      function() {
        var indexCircle = $(this).index();
        clickOnCircle(indexCircle);
      }
    );

  }
);


//==============FUNCTIONS===================

//Function nextImage
function nextImage() {
  // Variabili da gestire
  var activeImage = $('.images img.active');
  var firstImage = $('.images .first');
  // Gestione navigazione ( Cerchietti )
  var activeCircle = $('.nav i.active');
  var firstCircle = $('.nav i.first');

  // Variabili per attivare le immagini SUCCESSIVE con ( .next() )
  var nextActiveImage = activeImage.next('img');
  var nextActiveCircle = activeCircle.next('i');

  // Togliamo la classe active dalle variabili correnti
  activeImage.fadeOut().removeClass('active').hide();
  activeCircle.removeClass('active');

  // Aggiungiamo la classe active all'img e cerchio sucessivo a rotazione
  // andando a destra
  if(activeImage.hasClass('last')) {
    firstImage.fadeIn().addClass('active');
    firstCircle.addClass('active');
  } else {
      nextActiveImage.fadeIn().addClass('active');
      nextActiveCircle.addClass('active');
    }
}

//Function prevImage
function prevImage() {
  // Variabili da gestire
  var activeImage = $('.images img.active');
  var lastImage = $('.images img.last');
  // Gestione navigazione ( Cerchietti )
  var activeCircle = $('.nav i.active');
  var lastCircle = $('.nav i.last');

  // Variabili per attivare le immagini PRECEDENTI con ( .prev() )
  var prevActiveImage = activeImage.prev('img');
  var prevActiveCircle = activeCircle.prev('i');

  // Aggiungiamo la classe active all'img e cerchio precedente a rotazione
  // andando a sinistra
  activeImage.fadeOut().removeClass('active').hide();
  activeCircle.removeClass('active');

  // Togliamo la classe active
  if(activeImage.hasClass('first')) {
    lastImage.fadeIn().addClass('active');
    lastCircle.addClass('active');
  } else {
      prevActiveImage.fadeIn().addClass('active');
      prevActiveCircle.addClass('active');
    }
}


// Function click on lastCircle
function clickOnCircle(index) {
  $('.images img.active').fadeOut().removeClass('active').hide();
  $('.nav i.active').removeClass('active');

  $('.images img').eq(index).fadeIn().addClass('active').show();
  $('.nav i').eq(index).addClass('active');
}
