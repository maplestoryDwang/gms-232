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
      if (cm.getMap().getNumMonsters() > 0) {
        cm.getTopMsgFont('地图剩余怪物：' + cm.getMap().getNumMonsters() + '', 3, 20, 4, 0, 0);
      } else {
        if (cm.getMapId() == 308000220 || cm.getMapId() == 308000230) {
          cm.warp(cm.getMapId() + 10, 0, false);
        } else if (cm.getMapId() == 308000240) {
          cm.warp(308090007, 0, false);
        }
      }
      cm.dispose();
    }
  }
}