// Review Slider
jQuery(document).ready(function () {
    const slider = jQuery('.review-slider');
    if (jQuery.fn.slick && slider.length) {
        slider.slick({
            dots: true,
            infinite: false,
            arrows: false,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3, infinite: true }},
                { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2 }},
                { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 }},
            ]
        });
    }
});
