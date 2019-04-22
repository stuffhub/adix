module.exports = (function() {
  let slideIndex = 0;
  const sliderContainer = $(".slider__list");
  const sliderChildren = sliderContainer.children();
  const sliderChildrenLength = sliderChildren.length;

  const transformSlide = slidePosition => {
    sliderContainer.css({
      "-webkit-transform": `translateX(-${slidePosition}px)`,
      "-moz-transform": `translateX(-${slidePosition}px)`,
      "-ms-transform": `translateX(-${slidePosition}px)`,
      "-o-transform": `translateX(-${slidePosition}px)`,
      transform: `translateX(-${slidePosition}px)`
    });
  };

  const getSlidePosition = slide => $(slide).position().left;

  const nextSlide = () => {
    if (slideIndex !== sliderChildrenLength - 1) {
      slideIndex++;
    } else {
      slideIndex = 0;
    }
    transformSlide(getSlidePosition(sliderChildren[slideIndex]));
  };

  const prevSlide = () => {
    if (slideIndex === 0) {
      slideIndex = sliderChildrenLength - 1;
    } else {
      slideIndex--;
    }
    transformSlide(getSlidePosition(sliderChildren[slideIndex]));
  };

  const onResize = () => {
    const viewportWidth = $(window).outerWidth();
    
    sliderChildren.each(function() {
        $(this).outerWidth(viewportWidth);
    });
    sliderContainer.width(sliderChildrenLength * $(sliderChildren[0]).outerWidth());
    transformSlide(getSlidePosition(sliderChildren[slideIndex]));
  };

  return {
    nextSlide: nextSlide,
    prevSlide: prevSlide,
    onResize: onResize
  };
})();
