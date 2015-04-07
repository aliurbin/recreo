 
    var $button = document.getElementById('showMenu');
    var showMenu = function(){
        $('#menu').toggleClass('is-active');
     }

    $button.addEventListener("click", showMenu); 
  $(document).on('ready',function() { 
  		  $("#slider1").responsiveSlides({
	      auto: true,
	      pager: true,
	      // nav: true,
	      speed: 500,
	      minwidth: 800,
	      namespace: "centered-btns"
	    });
      $("#slider3").responsiveSlides({
        manualControls: '#slider3-pager',
        maxwidth: 600,
        auto: true,
        pager: false,
        nav: true,
        speed: 500,

      });
  });


