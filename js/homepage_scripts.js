$(function(){
    $('#scroll_bottom').click(function(){
        $('html, body').animate({scrollTop: $(window).height() + 20}, 900);
        return false;
    });
});
