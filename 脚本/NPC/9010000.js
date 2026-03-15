var status = -1;
function start() {
  status = -1;
}
function action(f, W, U) {
  if (f == -1) {
    cm.dispose();
    return;
  }
  if (f == 0) {
    status--;
  }
  if (f == 1) {
    status++;
  }
  cm.sendOk('有什么可以帮助你的？');
  cm.dispose();
}