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
      if (cm.getQuestStatus(65984) == 1 && cm.getMonsterCount(cm.getMapId()) > 0) {
        cm.dispose();
        cm.getTopMsgFont("需消灭挡在前方的所有敌人，进行移动。", 3, 20, 20, 0, 0);
      } else {
        switch (cm.getMapId()) {
          case 875005800:
            cm.dispose();
            cm.warp(875005900, 0, false);
            break;
          case 875005900:
            cm.dispose();
            cm.warp(875006000, 0, false);
            break;
          case 875006000:
            cm.dispose();
            cm.warp(875003059, 0, false);
            break;
          default:
            cm.dispose();
        }
      }
    }
  }
}