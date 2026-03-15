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
      cm.dispose();
      if (cm.isQuestFinished(58729)) {
        cm.sendNormalTalk_Bottom("人类走开！人类好可怕！", 37, 9111010, false, true);
      } else if (cm.isQuestFinished(58724)) {
        cm.openNpc('蘑菇神社_妖怪森林');
      } else {
        cm.forceCompleteQuest(58723);
        cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 3);
        cm.gainExp(Math.pow(cm.getLevel(), 3) / 3);
        cm.warp(800020004, 0, true);
      }
    }
  }
}