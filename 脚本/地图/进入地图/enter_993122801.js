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
  } else {
    if (status === V++) {
      var O = cm.getNumberFromQuestInfo(100351, "kill");
      cm.setNumberForQuestInfo(100351, 'kill', 0);
      cm.gloryRagingSeaReward(O * 100, 1);
      cm.gainGloryEventPoint(O * 100);
      cm.dispose();
    }
  }
}