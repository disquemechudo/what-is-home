$(document).ready(function(){

    // SCROLLY CLICK IMAGES

    // <a href="#bats"> .... </a>
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash; // #bats
        var $target = $(target); // $('#bats')

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 30  // $('#bats').offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });

    // BIG VIDEO ON TOP

    var iframe = $('#player1')[0];
    var player = $f(iframe);

    // When the player is ready, add listeners for pause, finish, and playProgress
    player.addEvent('ready', function() {        
        player.addEvent('finish', onFinish);
    });

    function onFinish(id) {
        console.log("VIDEO IS OVER");

        $('html, body').stop().animate({
            'scrollTop': $('#gridContainer').offset().top
        }, 900, 'swing', function () {
            
            //$(".menu").css( "display", "block" );

            


        });

    }

    $(".icon").mouseenter(function() {
        $( ".gridImage" ).fadeOut( "slow" );

        var src = $(this).siblings('.gridImage').attr("src").replace("-resized.jpg",".mp4");

        var $video = $(".swap-image");

        $video.attr("src", src); // sets up video div

        $video[0].play(); // play video

        $('.icon-image').addClass('opacity');
        $(this).find('.icon-image').removeClass('opacity');

      // Make all icons more opaque
      // Keep this particular icon normal

    });

    $("#gridContainer").mouseleave(function() {
      $( ".gridImage" ).fadeIn( "slow" );
	  var $video = $(".swap-image");
      $video[0].pause(); // sets up video div
        // var src = $(this).attr("src").replace("over.gif", ".gif");
        // $(this).attr("src", src);

        // Return all icons to normal
        $('.icon-image').removeClass('opacity');
    });

//video hover begins
    var figure = $(".hover-video").hover( hoverVideo, hideVideo );

function hoverVideo(e) {
	console.log("hovering on this video");
	console.log($('hover-video', this)[0]);
    $('hover-video', this)[0].play();
}

function hideVideo(e) {
    $('hover-video', this)[0].pause();
}

//video hover ends

//$(window).bind('scroll', function() {
        //if($(window).scrollTop() >= $('#gridContainer').offset().top + $('#gridContainer').outerHeight() - window.innerHeight) {
          //alert('end reached');
        //}
            var gridPosition = $('#gridContainer').offset().top;
            var num = gridPosition-50; //number of pixels before modifying styles

        $(window).bind('scroll', function () {
            if ($(window).scrollTop() > num) {
                $('.menu').addClass('fixed');
            } else {
                $('.menu').removeClass('fixed');
            }

               });

});


