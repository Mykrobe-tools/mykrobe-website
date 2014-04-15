var WhatIsHelixSlide = function() {
	var that = this,
		id,
		nextLink,
		title,
		hidden,
		isFirst,
		isLast,
		scrollTop,
		container;

	return that.init.apply(that, arguments);
};

WhatIsHelixSlide.prototype = {
	init:function(container_) {
		var that = this;
		that.container = $(container_);
		that.id = that.container.attr('id');
		that.title = that.container.data('title');
		that.hidden = false;
		return that;
	},

	getFirstStepOffsetTop:function() {
        return Math.round($('.row-statement').offset().top);
    },

    getFooterHeight:function() {
    	return $('body>footer').outerHeight();
    },

	linkto:function(slide_) {
		var that = this;
		that.nextLink = $('\
			<a class="fourcol" rel="next" href="#'+slide_.id+'">'+slide_.title+'</a>\
		');
		that.container.append(that.nextLink);
		that.nextLink.click(function(e) {
			that.setHidden(true,true);
			$("html, body").animate({ scrollTop: slide_.scrollTop+'px' });
			e.preventDefault();
		});
		return that;
	},

	setIsFirst:function(isFirst_) {
		var that = this;
		if ( that.isFirst === isFirst_ ) {
			return;
		}
		that.isFirst = isFirst_;
		return;
	},

	setIsLast:function(isLast_) {
		var that = this;
		if ( that.isLast === isLast_ ) {
			return;
		}
		that.isLast = isLast_;
		return;
	},

	layoutForHeight:function(height_) {
		var that = this,
			nextLinkTop,
			textTop,
			t,
			h;

		if ( HelixCentre.isMobile() ) {
			$(that.container).css({
				'opacity':1
			});
			that.container.css({
				'height':'auto'
			});
			$('.content-wrapper',that.container).css({
				'position':'',
				'top':''
			});
			$(that.nextLink).css({
				'top':''
			});
		}
		else {
			// each is 2/3 height to reduce scrolling
			if ( that.isFirst ) {
				// first one fills the window minus header
				h = height_ - that.getFirstStepOffsetTop();
				textTop = Math.round(height_*1/3) - that.getFirstStepOffsetTop();
				nextLinkTop = Math.round(height_*2/3) - that.getFirstStepOffsetTop();
			}
			else if ( that.isLast ) {
				// last one fills 2/3 window minus footer
				// h = Math.ceil(height_*2/3) - that.getFooterHeight();
				h = Math.ceil(height_*2/3) - 20;
				textTop = 0;
				nextLinkTop = Math.round(height_*1/3);
			}
			else {
				h = Math.ceil(height_*2/3);
				textTop = 0;
				nextLinkTop = Math.round(height_*1/3);
			}
			that.container.css({
				'height':h+'px'
			});
			textTop = Math.max(0,textTop);
			$('.content-wrapper',that.container).css({
				'position':'relative',
				'top':textTop+'px'
			});
			nextLinkTop = Math.max(textTop+$('.content-wrapper',that.container).outerHeight()+20,nextLinkTop);
			$(that.nextLink).css({
				'top':nextLinkTop+'px'
			});

			// scroll position
			that.scrollTop = $(that.container).offset().top - Math.ceil(height_*1/3);
			that.scrollTop = Math.max(0,that.scrollTop);
		}

		return that;
	},

	setHidden:function(hidden_,animated_) {
		var that = this;
		if ( HelixCentre.isMobile() ) {
			$(that.container).css({
				'opacity':1
			});
			return;
		}
		if ( hidden_ === that.hidden ) {
			return;
		}
		that.hidden = hidden_;
		if ( animated_ ) {
			if ( !Modernizr.touch ) {
				$(that.container).stop().animate({
					opacity:that.hidden ? 0 : 1
				},250);
				$(that.nextLink).stop().animate({
					opacity:that.hidden ? 0 : 1
				},250);
			}
			else {
				$(that.nextLink).stop().animate({
					opacity:that.hidden ? 0 : 1
				},250);
			}
			if ( that.hidden ) {
			}
			else {
				$(that.nextLink).css({
					opacity:0
				});
				$(that.nextLink).stop().delay(500).animate({
					opacity:1
				},250);
			}
		}
		else {
			if ( !Modernizr.touch ) {
				$(that.container).css({
					opacity:that.hidden ? 0 : 1
				});
			}
			$(that.nextLink).css({
				opacity:0
			});
		}
		if ( that.isLast ) {
			if ( that.hidden ) {
			}
			else {
				if ( !Modernizr.touch ) {
					$('input[type="email"]',that.container).focus();
				}
			}
		}
		return that;
	}
};
