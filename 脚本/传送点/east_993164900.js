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
        if (cm.getMapId() == 993164900) {
          cm.warp(993165000, 0, false);
        } else {
          if (cm.getMapId() == 993165000) {
            cm.warp(993165100, 0, false);
          } else if (cm.getMapId() == 993165100) {
            cm.warp(993164028, 0, true);
          }
        }
      }
      cm.dispose();
    }
  }
}