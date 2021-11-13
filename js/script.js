AOS.init({
    duration: 1500
});

$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 20) {
            $("#header").css({
                "background" : "var(--white)",
                "box-shadow" : "4px 4px 12px rgba(62, 37, 0, 0.151)"
            });
        }
    
        else{
            $("#header").css({
                "background" : "none",
                "box-shadow" : "none"
            });
        }
    });

    let bool = false;
    $('#hamburger-menu').on('click', function() {
        if(bool == false) {
        bool = true;
        $('#navbar').css('transform', 'translateX(0)');
        $('#hamburger-menu').fadeOut(function() {
            $(this).attr('src', 'img/icons/exit-menu.svg').fadeIn();
        });
        } else {
        bool = false;
        $('#navbar').css('transform', 'translateX(100%)');
        $('#hamburger-menu').fadeOut(function() {
            $(this).attr('src', 'img/icons/hamburger-menu.svg').fadeIn();
        });
        }
    });
})