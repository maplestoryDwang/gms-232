var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      if (cm.getMap().getNumMonsters() > 0) {
        cm.getTopMsgFont("地图剩余怪物：" + cm.getMap().getNumMonsters() + '', 3, 20, 4, 0, 0);
        cm.dispose();
      } else {
        if (cm.getQuestStatus(2214) == 1 && !cm.haveItem(4031894)) {
          cm.sendOk("拿出一个纸团。");
          cm.gainItem(4031894, 1);
          cm.dispose();
        } else {
          if (cm.isQuestActive(2878)) {
            cm.forceStartQuest(2878, "check");
            cm.dispose();
          } else if (cm.isQuestActive(2620)) {
            cm.sendNormalTalk("(从垃圾箱里拿出了一个文件。)", 0, 1052108, false, true);
            if (!cm.haveItem(4033182)) {
              cm.gainItem(4033182, 1);
            }
            cm.dispose();
          } else {
            cm.playerMessage(-1, "是一个垃圾桶");
            cm.dispose();
          }
        }
      }
    }
  }
}