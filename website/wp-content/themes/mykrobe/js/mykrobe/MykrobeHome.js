var MykrobeHome = function() {
	var that = this,
		promoContainer,
		proboBackgroundContainer,
		promoContent;
	return that.init.apply(that, arguments);
};

MykrobeHome.prototype = {
	init:function() {
		var that = this;

		that.promoContainer = $('.promo-container');
		that.proboBackgroundContainer = $('.promo-container-background',that.promoContainer);		
		that.promoContent = $('.promo',that.promoContainer);

		// $(window).bind('scroll.MykrobeMenu',function(e){
		// 	that.update();
		// });
		var stage = new swiffy.Stage(that.proboBackgroundContainer.get(0),that.swiffyobject);
		// stage.setBackground(null);
		stage.start();

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
			'position':'relative',
			'width': promoContainerWidth+'px',
			'height': promoContainerHeight+'px'
		});

		that.proboBackgroundContainer.css({
			'position':'absolute',
			'width': promoContainerWidth+'px',
			'height': promoContainerHeight+'px'
		});

		left = Math.round(0.5 * (promoContainerWidth - promoContentWidth));
		top = Math.round(0.5 * (promoContainerHeight - promoContentHeight));

		that.promoContent.css({
			'position': 'absolute',
			'margin':0,
			'left':left+'px',
			'top':top+'px'
		});	
		return that;	
	},

	swiffyobject: {"internedStrings":["height","random","_rotation","_height","onEnterFrame","_width","createContainer"],"tags":[{"bounds":[{"ymin":-1783,"ymax":1784,"xmin":-1783,"xmax":1784}],"id":1,"fillstyles":[{"color":[-2146595219],"type":1}],"paths":[{"fill":0,"data":[":86k83Qb4X:17D4qa78W78wb5Q4q4Q20dbA6x4q21db4q4q20d4qb6x:21d4Qa78w78Wb4q5Q4q21Db:6X4Q20Db4Q4Q18D4QbA:C:bA:C:c"]}],"flat":true,"type":1},{"tags":[{"type":9,"actions":[{"constants":["vx","Math","#1","vy","vr","this","#4","_x","_y","#2","Stage","width","#5","#0","#3"],"type":136},{"index":0,"type":304},{"value":0.1,"type":305},{"value":0,"type":305},{"index":1,"type":304},{"type":28},{"index":2,"type":304},{"type":82},{"value":0.2,"type":305},{"type":12},{"type":71},{"type":29},{"index":3,"type":304},{"value":0.1,"type":305},{"value":0,"type":305},{"index":1,"type":304},{"type":28},{"index":2,"type":304},{"type":82},{"value":0.2,"type":305},{"type":12},{"type":71},{"type":29},{"index":4,"type":304},{"value":0.1,"type":305},{"value":0,"type":305},{"index":1,"type":304},{"type":28},{"index":2,"type":304},{"type":82},{"value":0.2,"type":305},{"type":12},{"type":71},{"type":29},{"index":5,"type":304},{"type":28},{"index":6,"type":304},{"body":[{"index":1,"type":303},{"index":7,"type":304},{"index":1,"type":303},{"index":7,"type":304},{"type":78},{"index":0,"type":304},{"type":28},{"value":3,"type":305},{"type":12},{"type":71},{"type":79},{"index":1,"type":303},{"index":8,"type":304},{"index":1,"type":303},{"index":8,"type":304},{"type":78},{"index":3,"type":304},{"type":28},{"value":3,"type":305},{"type":12},{"type":71},{"type":79},{"index":1,"type":303},{"index":9,"type":304},{"index":1,"type":303},{"index":9,"type":304},{"type":78},{"index":4,"type":304},{"type":28},{"value":0.5,"type":305},{"type":12},{"type":71},{"type":79},{"index":1,"type":303},{"index":7,"type":304},{"type":78},{"index":10,"type":304},{"type":28},{"index":11,"type":304},{"type":78},{"index":1,"type":303},{"index":12,"type":304},{"type":78},{"value":2,"type":305},{"type":13},{"type":71},{"type":103},{"type":18},{"target":64,"type":157},{"index":1,"type":303},{"index":7,"type":304},{"index":1,"type":303},{"index":7,"type":304},{"type":78},{"index":10,"type":304},{"type":28},{"index":11,"type":304},{"type":78},{"index":1,"type":303},{"index":12,"type":304},{"type":78},{"type":71},{"type":11},{"type":79},{"index":1,"type":303},{"index":8,"type":304},{"type":78},{"index":10,"type":304},{"type":28},{"index":13,"type":304},{"type":78},{"index":1,"type":303},{"index":14,"type":304},{"type":78},{"value":2,"type":305},{"type":13},{"type":71},{"type":103},{"type":18},{"target":95,"type":157},{"index":1,"type":303},{"index":8,"type":304},{"index":1,"type":303},{"index":8,"type":304},{"type":78},{"index":10,"type":304},{"type":28},{"index":13,"type":304},{"type":78},{"index":1,"type":303},{"index":14,"type":304},{"type":78},{"type":71},{"type":11},{"type":79}],"preloads":["this"],"args":[],"type":142,"suppress":3,"registerCount":2},{"type":79}]},{"id":1,"matrix":0,"type":3,"depth":1},{"type":2}],"id":2,"frameCount":1,"type":7},{"data":{"green":2},"type":16},{"bounds":[{"ymin":-1586,"ymax":1586,"xmin":-1189,"xmax":1190}],"id":3,"fillstyles":[{"color":[-1725390895],"type":1}],"paths":[{"fill":0,"data":[":99E86Ob6O:99B6hb2U6l72B64cb0F8w7f51da89k82sb6l0u64c70bb7gs1osb6o:99b5Hb1u7L71b65Cb0f8W6F51Da89K82Sb7L0U65C70Bb6GS0OSc"]}],"flat":true,"type":1},{"tags":[{"type":9,"actions":[{"constants":["vx","Math","#1","vy","vr","this","#4","_x","_y","#2","Stage","width","#5","#0","#3"],"type":136},{"index":0,"type":304},{"value":0.1,"type":305},{"value":0,"type":305},{"index":1,"type":304},{"type":28},{"index":2,"type":304},{"type":82},{"value":0.2,"type":305},{"type":12},{"type":71},{"type":29},{"index":3,"type":304},{"value":0.1,"type":305},{"value":0,"type":305},{"index":1,"type":304},{"type":28},{"index":2,"type":304},{"type":82},{"value":0.2,"type":305},{"type":12},{"type":71},{"type":29},{"index":4,"type":304},{"value":0.1,"type":305},{"value":0,"type":305},{"index":1,"type":304},{"type":28},{"index":2,"type":304},{"type":82},{"value":0.2,"type":305},{"type":12},{"type":71},{"type":29},{"index":5,"type":304},{"type":28},{"index":6,"type":304},{"body":[{"index":1,"type":303},{"index":7,"type":304},{"index":1,"type":303},{"index":7,"type":304},{"type":78},{"index":0,"type":304},{"type":28},{"value":3,"type":305},{"type":12},{"type":71},{"type":79},{"index":1,"type":303},{"index":8,"type":304},{"index":1,"type":303},{"index":8,"type":304},{"type":78},{"index":3,"type":304},{"type":28},{"value":3,"type":305},{"type":12},{"type":71},{"type":79},{"index":1,"type":303},{"index":9,"type":304},{"index":1,"type":303},{"index":9,"type":304},{"type":78},{"index":4,"type":304},{"type":28},{"value":0.5,"type":305},{"type":12},{"type":71},{"type":79},{"index":1,"type":303},{"index":7,"type":304},{"type":78},{"index":10,"type":304},{"type":28},{"index":11,"type":304},{"type":78},{"index":1,"type":303},{"index":12,"type":304},{"type":78},{"value":2,"type":305},{"type":13},{"type":71},{"type":103},{"type":18},{"target":64,"type":157},{"index":1,"type":303},{"index":7,"type":304},{"index":1,"type":303},{"index":7,"type":304},{"type":78},{"index":10,"type":304},{"type":28},{"index":11,"type":304},{"type":78},{"index":1,"type":303},{"index":12,"type":304},{"type":78},{"type":71},{"type":11},{"type":79},{"index":1,"type":303},{"index":8,"type":304},{"type":78},{"index":10,"type":304},{"type":28},{"index":13,"type":304},{"type":78},{"index":1,"type":303},{"index":14,"type":304},{"type":78},{"value":2,"type":305},{"type":13},{"type":71},{"type":103},{"type":18},{"target":95,"type":157},{"index":1,"type":303},{"index":8,"type":304},{"index":1,"type":303},{"index":8,"type":304},{"type":78},{"index":10,"type":304},{"type":28},{"index":13,"type":304},{"type":78},{"index":1,"type":303},{"index":14,"type":304},{"type":78},{"type":71},{"type":11},{"type":79}],"preloads":["this"],"args":[],"type":142,"suppress":3,"registerCount":2},{"type":79}]},{"id":3,"matrix":0,"type":3,"depth":1},{"type":2}],"id":4,"frameCount":1,"type":7},{"data":{"blue":4},"type":16},{"type":9,"actions":[{"constants":["getNextHighestDepth","createEmptyMovieClip","containerMc","i","attachMovie","mc","_x","Math","#1","Stage","width","_y","#0","#2","scaleMode","noBorder","align","TL","blue","blueContainer","#6","green","greenContainer"],"type":136},{"value":"#6","type":305},{"body":[{"value":0,"type":305},{"index":1,"type":303},{"index":0,"type":304},{"type":82},{"index":3,"type":303},{"value":2,"type":305},{"index":1,"type":303},{"index":1,"type":304},{"type":82},{"type":23},{"index":2,"type":304},{"index":1,"type":303},{"index":3,"type":303},{"type":78},{"type":29},{"index":3,"type":304},{"value":0,"type":305},{"type":29},{"index":3,"type":304},{"type":28},{"value":15,"type":305},{"type":72},{"type":18},{"target":94,"type":157},{"value":0,"type":305},{"index":2,"type":304},{"type":28},{"index":0,"type":304},{"type":82},{"index":2,"type":303},{"index":3,"type":304},{"type":28},{"type":71},{"index":2,"type":303},{"value":3,"type":305},{"index":2,"type":304},{"type":28},{"index":4,"type":304},{"type":82},{"type":23},{"index":5,"type":304},{"index":2,"type":304},{"type":28},{"index":2,"type":303},{"index":3,"type":304},{"type":28},{"type":71},{"type":78},{"type":29},{"index":5,"type":304},{"type":28},{"index":6,"type":304},{"value":0,"type":305},{"index":7,"type":304},{"type":28},{"index":8,"type":304},{"type":82},{"index":9,"type":304},{"type":28},{"index":10,"type":304},{"type":78},{"type":12},{"type":79},{"index":5,"type":304},{"type":28},{"index":11,"type":304},{"value":0,"type":305},{"index":7,"type":304},{"type":28},{"index":8,"type":304},{"type":82},{"index":9,"type":304},{"type":28},{"index":12,"type":304},{"type":78},{"type":12},{"type":79},{"index":5,"type":304},{"type":28},{"index":13,"type":304},{"value":0,"type":305},{"index":7,"type":304},{"type":28},{"index":8,"type":304},{"type":82},{"value":180,"type":305},{"type":12},{"type":79},{"index":3,"type":304},{"index":3,"type":304},{"type":28},{"type":80},{"type":29},{"target":18,"type":153}],"preloads":["this"],"args":[3,2],"type":142,"suppress":3,"registerCount":4},{"type":60},{"index":9,"type":304},{"type":28},{"index":14,"type":304},{"index":15,"type":304},{"type":79},{"index":9,"type":304},{"type":28},{"index":16,"type":304},{"index":17,"type":304},{"type":79},{"index":18,"type":304},{"index":19,"type":304},{"value":2,"type":305},{"index":20,"type":304},{"type":61},{"type":23},{"index":21,"type":304},{"index":22,"type":304},{"value":2,"type":305},{"index":20,"type":304},{"type":61},{"type":23}]},{"type":2}],"fileSize":1325,"v":"6.0.2","backgroundColor":-526607,"frameSize":{"ymin":0,"ymax":20480,"xmin":0,"xmax":20480},"frameCount":1,"frameRate":60,"version":17}

};
