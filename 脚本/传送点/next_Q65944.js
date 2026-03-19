function enter() {
  cm.openScriptNpc();
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
    if (status === R++) {
      if (cm.getMap().countMonsterById(9601657, 9601668) > 0) {
        cm.dispose();
        cm.playerMessage(-1, "还有怪物没有消灭干净。");
      } else {
        cm.dispose();
        switch (cm.getMapId()) {
          case 875004500:
            cm.warp(875004600, 0, false);
            break;
          case 875004600:
            cm.warp(875003030, 0, false);
            break;
        }
      }
    }
  }
}