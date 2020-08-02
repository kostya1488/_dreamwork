$(document).ready(function() {

    //--------------------------------------------------------------------- smooth scrolling
    $(".item_link").on("click", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 500);
    });
    // --------------------------------------------------------------------------------------- swiper
    $slick_slider = $('.swiper');
    settings_slider = {
        centerMode: true,
        dots: true,
        variableWidth: true,
        infinite: false,
        centerPadding: '70px',
        slidesToShow: 1,
        initialSlide: 1,
    }

    slick_on_mobile($slick_slider, settings_slider);
})

// ajax
function sendAjaxForm(ajax_form, url) {
    var ajax_form = $('#' + ajax_form);

    ajax_form.submit(function() {
        // ajax_form.parent().animate({
        //     opacity: 0
        // }, 500);

        $('.after_send_hide').animate({
            bottom: 400,
            opacity: 0
        }, 500).hide(500);

        setTimeout(function() {
            $('.response').addClass('show').animate({
                top: '25%',
                opacity: 1
            }, 500);
        }, 600);

        // $.ajax({
        //     url: url,
        //     type: "POST",
        //     dataType: "html",
        //     data: ajax_form.serialize(),
        //     success: function(response) {
        //         result = $.parseJSON(response);

        //         // ajax_form.parent().hide();
        //         // form_title.hide();
        //         // $('#anketa').addClass('styles_after_send');
        //         // result_form.show().animate({
        //         // opacity: 1
        //         // }, 500);
        //     },
        //     error: function(response) {
        //         result_form.html(response);
        //     }
        // });
        return false;
    })
}

// slick on mobile
function slick_on_mobile(slider, settings) {
    $(window).on('load resize', function() {
        if ($(window).width() > 992) {
            if (slider.hasClass('slick-initialized')) {
                slider.slick('unslick');
            }
            return
        }
        if (!slider.hasClass('slick-initialized')) {
            return slider.slick(settings);
        }
    });
};