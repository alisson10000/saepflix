(function($) {
    $(document).ready(function() {
        $("#hero-carousel").owlCarousel({
            items: 1,
            dots: false,
            loop: true,
            nav: true,
            navText: ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"],
            autoplay: true,
            autoplayHoverPause: true
        });
    });
})(jQuery);