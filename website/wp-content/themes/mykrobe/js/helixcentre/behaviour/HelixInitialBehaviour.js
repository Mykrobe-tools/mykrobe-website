var HelixInitialBehaviour = HelixBehaviour.extend( {
	start:function() {
		var that = this,
			i;
		for ( i = 0; i < that.lines.length; i++ ) {
			line = that.lines[i];
			line.x  = Math.random() * that.canvas.width;
			line.y  = Math.random() * that.canvas.height;
			line.vx = 0.25 + 0.25  * Math.random();
			line.vy = 0.25 + 0.25  * Math.random();
			line.r = Math.random() * 2 * Math.PI;
			line.vr = Math.random() / 180;
			line.opacity = 0;

			TweenLite.to(that.lines[i], 0.5, {
				delay:Math.random()*5,
				setOpacity:Math.random() * 0.5 + 0.1,
				ease:Quad.easeIn
			});
		}

		setTimeout(function() {
			console.log('timeout');
			that.complete();
		}, 10*1000);

		return that;
	}
});