function menuMB(){
    $('.btn-menu').click(function(event){
        event.stopPropagation();
        $('.main-menu').stop().slideToggle(300);
        $('.over-bg').toggleClass('active');
        $(this).toggleClass('fa-bars').toggleClass('fa-close');
    })
    if($(window).width() < 992){
        $(window).click(function(e){
            if($('.main-menu').has(e.target).length == 0 && !$('.main-menu').is(e.target) && $('.btn-menu').has(e.target).length == 0 && !$('.btn-menu').is(e.target)){
                $('.main-menu').stop().slideUp(300);
                $('.btn-menu').removeClass('fa-close').addClass('fa-bars');
                $('.over-bg').removeClass('active');
            }
        })
    }
}
function sliderSlick(){
    if($('.slider').length > 0){
        $('.slider').slick({
            dots: true,
            infinite: true,
            speed: 800,
            arrows: true,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplaySpeed: 3000,
            prevArrow: '<i class="fa fa-angle-left prev-arrow" title="Trước"></i>',
            nextArrow: '<i class="fa fa-angle-right next-arrow" title="Sau"></i>'
        })
    }
    if($('.slider-course').length > 0){
        $('.slider-course').slick({
            dots: false,
            infinite: true,
            speed: 800,
            arrows: true,
            autoplay: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplaySpeed: 4000,
            prevArrow: '<span><i class="fa fa-angle-left prev-arrow" title="Trước"></i></span>',
            nextArrow: '<span><i class="fa fa-angle-right next-arrow" title="Sau"></i></span>',
            responsive:[
                {
                    breakpoint: 1200,
                    settings:{
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 991,
                    settings:{
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 767,
                    settings:{
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 480,
                    settings:{
                        slidesToShow: 1,
                    }
                }
            ]
        });
    }
    if($('.ct-slider-course').length > 0){
        $('.ct-slider-course').slick({
            dots: false,
            infinite: true,
            speed: 800,
            arrows: true,
            autoplay: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplaySpeed: 4000,
            prevArrow: '<span><i class="fa fa-angle-left prev-arrow" title="Trước"></i></span>',
            nextArrow: '<span><i class="fa fa-angle-right next-arrow" title="Sau"></i></span>',
            responsive:[
                {
                    breakpoint: 991,
                    settings:{
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 767,
                    settings:{
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 480,
                    settings:{
                        slidesToShow: 1,
                    }
                }
            ]
        });
    }
}
function backTop(){
    $(window).scroll(function () {
		if ($(window).scrollTop() > 500) {
			$('.back-to-top').css('display', 'block');
		}
		else {
			$('.back-to-top').css('display', 'none');
		}
	});
	$('.back-to-top').click(function (event) {
		$("html,body").animate({ scrollTop: 0 }, 800);
		return false;
	});
}
function modalClose(){
    $('.btn-close-mess').click(function(){
        $('.messenger').css('display', 'none');
    })
}
function tabActive(){
    if($('.vd-wrapper .tab .nav .nav-item .nav-content').hasClass('active') == true){
        $('.vd-wrapper .tab .nav .nav-item .nav-content').closest('.vd-wrapper').find('.process').css('display', 'block');
    }
    else{
        $('.vd-wrapper .tab .nav .nav-item .nav-content').closest('.vd-wrapper').find('.process').css('display', 'none');
    }
}
function playVideo(){
    if($('.tab-content .item .content-chapter ul li').length > 0){
        $('.tab-content .item .content-chapter ul li').closest('.item').find('.title-chapter .fa').addClass('fa-angle-up');
    }
    $('.tab-content .item .title-chapter').click(function(event){
        event.preventDefault();
        if($(this).closest('.item').find('.content-chapter').is(":hidden") == false){
            $(this).find('i').removeClass('fa-angle-up').addClass('fa-angle-down');
            $(this).closest('.item').find('.content-chapter').slideUp(250);
        }
        else{
            $(this).find('i').removeClass('fa-angle-down').addClass('fa-angle-up');
            $(this).closest('.item').find('.content-chapter').slideDown(250);
        }
    })
    var video1 = '<iframe src="';
    var video2 = '?autoplay=true" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    $('.tab-content .item .content-chapter ul li').click(function(){
        var data = $(this).attr('data-video');
        var video = video1 + data + video2;
        $('#playVideo').find('iframe').remove();
        $('#playVideo').prepend(video);
    })
    $('.tab-content .item .content-chapter ul li').click(function (event) {
		$("html,body").animate({ scrollTop: 0 }, 500);
		return false;
	});
}
var IMG ={
    chooseImg:function(){
    if($('#choose-img').length ==0) return;
    $(document).on('change','#choose-img',function(){
        var _this = $(this);
            IMG.readURL(this,_this);
        })
    },
    readURL:function(input,_this) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                $('#avatar').attr('src', e.target.result);
            }
            reader.readAsDataURL(input.files[0]);
        }
    },
}
function changePass(){
    $('.btn-change').click(function(){
        $(this).closest('.box-defualt').css('display', 'none');
        $('.box-change').css('display', 'block');
    })
    $('.btn-cancel').click(function(){
        if($('.box-change').is(":visible") == true){
            $('.box-change').css('display', 'none');
            $('.box-defualt').css('display', 'block');
        }
    })
}
function sendAnswer(){
    $('.modal-content .choosed table tbody tr td:last-child').each(function(){
        if($(this).html()==""){
            $(this).html('Chưa chọn');
            $(this).css('color', '#ff9100');
        }
    });
}
var UI ={
    select2:function(){
        if($('.select2').length ==0) return;
        $('.select2').select2();
        $('.select2.nosearch').select2({
            minimumResultsForSearch: -1
        });
    },
}
function evaluete(){
    $('.evaluate-ofyou .btn-evaluate').click(function(){
        $(this).closest('.evaluate-ofyou').find('.star-rate').css('width', '100%');
        $(this).css('display', 'none');
        $(this).closest('.evaluate-ofyou').find('.btn-unevaluate').css('display', 'block');
    })
    $('.evaluate-ofyou .btn-unevaluate').click(function(){
        $(this).closest('.evaluate-ofyou').find('.star-rate').css('width', '0%');
        $(this).css('display', 'none');
        $(this).closest('.evaluate-ofyou').find('.btn-evaluate').css('display', 'block');
    })
}
function percentKhoaHoc(){
    $('.kh-wrapper .kh-course .overview-course .info-course').each(function(){
        if($(this).find('.percent').length > 0){
            $(this).find('h4, .name-teacher').css('text-align', 'left');
        }
    })
}
function goElement(){
    var intro = $('#intro').offset();
    var content = $('#content').offset();
    var info = $('#info').offset();
    var evaluate = $('#evaluate').offset();
    $('.title-course #btn-intro').click(function(){
        $("html,body").animate({ scrollTop: intro.top - 85 }, 800);
		return false;
    })
    $('.title-course #btn-content').click(function(){
        $("html,body").animate({ scrollTop: content.top - 85 }, 800);
		return false;
    })
    $('.title-course #btn-info').click(function(){
        $("html,body").animate({ scrollTop: info.top - 85 }, 800);
		return false;
    })
    $('.title-course #btn-evaluate').click(function(){
        $("html,body").animate({ scrollTop: evaluate.top - 85 }, 800);
		return false;
    })
}
$(document).ready(function(){
    menuMB();
    backTop();
    sliderSlick();
    modalClose();
    if($('.idNber1').length > 0){
        $('.idNber1').counterUp({ delay: 10, time: 1500 });
    }
    if($(window).width() > 991){
        if($('.wow').length){
            new WOW().init();
        }
    }
    playVideo();
    tabActive();
    IMG.chooseImg();
    changePass();
    sendAnswer();
    UI.select2();
    evaluete();
    percentKhoaHoc();
    goElement();
})
$(document).ready(function(){
    if($('.fancy').length > 0){
        $('.fancy').fancybox({
            width: 1200,
            height: 600
        });
    }
})
$(document).ready(function(){
	if(navigator.userAgent.indexOf("Speed Insights ") == -1){
		$(window).bind("load", function() {
		$('body').append('<div id="fb-root"></div>');
		$.ajax({
		global: false,
		url: "theme/frontend/js/social.js",
		dataType: "script"
	});
	window.___gcfg = {
	lang: 'vi',
	parsetags: 'onload'
	};
	});
	}
})