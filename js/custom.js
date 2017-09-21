// Custom JavaScript
// STEP 15: Call up the carousel using the id, and use the .carousel() method create the options object
$('.carousel').carousel({
    interval: 2500
  });
// STEP 16: Change the interval to 5 seconds (set in milliseconds)

// STEP 17: Try an event handler to zoom up the .carousel-caption after the slide completes sliding - by adding a class when the slide has finished animating, and removing it when it begins

  $('#carousel-cars').on('slide.bs.carousel', function(){

    //remove class that zoom caption
    $('.carousel-caption').removeClass('zoomit');
  });
  $('#carousel-cars').on('slid.bs.carousel', function(){
    
        //add class that zoom caption
        $('.carousel-caption').addClass('zoomit');
  });   

  //carousel cannot be controlled 
  $('.carousel').carousel({
    keyboard: false
  });