$(function(){

//idが数字で始まる要素を選択し、その数字に基づいて背景色を変更する
//$(function() {                              //class="kojin"が付いたすべての<div>要素を取得
    $('.kojin').each(function() {           //'each'メソッドを使って、.kojinクラスを持つすべての要素をループ
        const id = $(this).attr('id');  
        const firstNumber = parseInt(id.match(/^\d+/)[0], 10);//それぞれのidから最初の数字を抽出して、適切な背景色のクラスを追加
        
        if (firstNumber >= 1 && firstNumber <= 7) {//それぞれの数字に合わせて背景色が変更されるクラスを設定
            $(this).addClass('gb-nara');
        } else if (firstNumber >= 8 && firstNumber <= 25) { 
            $(this).addClass('gb-heiannmae');
        } else if (firstNumber >= 26 && firstNumber <= 64) {
            $(this).addClass('gb-heiannaka');
        } else if (firstNumber >= 65 && firstNumber <= 92) {
            $(this).addClass('gb-sekkan');
        } else if (firstNumber >= 92 && firstNumber <= 100) {
            $(this).addClass('gb-sengoku');
        }
    });
    /*--------ここまでが背景色の変更のjs-------------------*/    
    
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
        $('body, html').animate({scrollTop:0},300); //画面全体を0pxに移動してね
        return false;
        });
    /*--------//toppage出現//----------*/

});//最初のfunction
