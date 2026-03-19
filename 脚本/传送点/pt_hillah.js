function enter() {
  cm.openScriptNpc();
}
var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(J, x, z) {
  if (J == 1) {
    status++;
  } else {
    if (status == 0) {
      cm.dispose();
    }
    status--;
  }
  if (status == 0) {
    cm.askYesNo("你想结束挑战， 然后退出吗？ ", 0, 2184001);
  } else if (status == 1) {
    cm.warp(262030000, 4, false);
    cm.dispose();
  }
}