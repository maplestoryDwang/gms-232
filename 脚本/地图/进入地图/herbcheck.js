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
    cm.setNumberForQuestCustomData(58976, 0);
    cm.setNumberForQuestCustomData(58904, 0);
    cm.setNumberForQuestCustomData(58905, 0);
    cm.setNumberForQuestCustomData(58906, 0);
    cm.setNumberForQuestCustomData(58907, 0);
    cm.dispose();
  }
}