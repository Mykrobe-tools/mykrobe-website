

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
    var that = this,
        whatIsHelix;



    // open external links in new window
    // $('a:not([href^=mailto])').each(function() {
    //     var a = new RegExp('/' + window.location.host + '/');
    //     if (!a.test(this.href)) {
    //         $(this).click(function(event) {
    //             event.preventDefault();
    //             event.stopPropagation();
    //             window.open(this.href, '_blank');
    //         });
    //     }
    // });

    if ( Modernizr.touch ) {
        new FastClick(document.body);
        orientationChange();
        $(window).bind('orientationchange resize', function(event){
            orientationChange();
        });
    }

    // home work teasers and features
    if ( $('body').hasClass('home')) {
        // whatIsHelix = new WhatIsHelix();
        // smooth scroll
        // $('a:[href^=#]').smoothScroll({
        //     speed:500
        // });
    }

    that.helixMenu = new HelixMenu();

});

function listStyles(width,gutter) {
    var prefixList = "one,two,three,four,five,six,seven,eight,nine,ten,eleven,twelve",
        prefixes = prefixList.split(','),
        w,
        p,
        s,
        i;

    s = '';
    p = 100 * gutter / width;
    $('body').append('.'+prefixes.slice(0,prefixes.length-1).join('col, .')+'col {\r');
    $('body').append('\tmargin-right:'+p+'%;\r');
    $('body').append('}\r');
    for ( i = 1; i <= prefixes.length; i++) {
        w = ((width+gutter) * i / prefixes.length)-gutter;
        p = 100 * w / width;
        $('body').append('.row .'+prefixes[i-1]+'col {\r');
        $('body').append('\twidth:'+p+'%;\r');
        $('body').append('}\r');
    }
}