'use strict';
{
  // ハンバーガーメニュー
  const humbergerMenuBtn = document.querySelector('.header-btn');
  humbergerMenuBtn.addEventListener('click', function(){
    document.getElementById('header').classList.toggle('open');
});

  const maskBtn = document.getElementById('mask');
  maskBtn.addEventListener('click', function(){
    document.getElementById('header').classList.remove('open');
  });

  $('#header-nav a').on('click', function() {
    $('#header').removeClass('open');
  });

// スムーススクロール
  $('a[href^="#"]').click(function(){
    let href= $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;
    $("html, body").animate({scrollTop:position}, 600, "swing");
    return false;
  });

  // スライドメニュー
  $('.pickup-container').slick({
    arrows: false,
    centerMode: true,
    centerPadding: '100px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: '50px',
          slidesToShow: 1
        }
      }
    ]
  });
  
  // フェードイン
  $(window).scroll(function() {
    $('.fadein').each(function() {
      let scroll = $(window).scrollTop();
      let target = $(this).offset().top;
      let windowHeight = $(window).height();
      if (scroll > target - windowHeight + 200) {
        $(this).css('opacity','1');
        $(this).css('transform','translateY(0)');
      }
    });
  });
  
}







