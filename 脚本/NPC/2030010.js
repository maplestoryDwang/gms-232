function start() {
  cm.askYesNo("你要离开这里吗? 下次再来的话, 需要从头开始挑战哦。");
}
function action(f, W, U) {
  if (f == 1) {
    cm.warp(211042300, 0);
  }
  cm.dispose();
}
var status = -1;