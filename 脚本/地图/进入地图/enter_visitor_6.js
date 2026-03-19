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
      var O = cm.getNumberFromQuestInfo(17205, "exp");
      cm.playerMessage(5, "获得了经验值 " + O + '。');
      cm.gainExp(O);
      cm.dispose();
      cm.updateInfoQuest(17204, '');
      cm.updateInfoQuest(17205, '');
      cm.gainItem(5062024, 1);
      cm.gainItem(5062500, 2);
      cm.gainItem(5062010, 2);
    }
  }
}