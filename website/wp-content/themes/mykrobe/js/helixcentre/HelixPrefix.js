// var kHelixColorHighlight = "#fc3f2c",
//     kHelixColorDefault = "#a2c0c3",
//     kHelixColorBackground = "edeceb",
//     kHelixNumberOfLines = 100,
//     kHelixLineHeight = 5,
//     kHelixLineWidth = 60;


var HelixCentre = HelixCentre || {};

HelixCentre.isMobile = function() {
    if ( !($('html').hasClass('lte-ie8')) ) {
        return Modernizr.mq("only screen and (max-width:767px)");
    }
    else {
        return $(window).width() < 768;
    }
};

HelixCentre.isMaximal = function() {
    if ( !($('html').hasClass('lte-ie8')) ) {
        return Modernizr.mq("only screen and (min-width: 1140px)");
    }
    else {
        return $(window).width() >= 1140;
    }
};

var kHelixColorHighlight = "#fc3f2c",
    kHelixColorDefault = "#98c4c8",
    kHelixColorBackground = "#fcfcfc",
    kHelixNumberOfLines = HelixCentre.isMobile() ? 50 : 100,
    kHelixLineHeight = HelixCentre.isMobile() ? 3 : 5,
    kHelixLineWidth = HelixCentre.isMobile() ? 36 : 60;
