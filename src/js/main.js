const slider = require('./slider'),
        menu = require('./menu');

$(window).on('load resize', slider.onResize);

$(window).on('load', function(){
    $(document).on('click', '.slider__arrow_right', slider.nextSlide);
    $(document).on('click', '.slider__arrow_left', slider.prevSlide);
    $(document).on('click', '.header-nav__bars', menu.toggle);
    $(document).on('transitionend', '.slider__list', slider.toggleTransitionFlag);
});
