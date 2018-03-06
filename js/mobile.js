/*Если вы читаете этот комментарий то я вам категорически сУчуствую. Эти скрипты используются для адаптации
готового макета под таблетки и мобильные устройства. Все строки где присутствует TODO:подлежать дальнейшей доработке*/

$(function(){
    detectWidth();
    mainNewsAdaptive(); /*Делаю с двух колонок единую*/
    $(window).resize(detectWidth); /*если таблет вешаю id=tablet*/
    //сюда запилить функцию которая будет перезагружать страницу, если меняется вид (таблетка/мобильник)
    $(".events-list").mCustomScrollbar('destroy');
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
      $('.right-side .news-block').addClass('js-tabletInputedItems').insertAfter('.left-side .news-block');
      $('.right-side').remove();
      $('.left-side .slider-block').insertAfter('.left-side'); //выдераем банер-слайдер с новостной колонки и вставляем его после блока. Потому что новости будут иметь свой слайдер
      $('.left-side .slider-block').remove();

      $('.left-side').slick({
          dots: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          arrows: false
      });
  } else {
   // location.reload();
  }
};

/***Работа с слайдером Фейсбука***/
