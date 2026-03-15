function start() {
  cm.sendNext("Oh... Did I just found something? Then there's only one way out！Let's fight like a #rBlack Wing#k should!");
}
function action(f, W, U) {
  if (f == 1) {
    cm.removeNpc(cm.getMapId(), 1104100);
    cm.spawnMob(9001009, 263, 88);
  }
  cm.dispose();
}
var status = -1;