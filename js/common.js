
function fancyGallary() {
  $(".fancybox").fancybox();
}

function phoneMask() {
  $(".phone").mask("+7 999 999-99-99");
}

function elipsis() {
  $('.articles-item_block .content-block .title').ellipsis({
    responsive: true,
    lines: 3
  });
}

function tooltip() {
  $('[data-toggle="tooltip"]').tooltip();
  var element = $(".article-abstract_text").find("p").first();
  element.html(function (index, html) {
    return '<span class="big-letter">' + html.slice(0, 1) + '</span>' + html.slice(1);
  });
  var clipboard = new Clipboard('.date-block');
  $(".date-block").on("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    clipboard.on('success', function (e) {
      setTooltip();
    });
    $(this).siblings().removeClass("active").tooltip('hide');
    $(this).toggleClass("active");
  });
  $(".date-disc_wrap").on("click", function (e) {
    e.stopPropagation();
  });
  $(".month-events_wrap .info_block .block").on("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).toggleClass("open");
  });
  $(document).on("click", ".info_block_wrap .block", function (e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).siblings().removeClass("open");
    $(this).toggleClass("open");
  });
  $(".date-block").tooltip({
    html: true,
    placement: 'bottom',
    container: 'body',
    template: '<div class="tooltip event-tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'click'
  });
  $(document).on("click", ".close_btn", function (e) {
    e.preventDefault();
    $(this).parent().removeClass("open");
    $("body").removeClass("event_open");
  });
  $(document).on("click", ".exit_btn", function (e) {
    e.preventDefault();
    $(".event-detail_wrap").removeClass("open");
    $("body").removeClass("event_open");
  }); /*
      $(document).on("click", ".more_link", function (e) {
      e.preventDefault();
      var content_height = $(".event-detail_block .middle_part").height() + $(".event-detail_block .top_part").height();
      $("body").addClass("event_open");
      $(".event-detail_wrap").addClass("open");
      $(".event-detail_block").height(content_height);
      });*/ /*
            $(".registr_btn").on("click", function (e) {
            e.preventDefault();
            //var content_height = $(".event-detail_block .middle_part").height() + $(".event-detail_block .top_part").height();
            $("body").addClass("event_open");
            $(".event-detail_wrap").addClass("open");
            //$(".event-detail_block").height(content_height);
            timer()
            });*/
  $(".show-more a.btn").on("click", function (e) {
    e.preventDefault();
    $(this).hide();
    $(this).parents(".left-part").find("ul").addClass("full");
  });
  /*$(".event_link").on("click", function (e) {
    e.preventDefault();
    var content_height = $(".event-detail_block .middle_part").height() + $(".event-detail_block .top_part").height();
    $("body").addClass("event_open");
    $(".event-detail_wrap").addClass("open");
    $(".event-detail_block").height(content_height);
  });*/
  $(document).on("click", ".back-btn", function (e) {
    e.preventDefault();
    $(this).parents(".event-registration_block").removeClass("visible");
    $(this).parents(".event-detail_block").find(".middle_part").addClass("visible");
    var newHeight = $(this).parents(".event-detail_block").find(".middle_part").height() + $(this).parents(".event-detail_block").find(".top_part").height();
    $(".event-detail_block").height(newHeight);
  });
  $(document).on("click", ".register_link", function (e) {
    var newHeight = $(".profile-block").outerHeight();
    $(".profile-block_wrap").height(newHeight);
    e.preventDefault();
    $(this).parents(".middle_part").removeClass("visible");
    $(this).parents(".event-detail_block").find(".event-registration_block").addClass("visible");
    var newHeight = $(".event-registration_block").outerHeight() + $(this).parents(".event-detail_block").find(".top_part").height();
    $(".event-detail_block").height(newHeight);
  });
  function setTooltip(message) {
    $('.date-block').tooltip('hide').attr('data-original-title', message).tooltip('show');
  }
  /*
  var x;
  function timer() {
    var countDown = 60;
    x = setInterval(function () {
      countDown = countDown - 1;
      $(".check-block_wrapper").find(".timer").text(countDown);
      if (countDown < 20) {
        $(".check-block_wrapper").find(".timer").addClass("red");
        if (countDown < 1) {
          clearInterval(x);
          $(".event-detail_wrap .bottom-part_wrap .visible").find(".title").text('Время закончилось');
          $(".event-detail_wrap .bottom-part_wrap .visible").find(".disc").html('<p>Вы не успели подтвердить участие в течение 60 секунд. Это не помешает вам смотреть вебинар, но 2 балла НМО не зачислятся.</p><p>Если у вас произошёл сбой во время подтверждения, дайте об этом знать. <a href="#">НАПИШИТЕ НАМ</a>— разберёмся в проблеме и начислим баллы.</p>')
          $(".event-detail_wrap .bottom-part_wrap .visible").find(".commit_btn").remove();
          $(".top-part_wrap").find(".active").addClass("error");
        }
      }
    }, 1000);
  }
  $(document).on("click", ".commit_btn", function (e) {
    e.preventDefault();
    clearInterval(x);
    var active_element = $(".top-part_wrap").find(".active").addClass("complite");
    var active_block = $(".bottom-part_wrap").find(".visible");
    if ($(this).parent().hasClass("last-block")) {
      active_element.removeClass("active").next().addClass("complite");
      active_block.removeClass("visible").next().addClass("visible");
    } else {
      $("body").removeClass("event_open");
      $(".event-detail_wrap").removeClass("open");
      active_element.removeClass("active").next().addClass("active");
      active_block.removeClass("visible").next().addClass("visible");
    }
  });
  */
}

function closeBanner() {
  $(".banner-block_wrap .close-btn").on("click", function (e) {
    e.preventDefault();
    $(this).parent().fadeOut(300);
    navMenu();
  });
  $(".more_btn").on("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).next().toggleClass("open");
  });
  $(".all-social_block").on("click", function (e) {
    e.stopPropagation();
  });
  $(document).on("click", function (e) {
    $(".all-social_block").removeClass("open");
    $(".month-events_wrap .info_block .block").removeClass("open");
    $(".info_block_wrap .block").removeClass("open");
    if (!$(e.target).closest('.check-block_wrapper, .event-detail_block').length) {
      $(".event-detail_wrap").removeClass("open");
      $("body").removeClass("event_open");
    }
  });
  $(".header-popup_wrap").on("click", function (e) {
    if (!$(e.target).closest('.popup-block').length) {
      $(this).removeClass("open");
      $(".popup-block").removeClass("visible");
      $("body").removeClass("menu_open");
      $("nav").find(".open").removeClass("open");
    }
  });
}

function validEmail(mail) {
  var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;

  if (pattern.test(mail)) {
    return true;
  } else {
    return false;
  }
}

function headerNav() {
  $(".comment-block_wrap  .close-btn").on("click", function (e) {
    e.preventDefault();
    $(this).parents(".comment-block_wrap").removeClass("open");
  });
  $(".close-btn").on("click", function (e) {
    e.preventDefault();
    $("body").removeClass("menu_open");
    $(this).parent().removeClass("open");
    $(".header-popup_wrap").removeClass("open").find(".popup-block").removeClass("visible");
  });
  $('.js-close-popup').on('click', function (e) {
    e.preventDefault();

    var $popup = $($(this).data('target'));

    if ($popup.length) {
      $("body").removeClass("menu_open");
      $(".header-popup_wrap, .login-nav").removeClass("open");
      $popup.removeClass('visible');
    }
  });
  $("nav a").on("click", function (e) {
    if ($(this).attr('data-link')) {
      e.preventDefault();
      $("body").addClass("menu_open");
      var block = $(this).data("link");
      if (block == 7) {
        $(this).parent().toggleClass("open");
        if ($(this).parent().hasClass("open")) {
          if ($(this).parents("header").find(".header-popup_wrap").hasClass("open")) {
            var popup_block = $(".header-popup_wrap").find(".popup-block");
            popup_block.each(function () {
              $(this).removeClass("visible");
            });
            $('*[data-block=' + block + ']').addClass("visible");
          } else {
            $('*[data-block=' + block + ']').addClass("visible");
            $(this).parents("header").find(".header-popup_wrap").addClass("open");
          }
        } else {
          $(".header-popup_wrap").removeClass("open").find(".popup-block").removeClass("visible");
          $(".popup-block").find(".step-block").removeClass("visible");
          $("body").removeClass("menu_open");
        }
      } else {
        $(this).parents("nav").find(".open").removeClass("open");
        $(this).parent().addClass("open");
        if ($(this).parents("header").find(".header-popup_wrap").hasClass("open")) {
          var popup_block = $(".header-popup_wrap").find(".popup-block");
          popup_block.each(function () {
            $(this).removeClass("visible");
          });
          $('*[data-block=' + block + ']').addClass("visible");
        } else {
          $('*[data-block=' + block + ']').addClass("visible");
          $(this).parents("header").find(".header-popup_wrap").addClass("open");
        }
      }
    }
  });
  $(".nonauth").on("click", function (e) {
    e.preventDefault();
    $(".login-nav").addClass("open");
    $("body").addClass("menu_open");
    $(".header-popup_wrap").addClass("open");
    $('*[data-block=' + 4 + ']').addClass("visible");
    $("header").removeClass("header--hidden");
  });
  $(".reg-btn").on("click", function (e) {
    e.preventDefault();
    $(this).parents(".popup-block").removeClass("visible");
    $('*[data-block=' + 5 + ']').addClass("visible");
  });

  $(".login-btn").on("click", function (e) {
    e.preventDefault();
    $(this).parents(".popup-block").removeClass("visible");
    $('*[data-block=' + 4 + ']').addClass("visible");
  });
  $(".restore-btn").on("click", function (e) {
    e.preventDefault();
    $(this).parents(".popup-block").removeClass("visible");
    $('*[data-block=' + 6 + ']').addClass("visible");
    $('*[data-block=' + 6 + ']').find(".step-block").removeClass("visible");
    $('*[data-block=' + 6 + ']').find(".first-step_wrap").addClass("visible");
  });
}

function filter() {
  $(".filter-list li a").on("click", function (e) {
    e.preventDefault();
    var eventNumber = $(this).attr('data-event');
    $(this).parent().addClass("active").siblings().removeClass("active");
    if (eventNumber == 0) {
      $(".events-section_wrap").find(".events-block_wrap li").css("display", "inline-block");
      $('.events-block_wrap .events-list').mCustomScrollbar("disable");
      $('.events-block_wrap .events-list').mCustomScrollbar("update");
    } else {
      $(".events-section_wrap").find(".events-block_wrap li").hide();
      $(".events-block_wrap").find('*[data-event=' + eventNumber + ']').css("display", "inline-block");
      if ($('*[data-event=' + eventNumber + ']').length > 4) {
        $('.events-block_wrap .events-list').mCustomScrollbar("update");
      } else {
        $('.events-block_wrap .events-list').mCustomScrollbar("disable");
      }
    }
  });
}

function yearScroll() {
  var newItemId = section01;
  var OldItemId = section01;
  var NavList = $(".sidebar-block");
  $(".content-block_wrap section").each(function () {
    var eTop = $(this).offset().top;
    var eTopP = eTop - $(window).scrollTop();
    var itemId = $(this).attr('id');
    if (eTopP > 0 && eTopP < 100) {
      newItemId = itemId;
    }
  });
  if (OldItemId !== newItemId) {
    NavList.find("[data-href='" + newItemId + "']").addClass("active").siblings().removeClass("active");
  } else {
    OldItemId = newItemId;
  }
}

function sliders() {
  if ($('.slider-block').length > 0) {
    $('.slider-block').slick({
      dots: true,
      arrows: false
    });
  }
  if ($('.opinion-slider_block').length > 0) {
    $('.opinion-slider_block').slick({
      dots: false,
      arrows: true,
      infinite: true,
      slidesToShow: 1,
      speed: 500,
      fade: true,
      autoplay: true,
      autoplaySpeed: 10000,
      cssEase: 'linear'
    });
  }
  if ($('.video-slider_block').length > 0) {
    $('.video-slider_block').slick({
      centerMode: true,
      slidesToShow: 1,
      dots: true,
      variableWidth: true
    });
  }
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-for').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    $(".slide-counts").find(".current").text(nextSlide + 1);
  });
  $(".slide-counts").find(".all").text($(".slider-for").slick("getSlick").slideCount);
  $('.slider-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    infinite: false,
    focusOnSelect: true,
    arrows: true
  });
  if ($('.creators-block').length > 0) {
    $creators_block = $('.creators-block');
    var settings = {
      dots: false,
      arrows: false,
      speed: 300,
      slidesToShow: 1,
      infinite: false,
      centerMode: true,
      slidesToScroll: 1,
      responsive: [{
        breakpoint: 9999,
        settings: 'unslick'
      }, {
        breakpoint: 999,
        settings: {
          dots: false,
          arrows: false,
          speed: 300,
          slidesToShow: 1,
          infinite: false,
          centerMode: true,
          slidesToScroll: 1
        }
      }]
    };
    $(window).on('resize', function () {
      if ($(window).width() < 999 && !$creators_block.hasClass('slick-initialized')) {
        return $creators_block.slick(settings);
      }
    });
    if ($(window).width() < 999) {
      $creators_block.slick(settings);
    }
  }
}

function scrollToTop() {
  $('.gotop_btn').click(function (e) {
    e.preventDefault();
    var body = $("html, body");
    body.stop().animate({ scrollTop: 0 }, '500', 'swing');
  });
}

function navMenu() {
  $(".sidebar-block li a").on("click", function (e) {
    e.preventDefault();
    $(this).parent().addClass("active").siblings().removeClass("active");
  });
  if ($(window).width() > 1023) {
    if ($(".sidebar-block").length > 0) {
      yearScroll();
    }
    var scrollTopPos = $(window).scrollTop();
    var pageHeight = $(document).height();
    var menuHeight = $(".sidebar-block").height();
    var titleHeight = $(".page-title_block").height();
    if ($(".sidebar-block_wrap").hasClass("terms")) {
      var breakpointHeight = pageHeight - menuHeight - titleHeight - 704;
      if (scrollTopPos > titleHeight + 404) {
        $(".sidebar-block_wrap").addClass("fixed");
        if (scrollTopPos > breakpointHeight) {
          $(".sidebar-block_wrap").css("top", breakpointHeight - 600).addClass("stop");
        } else {
          $(".sidebar-block_wrap").css("top", 135).removeClass("stop");
        }
      } else {
        $(".sidebar-block_wrap").removeClass("fixed");
        $(".sidebar-block_wrap").css("top", 10);
      }
    } else {
      var breakpointHeight = pageHeight - menuHeight - 900;
      if (scrollTopPos > 320) {
        $(".sidebar-block_wrap").addClass("fixed");
        if (scrollTopPos > breakpointHeight) {
          $(".sidebar-block_wrap").css("top", breakpointHeight - 220).addClass("stop");
        } else {
          $(".sidebar-block_wrap").css("top", 135).removeClass("stop");
        }
      } else {
        $(".sidebar-block_wrap").removeClass("fixed");
        $(".sidebar-block_wrap").css("top", 85);
      }
    }
    $(window).on("scroll", function () {
      if ($(".sidebar-block").length > 0) {
        yearScroll();
      }
      var scrollTopPos = $(window).scrollTop();
      if ($(".sidebar-block_wrap").hasClass("terms")) {
        if (scrollTopPos > titleHeight + 404) {
          $(".sidebar-block_wrap").addClass("fixed");
          if (scrollTopPos > breakpointHeight) {
            $(".sidebar-block_wrap").css("top", breakpointHeight - 600).addClass("stop");
          } else {
            $(".sidebar-block_wrap").css("top", 135).removeClass("stop");
          }
        } else {
          $(".sidebar-block_wrap").removeClass("fixed");
          $(".sidebar-block_wrap").css("top", 10);
        }
      } else {
        if (scrollTopPos > 310) {
          $(".sidebar-block_wrap").addClass("fixed");
          if (scrollTopPos > breakpointHeight) {
            $(".sidebar-block_wrap").css("top", breakpointHeight - 220).addClass("stop");
          } else {
            $(".sidebar-block_wrap").css("top", 135).removeClass("stop");
          }
        } else {
          $(".sidebar-block_wrap").removeClass("fixed");
          $(".sidebar-block_wrap").css("top", 85);
        }
      }
    });
  }
}

function smoothScroll() {
  if ($(".sidebar-block_wrap").length > 0) {
    $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function (event) {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top - 60
          }, 1000, function () {
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
              return false;
            } else {
              $target.attr('tabindex', '-1');
              $target.focus();
            };
          });
        }
      }
    });
  }
}

function uploadFile($fileInput) {
  var $field = $fileInput.closest('.form-field');
  var $bar = $field.find('.file-upload-progress-bar');
  var $status = $field.find('.file-upload-status');
  var fileName = $fileInput.val();

  $status.addClass('in-progress');

  var file = $fileInput[0].files[0];
  var formdata = new FormData();

  formdata.append("confirm_file", file);

  var ajax = new XMLHttpRequest();

  ajax.upload.addEventListener("progress", function (event) {
    var percent = event.loaded / event.total * 100;

    $bar.css('width', Math.round(percent) + '%');
    $status.html(Math.round(percent) + "%, " + fileName);
  }, false);

  ajax.addEventListener("load", function (event) {
    $status.html(event.target.responseText);
  }, false);

  ajax.addEventListener("error", function (event) {
    $status.html($status.data('error-label'));
  }, false);

  ajax.addEventListener("abort", function (event) {
    $status.html($status.data('abort-label'));
  }, false);

  ajax.open("POST", "/temp/file_upload_parser.php");
  ajax.send(formdata);
}

function formSender() {

  $('.file-upload input[type="file"]').on('change', function () {
    var $this = $(this);

    uploadFile($this);
  });

  //$("div.file-upload").dropzone({ url: "/file/post" });

  $(".nav-block_wrap .nav-list li a").on("click", function (e) {
    e.preventDefault();
    if ($(this).parent().hasClass("fill")) {
      $(this).parent().removeClass("fill");
      var step = $(this).parent().data("step");
      $(".step-block").removeClass("visible");
      $('*[data-blocks=' + step + ']').addClass("visible");
    }
  });

  $(".form-field input, .form-field textarea").on("focusin", function () {
    $(this).parent().addClass("focus");
    $(this).removeClass("ierror").parent().removeClass('ierror');
  });
  $(".form-field input, .form-field textarea").on("focusout", function () {
    if ($(this).val() == '') {
      $(this).parent().removeClass("focus");
    }
  });
  $(document).on("click", ".place-result_wrap li a", function (e) {
    var place = $(this).text();
    $(this).parents(".form-field").find(".search-input").val("");
    $(this).parents(".form-field").addClass("focus");
    $(this).parents(".form-field").find(".search-input").val(place);
    if ($(this).parents(".form-field").find(".search-input").val() == '') {
      $(this).parents(".form-field").removeClass("focus");
    }
    $(this).parents(".form-field").find(".place-result_wrap").removeClass("open");
  });

  $(document).on("keypress", ".more-place_wrap textarea", function (e) {
    if (e.which == 13) {
      var new_place = $(this).val();
      $(this).parents(".form-field").find(".search-input").val("");
      $(this).parents(".form-field").addClass("focus");
      $(this).parents(".form-field").find(".search-input").val(new_place);
      $(this).parents(".form-field").find(".place-result_wrap").removeClass("open");
    }
  });

  $(document).on("focusin", ".more-place_wrap textarea", function (e) {
    $(this).parents('.form-field').addClass("focus");
  });

  $(".search-input").on("focusin", function () {
    $(this).next(".place-result_wrap").addClass("open");
  });
  $(".search-input").on("focusout", function () {
    if ($(this).parents('.form-field').hasClass("focus")) {} else {
      //$(this).next(".place-result_wrap").removeClass("open")
    }
  });

  $(".form-field input").on('focus', function () {
    $(this).removeClass('ierror').parent().removeClass('ierror');
  });

  $('.check-field input[type="checkbox"]').on("change", function () {
    $(this).removeClass('ierror').parent().removeClass('ierror');
  });
  $(document).on("change", "#profile", function () {
    if ($(this).is(":checked")) {
      $(".new-profile_block").removeClass("visible");
      $(".profile-block").addClass("visible");
      newHeight = $(".profile-block").outerHeight();
    } else {
      $(".new-profile_block").addClass("visible");
      $(".profile-block").removeClass("visible");
      newHeight = $(".new-profile_block").outerHeight();
    }
    $(".profile-block_wrap").height(newHeight);
    var parentHeight = $(".event-registration_block").outerHeight() + $(".event-detail_block").find(".top_part").height();
    $(".event-detail_block").height(parentHeight);
  });

  /*$(".event-reg_btn").on("click", function (e) {
    var sendBut = $(this);
    var forma = sendBut.parents('.form-send');
    var sendInputs = forma.find('input.isend,textarea.isend,select.isend');
    var sendInputsFile = forma.find('.isend_file');
     function clear_border() {
      $(sendInputs).removeClass("ierror").parent().removeClass('ierror');
    }
    if ($("#profile").is(":checked")) {} else {
      sendInputs.each(function () {
        if ($(this).hasClass('isendNotCheck')) {} else {
          if ($(this).val() == '') {
            $(this).addClass('ierror').parent().addClass('ierror');
            //setTimeout(clear_border, 6000);          
          } else {
            $(this).removeClass('ierror').parent().removeClass('ierror');
          }
           if ($(this).hasClass('password')) {
            var password_lenght = $(this).val().length;
            if (password_lenght < 7) {
              $(this).addClass('ierror').parent().addClass('ierror');
            } else {
              $(this).removeClass('ierror').parent().removeClass('ierror');
            }
          }
           if ($(this).parent().hasClass('check-field')) {
            if ($(this).is(":checked")) {
              $(this).removeClass('ierror').parent().removeClass('ierror');
            } else {
              $(this).addClass('ierror').parent().addClass('ierror');
            }
          }
           if ($(this).hasClass('checkMail')) {
            if (validEmail($(this).val())) {
              $(this).removeClass('ierror').parent().removeClass('ierror');
            } else {
              $(this).addClass('ierror').parent().addClass('ierror');
            }
          }
        }
      });
    }
     if (sendInputs.hasClass('ierror')) {} else {
      e.preventDefault();
      sendBut.addClass("success").val("Заявка на участие отправлена");
      $(".interactive-block_wrap").hide();
      $(".joined-block_wrap").addClass("visible");
    }
    return false;
  });*/
  $(document).on("click", ".step-btn, .send-btn", function (e) {
    var sendBut = $(this);

    if (sendBut.hasClass("step-btn")) {
      var forma = sendBut.parents('.step-block');
    } else {
      var forma = sendBut.parents('.form-send');
    }

    var sendInputs = forma.find('input.isend,textarea.isend,select.isend');
    var sendInputsFile = forma.find('.isend_file');

    function clear_border() {
      $(sendInputs).removeClass("ierror").parent().removeClass('ierror');
    }

    sendInputs.each(function () {
      if ($(this).hasClass('isendNotCheck')) {} else {
        if ($(this).val() == '') {
          $(this).addClass('ierror').parent().addClass('ierror');
          //setTimeout(clear_border, 6000);          
        } else {
          $(this).removeClass('ierror').parent().removeClass('ierror');
        }

        if ($(this).closest('.confirm-step_wrap').length) {
          if ($(this).attr('type') === 'text' && $(this).closest('.confirm-step_wrap').find('[type="file"]').length && $(this).closest('.confirm-step_wrap').find('[type="file"]').val() != '') {
            $(this).removeClass('ierror').parent().removeClass('ierror');
          } else if ($(this).attr('type') === 'file' && $(this).closest('.confirm-step_wrap').find('[type="text"]').length && $(this).closest('.confirm-step_wrap').find('[type="text"]').val() != '') {
            $(this).removeClass('ierror').parent().removeClass('ierror');
          }
        }

        if ($(this).hasClass('password')) {
          var password_lenght = $(this).val().length;
          if (password_lenght < 7) {
            $(this).addClass('ierror').parent().addClass('ierror');
          } else {
            $(this).removeClass('ierror').parent().removeClass('ierror');
          }
        }

        if ($(this).parent().hasClass('check-field')) {
          if ($(this).is(":checked")) {
            $(this).removeClass('ierror').parent().removeClass('ierror');
          } else {
            $(this).addClass('ierror').parent().addClass('ierror');
          }
        }

        if ($(this).hasClass('checkMail')) {
          if (validEmail($(this).val())) {
            $(this).removeClass('ierror').parent().removeClass('ierror');
          } else {
            $(this).addClass('ierror').parent().addClass('ierror');
          }
        }
      }
    });

    if (sendInputs.hasClass('ierror')) {} else {
      if (sendBut.hasClass("step-btn")) {
        $(this).parents('.step-block').removeClass("visible").next().addClass("visible");
        var step = $(this).data("move");
        $('*[data-step=' + step + ']').addClass("fill");
      } else if (sendBut.parents(".popup-block").hasClass("login-block_wrap")) {
        // аякс отправка на удачу вызвать это
        $(this).parents('.step-block').removeClass("visible").next().addClass("visible");
        var step = $(this).data("move");
        $('*[data-step=' + step + ']').addClass("fill");
      } else if (sendBut.parents(".popup-block").hasClass("restore-block_wrap")) {}
      /*if(forma.hasClass("error")){
       }
      else {
        $(this).parents('.step-block').removeClass("visible").next().addClass("visible")
      }*/
      /*else if (forma.parent(".comment-form_wrap") || forma.parent(".bottom-part") || forma.parent(".comment-form_wrap")) {
      
      }*/else {
          $(this).parents('.step-block').removeClass("visible").next().addClass("visible");
          var step = $(this).data("move");
          $('*[data-step=' + step + ']').addClass("fill");
        }
    }
    return false;
  });
}

$(document).on("select2:open", "select", function () {
  $(".multi-select .select2-results ul.select2-results__options").unbind("mousewheel");
  $('.multi-select .select2-results').mCustomScrollbar({
    mouseWheel: true,
    axis: "y",
    setHeight: 99,
    advanced: {
      updateOnContentResize: true
    }
  });
});

function customScroll() {
  $(".events-block_wrap .events-list").mCustomScrollbar({
    axis: "x",
    mouseWheel: false,
    updateOnContentResize: true

  });
  $(".search-result_wrap .result-block").mCustomScrollbar({
    axis: "y",
    setHeight: 631,
    mouseWheel: true,
    updateOnContentResize: true,
    updateOnSelectorChange: true
  });
  $(".place-result_wrap .result-block").mCustomScrollbar({
    axis: "y",
    setHeight: 362,
    mouseWheel: true,
    updateOnContentResize: true,
    updateOnSelectorChange: true
  });
  $(".events-calendar_wrap").mCustomScrollbar({
    axis: "x",
    mouseWheel: true,
    updateOnContentResize: true,
    updateOnSelectorChange: true
  });
  if ($(".article-sidebar_block").length > 0) {
    var contentHeight = $(".article-text_block").height();
    var sidebarHeight = $(".article-sidebar_wrap").height();
    if (sidebarHeight < contentHeight) {
      var setHeight = sidebarHeight;
      $(".article-sidebar_block").height(setHeight + 85);
    } else {
      var setHeight = contentHeight;
      $(".article-sidebar_block").height(setHeight);
      $(".article-sidebar_wrap").height(setHeight - 85);
      $(".article-sidebar_wrap").mCustomScrollbar({
        axis: "y",
        height: setHeight - 85,
        mouseWheel: true,
        updateOnContentResize: true,
        updateOnSelectorChange: true
      });
    }
  }

  $(".event-register_block").mCustomScrollbar({
    axis: "y",
    mouseWheel: true,
    setHeight: 165,
    updateOnContentResize: true,
    updateOnSelectorChange: true
  });
}

function selectStyle() {
  $('.single-select select').select2({
    minimumResultsForSearch: Infinity,
    dropdownParent: $('.single-select')
  });
  $('.sec-info select').select2({
    minimumResultsForSearch: Infinity,
    dropdownParent: $('.select-parent')
  });
  $(".multi-select_first select").select2({
    closeOnSelect: false,
    dropdownParent: $(".multi-select_first"),
    placeholder: "Поиск по тематикам",
    allowClear: false
  });
  $(".multi-select_second select").select2({
    closeOnSelect: false,
    tags: "true",
    dropdownParent: $(".multi-select_second"),
    placeholder: "Поиск по авторам"
  });
  $(".select-open_btn").on("click", function (e) {
    e.preventDefault();
    $(this).next().select2("open");
  });
  $(".select2-selection.select2-selection--multiple").on("click", function (e) {
    e.preventDefault();
    return false;
  });
  $(".select2-search__field").on("focus", function (e) {
    e.preventDefault();
    e.stopPropagation();
    return false;
  });
  $(".select2-search__field").on("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    return false;
  });
  $(".select2-selection__choice").on("click", function (e) {});
  $(".multi-select_second select").on("select2:select select2:selecting", function (e) {
    if (e.type === 'select2:selecting' && $(".select2-selection__rendered").hasClass('mCustomScrollbar')) {
      $(".select2-selection__rendered").mCustomScrollbar('destroy');
    } else if (e.type === 'select2:select' && !$(".select2-selection__rendered").hasClass('mCustomScrollbar')) {
      $(".select2-selection__rendered").unbind('mousewheel');
      selectitems = $(".select2-selection__rendered").mCustomScrollbar({
        axis: "y",
        setHeight: 99,
        mouseWheel: true,
        updateOnContentResize: true,
        updateOnSelectorChange: true,
        live: "on"
      });
    }
  });
  $(".multi-select_first select").on("select2:select select2:selecting", function (e) {
    if (e.type === 'select2:selecting' && $(".select2-selection__rendered").hasClass('mCustomScrollbar')) {
      $(".select2-selection__rendered").mCustomScrollbar('destroy');
    } else if (e.type === 'select2:select' && !$(".select2-selection__rendered").hasClass('mCustomScrollbar')) {
      $(".select2-selection__rendered").unbind('mousewheel');
      selectitems = $(".select2-selection__rendered").mCustomScrollbar({
        axis: "y",
        setHeight: 99,
        mouseWheel: true,
        updateOnContentResize: true,
        updateOnSelectorChange: true,
        live: "on"
      });
    }
  });
}

function gridBlock() {
  var $grid = $('.articles-item_wrap');
  $grid.isotope({
    layoutMode: 'packery',
    itemSelector: '.item-block',
    packery: {
      gutter: 45
    }
  });

  var currentPage = 1;
  var nextPage = 2;
  var currentPage = $('.show-more-link').data('currentpage');
  var countItemsInPage = $('.show-more-link').data('countinpage');
  var count = $(".show-more-link").data('countinsect');
  var pagenNum = $('.show-more-link').data('pagennum');
  var $newItem;
  if (parseInt(pagenNum) <= 0) pagenNum = 1;

  $(".show-more-link").click(function (e) {
    e.preventDefault();
    var pathhref = $(this).attr('href');
    var path = document.location.pathname + pathhref;
    currentPage++;
    //делаем ajax запрос и сразу инкремент номера страницы        
    $.ajax({
      type: "GET",
      url: path,
      data: 'is_ajax_nav=Y&clear_cache=Y&PAGEN_' + pagenNum + '=' + currentPage,
      success: function (result) {
        //добавим товары к списку        
        $newItem = $(result);
        if ($(".articles-item_wrap").length) {
          $grid.append($newItem).isotope('appended', $newItem);
        }
        nextPage = currentPage + 1;
        if (currentPage * countItemsInPage >= count) {
          $(".show-more-link").parent().hide();
        }
        gridBlock();
      }
    });
  });
  $(".format-block a").on("click", function (e) {
    e.preventDefault();
    $(this).addClass("active").siblings().removeClass("active");
    if ($(this).hasClass("grid")) {
      $(".articles-item_wrap").removeClass("list_orient").addClass("grid_orient");
    } else {
      $(".articles-item_wrap").removeClass("grid_orient").addClass("list_orient");
    }
    $grid.isotope('layout');
  });
  $(".newsletter-block_wrap .close-btn").on("click", function (e) {
    e.preventDefault();
    if ($(this).parent().hasClass("item-block")) {
      $grid.isotope('layout');
      var element = $(this).parents(".newsletter-block_wrap");
      $grid.isotope('remove', element).isotope('layout');
    } else {
      $(this).parent().hide(300);
    }
  });
  /*$(".newsletter-block_wrap .subscribe-btn").on("click", function (e) {
    e.preventDefault();
    $(this).parent().addClass("subscribed");
  });*/
}

function commentBlock() {
  $(".all-comment-btn").on("click", function (e) {
    //e.preventDefault();
    $(this).parents(".comment-form_wrap").removeClass("open");
  });
  $(".comment-block textarea, .send-block textarea").on("focusin", function () {
    $(this).parent().addClass("focused");
  });
  $(".comment-block textarea, .send-block textarea").on("focusout", function () {
    if ($(this).val() == '') {
      $(this).parent().removeClass("focused");
      $(this).parent().removeClass("allow");
    }
  });
  $(".comment-block textarea, .send-block textarea").keyup(function (e) {
    if (e.keyCode == 8 || e.keyCode == 46) {
      if ($(this).val().length < 4) {
        $(this).parent().removeClass("allow");
      }
    }
  });
  $(".comment-block textarea, .send-block textarea").keypress(function () {
    if ($(this).val().length > 2) {
      $(this).parent().addClass("allow");
    } else {
      $(this).parent().removeClass("allow");
    }
  });
  $('.comment-block textarea, .send-block textarea').bind('paste', function (e) {
    var pastedData = e.originalEvent.clipboardData.getData('text');
    if (pastedData.length > 2) {
      $(this).parent().addClass("allow");
    } else {
      $(this).parent().removeClass("allow");
    }
  });
  $(".read-all_btn").on("click", function (e) {
    e.preventDefault();
    $(this).hide();
    var heightBlock = $(this).parent().find(".text-block").height();
    $(this).parent().find(".text-block_wrap").css("max-height", heightBlock);
  });
  $(document).on("click", ".reply_btn", function (e) {
    e.preventDefault();
    if ($(this).hasClass("active")) {} else {
      $(this).addClass("active");
      var person = $(this).parent().parent().find(".name").text();
      var bp = $(this).parent().parent().parent().find("> .bottom-part");
      var f_id = bp.parents(".cform").attr("id");
      if (typeof f_id == "string") {
        f_id = f_id.substring(1);
        bp.append('<form class="form-send" action="#"><div class="comment-block"><textarea class="isend" name="comment" id="comm_' + bp.attr("id") + '" placeholder="Напишите ответ ' + person + 'у..."></textarea><input class="send-btn" type="submit" onclick="add_comment(' + "'" + bp.attr("id") + "','" + f_id + "',document.getElementById('comm_" + bp.attr("id") + "').value" + '); return false;" value="Написать"></div></form>');
      } else {
        f_id = bp.parents(".bottom_comments").attr("id");
        if (typeof f_id == "string") {
          f_id = f_id.substring(1);
          bp.append('<form class="form-send" action="#"><div class="comment-block"><textarea class="isend" name="comment" id="bcomm_' + bp.attr("id") + '" placeholder="Напишите ответ ' + person + 'у..."></textarea><input class="send-btn" type="submit" onclick="add_comment_bottom(' + "'" + bp.attr("id") + "','" + f_id + "',document.getElementById('bcomm_" + bp.attr("id") + "').value" + '); return false;" value="Написать"></div></form>');
        }
      }
      $(".comment-block textarea").keypress(function () {
        if ($(this).val().length > 2) {
          $(this).parent().addClass("allow");
        }
      });
    }
  });
  $(".comment_btn").on("click", function (e) {
    e.preventDefault();
    $(this).parent().addClass("open");
  });
}

function map() {
  if ($(document).find("#map").length > 0) {
    var init = function init() {
      var myMap = new ymaps.Map("map", {
        center: map_center,
        zoom: 15
      });
      myMap.behaviors.disable('scrollZoom');
      var myPlacemark = new ymaps.Placemark(map_center, {
        hintContent: '',
        description: '',
        balloonContentHeader: "",
        balloonContentBody: ''
      }, {
        iconLayout: "default#imageWithContent",
        iconImageHref: "../images/pin.svg",
        iconImageSize: [48, 68],
        iconImageOffset: [-12, -50]

      });
      myMap.geoObjects.add(myPlacemark);
    };

    var map_center;
    if ($("#map").attr("data-center")) {
      var center = $("#map").attr("data-center");
      map_center = center.split(",");
    } else {
      map_center = [56.326944, 44.0075];
    }

    ymaps.ready(init);
  }
}

function stickyMenu() {
  var elSelector = 'header',
      elClassHidden = 'header--hidden',
      elClassVisible = 'header--visible',
      throttleTimeout = 500,
      element = document.querySelector(elSelector);

  if (!element) return true;

  var dHeight = 0,
      wHeight = 0,
      wScrollCurrent = 0,
      wScrollBefore = 0,
      wScrollDiff = 0,
      hasElementClass = function (element, className) {
    return element.classList ? element.classList.contains(className) : new RegExp('(^| )' + className + '( |$)', 'gi').test(element.className);
  },
      addElementClass = function (element, className) {
    element.classList ? element.classList.add(className) : element.className += ' ' + className;
  },
      removeElementClass = function (element, className) {
    element.classList ? element.classList.remove(className) : element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  },
      throttle = function (delay, fn) {
    var last, deferTimer;
    return function () {
      var context = this,
          args = arguments,
          now = +new Date();
      if (last && now < last + delay) {
        clearTimeout(deferTimer);
        deferTimer = setTimeout(function () {
          last = now;fn.apply(context, args);
        }, delay);
      } else {
        last = now;
        fn.apply(context, args);
      }
    };
  };

  window.addEventListener('scroll', throttle(throttleTimeout, function () {
    dHeight = document.body.offsetHeight;
    wHeight = window.innerHeight;
    wScrollCurrent = window.pageYOffset;
    wScrollDiff = wScrollBefore - wScrollCurrent;

    if (wScrollCurrent <= 0) {
      removeElementClass(element, elClassHidden);
      removeElementClass(element, elClassVisible);
    } else if (wScrollDiff > 0 && hasElementClass(element, elClassHidden)) // scrolled up; element slides in
      removeElementClass(element, elClassHidden);else if (wScrollDiff < 0) // scrolled down
      {
        if (wScrollCurrent + wHeight >= dHeight && hasElementClass(element, elClassHidden)) {
          addElementClass(element, elClassVisible);
          removeElementClass(element, elClassHidden);
        } else {
          addElementClass(element, elClassHidden);
          addElementClass(element, elClassVisible);
        }
      }

    wScrollBefore = wScrollCurrent;
  }));
}

//resize
$(window).resize(function () {});

$(window).scroll(function () {
  if ($(".sidebar-block").length > 0) {
    yearScroll();
  }
});

function favorite() {
  $(document).on("click", ".favorite_btn", function (e) {
    e.preventDefault();
    var f_id = $(this).parents(".comment-block").attr("id");
    if (typeof f_id != "string") {
      f_id = $(this).parents(".block").attr("id");
    }
    if (typeof f_id == "string") {
      var res = toggle_favorite(f_id); //alert (res);
      if (res) {
        $(this).toggleClass("selected");
        if ($(this).is('.selected')) {
          $(this).attr('data-original-title', 'Добавлено в избранное');
        } else {
          $(this).attr('data-original-title', 'Добавить в избранное');
        }
      }
    }
  });
}

function like() {
  $(document).on("click", ".like_btn", function (e) {
    e.preventDefault();
    var f_id = $(this).parents(".comment-block").attr("id");
    if (typeof f_id != "string") {
      f_id = $(this).parents(".like_block").attr("id");
    }

    if (typeof f_id == "string") {
      var res = toggle_like(f_id);
      if (res) {
        $(this).toggleClass("selected");
      }
    }
  });
}

$(document).ready(function () {
  gridBlock();
  selectStyle();
  formSender();
  tooltip();
  sliders();
  closeBanner();
  phoneMask();
  customScroll();
  navMenu();
  fancyGallary();
  smoothScroll();
  scrollToTop();
  filter();
  headerNav();
  commentBlock();
  map();
  stickyMenu();
  favorite();
  like();
  elipsis();
});