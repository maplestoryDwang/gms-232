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
    if (cm.getNumberFromQuestInfo(59746, 'chk1') == 0) {
      cm.setNumberForQuestInfo(59746, "chk1", 1);
      cm.forceCompleteQuest(59747);
      cm.npc_ChangeController(9400059, 'oid=116638', 1939, 244, 1);
      cm.npc_LeaveField("oid=116637");
    } else {
      cm.sendOkSNoESC_Bottom("这里已经张贴好了。去其他地方看看吧。");
    }
    cm.dispose();
  } else {
    cm.dispose();
  }
}