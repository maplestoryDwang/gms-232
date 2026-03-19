var status = -1;
var selectionLog = [];
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
    cm.forceStartQuest(7263, cm.getNowTimeString(3));
    cm.addNumberForQuestCustomData(7262, 1);
    cm.forceStartQuest(7261, '0');
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;