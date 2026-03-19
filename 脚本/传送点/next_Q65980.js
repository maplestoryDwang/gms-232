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
      if (cm.getQuestStatus(65980) == 1 && cm.getMonsterCount(cm.getMapId()) > 0) {
        cm.dispose();
        cm.getTopMsgFont("需消灭挡在前方的所有敌人，进行移动。", 3, 20, 20, 0, 0);
      } else {
        switch (cm.getMapId()) {
          case 875005500:
            cm.dispose();
            cm.warp(875005600, 1, false);
            break;
          case 875005600:
            cm.dispose();
            cm.updateInfoQuest(65980, "chk=1");
            cm.warp(875000107, 3, false);
            break;
          default:
            cm.dispose();
        }
      }
    }
  }
}