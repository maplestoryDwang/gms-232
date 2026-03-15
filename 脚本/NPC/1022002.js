var status = -1;
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (f == 1) {
    status++;
  } else {
    if (status == 0) {
      cm.dispose();
    }
    status--;
  }
  if (status == 0) {
    if (!cm.haveItem(4033333)) {
      cm.gainItem(4033333, 1);
    }
    cm.dispose();
    cm.playerMessage(-1, "传家宝就交给你了。");
  }
}