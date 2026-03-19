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
        if (cm.getMapId() == 308000270 || cm.getMapId() == 308000280) {
          cm.warp(cm.getMapId() + 10, 0, false);
        } else if (cm.getMapId() == 308000290) {
          cm.warp(308000012, 0, false);
          cm.updateInfoQuest(37800, "01=h1;02=h1;03=h1;q1=clear;04=h1;q2=clear;05=h1;06=h0;q4=clear;q6=clear;q7=clear;q8=clear;dir00=end;dir01=end;dir02=end;dir04=end");
        }
      }
      cm.dispose();
    }
  }
}