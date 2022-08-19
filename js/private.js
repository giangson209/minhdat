
$(document).ready(function(){
	$('.tab-account a').click(function(){
        var tab_id = $(this).attr('data-tab');
        $('.tab-account a').removeClass('active');
        $('.tab-content').removeClass('active');
        $(this).addClass('active');
        $("#"+tab_id).addClass('active');
    });

    setTimeout(function(){
      $('.loading').addClass('active');
    }, 3500);

    $('.clc-forgot').click(function(){
        $('.step-1').addClass('active');
    });

    $('.clc-step-2').click(function(){
        $('.step-2').addClass('active');
    });

    $('.back-step a').click(function(){
        $(this).closest('.step-forgot').removeClass('active');
    });

    // const passBtn = $(".show-pass");
    // passBtn.click(togglePassword);
    // function togglePassword() {
    //   const passInput = $("#password");
    //   if (passInput.attr("type") === "password") {
    //     passInput.attr("type", "text");
    //   } else {
    //     passInput.attr("type", "password");
    //   }
    // }

    var clicked = 0;
    $(".show-pass").click(function (e) {
         e.preventDefault();
          if (clicked == 0) {
             clicked = 1;
          } else {
              clicked = 0;
           }

        var input = $($(this).attr("toggle"));
        if (input.attr("type") == "password") {
           input.attr("type", "text"); 
        } else {
           input.attr("type", "password");
        }
    });

    (function($){
      $.fn.countdown = function(milliseconds, callback) {
        var $el = this;
        var end, timer;
         
        // Defaults
        milliseconds = milliseconds || 60;
        end = new Date(Date.now() + milliseconds);
        
        tick();
        function formatTime(time){
          seconds = time.getSeconds();
          return seconds;
        }
        function tick() {
          var remaining = new Date(end - Date.now());
          if (remaining > 0) {
            $el.html(formatTime(remaining));
            timer = setTimeout(tick, 1000);
          } else {
            clearInterval(timer);
            if (callback) callback.apply($el); 
          }
        };
      };
      
     
      $('#timer').countdown(60 * 1000);
    })(jQuery);
})

