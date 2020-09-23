class doms {
    constructor() {
        this.Val = (dom) => {
            //form取得
            this.get = $(dom).val();
            return this.get;
        }
        this.Parent = (dom) => {
            //親要素
            this.Parents = $(dom).parent();
            return this.Parents;
        }
        this.aParent = (dom, x) => {
            //親要素の○○
            this.Parents = $(dom).parent().attr(x);
            return this.Parents;
        }
        this.FadeOut = (dom) => {
            $(dom).fadeOut();
        }
        this.FadeIn = (dom) => {
            $(dom).fadeIn();
        }
        this.Void = (dom) => {
            $(dom).remove();
        }
        this.SnsAnimate = () => {
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
        }
        this.Topback = (dom) => {
            $(dom).click(function () {
                トップに500ミリ秒かけて戻る
                $('html,body').animate({
                    'scrollTop': 0
                }, 500);
            });
        }
        this.AccordionAnimate = () => {
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
        }
        this.Attr = (dom, ci) => {
            this.cis = $(dom).attr(ci);
            return this.cis;
        }
    }
};
export default doms