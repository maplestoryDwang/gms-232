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
  } else {
    if (status === V++) {
      if (!cm.isQuestActive(31102)) {
        cm.dispose();
        return;
      }
      cm.sendNormalTalk("……………………！！！！！", 5, 2143002, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("神兽为什么会突然出现！？它好像在说什么话……看来必须到未来去，到更深的地方去看看。神兽到底想说什么呢？", 3, 2143003, true, true);
      } else if (status === V++) {
        cm.forceCompleteQuest(31102);
        cm.dispose();
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;