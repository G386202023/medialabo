// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;
// 予想を4回実行する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
b = document.querySelector('button#print');
b.addEventListener('click',hantei);

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let a = document.querySelector('input[name="kazuate"]');
  u = a.value;
  let seisu_u = Number(u);
  let yoso = seisu_u;
  // 課題3-1: 正解判定する
  kaisu=kaisu+1;
  let p = document.querySelector('span#kaisu');
  p.textContent = kaisu;

  let c = document.querySelector('span#answer');
  c.textContent = yoso;

  console.log(kaisu+'回目の予想: '+ yoso);
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール

  let h = document.querySelector('p#result');
  h.textContent = yoso;
  if(yoso==kotae){h.textContent='「正解です．おめでとう!」';}
  if(yoso!==kotae && kaisu==3 ){h.textContent='「まちがい．残念でした答えは'+ kotae +' です．」';}
  if(yoso!=kotae && yoso > kotae && kaisu<3){h.textContent='「まちがい．答えはもっと小さいですよ」';}
  if(yoso!=kotae && yoso < kotae && kaisu<3){h.textContent='「まちがい．答えはもっと大きいですよ」';}
  if(kaisu>=4){h.textContent='「答えは'+kotae+'でした．すでにゲームは終わっています」';}
}