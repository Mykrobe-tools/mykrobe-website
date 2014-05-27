var MykrobeProduct = Class.extend({
	init:function() {
		var that = this;

		that.overviewContainer = $('.container.product-overview');
		that.screenShotContainer = $('.product-overview-screenshots');
		that.isHidden = true;

		 $('ul.product-species-tabs').each(function(){
		    // For each set of tabs, we want to keep track of
		    // which tab is active and it's associated content
		    var $active, $content, $links = $(this).find('a');

		    // If the location.hash matches one of the links, use that as the active tab.
		    // If no match is found, use the first link as the initial active tab.
		    $active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
		    $active.addClass('active');

		    $content = $($active[0].hash);

		    // Hide the remaining content
		    $links.not($active).each(function () {
		      $(this.hash).hide();
		    });

		    // Bind the click event handler
		    $(this).on('click', 'a', function(e){
		      // Make the old tab inactive.
		      $active.removeClass('active');
		      $content.hide();

		      // Update the variables with the new link and content
		      $active = $(this);
		      $content = $(this.hash);

		      // Make the tab active.
		      $active.addClass('active');
		      $content.show();

		      // Prevent the anchor's default click action
		      e.preventDefault();
		    });
		  });

		$(window).bind('orientationchange.MykrobeProduct resize.MykrobeProduct', function(e) {
            that.update();
        });
		that.update();
	},

	update:function() {
		var that = this;
		that.updateAppearance();
		return that;
	},

	updateAppearance:function() {
		var that = this,
			avaiaibleWidth,
			avaiaibleHeight,
			naturalWidth,
			naturalHeight;

		if ( Mykrobe.isMobile() ) {
			$('img',that.screenShotContainer).removeAttr('style');
		}
		else {
			avaiaibleHeight = $('.row',that.overviewContainer).innerHeight();
			$('img',that.screenShotContainer).css({
				'position':'absolute',
				'width':'auto',
				'height':avaiaibleHeight+'px'
			});
		}

		if ( that.isHidden ) {
			$('img',that.screenShotContainer).stop(true).animate({
				'opacity':1
			},500);
			that.isHidden = false;
		}
		return that;
	}
});