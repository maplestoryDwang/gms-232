var status = -1;
function start() {
  cm.武陵道场_排行榜();
  cm.dispose();
}
function action(f, W, U) {
  if (f == 0) {
    cm.dispose();
    return;
  } else if (f == 1) {
    status++;
  } else {
    status--;
  }
  cm.dispose();
}