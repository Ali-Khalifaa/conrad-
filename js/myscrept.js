$(function(){
    $('div.awsemoe img').mousemove(function(){
        $('.owerlay').hide();
    });
    $('.firest').click(function(){
        $('.one').show();
        $('.two').hide();
    });
    $('.second').click(function(){
        $('.two').show();
        $('.one').hide();
    });
    $(window).scroll(function(){
        var scroll = $(this).scrollTop();
        if(scroll>500)
        {
            $('.header').slideDown();

        }else{
            $('.header').slideUp();
        }
    });
    $(".fancybox").fancybox();
    $('.one').css('display','block');
    $('div.acordion h3').click(function(){
        $(this).next().slideToggle();
        $('div.acordion p').not($(this).next()).slideUp();
    });
    
    $('.timer').countTo();
    $('.all-Images').mixItUp();
    $('html').niceScroll();
});