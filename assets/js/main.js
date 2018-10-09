$(function() {
    // ============================
    // ヘッダーのナビ
    // ============================
    var $currentPage = $('#pcNav').find('.header__txt');

    $currentPage.on('click', function(){

        $currentPage.removeClass('isCurrent');
        $(this).addClass('isCurrent');
    });
    // ============================
    // スライドショー
    // ============================
    $('.mv').slick({
        autoplay: true,
        autoplaySpeed: 7000,
        pauseOnHover: false,
        cssEase: 'ease-in',
        fade: true,
        focusOnSelect: true,
        accessibility: false,
        arrows: false,
        adaptiveHeight: true,

        responsive:[{
                breakpoint: 767,
            },
        ]
    });
    $('#staffSlide').slick({
        // asNavFor:'.slideshow__thumbs',
        fade: false,
        cssEase: 'ease-out',
        focusOnSelect: true,
        accessibility: false,
        arrows: true,

        responsive:[{
                breakpoint: 1023,
                settings: {
                    arrows: false,
                }
            },
        ]
    });
    $('.slideshow__thumbs').slick({
        asNavFor:'#staffSlide',
        focusOnSelect: true,
    	accessibility: false,
    	arrows: true,
        centerMode: true,
        centerPadding: '10%',
        slidesToShow: 3,

	    responsive:[{
	            breakpoint: 1023,
                settings: {
                    arrows: false,
                }
	        },
	    ]
    });
    $('#educationSlide').slick({
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        speed: 5000,
        accessibility: false,
        arrows: false,
        centerMode: true,
        centerPadding: '10%',
        slidesToShow:3,

        responsive:[{
                breakpoint: 767,
            },
        ]
    });

    // 詳細のスライドトグル
    $('.slideDetailBtn').on('click', function(){
        $(this).toggleClass('isOpen').next() .find('.detail').slideToggle();
        $(this).closest('ul').toggleClass('isOpen');
        $(this).parents('.detail__border').toggleClass('isOpen');

        if ($(this).hasClass('isOpen')) {
            $(this).find('.slideDetailBtn__arrow')
            .removeClass('fa-angle-down').addClass('fa-angle-up');
        } else {
            $(this).find('.slideDetailBtn__arrow')
            .addClass('fa-angle-down').removeClass('fa-angle-up');
        }
        // クラス付与時の他の詳細はslideDtailBtn.scssに記述
    });
    // ============================
    // タブ
    // ============================
    $('#tab').each(function() {

        var $tabList = $(this).find('.tab'),
            $tabAnchor = $tabList.find('a'),
            $tabPanels = $(this).find('.tab__panel'),
            $tabBorder =$(this).find('.tab__border');

        $tabList.on('click', 'a', function(event) {
            event.preventDefault();

            var $this = $(this);

            if ($this.hasClass('isActive')) {
                return;
            }

        $tabAnchor.removeClass('isActive');
        $this.addClass('isActive');
        $tabBorder.removeClass('isActive');
        $this.next().addClass('isActive');
        $tabList.removeClass('isActive');
        $this.closest('.tab').addClass('isActive');

        $tabPanels.hide();
        $($this.attr('href')).show();
        });

        $tabAnchor.eq(0).trigger('click');
    });
    // ============================
    //        aタグのスムーススクロール
    // ============================
    $('a[href^="#"]').click(function(){
        var speed = 500;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;

        if (href == "#" || href == "") {
            var target = $('html');
        } else if (href == "#detail1" || href == "#detail2" || href == "#detail3") {
            return;
        } else {
            var target = $(href);
        }

        $("html, body").animate({scrollTop:position}, speed, "swing");
        return felse;
    });

});