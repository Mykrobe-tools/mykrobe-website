var MykrobeHome = function() {
	var that = this,
		promoContainer,
		promoContent;
	return that.init.apply(that, arguments);
};

MykrobeHome.prototype = {
	init:function() {
		var that = this;

		that.promoContainer = $('.promo-container');
		that.promoContent = $('.promo',that.promoContainer);

		// $(window).bind('scroll.MykrobeMenu',function(e){
		// 	that.update();
		// });
		$(window).bind('orientationchange.MykrobeHome resize.MykrobeHome', function(e) {
            that.update();
        });
		that.update();
		return that;
	},

	update:function() {
		var that = this;
		that.updateAppearance();
		return that;
	},

	updateAppearance:function() {
		var that = this,
			left,
			top,
			windowWidth,
			windowHeight,
			promoContainerWidth,
			promoContainerHeight,
			promoContentWidth,
			promoContentHeight;

		windowWidth = $(window).width();
		windowHeight = $(window).height();
		promoContentWidth = $(that.promoContent).innerWidth();
		promoContentHeight = $(that.promoContent).innerHeight();

		promoContainerWidth = windowWidth;

		// preferred ratio of 2:3
		promoContainerHeight = Math.round(promoContainerWidth * 2 / 3);

		// but not more than 2:3 height of viewport
		promoContainerHeight = Math.min(promoContainerHeight, Math.round(windowHeight * 2 / 3 ));

		// don't crop the circle
		promoContainerHeight = Math.max(promoContainerHeight,promoContentHeight+48);

		that.promoContainer.css({
			'width': promoContainerWidth+'px',
			'height': promoContainerHeight+'px'
		});


		left = Math.round(0.5 * (promoContainerWidth - promoContentWidth));
		top = Math.round(0.5 * (promoContainerHeight - promoContentHeight));

		that.promoContent.css({
			'postion': 'relative',
			'margin':0,
			'left':left+'px',
			'top':top+'px'
		});		
	}
};
