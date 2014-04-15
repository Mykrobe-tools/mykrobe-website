var HelixInteractive = function() {
    var that = this,
        animationLoopProxy,
        animationTime,
        animating,
        container,
        lines,
        canvas,
        mousePosition,
        windowSize_,
        ctx;
    return that.init.apply(that, arguments);
};

HelixInteractive.prototype = {
    init: function() {
        var that = this;
        that.animating = false;
        that.container = $('body');
        that.canvas = document.createElement('canvas');
        that.container.prepend(that.canvas);
        $(that.canvas).css({
            'position':'fixed',
            'z-index':1,
            'top':0
        });
        $(document).bind('mousemove', function(e) {
            e.preventDefault();
            var rect = that.canvas.getBoundingClientRect();
            that.mousePosition = {
              x: e.clientX - rect.left,
              y: e.clientY - rect.top
            };
        });

        $(window).bind('scroll.HelixInteractive',function(e) {
            that.updateScroll();
        });

        that.layout();
        that.initLines();
        that.animationLoopProxy = $.proxy(function() {
            that.animationLoop();
        }, that);

        $(window).bind('orientationchange resize', function(e){
            setTimeout(function() {
                that.invalidateWindowSize();
                that.layout();
            },0);
        });
        return that;
    },

    invalidateWindowSize:function() {
        var that = this;
        that.windowSize_ = undefined;
    },

    windowSize:function() {
        var that = this,
            h,
            w;

        if ( undefined === that.windowSize_ ) {

            h = Modernizr.touch ? window.innerHeight : $(window).height();
            w = Modernizr.touch ? window.innerWidth : $(window).width();

            that.windowSize_ = {
                "width":w,
                "height":h
            };
        }
        return that.windowSize_;
    },

    initLines: function() {
        var that = this,
            i,
            behaviour,
            line;

        that.lines = [];
        for ( i = 0; i < kHelixNumberOfLines; i++ ) {
            line = new HelixInteractiveLine(that.canvas);
            that.lines.push(line);
        }
        // behaviour = new HelixInitialBehaviour(that.lines, that.canvas);
        // behaviour.onComplete = function(behaviour_) {
        //     console.log('onComplete!');
        //     var behaviour;
        //     behaviour = new HelixLogoBehaviour(that.lines, that.canvas);
        //     behaviour.onComplete = function(behaviour_) {
        //         console.log('onComplete!');
        //         var behaviour;
        //         behaviour = new HelixDiagonalBehaviour(that.lines, that.canvas);
        //         behaviour.onComplete = function(behaviour_) {
        //             console.log('onComplete!');
        //         };
        //         behaviour.start();
        //     };
        //     behaviour.start();
        // };
        // behaviour.start();

        behaviour = new HelixInitialBehaviour(that.lines, that.canvas);
        behaviour.onComplete = function(behaviour_) {
            console.log('onComplete!');
            var behaviour;
            behaviour = new HelixDiagonalBehaviour(that.lines, that.canvas);
            behaviour.onComplete = function(behaviour_) {
                console.log('onComplete!');
                // var behaviour = new HelixInitialBehaviour(that.lines, that.canvas);
                // behaviour.start();
            };
            // behaviour.start();
        };
        behaviour.start();
        return that;
    },

    animationLoop: function() {
        var that = this,
            now = new Date().getTime(),
            dt = now - (that.animationTime || now),
            m = dt / (1000/60),
            i;

        if ( that.animating ) {
            that.animationTime = now;

            that.ctx.fillStyle = kHelixColorBackground;
            that.ctx.globalAlpha = 1.0;
            that.ctx.fillRect(0, 0, that.canvas.width, that.canvas.height);
            for ( i = 0; i < kHelixNumberOfLines; i++ ) {
                line = that.lines[i];
                line.update(that.ctx,m,that.mousePosition);
            }
            requestAnimationFrame(that.animationLoopProxy);
        }
        else {
            // reset delta
            that.animationTime = undefined;
        }
        return that;
    },

    startAnimation:function() {
        var that = this;
        that.animating = true;
        that.animationLoop();
        return that;
    },

    stopAnimation:function() {
        var that = this;
        that.animating = false;
        return that;
    },

    updateScroll:function() {
        var that = this,
            scrollTop = $(window).scrollTop(),
            scrollTopMax = $(document).height() - $(window).height();
        $(that.canvas).css({
            'top':'-'+Math.round(scrollTop/scrollTopMax * 1*that.windowSize().height)+'px'
        });
        return that;
    },

    layout:function() {
        var that = this,
            w,
            h;

        h = Math.round(2*that.windowSize().height);
        w = that.windowSize().width;

        $(that.canvas).attr('width',w).attr('height',h);
        that.ctx = that.canvas.getContext('2d');

        return that;
    }
};
