$(function(){

    /*++++++toppageの出現++++++++++++++*/
        var pagetop = $('.pagetop');  //クラスのページトップのjQueryオブジェクトをそのまま変数宣言する
          $(window).scroll(function(){
        if($(this).scrollTop()>300){  //windowのtop画面,スクロール300超えたらfadeIn
        pagetop.stop().show('slow');  
        }else{
        pagetop.stop().hide('slow');  //さもなければfadeOut
        }
        });
        pagetop.click(function(){     //変数名をクリックしたら
        $('body, html').animate({scrollTop:0},500); //画面全体を0pxに移動してね
        return false;
        });
    /*--------//toppage出現//----------*/
    

    /*++++++++++++smoothscroll++++++++++++*/
//navigation:a要素（＃から始まり、＃だけのモノを除くa要素）
//※[href^=#]#から始まるhref属性
//※not([href=#])
$('a[href^="#"]:not([href="#"])').click(function(){
  //クリック処理
    //移動先のコンテンツのTop位置を取得(attr)し、変数targetに代入
  var target = $($(this).attr('href')).offset().top;
  
  // 固定ヘッダーの高さを考慮して位置を調整（例: 70px）
    var headerHeight = $('header').outerHeight(); // ヘッダーの高さを取得
    
  //そのままだと窮屈。-202pxTOPを下げる
  target -= 202;
  
  //それぞれのcontentまでスクロールさせる
  $('html').animate({scrollTop : target},500);
  return false;
  });
    /*--------//smoothscroll//----------*/
    
    /*++++++クリックで写真changeする+++++++*/
/*
        $('.one').click(function() {
        var $this = $(this);
        $this.animate({
          opacity: 0
        }, 500, function() {
          $this.css('display', 'none');
          $this.css('display', 'block').animate({
            opacity: 1
          }, 500);
        });
      });

      $('.two').click(function() {
        var $this = $(this);
          $this.animate({
          opacity: 0
        }, 400, function() {
          $this.css('display', 'none');
          $this.css('display', 'block').animate({
            opacity: 1
          }, 500);
        });
      });
*/
  /*+++見直し+++++*/
  $('.one, .two').click(function() {
    var $this = $(this);
    var $other = $this.siblings('.one, .two'); // 別の画像要素を取得

    // 現在の画像をフェードアウトし、別の画像をフェードイン
    $this.fadeOut(500, function() {
      $other.fadeIn(500);
    });
  });
    /*----//クリックで写真changeする//-------*/

});//最初のfunction

