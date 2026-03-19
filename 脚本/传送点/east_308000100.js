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
        if (cm.getMapId() == 308000100 || cm.getMapId() == 308000110) {
          cm.warp(cm.getMapId() + 10, 0, false);
        } else if (cm.getMapId() == 308000120) {
          cm.warp(308000001, 0, false);
          cm.updateInfoQuest(37800, "01=sit;02=sit;03=sit;q1=clear;04=h1;05=sit;dir00=end");
        }
      }
      cm.dispose();
    }
  }
}