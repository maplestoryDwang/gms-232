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
        cm.getTopMsgFont("地图剩余怪物：" + cm.getMap().getNumMonsters() + '', 3, 20, 4, 0, 0);
      } else {
        if (cm.getMapId() == 993164200) {
          cm.warp(993164300, 0, false);
        } else {
          if (cm.getMapId() == 993164300) {
            cm.warp(993164400, 0, false);
          } else if (cm.getMapId() == 993164400) {
            cm.warp(993164019, 0, true);
          }
        }
      }
      cm.dispose();
    }
  }
}