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
    //result-the-question
    $(document).on('click','.opt-search', function(e){
        e.preventDefault();
        $('.slide-box').removeClass('slide-box-visible');
        $('.search_slide-box').addClass('slide-box-visible');
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

    //delete person (research)
    $(document).on('click','.delete-person', function(e){
        e.preventDefault();
        $(this).parents('.invited-person').remove();
        if($('.invited-person').length==0){
            $('.header-invited-persons').text('Вы пока никого не пригласили!');
        }
    });
    //show patients (research)
    $(document).on('click','.location-show-more', function(e){
        e.preventDefault();
        if(!$(this).parents('.info-research-article').hasClass('checked')){
            $('.info-research-article').removeClass('checked');
            $('.location-patients').slideUp();
            $(this).parents('.info-research-article').addClass('checked');
            $(this).parents('.info-research-article').find('.location-patients').slideDown();
        } else{
            $(this).parents('.info-research-article').removeClass('checked');
            $(this).parents('.info-research-article').find('.location-patients').slideUp();
        }

    });
    //show etaps (research)
    $(document).on('click','.patient-show-more', function(e){
        e.preventDefault();
        if(!$(this).parents('.patient').hasClass('checked')){
            $('.patient').removeClass('checked');
            $('.location-etaps').slideUp();
            $(this).parents('.patient').addClass('checked');
            $(this).parents('.patient').find('.location-etaps').slideDown();
        } else{
            $(this).parents('.patient').removeClass('checked');
            $(this).parents('.patient').find('.location-etaps').slideUp();
        }

    });

    $(document).on('click','.patient:first-child .patient-show-more', function(){
        $('.patients-top-menu').css('border','none');
    });
    //добавить локацию
    $(document).on('click','.add_research_place', function(e){
        e.preventDefault();
        $(this).css('display','none');
        $('.new-research-place').fadeIn();
        $('.cancel_research_place').css('display','block');
    });
    $(document).on('click','.cancel_research_place', function(e){
        e.preventDefault();
        $('.add_research_place').css('display','block');
        $('.new-research-place').fadeOut();
        $(document).scrollTop(0);
        $(this).css('display','none');
    });

    $(document).on('click','.add-new-etap-button', function(e){
        e.preventDefault();
        $(this).parent().css('display','none');
        $('.add-new-etap-wrapper').slideDown();
    });

    $(document).on('click','.hideLocation', function(e){
        e.preventDefault();
        $(this).parents('.info-research-article').removeClass('checked');
        $(this).parents('.info-research-article').find('.location-patients').slideUp();
    });
    $(document).on('click','.hidePatient', function(e){
        e.preventDefault();
        $(this).parents('.patient').removeClass('checked');
        $(this).parents('.patient').find('.location-etaps').slideUp();
    });
    $(document).on('click','.hideEtap', function(e){
        e.preventDefault();
        $(this).parents('.add-new-etap-wrapper').slideUp();
        $('.new-etap-button-block').css('display','flex');
    });


});

