AOS.init({
    duration: 1500
});

$(document).ready(function(){
    //All on scroll animation
    $(window).scroll(function(){
        //Animating navigation menu
        const scroll = $(window).scrollTop();
        if (scroll > 20) {
            $("#header").css({
                "background" : "var(--white)",
                "box-shadow" : "4px 4px 12px rgba(62, 37, 0, 0.151)"
            });
        } else {
            $("#header").css({
                "background" : "none",
                "box-shadow" : "none"
            });
        }
    });

    //Animating hamburger menu
    let bool = false;
    $('#hamburger-menu').on('click', function() {
        if(bool == false) {
        bool = true;
        $('#navbar').css('transform', 'translateX(0)');
        $('#hamburger-menu').fadeOut(function() {
            $(this).attr('src', 'asset/img/icons/exit-menu.svg').fadeIn();
        });
        } else {
        bool = false;
        $('#navbar').css('transform', 'translateX(100%)');
        $('#hamburger-menu').fadeOut(function() {
            $(this).attr('src', 'asset/img/icons/hamburger-menu.svg').fadeIn();
        });
        }
    });

    //Sound effect for some elements
    const clickedBtnSound = new Audio('asset/sound/mouse_click.mp3');
    const hoverNavLinkSound = new Audio('asset/sound/ink_pen_writing.mp3');
    const swingSound = new Audio('asset/sound/swing.mp3');
    $('.nav-link').mouseover(e => hoverNavLinkSound.play());
    $('.project').mouseover(e => swingSound.play());
    $('#submit-btn').click(e => clickedBtnSound.play());
});