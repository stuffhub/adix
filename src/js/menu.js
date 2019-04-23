module.exports = (function(){

    const menuList = $('.list-nav'),
        menuButton = $('.bars-nav');

    const toggle = () => {
        if (menuList.is(':hidden')) {
            menuList.slideDown();
            menuButton.addClass('active');
        } else {
            menuList.slideUp();
            menuButton.removeClass('active');
        }
    };

    return {
        toggle: toggle
    }
})();