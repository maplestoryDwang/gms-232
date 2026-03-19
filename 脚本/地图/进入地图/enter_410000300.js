var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else if (status === V++) {
    if (cm.isQuestActive(39604)) {
      cm.setPartner(1, 3001919, 80002879, 0);
    }
    if (cm.getLevel() >= 30 && cm.getJob() == 15110 && cm.getQuestStatus(39652) == 0) {
      cm.forceCompleteQuest(39652);
      cm.updateInfoQuest(39601, "50=h0;51=h0;52=h0;53=h0;j=2;54=h0;55=h0;56=h0;57=h0;58=h0;59=h0;q=3");
      cm.updateInfoQuest(39627, 'end=1');
      cm.updateInfoQuest(1073, "15100=10;15110=30");
    }
    cm.Hidden_background('dong', 1, cm.getQuestStatus(39633) > 0 ? 1 : 0, 0, 0);
    cm.Hidden_background("light", 1, cm.getQuestStatus(39633) > 0 ? 0 : 1, 0, 0);
    cm.dispose();
  }
}