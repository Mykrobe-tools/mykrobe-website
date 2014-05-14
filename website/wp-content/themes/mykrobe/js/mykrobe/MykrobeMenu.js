var MykrobeMenu = function() {
	var that = this,
		showsTopBar,
		expanded;
	return that.init.apply(that, arguments);
};

MykrobeMenu.prototype = {
	init:function(container_) {
		var that = this;

		$('.menu-button').click(function(e) {
			that.setExpanded(!that.expanded);
		});
		$('#menu-overlay').click(function(e) {
			e.preventDefault();
			that.setExpanded(false);
		});
		$(window).bind('scroll.MykrobeMenu',function(e){
			that.update();
		});
		$(window).bind('orientationchange.MykrobeMenu resize.MykrobeMenu', function(e) {
            that.update();
        });
		that.update();
		return that;
	},

	update:function() {
		var that = this,
			scrollTop = $(window).scrollTop();
		that.setShowsTopBar(!Mykrobe.isMobile() || scrollTop > 100);
		return that;
	},

	setShowsTopBar:function(showsTopBar_) {
		var that = this;
		if ( showsTopBar_ === that.showsTopBar ) {
			return;
		}
		that.showsTopBar = showsTopBar_;
		that.updateAppearance();
		return that;
	},

	setExpanded:function(expanded_) {
		var that = this;
		if ( expanded_ === that.expanded ) {
			return;
		}
		that.expanded = expanded_;
		that.updateAppearance();
		return that;
	},

	updateAppearance:function() {
		var that = this;
		if ( that.expanded ) {
			$('.menu-header-menu-container').fadeIn(150);
			$('.menu-header-menu-container').addClass('expanded');
			$('#menu-overlay').fadeIn(150);
		}
		else {
			if ( that.showsTopBar ) {
				$('.menu-header-menu-container').fadeIn(150);
				$('.menu-header-menu-container').removeClass('expanded');
			}
			else {
				$('.menu-header-menu-container').fadeOut(150);
				setTimeout(function(){
					$('.menu-header-menu-container').removeClass('expanded');
				},150);
			}
			$('#menu-overlay').fadeOut(150);
		}
		if ( !Mykrobe.isMobile() && $('body').hasClass('home')) {
			// $('header.top-header').hide();
		}
		else {
			// $('header.top-header').show();
		}
		return that;
	}
};
