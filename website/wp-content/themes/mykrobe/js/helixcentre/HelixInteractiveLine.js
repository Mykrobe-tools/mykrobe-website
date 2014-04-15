var HelixInteractiveLine = function() {
    var that = this,
        x,
        y,
        r,
        vx,
        vy,
        vr,
        tvx,
        tvy,
        tvr,
        tx,
        ty,
        tr,
        opacity,
        color,
        highlightTransition,
        highlighted,
        canvas;
    return that.init.apply(that, arguments);
};

HelixInteractiveLine.prototype = {
    init: function(canvas_) {
        var that = this;
        that.canvas = canvas_;
        that.x = 0;
        that.y = 0;
        that.vx = 0;
        that.vy = 0;
        that.r = 0;
        that.vr = 0;
        that.opacity = 1;
        that.highlighted = false;
        that.color = kHelixColorDefault;
        return that;
    },

    colorFade: function(h1, h2, m) {
        h1 = parseInt(h1.substring(1,7),16);
        h2 = parseInt(h2.substring(1,7),16);
        var r1, r2, g1, g2, b1, b2;
        r1 = (h1 >> 16) & 0xFF;
        r2 = (h2 >> 16) & 0xFF;
        g1 = (h1 >> 8) & 0xFF;
        g2 = (h2 >> 8) & 0xFF;
        b1 = h1 & 0xFF;
        b2 = h2 & 0xFF;
        r = ((r1 + m*(r2-r1))&0xFF) << 16;
        g = ((g1 + m*(g2-g1))&0xFF) << 8;
        b = ((b1 + m*(b2-b1))&0xFF);
        return '#' + (r | g | b).toString(16);
    },

    setHighlighted:function(highlighted_) {
        var that = this;
        if ( that.highlighted === highlighted_ ) {
            return that;
        }
        that.highlighted = highlighted_;
        that.highlightTransition = that.highlighted ? 0 : 1;
        TweenLite.to(that, that.highlighted ? 0.1 : 0.5, {
            setHighlightTransition:that.highlighted ? 1 : 0,
            ease:Quad.easeIn
        });
    },

    getHighlightTransition: function() {
        return this.highlightTransition;
    },

    setHighlightTransition: function(highlightTransition_) {
        this.highlightTransition = highlightTransition_;
        this.color = this.colorFade(kHelixColorDefault,kHelixColorHighlight,this.highlightTransition);
    },

    getRotation:function() {
        return this.r;
    },

    setRotation:function(r_) {
        this.vr = undefined;
        this.tvr = undefined;
        this.tr = undefined;
        this.r = r_;
    },

    getOpacity:function() {
        return this.opacity;
    },

    setOpacity:function(opacity_) {
        this.opacity = opacity_;
    },

    getX:function() {
        return this.x;
    },

    setX:function(x_) {
        this.x = x_;
    },

    getY:function() {
        return this.y;
    },

    setY:function(y_) {
        this.y = y_;
    },

    getVX:function() {
        return this.vx;
    },

    setVX:function(vx_) {
        this.vx = vx_;
    },

    getVY:function() {
        return this.vy;
    },

    setVY:function(vy_) {
        this.vy = vy_;
    },

    update:function(ctx_,m_,mousePosition_) {
        var that = this;
        if ( undefined !== that.tx ) {
            that.x += (that.tx - that.x) * 0.01 * m_;
        }
        else {
            if ( undefined !== that.tvx ) {
                that.vx += (that.tvx - that.vx) * 0.01 * m_;
            }
            that.x += that.vx * m_;
        }
        if ( undefined !== that.ty ) {
            that.y += (that.ty - that.y) * 0.01 * m_;
        }
        else {
            if ( undefined !== that.tvy ) {
                that.vy += (that.tvy - that.vy) * 0.01 * m_;
            }
            that.y += that.vy * m_;
        }
        if ( undefined !== that.tr ) {
            that.r += (that.tr - that.r) * 0.01 * m_;
        }
        else {
            if ( undefined !== that.tvr ) {
                that.vr += (that.tvr - that.vr) * 0.01 * m_;
            }
            if ( undefined !== that.vr ) {
                that.r += that.vr * m_;
                while ( that.r > 2 * Math.PI ) {
                    that.r -= 2 * Math.PI;
                }
            }
        }
        if ( that.x > that.canvas.width+100 ) {
            that.x -= (that.canvas.width+200);
        }
        if ( that.x < -100 ) {
            that.x += (that.canvas.width+200);
        }
        if ( that.y > that.canvas.height+100 ) {
            that.y -= (that.canvas.height+200);
        }
        if ( that.y < -100 ) {
            that.y += (that.canvas.height+200);
        }
        ax = that.x;
        ay = that.y;

        if ( undefined !== mousePosition_ ) {
            cx = mousePosition_.x;
            cy = mousePosition_.y;
            cr = 200;

            vx = cx - that.x;
            vy = cy - that.y;

            d = Math.sqrt(vx*vx+vy*vy);

            if ( d < cr ) {
                uvx = vx/d;
                uvy = vy/d;
                ax = cx - uvx * cr;
                ay = cy - uvy * cr;
                // ax = cx - uvx * d * Math.sqrt(d/cr);
                // ay = cy - uvy * d * Math.sqrt(d/cr);
                // that.setHighlighted(true);
            }
            else {
                // that.setHighlighted(false);
            }
            // that.x = ax;
            // that.y = ay;
        }

        ctx_.save();
        ctx_.fillStyle = that.color;
        ctx_.globalAlpha = that.opacity;
        ctx_.translate(ax, ay);
        ctx_.rotate(that.r);
        ctx_.fillRect(-kHelixLineWidth*0.5,-kHelixLineHeight*0.5,kHelixLineWidth,kHelixLineHeight);
        ctx_.restore();
        return that;
    }
};