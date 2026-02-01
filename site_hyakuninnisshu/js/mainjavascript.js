//  javascript page

/*ハンバーガーメニューのボタン（ham）をクリックした時、
ハンバーガーメニューとナビゲーションメニュー（nav）の表示状態を切り替えるためのものです.
全体の動作：
①ユーザーがハンバーガーメニューのボタン（ham）をクリックします。
②クリックイベントが発生し、ham要素とnav要素の両方にactiveクラスがトグルされます。
③このactiveクラスが追加または削除されることによって、CSSで定義されたスタイルが適用され、メニューの表示・非表示やその他のスタイルが切り替わります。*/

const ham = document.querySelector('#js-hamburger');//#js-hamburgerの要素を取得し、それをhamという変数に格納
const nav = document.querySelector('#gnav');
const body = document.body;

ham.addEventListener('click',function(){//クリックされたときに指定された関数が実行

  ham.classList.toggle('active');//hamのclassListに対してactiveクラスをトグルする。※すでにactiveクラスが付いている場合は削除し、付いていない場合は追加します。
  nav.classList.toggle('active');

 if (nav.classList.contains('active')) {
        body.style.overflow = 'hidden'; // メニューが開いているときはスクロールを無効にする
    } else {
        body.style.overflow = 'auto'; // メニューが閉じたらスクロールを有効にする
    }

});
/*min-768pxのハンバーガーメニュー、ページ内ジャンプ時の、戻らないメニューを解決script*/
const links = document.querySelectorAll('#gnav a'); // メニュー内のリンクをすべて選択

links.forEach(link => {
  link.addEventListener('click', function() {
    // メニューを閉じる処理
    if (nav.classList.contains('active')) {
      ham.classList.remove('active');
      nav.classList.remove('active');
      body.style.overflow = 'auto'; // スクロールを有効にする
    }
  });
});

/*++++++popupが出た際に背景の画面を固めるscript++++++++++++++*/
  document.addEventListener('DOMContentLoaded',function() {
            const checkbox = document.getElementById('popup');
            const body = document.body;

            if (checkbox) { // ここでcheckboxが存在するか確認
              checkbox.addEventListener('change',function() {
                  if (checkbox.checked) {
                      body.classList.add('no-scroll');
                  } else {
                      body.classList.remove('no-scroll');
                  }
              });
            } else {
              console.error('Element with ID "popup" not found.');
          }
  });
  
  
  
  
  
  
  
  
  
