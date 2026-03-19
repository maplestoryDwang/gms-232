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
    if (cm.isQuestActive(63045) && cm.getNumberFromQuestInfo(63045, "chk2") == 0) {
      cm.updateInfoQuest(63045, "chk1=1;chk2=1");
      cm.addPopupSay(9400205, 4000, "唔~~这里也没有任何色彩。去下个地图吧。", '', 0);
    }
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;