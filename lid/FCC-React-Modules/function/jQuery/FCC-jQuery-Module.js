"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var doms = function doms() {
  var _this = this;

  _classCallCheck(this, doms);

  this.Val = function (dom) {
    //form取得
    _this.get = $(dom).val();
    return _this.get;
  };

  this.Parent = function (dom) {
    //親要素
    _this.Parents = $(dom).parent();
    return _this.Parents;
  };

  this.aParent = function (dom, x) {
    //親要素の○○
    _this.Parents = $(dom).parent().attr(x);
    return _this.Parents;
  };

  this.FadeOut = function (dom) {
    $(dom).fadeOut();
  };

  this.FadeIn = function (dom) {
    $(dom).fadeIn();
  };

  this.Void = function (dom) {
    $(dom).remove();
  };

  this.SnsAnimate = function () {
    $('.btn-hover').hover(function () {
      $(this).find('i').addClass('faa-shake animated');
      $(this).animate({
        'font-size': '30px'
      }, 100);
    }, function () {
      $(this).find('i').removeClass('faa-shake animated');
      $(this).animate({
        'font-size': '25px'
      }, 400);
    });
  };

  this.Topback = function (dom) {
    $(dom).click(function () {
      トップに500ミリ秒かけて戻る;
      $('html,body').animate({
        'scrollTop': 0
      }, 500);
    });
  };

  this.AccordionAnimate = function () {
    $(document).ready(function () {
      $('.accordion-tabs-minimal').each(function (index) {
        $(this).children('li').first().children('a').addClass('is-active').next().addClass('is-open').show();
      });
      $('.accordion-tabs-minimal').on('click', 'li > a.tab-link', function (event) {
        if (!$(this).hasClass('is-active')) {
          event.preventDefault();
          var accordionTabs = $(this).closest('.accordion-tabs-minimal');
          accordionTabs.find('.is-open').removeClass('is-open').hide();
          $(this).next().toggleClass('is-open').toggle();
          accordionTabs.find('.is-active').removeClass('is-active');
          $(this).addClass('is-active');
        } else {
          event.preventDefault();
        }
      });
    });
  };

  this.Attr = function (dom, ci) {
    _this.cis = $(dom).attr(ci);
    return _this.cis;
  };
};

;
var _default = doms;
exports["default"] = _default;