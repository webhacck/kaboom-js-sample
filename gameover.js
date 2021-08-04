
//画面の中央にテキストを表示
add([
  text('Game Over', 24),
  pos(width() / 2, height() / 2),
  origin('center')
]);


//画面をクリックしてゲームを再開する
mouseClick(() => {
  go('main');
})
