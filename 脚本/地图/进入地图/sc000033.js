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
    cm.spawnMobLimit(9450040, 1, 562, -195, 1);
    cm.updateInfoQuest(58973 + cm.getNumberFromQuestCustomData(58900), "m040=clear;m035=clear;dr1=clear;dr2=clear;m037=clear;m038=clear;m039=clear");
    cm.dispose();
  }
}