var status = -1;
function action(f, W, U) {
  status++;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.sendNext("切，我们自己玩吧，别管胆小鬼阿俊。但为什么一定要玩捉迷藏呢？像个小孩子，太幼稚了……");
    } else if (status === V++) {
      cm.sendOk("都已经来了，总不能不玩吧……");
      cm.dispose();
    } else {
      cm.dispose();
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;