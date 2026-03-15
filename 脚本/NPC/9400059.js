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
  } else {
    if (status === V++) {
      if (cm.getNumberFromQuestInfo(59746, "chk1") == 1) {
        cm.updateInfoQuest(59746, "chk1=1;chk2=1");
        cm.forceCompleteQuest(59748);
        cm.npc_ChangeController(9400060, 'oid=116639', 2564, 574, 1);
        cm.npc_LeaveField("oid=116638");
      } else if (cm.getNumberFromQuestInfo(59746, "chk1") == 0) {
        cm.sendOkSNoESC_Bottom("先去其他地方张贴吧。待会再来看看这里。");
      } else {
        cm.sendOkSNoESC_Bottom("这里已经张贴好了。去其他地方看看吧。");
      }
      cm.dispose();
    } else {
      cm.dispose();
    }
  }
}