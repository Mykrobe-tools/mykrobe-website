var HelixBehaviour = Class.extend({
	init: function(lines_,canvas_) {
		var that = this;
		that.lines = lines_;
		that.canvas = canvas_;
		return that;
	},

	start:function() {
		var that = this;
		return that;
	},

	complete:function() {
		var that = this;
		if ( typeof(that.onComplete) === "function" ) {
			that.onComplete(that);
		}
		return that;
	}
});