var HelixDiagonalBehaviour = HelixBehaviour.extend({
	start:function() {
		var that = this,
			i;
		for ( i = 0; i < that.lines.length; i++ ) {
			line = that.lines[i];
			TweenLite.to(that.lines[i], 3+Math.random(), {
				delay:Math.random()*2,
				setRotation:Math.PI / 3,
				setOpacity:i < 3 ? 1 : Math.random() * 0.7 + 0.2,
				setVX:0.5 + 0.5  * Math.random(),
				setVY:0.5 + 0.5  * Math.random(),
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