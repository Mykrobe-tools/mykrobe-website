var MykrobeProduct = Class.extend({
	init:function() {
		var that = this;

		that.overviewContainer = $('.container.product-overview');
		that.screenShotContainer = $('.product-overview-screenshots');

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
		return that;
	}
});