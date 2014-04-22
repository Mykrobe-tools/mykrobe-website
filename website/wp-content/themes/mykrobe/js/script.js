

/* __________________________________________________________________________________________ start up
*/

function orientationChange() {
    if ( 0 === window.orientation || 180 === window.orientation ) {
        $('meta[name="viewport"]').attr("content", "width=device-width, initial-scale=1.0");
    }
    else if ( -90 === window.orientation || 90 === window.orientation ) {
        $('meta[name="viewport"]').attr("content", "width=device-height, initial-scale=1.0");
    }
}

$(document).ready(function() {
    var that = this;

    if ( Modernizr.touch ) {
        new FastClick(document.body);
        orientationChange();
        $(window).bind('orientationchange resize', function(event){
            orientationChange();
        });
    }

    if ( $('body').hasClass('home')) {
    }

    that.mykrobeMenu = new MykrobeMenu();
});
