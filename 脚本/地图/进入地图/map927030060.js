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
    cm.updateInfoQuest(38067, '');
    cm.forceStartQuest(38067, '');
    cm.sendNormalTalk("是残存的黑暗力量吗？看来只有将其驱散才能通过了。", 16, 0, false, false);
    cm.forceStartQuest(38067, "clear");
    cm.dispose();
  }
}