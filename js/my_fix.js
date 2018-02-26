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
    $(document).on('click','.answer_read-more', function(e){
        e.preventDefault();
        $('.slide-box').removeClass('slide-box-visible');
        $('.question_slide-box').addClass('slide-box-visible');
    });
    //result-the-question
    $(document).on('click','.ask-the-question', function(e){
        e.preventDefault();
        $('.slide-box').removeClass('slide-box-visible');
        $('.ask_slide-box').addClass('slide-box-visible');
    });

    //ask
    $(document).on('click','.ask-the-question-button', function(e){
        e.preventDefault();
        $('.slide-box__content_ok').css('display','block');
    });

    //ask
    $(document).on('click','.ask-question_back-to-list', function(e){
        e.preventDefault();
        $('.slide-box__content_ok').css('display','none');
    });
});

