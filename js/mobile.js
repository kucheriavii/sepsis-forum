/*Если вы читаете этот комментарий то я вам категорически сУчуствую. Эти скрипты используются для адаптации
готового макета под таблетки и мобильные устройства. Все строки где присутствует TODO:подлежать дальнейшей доработке*/

$(function(){
    detectWidth();
    mainNewsAdaptive(); /*Делаю с двух колонок единую*/
    mainPartnersAdaptive(); /*Порядок в партнерах*/
    $(window).resize(detectWidth); /*если таблет вешаю id=tablet*/

    $(".events-list").mCustomScrollbar('destroy');
    $(".events-block_wrap").mCustomScrollbar('destroy');

    tabletSliders(); //пересобираю слайдеры для адаптивной верстки

    /*Перезагрузка страници при изменении вида*/
    startWindowsWidth = $(window).width();
    $(window).resize(reloadWhenChangeViews);


    console.log($('.partners-section_wrap .partners-block_wrap img'))
});







//проверка ширины дисплея. Возвращает 1 если планшет. 0 - если не планшет
var isDisplayTablet = function(){
    var WindowsWidth = $(window).width();
    if(WindowsWidth<=980 && WindowsWidth > 400){
        console.log('is tablet');
        return 1;
    } else {
        console.log('is not tablet');
        return 0;
    }
};



var detectWidth = function () {
    if(isDisplayTablet()){
        $('body').attr('id','tablet');
    } else {
        $('body').removeAttr('id');
    }
};

/*Скрипт, который на главной странице вырезает новости с правого блока и ставит в левый,
поскольку в изначальной реализации подразумевается два блока, а в мобильной версии один*/
var mainNewsAdaptive = function () {
  if(isDisplayTablet()){
      $('.news-block_wrap .right-side .news-block').addClass('js-tabletInputedItems').insertAfter('.left-side .news-block');
      $('.news-block_wrap .right-side').remove();
      $('.news-block_wrap .left-side .slider-block').insertAfter('.news-block_wrap .left-side'); //выдераем банер-слайдер с новостной колонки и вставляем его после блока. Потому что новости будут иметь свой слайдер
      $('.news-block_wrap .left-side .slider-block').remove();

      $('.news-block_wrap .left-side').slick({
          dots: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          arrows: false
      });
  }
};

/*Скрипт, который на главной странице вырезает всех партнеров и бросает их в один контейнер,
поскольку в изначальной реализации подразумевается два блока, а в мобильной версии один*/
var mainPartnersAdaptive = function () {
    if(isDisplayTablet()) {
        var partnersLogos = $('.partners-section_wrap .partners-block_wrap img');
        partnersLogos.insertBefore('.partners-block_wrap .partners-line:first-child');
        partnersLogos.wrap('<div class="partner-wrap"></div>')
        $('.partners-section_wrap .partners-line').remove();
    }
};
/*Пересобираем слайдеры*/
var tabletSliders = function(){
    if(isDisplayTablet){
        /*Слайдер особого мнения*/
        $('.opinion-slider_block').slick('unslick');
        $('.opinion-slider_block').slick({
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        fade: false,
                        arrows: false,
                        dots: false,
                        infinite: false,
                        //centerMode: true,
                        variableWidth: true
                    }
                }
            ]
        });
        //$('.opinion-slider_block').slick('unslick');
        /*/особое мение*/

        /*сейчас обсуждают*/
        $('.discussion-block_wrap').slick({
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        fade: false,
                        arrows: false,
                        dots: true,
                        infinite: true,
                        //centerMode: true,
                        variableWidth: true
                    }
                }
            ]
        });

        /*Пресса о нас*/
        $('.about-section_wrap .events-block_wrap .events-list').slick({
            dots:true,
            variableWidth: true,
            arrows: false
        });


    }
}
/*Скрипт который перегружает страницу когда при ресайз проходиться контрольная точка (планшет или телефон)*/

var reloadWhenChangeViews = function(){
    var tablet = 980;
    var actualWindowsWidth = $(window).width();
    if(
        (startWindowsWidth>tablet)&&(actualWindowsWidth<=tablet)||
        (startWindowsWidth<=tablet)&&(actualWindowsWidth>tablet)
    ){
        location.reload();
    }

}
