$(function(){

   //пимпочка (toggler)
    $(document).on('click','.toggle, .toggle-disabled', function(e){
        e.preventDefault();
        console.log(e);
        if(!$(this).hasClass('toggle-disabled')){
            $(this).removeClass('toggle').addClass('toggle-disabled');
            console.log(this)
        } else {
            $(this).removeClass('toggle-disabled').addClass('toggle');
        }
    });

    //slide-box
    $(document).on('click','.slide-box__close', function(e){
        e.preventDefault();
        $(this).parents('.slide-box').removeClass('slide-box-visible');
    });
    //ask-the-question
    $(document).on('click','.ask-the-question', function(e){
        e.preventDefault();
        $('.question_slide-box').addClass('slide-box-visible');
    });
});
