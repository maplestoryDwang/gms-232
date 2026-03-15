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
  } else if (status === V++) {
    if (cm.isQuestActive(3114)) {
      cm.forceCompleteQuest(3114);
      if (cm.getPlayer().getFame() + 20 <= 30000) {
        cm.getPlayer().addFame(20);
        cm.getPlayer().updateFame();
      }
    }
    cm.fieldEffect_PlayFieldSound("orbis/sol");
    cm.dispose();
  }
}