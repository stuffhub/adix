module.exports = (function() {
  let slideIndex = 0;
  const sliderContainer = $(".slider__list");
  const sliderChildren = sliderContainer.children();
  const sliderChildrenLength = sliderChildren.length;

  const transformSlide = slidePosition => {
    sliderContainer.css({
      "-webkit-transform": `translate3d(-${slidePosition}px, 0px, 0px)`,
      "-moz-transform": `translate3d(-${slidePosition}px, 0px, 0px)`,
      "-ms-transform": `translate3d(-${slidePosition}px, 0px, 0px)`,
      "-o-transform": `translate3d(-${slidePosition}px, 0px, 0px)`,
      "transform": `translate3d(-${slidePosition}px, 0px, 0px)`
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
    if (slideIndex !== 0) {
        slideIndex--;
    } else {
        slideIndex = sliderChildrenLength - 1;
    }
    transformSlide(getSlidePosition(sliderChildren[slideIndex]));
  };

  const onResize = () => {
    const viewportWidth = $(window).outerWidth();

    sliderChildren.each(function() {
      $(this).outerWidth(viewportWidth);
    });
    sliderContainer.width(
      sliderChildrenLength * $(sliderChildren[0]).outerWidth()
    );
    transformSlide(getSlidePosition(sliderChildren[slideIndex]));
  };

  return {
    nextSlide: nextSlide,
    prevSlide: prevSlide,
    onResize: onResize
  };
})();
