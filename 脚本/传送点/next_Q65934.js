function enter() {
  if (cm.getMonsterCount(cm.getMapId()) == 1) {
    switch (cm.getMapId()) {
      case 875004100:
        cm.warp(875004200, 0, false);
        break;
      case 875004200:
        cm.warp(875003014, 0, false);
        break;
    }
  } else {
    cm.playerMessage(-1, "还有怪物没有消灭干净。");
  }
}
var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(l, B, x) {
  if (status == 0 && l == 0) {
    cm.dispose();
    return;
  }
  if (l == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = x;
  var R = -1;
  if (status <= R++) {
    cm.dispose();
  } else {
    if (status === R++) {}
  }
}