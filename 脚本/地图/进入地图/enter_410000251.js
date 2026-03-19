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
    if (cm.isQuestFinished(39531) && !cm.isQuestFinished(39532)) {
      cm.useItem(2210218, false);
      cm.playerMessage(5, "为了骗过法堂里的那群沟鼠，化身修行者。");
      cm.dispose();
    } else {
      cm.dispose();
      cm.cancelItem(2210218);
    }
    cm.dispose();
  }
}