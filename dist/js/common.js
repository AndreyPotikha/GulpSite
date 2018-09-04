$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        let id  = $(this).attr('href');
        let top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
        $("#touch-inp").prop('checked', false);
    });
});

$(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() >= 150) {
            $('#toTop').fadeIn(); 
        }
        else {
            $('#toTop').fadeOut();
        }
        });
$('#toTop').click(function() {
$('body,html').animate({scrollTop:0},800);
});
});
