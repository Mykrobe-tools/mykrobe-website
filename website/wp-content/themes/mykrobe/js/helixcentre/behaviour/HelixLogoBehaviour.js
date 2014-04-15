var HelixLogoBehaviour = HelixBehaviour.extend({
	attributes:[
		{
			x:0,
			y:0,
			r:0
		},
		{
			x:-40,
			y:0,
			r:Math.PI/2
		},
		{
			x:40,
			y:0,
			r:Math.PI/2
		}
	],
	start:function() {
		var that = this,
			attributes,
			i;
		for ( i = 0; i < that.lines.length; i++ ) {
			line = that.lines[i];
			if ( i < that.attributes.length ) {
				line.vx = 0;
				line.vy = 0;
				attributes = that.attributes[i];
				TweenLite.to(that.lines[i], 5, {
					delay:0,
					setOpacity:1,
					setX:that.canvas.width * 0.5 + attributes.x,
					setY:that.canvas.height * 0.5 + attributes.y,
					setRotation:attributes.r,
					ease:Quad.easeInOut
				});
			}
			else {
				TweenLite.to(that.lines[i], 0.5, {
					delay:Math.random()*5,
					setOpacity:0,
					ease:Quad.easeIn
				});
			}
		}

		setTimeout(function() {
			console.log('timeout');
			that.complete();
		}, 10*1000);
		return that;
	}
});