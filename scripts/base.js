{toggle: false}var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $(".navbar").outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

//Collapsing the nav-bar
function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $(".navbar").removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('.navbar').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}

//page-scrolling effect
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

function closeAll(){
    $('.panel-collapse').removeClass("collapse in").addClass("collapse");
    $('.collapse').removeClass("collapse in").addClass("collapse");
};

function seesharp(){
    closeAll();
    $('.empower').collapse('show');
    $('.wrt').collapse('show');
    $('#bankApp').collapse('show');
    $('#solid').collapse('show');
    $('html, body').animate({
        scrollTop: $('.empower').offset().top
    }, 2000);
}

function mrAndHadoop(){
        closeAll();
        $('#bigdata').collapse('show');
        $('#hadoop').collapse('show');        
        $('html, body').animate({
            scrollTop: $('#hadoop').offset().top
        }, 2000);
}

function hiveAndPig(){
    closeAll();
    $('#bigdata').collapse('show');
    $('html, body').animate({
        scrollTop: $('#bigdata').offset().top
    }, 2000);
}

$(document).ready(function() {
    var canSee = $("#myNavbar").is(":visible");
    console.log(canSee);
    if(!canSee){
        $('.page-scroll').removeAttr('title');
        // $('[data-toggle="tooltip"]').tooltip('hide'); 
    }
    $('#exp').click(function() {
        $('.empower').collapse('show');
        $('.wrt').collapse('show');
        $('.a100').collapse('show');
        $('.cap').collapse('show');
    });
    $('#ed').click(function() {
        closeAll();
    });
    $('#skls').click(function() {
        closeAll();
    }); 
    $('#proj').click(function() {
        closeAll();
    });         
    $('#csharp').click(function() {  
        seesharp();
    });
    $('#java').click(function() {
        closeAll();
        $('.cap').collapse('show');
        $('#clustering').collapse('show');
        $('#battleship').collapse('show');
        $('html, body').animate({
            scrollTop: $('.cap').offset().top
        }, 2000);
    });
    $('#python').click(function() {
        closeAll();
        $('#ticTacToe').collapse('show');
        $('html, body').animate({
            scrollTop: $('#ticTacToe').offset().top
        }, 2000);
    });
    $('#sql').click(function() {
        closeAll();
        $('.cap').collapse('show');
        $('.empower').collapse('show');
        $('.wrt').collapse('show');
        $('#bankApp').collapse('show');
        $('html, body').animate({
            scrollTop: $('.empower').offset().top
        }, 2000);
    });
    $('#javascript').click(function() {
        closeAll();
        $('.empower').collapse('show');
        $('.wrt').collapse('show');
        $('.a100').collapse('show');
        $('html, body').animate({
            scrollTop: $('.empower').offset().top
        }, 2000);
    });
    $('#hadoo').click(function() {
        mrAndHadoop();
    });        
    $('#mr').click(function() {
        mrAndHadoop();
    });         
    $('#hive').click(function() {
        hiveAndPig();
    });
    $('#pig').click(function() {
        hiveAndPig();
    });
    $('#mssql').click(function() {
        closeAll();
        $('.empower').collapse('show');
        $('.wrt').collapse('show');
        $('#bankApp').collapse('show');
        $('html, body').animate({
            scrollTop: $('.empower').offset().top
        }, 2000);
    });
    $('#mongo').click(function() {
        closeAll();
        $('.empower').collapse('show');
        $('.a100').collapse('show');
        $('html, body').animate({
            scrollTop: $('.empower').offset().top
        }, 2000);
    });
    $('#oracle').click(function() {
        closeAll();
        $('.cap').collapse('show');
        $('html, body').animate({
            scrollTop: $('.cap').offset().top
        }, 2000);
    });
    $('#dotnet').click(function() {  
      seesharp()
    });      
    $('#meteor').click(function() {
        closeAll();
        $('.a100').collapse('show');
        $('html, body').animate({
            scrollTop: $('.a100').offset().top
        }, 2000);
    });
    $('#kendo').click(function() {
        closeAll();
        $('.wrt').collapse('show');
        $('html, body').animate({
            scrollTop: $('.wrt').offset().top
        }, 2000);
    });
    $('#html').click(function() {
        closeAll();
        $('.empower').collapse('show');
        $('.wrt').collapse('show');        
        $('.a100').collapse('show');
        $('#bankApp').collapse('show');
        $('html, body').animate({
            scrollTop: $('.empower').offset().top
        }, 2000);
    });
    $('#css').click(function() {
        closeAll();
        $('.empower').collapse('show');
        $('.wrt').collapse('show');        
        $('.a100').collapse('show');
        $('#bankApp').collapse('show');
        $('html, body').animate({
            scrollTop: $('.empower').offset().top
        }, 2000);
    });
    $('#bootstrap').click(function() {
        closeAll();
        $('.empower').collapse('show');
        $('.wrt').collapse('show');        
        $('.a100').collapse('show');
        $('#bankApp').collapse('show');
        $('html, body').animate({
            scrollTop: $('.empower').offset().top
        }, 2000);
    });    
});
