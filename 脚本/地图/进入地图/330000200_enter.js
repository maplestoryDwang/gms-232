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
    if (cm.isQuestActive(32777)) {
      cm.sendNormalTalk_Bottom("……？没见到奥尔卡啊。看来得跟别人打听打听了。", 56, 0, false, true);
    }
    if (cm.getQuestStatus(32858) == 2 && cm.getQuestStatus(32860) == 0) {
      cm.cancelItem(2210132);
    }
    cm.dispose();
  } else {
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;