$(function(){
    detectWidth();
    $(window).resize(detectWidth);
});

var detectWidth = function () {
    var WindowsWidth = $(window).width();
    if(WindowsWidth<=768 && WindowsWidth > 400){
        $('body').addClass('tablet');
    } else {
        $('body').removeClass('tablet');
    }
    console.log(WindowsWidth);
};