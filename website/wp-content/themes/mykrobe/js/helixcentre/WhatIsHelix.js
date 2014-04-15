var WhatIsHelix = function() {
    var that = this,
        steps,
        currentStep,
        container,
        windowSize_,
        helixInteractive,
        slides;

    return that.init.apply(that, arguments);
};

WhatIsHelix.prototype = {
    init:function() {
        var that = this,
            slide,
            previousSlide,
            statements,
            index;

        that.container = $('.what-is-helix.container');
        that.slides = [];

        $('.row',that.container).each(function(){
            slide = new WhatIsHelixSlide(this);
            slide.setHidden(true,false);
            that.slides.push(slide);
            if ( undefined !== previousSlide ) {
                previousSlide.linkto(slide);
            }
            previousSlide = slide;
        });

        slide = that.slides[0];
        slide.setIsFirst(true);
        slide = that.slides[that.slides.length-1];
        slide.setIsLast(true);
        that.slides[0].title = "Back to top";
        slide.linkto(that.slides[0]);

        $(window).bind('scroll.WhatIsHelix',function(e) {
            that.updateCurrentStep();
        });

        if ( Modernizr.touch ) {
            $(window).bind('orientationchange.WhatIsHelix', function(e) {
                that.invalidateWindowSize();
                that.layout();
                that.scrollToCurrentStep();
            });
        }
        else {
            $(window).bind('resize.WhatIsHelix', function(e) {
                that.invalidateWindowSize();
                that.layout();
                that.scrollToCurrentStep();
            });
        }

        that.layout();

        // only ie9 +
        if (!($('html').hasClass('lt-ie9'))) {
            that.helixInteractive = new HelixInteractive();
            that.helixInteractive.startAnimation();
        }

        // only show one of the statements
        // statements = $('.statement li', that.container);
        // $(statements).hide();
        // $(statements[Math.floor(Math.random()*statements.length)]).show();

        // make first one appear
        setTimeout(function() {
            $(that.container).stop().animate({
                'opacity':1
            },500);
            that.currentStep = undefined;
            that.setCurrentStep(0);
        },250);

        return that;
    },

    teardown:function() {
        var that = this;
        $(window).unbind('scroll.WhatIsHelix');
        $(window).unbind('orientationchange.WhatIsHelix');
        $(window).unbind('resize.WhatIsHelix');
        that.slides = null;
        that.container.remove();
        return that;
    },

    getFirstStepOffsetTop:function() {
        return Math.round($('.row-statement').offset().top);
    },

    setCurrentStep:function( currentStep_ ) {
        var that = this,
            slide;
        currentStep_ = Math.max(0,currentStep_);
        currentStep_ = Math.min(that.slides.length-1,currentStep_);
        if ( that.currentStep === currentStep_ ) {
            return;
        }
        if ( undefined !== that.currentStep ) {
            slide = that.slides[that.currentStep];
            slide.setHidden(true,true);
        }
        that.currentStep = currentStep_;
        slide = that.slides[that.currentStep];
        slide.setHidden(false,true);
        console.log('that.currentStep:'+that.currentStep);
        return that;
    },

    updateCurrentStep:function() {
        var that = this,
            h,
            w,
            currentStepFloat;

        h = that.windowSize().height * 2/3;
        // w = that.windowSize().width;

        currentStepFloat = ($(window).scrollTop()) / h;
        that.setCurrentStep( Math.round(currentStepFloat) );
    },

    scrollToCurrentStep:function() {
        var that = this,
            slide;

        slide = that.slides[that.currentStep];
        if ( undefined !== slide ) {
            $(window).scrollTop(slide.scrollTop);
        }
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

    layout:function() {
        var that = this,
            h,
            i,
            maxHeight,
            l;

        availableHeight = that.windowSize().height;

        for ( i = 0; i < that.slides.length; i++ ) {
            slide = that.slides[i];
            slide.layoutForHeight(availableHeight);
        }

        return that;
    },

    beforeScroll:function() {
        var that = this;
        console.log('TODO: stop and disable animations');
        if ( Modernizr.touch ) {
            // that.setAnimationEnabled(false);
        }
    },

    afterScroll:function() {
        var that = this;
        console.log('TODO: enable and start animations');
        if ( Modernizr.touch ) {
            // that.setAnimationEnabled(true);
        }
    }
};
