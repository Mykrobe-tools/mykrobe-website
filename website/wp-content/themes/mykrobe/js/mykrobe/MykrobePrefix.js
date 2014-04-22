var Mykrobe = Mykrobe || {};

Mykrobe.isMobile = function() {
    if ( !($('html').hasClass('lte-ie8')) ) {
        return Modernizr.mq("only screen and (max-width:767px)");
    }
    else {
        return $(window).width() < 768;
    }
};

Mykrobe.isMaximal = function() {
    if ( !($('html').hasClass('lte-ie8')) ) {
        return Modernizr.mq("only screen and (min-width: 1140px)");
    }
    else {
        return $(window).width() >= 1140;
    }
};
