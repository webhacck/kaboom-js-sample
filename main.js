const blocks = [0.4, 0.6, 0.8]; //ブロックの長さ
let state = true;

//キャラクターの設定
add([
  sprite('player'),
  pos(width() * 0.2, 40),
  body(),
  'player',
  {
    jumpForce: 200,
  }
]);


//2秒間隔でブロックを表示
loop(2, () => {
  
  //ランダムにブロックの長さを決める
  const rnd = Math.floor(rand(0, blocks.length));

  if (state) {
    add([
      rect(25, height() * blocks[rnd]),
      pos(width(), 0),
      color(0, 1, 0),
      origin('topleft'),
      'block'
    ])
    state = false;
  } else {
    add([
      rect(25, height() * blocks[rnd]),
      pos(width(), height()),
      color(0, 1, 0),
      origin('botleft'),
      'block'
    ])
    state = true;
  }
});

action('block', (e) => {
  e.move(-200, 0);
})

action('player', (e) => {
  
  //キャラクターが落下したらゲームオーバーにする
  if (e.pos.y >= height()) {
    go("gameover");
  }
  keyPress('space', () => {
    e.jump(e.jumpForce);
  });
});

collides('player','block', (p,b) => {
  go('gameover');
});
