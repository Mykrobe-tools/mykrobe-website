/* __________________________________________________________________________________________ start up
 */

;(function() {
    var that = this;

    that.orientationChange = function() {
        if (0 === window.orientation || 180 === window.orientation) {
            $('meta[name="viewport"]').attr("content", "width=device-width, initial-scale=1.0");
        } else if (-90 === window.orientation || 90 === window.orientation) {
            $('meta[name="viewport"]').attr("content", "width=device-height, initial-scale=1.0");
        }
    }

    $(document).ready(function() {
        if (Modernizr.touch) {
            new FastClick(document.body);
            that.orientationChange();
            $(window).bind('orientationchange resize', function(event) {
                that.orientationChange();
            });
        }

        if ($('body').hasClass('home')) {
            that.mykrobeHome = new MykrobeHome();
        } else if ($('body').hasClass('page-template-template-product-php')) {
            that.mykrobeProduct = new MykrobeProduct();
        }

        that.mykrobeMenu = new MykrobeMenu();

        $('.download-license-agreement').each(function() {
            var blocker = $('.download-buttons-blocker', this);
            $(':checkbox', this).click(function() {
                if ($(this).is(':checked')) {
                    blocker.hide();
                } else {
                    blocker.show();
                }
            });
        });
        $('a:[href^=#]').smoothScroll();
    });

    $.modal.defaults = {
        overlay: "#000", // Overlay color
        opacity: 0.75, // Overlay opacity
        zIndex: 1, // Overlay z-index.
        escapeClose: true, // Allows the user to close the modal by pressing `ESC`
        clickClose: true, // Allows the user to close the modal by clicking the overlay
        closeText: 'Close', // Text content for the close <a> tag.
        closeClass: '', // Add additional class(es) to the close <a> tag.
        showClose: false, // Shows a (X) icon/link in the top-right corner
        modalClass: "modal", // CSS class added to the element being displayed in the modal.
        spinnerHtml: null, // HTML appended to the default spinner during AJAX requests.
        showSpinner: true, // Enable/disable the default spinner during AJAX requests.
        fadeDuration: null, // Number of milliseconds the fade transition takes (null means no transition)
        fadeDelay: 1.0 // Point during the overlay's fade-in that the modal begins to fade in (.5 = 50%, 1.5 = 150%, etc.)
    };
})();
