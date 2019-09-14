$(window).on("load",function(){
    $(".loader .inner").fadeOut(500,function(){
        $(".loader").fadeOut(750);
     });
    
    $(".items").isotope({
       filter:'*',
       animationOptions:{
       duration:1500,
       easing: 'linear',
       queue:false
   }
                       
   });   
                       
    
});

$(document).ready(function(){
   // ....................slider start.............. 
    $('#slides').superslides({
		animation: 'fade',
		play: 5000,
		pagination: false
	});
    //--------------------Typed Event Java Script-----------------
     var typed = new Typed(".typed",{
        strings:["Computer Science Engineer","Software Developer","Student"],
        typeSpeed:70,
        loop:true,
        startDelay:1000,
        showCursor:false
    });
    
     $("#slides  a").click(function(e) {
		e.preventDefault();

		var targetElement = $(this).attr("href");
		var targetPosition = $(targetElement).offset().top;
		$("html, body").animate({ scrollTop: targetPosition - 50 }, "slow");

	});
    
    //---------------skill Section Owl js is used---------------
    $('.owl-carousel').owlCarousel({
        loop:true,
        nav:true,
        dots:false,
        items:4,
        autoplay:true,
        navText: ['<i class="fas fa-chevron-circle-left"></i>','<i class="fas fa-chevron-circle-right"></i>'],
        responsive:{
            0:{
                items:1
              },
            480:{
                items:2
                },
            768:{
                items:3
                 },
            938:{
                items:4
                 }
             }
        });
   
    //----------------Pie Chart Add--------------------------
     var skillsTopOffset = $(".skillsSection").offset().top;
    
     $(window).scroll(function(){
     
        if(window.pageYOffset > skillsTopOffset - $(window).height()+200)
        {
            $('.chart').easyPieChart({
            
            barColor: '#fff',
            trackColor:false,
            scaleColor: false,
            lineWidth: 4,
            size: 152,
            onStep: function(from, to, percent)
                {
                  $(this.el).find('.percent').text(Math.round(percent));
                }    
        });
      }
   });
    
    // -------------------Used For FancyBox------------------------
     $("[data-fancybox]").fancybox();
    
    
  
    
 // ---------------------Filttering project-----------------------------
    
     $("#filters a").click(function(){
        $("#filters .current").removeClass("current");
        $(this).addClass("current");
        var selector = $(this).attr("data-filter");
         $(".items").isotope({
           filter:selector,
           animationOptions:{
           duration:1500,
           easing: 'linear',
           queue:false
          }
                       
        });  
        
        return false;
    });
  //----------------------------Navigation Part-----------------------
   
    $('.nav-link').click(function() {
        
            $('.navbar-collapse').collapse('hide');
 
    });

  
    
    
    $("#navigation li a").click(function(e) {
		e.preventDefault();

		var targetElement = $(this).attr("href");
		var targetPosition = $(targetElement).offset().top;
		$("html, body").animate({ scrollTop: targetPosition - 50 }, "slow");

	});
    
    
    
    const nav = $("#navigation");
    const navTop = nav.offset().top;
    $(window).on("scroll",stickyNavigation);
    function stickyNavigation(){
        var body = $("body");
        if($(window).scrollTop() >= navTop){
            body.css("padding-top",nav.outerHeight() + "px");
            body.addClass("fixedNav");
        }
        else{
            body.css("padding-top",0);
            body.removeClass("fixedNav");
        }
    }
   
    



  /*--------------------Back-to-Top-----------------------*/
    
   const backToTopButton = document.querySelector("#back-to-top");
    
   window.addEventListener("scroll",scrollFunction);
    
    function scrollFunction(){
        if(window.pageYOffset > 800){
         if(!backToTopButton.classList.contains("btnEntrance")){
          backToTopButton.classList.remove("btnExit");     
          backToTopButton.classList.add("btnEntrance");    
          backToTopButton.style.display = "block";
         }
            
        }
        else{
            if(backToTopButton.classList.contains("btnEntrance")) {
            backToTopButton.classList.remove("btnEntrance");    
            backToTopButton.classList.add("btnExit");
                
            setTimeout(function(){
            backToTopButton.style.display ="none";  
            },350);    
            
            }
        }
    }
    
    backToTopButton.addEventListener("click",smoothScrollBackToTop);

 /*-------------- For Smoothly scroll back to top-----------------*/
    
  function smoothScrollBackToTop() {
              const targetPosition = 0;
              const startPosition = window.pageYOffset;
              const distance = targetPosition - startPosition;
              const duration = 1000;
              let start = null;

                         window.requestAnimationFrame(step);

            function step(timestamp) {
                    if (!start) start = timestamp;
                    const progress = timestamp - start;
                    window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
                    if (progress < duration) window.requestAnimationFrame(step);
                    }
            }

            function easeInOutCubic(t, b, c, d) {
                t /= d/2;
                if (t < 1) return c/2*t*t*t + b;
                t -= 2;
                return c/2*(t*t*t + 2) + b;

                }; 


        });

