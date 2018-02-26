function ShowLoginWrapper()
{
    $('.authorization-block a.login').click();
    $('.right-side #header_auth_form a.restore-btn').click();
}
function CallPrint()
{
	// var prtContent = document.getElementById(strid);
	// var prtCSS = '<link rel="stylesheet" href="/bitrix/templates/s1_template_corposite_blue/print.css" type="text/css" />';
	var WinPrint = window.open('','','left=50,top=50,width=800,height=640,toolbar=0,scrollbars=1,status=0');
	WinPrint.document.write('<div id="print" class="contentpane">');
	// WinPrint.document.write(prtCSS);
	WinPrint.document.write('<style>#print .print_hidden_wrap,#print .comment-block_wrap,#print .slider-block_wrap{display:none;}</style>');
	// WinPrint.document.write(prtContent.innerHTML);
	
	$('.print_block_wrap').each(function(i,elem){
		WinPrint.document.write(elem.innerHTML);
	});
	
	WinPrint.document.write('</div>');
	WinPrint.document.close();
	WinPrint.focus();
	WinPrint.print();
	WinPrint.close();
	//prtContent.innerHTML=strOldOne;
}

//закрывание баннера подписки на главной странице
function closeBannerAddCookie() {
    $(".banner-block_wrap .close-btn").on("click", function (e) {
        e.preventDefault();
        $.cookie("CLOSE_BANNER", 1);
    });
}

function check_event_reg_inputs(){
	var sendInputs = $('.event-registration_block .form-send').find('input.isend,textarea.isend,select.isend');
	sendInputs.each(function () {
        if ($(this).val() == '') {
			$(this).parent().removeClass("focus");
		}else{
			$(this).parent().addClass("focus");
		}
	});
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
		  $(".event-detail_wrap .bottom-part_wrap .visible").find(".commit_btn").remove();
		  $(".top-part_wrap").find(".active").addClass("error");
		}
	  }
	}, 1000);
}
*/

$(document).on("click", ".newsletter-block_wrap .subscribe-btn", function (e) {
    e.preventDefault();
	var _this = $(this);
	if(_this.hasClass('more_link_disabled')){
		
	}else{
		$.ajax({
			url: '/local/ajax/subscribe.php',
			dataType: 'json',
			type: 'POST',
			// data: {ID: id},
			success: function (jsondata){
				if(jsondata.STATUS=='OK'){
					_this.parent().addClass("subscribed");
				}
			}
		});
	}
});

$(document).on("click", ".more_link_disabled", function (e) {
    e.preventDefault();
	$(".login-nav").addClass("open");
	$("body").addClass("menu_open");
	$(".header-popup_wrap").addClass("open");
	$('*[data-block=' + 4 + ']').addClass("visible");
	$("header").removeClass("header--hidden");
});

//боковая шторка текущего мероприятия
$(document).on("click", ".more_link", function (e) {
    e.preventDefault();
	if($(this).hasClass('more_link_disabled')){
		
	}else{
		var id=$(this).attr("event-id");
		if($(this).attr("vebinar")) var vebinar = $(this).attr("vebinar");
		else var vebinar=false;
		if(vebinar=='Y') {
			event_url = '/local/ajax/detail_vebinar.php';
		} else {
			event_url = '/local/ajax/detail_event.php';
		}
		if(id.length > 0) {
			$.ajax({
				url: event_url,
				// dataType: 'json',
				dataType: 'html',
				type: 'POST',
				data: {ID: id},
				success: function (jsondata) {
					$(".event-detail_block").html(jsondata);
					map();
					var content_height = $(".event-detail_block .middle_part").height() + $(".event-detail_block .top_part").height();
					$("body").addClass("event_open");
					if(vebinar=='Y'){$(".event-detail_wrap").addClass("web");}
					$(".event-detail_wrap").addClass("open");
					$(".event-detail_block").height(content_height);
					
					selectStyle();
					formSender();
					check_event_reg_inputs();
                    closeBanner();
				}
			})
		}
	}
});
//боковая шторка текущего мероприятия c вкладки медиа или отчет
$(document).on("click", ".ic", function (e) {
    e.preventDefault();
	if($(this).hasClass('more_link_disabled')){
		
	}else{
		var id=$(this).attr("event-id");
		var type = $(this).attr("event-type");
		if($(this).attr("vebinar")) var vebinar = $(this).attr("vebinar");
		else var vebinar=false;
		if(vebinar=='Y') {
			event_url = '/local/ajax/old_vebinar.php';
		} else {
			event_url = '/local/ajax/old_event.php';
		}
		if(id.length > 0) {
			$.ajax({
				url: event_url,
				// dataType: 'json',
				dataType: 'html',
				type: 'POST',
				data: {ID: id},
				success: function (jsondata) {
					$(".event-detail_block").html(jsondata);
					map();
					var content_height = $(".event-detail_block .middle_part").height() + $(".event-detail_block .top_part").height();
					$("body").addClass("event_open");
					if(vebinar=='Y'){$(".event-detail_wrap").addClass("web");}
					$(".event-detail_wrap").addClass("open");
					$(".event-detail_block").height(content_height);
					if(type=='report') {
						$('a[href="#report"]').click();
					}
					if(type=='media') {
						$('a[href="#library"]').click();
					}
				}
			})
		}
	}
});
//боковая шторка прошедшего мероприятия
$(document).on("click", ".event_link", function (e) {
    e.preventDefault();
	if($(this).hasClass('more_link_disabled')){
		
	}else{
		var id=$(this).attr("event-id");
		if($(this).attr("vebinar")) var vebinar = $(this).attr("vebinar");
		else var vebinar=false;
		if(vebinar=='Y') {
			event_url = '/local/ajax/old_vebinar.php';
		} else {
			event_url = '/local/ajax/old_event.php';
		}
		if(id.length > 0) {
			$.ajax({
				url: event_url,
				// dataType: 'json',
				dataType: 'html',
				type: 'POST',
				data: {ID: id},
				success: function (jsondata) {
					$(".event-detail_block").html(jsondata);
					map();
					var content_height = $(".event-detail_block .middle_part").height() + $(".event-detail_block .top_part").height();
					$("body").addClass("event_open");
					if(vebinar=='Y'){$(".event-detail_wrap").addClass("web");}
					$(".event-detail_wrap").addClass("open");
					$(".event-detail_block").height(content_height);
				}
			})
		}
	}
});

//боковая шторка деталки вебинара
$(document).on("click", ".registr_btn", function (e) {
	e.preventDefault();
    e.stopPropagation();
	if($(this).attr("auth")){
		var auth = $(this).attr("auth");
	}else{
		var auth=false;
	}
	if(auth=='Y'){
		var element_id = $(this).attr("event-id");
		$.ajax({
			type: 'POST',
			url: '/local/ajax/event_registration_ajax.php',
			data: {ELEMENT_ID: element_id, profile: 'Y'},
			dataType: 'json',
			success: function(result){
				if(result.STATUS=='OK'){
					window.location.reload();
				}
			}
		});
			
		/*
		var id=$(this).attr("event-id");
		if(id.length > 0){
			$.ajax({
				url: '/local/ajax/vebinar_detail_event.php',
				// dataType: 'json',
				dataType: 'html',
				type: 'POST',
				data: {ID: id},
				success: function (jsondata) {
					$(".event-detail_wrap").html('');
					$(".event-detail_wrap").addClass("web");
					$(".event-detail_wrap").html(jsondata);
					$("body").addClass("event_open");
					$(".event-detail_wrap").addClass("open");

					timer();
				}
			});
		}*/
	}else{
		$(".login-nav").addClass("open");
		$("body").addClass("menu_open");
		$(".header-popup_wrap").addClass("open");
		$('*[data-block=' + 4 + ']').addClass("visible");
		$("header").removeClass("header--hidden");
	}
});

//запись интересующего мероприятия
$(document).on("click", ".intrested_link", function(e) {
    e.preventDefault();
	if($(this).hasClass('intrested_link_disabled')){
		//nothing
	}else{
		var id=$(this).attr("event-id");
		var _this=$(this);
		if(id.length > 0){
			$.ajax({
				url: '/local/ajax/interest.php',
				dataType: 'json',
				type: 'POST',
				data: {ID: id},
				success: function (jsondata) {
					_this.html(jsondata).addClass('intrested_link_disabled');
					if($('.interactive-block_wrap .disc').length){
						$('.interactive-block_wrap .disc').hide();
					}
					if($('#report .info-box').length){
						$('#report .info-box').html('<p>Спасибо. Вы уже подписались. Вы получите уведомление о размещении отчета по e-mail.</p>');
					}
				}
			})
		}
	}
});
//отказаться от мероприятия
$(document).on("click", ".disable-reg", function (e) {
    e.preventDefault();
    var id=$(this).attr("event-id");
    var _this=$(this);
    if(id.length > 0) {
        $.ajax({
            url: '/local/ajax/event_disable.php',
            dataType: 'json',
            type: 'POST',
            data: {ID: id},
            success: function (jsondata) {
                _this.html(jsondata);
            }
        })
    }
});


$(document).ready(function () {
//сабмит форм фильтрации
    $('#articles_filter select').on('change', function (e) {
        $("#articles_filter").submit();
    });
    $('#videos_filter select').on('change', function (e) {
        $("#videos_filter").submit();
    });
    $('#events_filter label').on('click', function (e) {
        setTimeout(function () {
            $("#events_filter").submit();
        }, 50);
    });
    $('#sorter_form select').on('change', function (e) {
        $("#sorter_form").submit();
    });
//Живой поиск
    $('#reg_workplaces_input').bind("keyup input click", function() {
        if(this.value.length >= 2){
            $.ajax({
                url: '/local/ajax/reg_workplaces.php',
                dataType: 'json',
                type: 'POST',
                data: {TEXT: this.value},
                success: function(jsondata){
                    $("#reg_workplaces").html(jsondata); //Выводим полученые данные в списке
                }
            })
        }
    });
    // живой поиск персонального города в регистрации
    $('#reg_personal_city_input').bind("keyup input click", function() {
        if(this.value.length >= 2){
            $.ajax({
                url: '/local/ajax/reg_personal_city.php',
                dataType: 'json',
                type: 'POST',
                data: {TEXT: this.value},
                success: function(jsondata){
                    $("#reg_personal_city").html(jsondata); //Выводим полученые данные в списке
                }
            })
        }
    });
    var cookieBannerValue = $.cookie("CLOSE_BANNER");
    if (cookieBannerValue == 1) {
        $(".banner-block_wrap").hide();
        navMenu();
    }
    closeBannerAddCookie();
//форма авторизации
    $('#header_auth_form input[name=Login]').click(function(e){
        $.ajax({
            type: 'POST',
            url: '/local/ajax/u_work.php',
            data: {
                mode: 'login',
                login: $('#header_auth_form input[name=USER_LOGIN]').val(),
                password: $('#header_auth_form input[name=USER_PASSWORD]').val(),
                remember: $('#header_auth_form input[name=USER_REMEMBER]').val()
            },
            dataType: 'json',
            success: function(result){
                if(result.status)
                    location.reload();
                else
				{
                    switch(result.message)
					{
                        case 'file_failed':
                            $('#header_auth_form').addClass('hidden');
                            $('#header_auth_form').prev().addClass('hidden');
                            $('.login-block_wrap .login-verify-error-container').removeClass('hidden');
						break;
                        case 'file_pending':
                            $('#header_auth_form').addClass('hidden');
                            $('#header_auth_form').prev().addClass('hidden');
                            $('.login-block_wrap .login-error-container').removeClass('hidden');
                        break;
                        case 'invitation_code_failed':
						break;
                        default:
                            $('#header_auth_form input[name=USER_LOGIN]').val('').addClass('ierror').parent().addClass('ierror');
                            $('#header_auth_form input[name=USER_PASSWORD]').val('').addClass('ierror').parent().addClass('ierror');
						break;
                    }
                }
            }
        });
        e.preventDefault();
        return false;
    });
//форма регистрации преренесено в common.js
    /*$('#header_register_form input[name=Register]').click(function(e)
	{
        var step_block = $(this).parents('.step-block');
        var sendInputs = step_block.find('input.isend,textarea.isend,select.isend');
        var temp_step = step_block.attr('data-blocks');
        if (4 == temp_step)
        {
            if (sendInputs.hasClass('ierror')
				|| !$('#agree').val().length
				|| !$('input[name=PASSWORD]').val().length
				|| !$('input[name=EMAIL]').val().length
			)
            {}
            else
            {
                $.ajax({
                    type: 'POST',
                    url: '/local/ajax/u_work.php',
                    data: {
                        mode: 'register',
                        email: $('#header_register_form input[name=EMAIL]').val(),
                        password: $('#header_register_form input[name=PASSWORD]').val(),
                        name: $('#header_register_form input[name=NAME]').val(),
                        second_name: $('#header_register_form input[name=SECOND_NAME]').val(),
                        last_name: $('#header_register_form input[name=LAST_NAME]').val(),
                        workplace: $('#header_register_form input[name=UF_WORK_PLACE]').val(),
                        city: $('#header_register_form input[name=PERSONAL_CITY]').val(),
                        phone: $('#header_register_form input[name=PERSONAL_PHONE]').val(),
                        code: $('#header_register_form input[type="text"][name="code"]').val(),
                        file_id: $('#header_register_form #file_confirmation_code').html()
                    },
                    dataType: 'json',
                    success: function(result)
					{
						console.log(result);
                        if(result.status)
                        {
                            $('#register_step3').removeClass("visible");
                            $('#register_step4').addClass("visible");
                            //закрасим кружочек 4 шага
                            $('*[data-step=4]').addClass("fill");
                        }
                        else
						{
                            $('#header_auth_form input[name=EMAIL]').addClass('ierror').parent().addClass('ierror');
                            var arr =  result.message.split('<br>');
                            for (var i = 0; i < arr.length; i++)
                            {
                                re = '/Пользователь с логином/i';
                                found = arr[i].match(re);
                                if (found)
                                {
                                    $('#header_auth_form input[name=EMAIL]').addClass('ierror').html(arr[i]).parent().addClass('ierror');
                                }
                            }
                            e.preventDefault();
                            e.stopImmediatePropagation();
                            return false;
						}
                    }
                });
			}
		}
        //e.preventDefault();
        //return false;
    });*/
//форма восстановления пароля
    $('#header_forgot_form input[name=Forgot]').click(function(e){
        $.ajax({
            type: 'POST',
            url: '/local/ajax/u_work.php',
            data: {
                mode: 'forgot',
                email: $('#header_forgot_form input[name=USER_EMAIL]').val()
            },
            dataType: 'json',
            success: function(result){
                if(result.status){
                    $('#forgot_first_step').removeClass("visible");
                    $('#forgot_second_step').addClass("visible");
                }else{
                    if($('#header_forgot_form input[name=USER_EMAIL]').val().length) $('#forgot_error_block').show();
                }
            }
        });
        e.preventDefault();
        return false;
    });

});
$(function(){
	
	$(document).on('click','.event-reg_btn', function(e){
		var sendBut = $(this);
		var forma = sendBut.parents('.form-send');
		var sendInputs = forma.find('input.isend,textarea.isend,select.isend');
		var sendInputsFile = forma.find('.isend_file');

		if($("#profile").is(":checked")){
			//skip
		}else{
			sendInputs.each(function () {
				if ($(this).hasClass('isendNotCheck')){
					//skip
				}else{
					if ($(this).val() == '') {
						$(this).addClass('ierror').parent().addClass('ierror');
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

		if(sendInputs.hasClass('ierror')){
			
		}else{
			e.preventDefault();

			$.ajax({
				type: 'POST',
				url: '/local/ajax/event_registration_ajax.php',
				data: $('.event-registration_block .form-send').serialize(),
				dataType: 'json',
				success: function(result){
					if(result.STATUS=='OK'){
						sendBut.addClass("success").val("Заявка на участие отправлена");
						$(".interactive-block_wrap").hide();
						$(".joined-block_wrap").addClass("visible");
					}
				}
			});
		}
		
		return false;
	});
	
	$(document).on('change','#select_whoes_profile', function(e){
		var sendInputs = $('.event-registration_block .form-send').find('input.isend,textarea.isend');
		if($(this).val()=='my'){
			sendInputs.each(function (){
				if($(this).attr('data-user')){
					$(this).val($(this).attr('data-user'));
					if($(this).val() == ''){
						$(this).parent().removeClass("focus");
					}else{
						$(this).parent().addClass("focus");
					}
				}
			});
			if($('.event-registration_block .form-send select[name="UF_ACADEMIC_DEGREE"]').attr('data-user')){
				$('.event-registration_block .form-send select[name="UF_ACADEMIC_DEGREE"]').val($('.event-registration_block .form-send select[name="UF_ACADEMIC_DEGREE"]').attr('data-user')).select2({
					minimumResultsForSearch: Infinity,
					dropdownParent: $('.select-parent')
				});
			}
		}else{
			sendInputs.each(function (){
				if($(this).attr('data-user')){
					$(this).val('');
					$(this).parent().removeClass("focus");
				}
			});
			if($('.event-registration_block .form-send select[name="UF_ACADEMIC_DEGREE"]').attr('data-user')){
				$('.event-registration_block .form-send select[name="UF_ACADEMIC_DEGREE"]').val('').select2({
					minimumResultsForSearch: Infinity,
					dropdownParent: $('.select-parent')
				});
			}
		}
	});
});