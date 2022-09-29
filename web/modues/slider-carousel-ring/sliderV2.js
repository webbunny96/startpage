(function ($) {
  var Carousel = function (slide) {
    var self = this;

    this.slide = slide;
    this.slideItemMain = slide.find("ul.slide-list");
    this.nextBtn = slide.find("div.slide-next-btn");
    this.prevBtn = slide.find("div.slide-prev-btn");
    this.slideItems = slide.find("li.slide-item");

    if (this.slideItems.size() % 2 == 0) {
      this.slideItemMain.append(this.slideItems.eq(0).clone());
      this.slideItems = this.slideItemMain.children();
	}

    this.slideFirstItem = this.slideItems.first();
    this.slideLastItem = this.slideItems.last();
    this.rotateFlag = true;
    this.setting = {
      width: 500,
      height: 270,
      slideWidth: 250,
      slideHeight: 250,
      scale: 0.8,
      speed: 500,
      delay: 5000,
      verticalAlign: "middle", //top bottom
    };
    $.extend(this.setting, this.getSetting());

    this.setSettingValue();
    this.setslidePos();

    this.nextBtn.click(function () {
      if (self.rotateFlag) {
        self.rotateFlag = false;
        self.carouseRotate("left");
      }
    });

    this.prevBtn.click(function () {
      if (self.rotateFlag) {
        self.rotateFlag = false;
        self.carouseRotate("right");
      }
    });

    if (this.setting.autoPlay) {
      this.autoPlay();
      this.slide.hover(
        function () {
          self.timer = setInterval
          window.clearInterval(self.timer);
        },
        function () {
          self.autoPlay();
        }
      );
    }
  };

  Carousel.prototype = {
    autoPlay: function () {
      var self = this;
      this.timer = window.setInterval( function(){
      	self.nextBtn.click();
      }, this.setting.delay );
    },

    carouseRotate: function (dir) {
      var _this_ = this;
      var zIndexArr = [];

      if (dir === "left") {
        this.slideItems.each(function () {
          var self = $(this),
            prev = self.prev().get(0) ? self.prev() : _this_.slideLastItem,
            width = prev.width(),
            height = prev.height(),
            opacity = prev.css("opacity"),
            left = prev.css("left"),
            top = prev.css("top"),
            zIndex = prev.css("zIndex");

          zIndexArr.push(zIndex);
          self.animate(
            {
              width: width,
              height: height,
              zIndex :zIndex,
              opacity: opacity,
              left: left,
              top: top,
            },
            _this_.setting.speed,
            function () {
              _this_.rotateFlag = true;
            }
          );
        });

        this.slideItems.each(function (i) {
          $(this).css("zIndex", zIndexArr[i]);
        });
      } else if (dir === "right") {

        this.slideItems.each(function () {
          var self = $(this),
            next = self.next().get(0) ? self.next() : _this_.slideFirstItem,
            width = next.width(),
            height = next.height(),
            opacity = next.css("opacity"),
            left = next.css("left"),
            top = next.css("top"),
            zIndex = next.css("zIndex");

          zIndexArr.push(zIndex);
          self.animate(
            {
              width: width,
              height: height,
              zIndex :zIndex,
              opacity: opacity,
              left: left,
              top: top,
            },
            _this_.setting.speed,
            function () {
              _this_.rotateFlag = true;
            }
          );
        });

        this.slideItems.each(function (i) {
          $(this).css("zIndex", zIndexArr[i]);
        });
      }
    },

    setslidePos: function () {
      var self = this,
        sliceItems = this.slideItems.slice(1),
        sliceSize = sliceItems.size() / 2,
        rightSlice = sliceItems.slice(0, sliceSize),
        level = Math.floor(this.slideItems.size() / 2),
        leftSlice = sliceItems.slice(sliceSize);

      var firstLeft = (this.setting.width - this.setting.slideWidth) / 2;
      var rw = this.setting.slideWidth,
        fixOffsetLeft = firstLeft + rw,
        rh = this.setting.slideHeight,
        gap = (this.setting.width - this.setting.slideWidth) / 2 / level;

      rightSlice.each(function (i) {
        level--;
        rw = rw * self.setting.scale;
        rh = rh * self.setting.scale;
        var j = i;
        $(this).css({
          zIndex: level,
          width: rw,
          height: rh,
          opacity: 1 / ++j,
          left: fixOffsetLeft + ++i * gap - rw,
          top: self.setVerticalAlign(rh),
        });
      });

      var lw = rightSlice.last().width(),
        lh = rightSlice.last().height(),
        oloop = Math.floor(this.slideItems.size() / 2);
      leftSlice.each(function (i) {
        $(this).css({
          zIndex: i,
          width: lw,
          height: lh,
          opacity: 1 / oloop,
          left: i * gap,
          top: self.setVerticalAlign(lh),
        });
        lw = lw / self.setting.scale;
        lh = lh / self.setting.scale;
        oloop--;
      });
    },

    setVerticalAlign: function (height) {
      var verticalType = this.setting.verticalAlign,
        top = 0;
      if (verticalType === "middle") {
        top = (this.setting.height - height) / 2;
      } else if (verticalType === "top") {
        top = 0;
      } else if (verticalType === "bottom") {
        top = this.setting.height - height;
      } else {
        top = (this.setting.height - height) / 2;
      }
      return top;
    },

    setSettingValue: function () {
      this.slide.css({
        width: this.setting.width,
        height: this.setting.height,
      });
      this.slideItemMain.css({
        width: this.setting.width,
        height: this.setting.height,
      });

      var w = (this.setting.width - this.setting.slideWidth) / 2;

      this.nextBtn.css({
        width: w,
        height: this.setting.height,
        zIndex: Math.ceil(this.slideItems.size() / 2),
      });
      this.prevBtn.css({
        width: w,
        height: this.setting.height,
        zIndex: Math.ceil(this.slideItems.size() / 2),
      });
      this.slideFirstItem.css({
        width: this.setting.slideWidth,
        height: this.setting.slideHeight,
        left: w,
        top: 0,
        zIndex: Math.floor(this.slideItems.size() / 2),
      });
    },

    getSetting: function () {
      var setting = this.slide.attr("data-setting");
      if (setting && setting != "") {
        return $.parseJSON(setting);
      } else {
        return {};
      }
    },
  };

  Carousel.init = function (slides) {
    var _this_ = this;
    slides.each(function () {
      new _this_($(this));
    });
  };

  window["Carousel"] = Carousel;
})(jQuery);

$(function () {
  Carousel.init($(".slider"));
});
