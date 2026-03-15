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
      if (cm.isQuestActive(1803)) {
        cm.forceStartQuest(1808, 'find');
        cm.sendNormalTalk("进化系统开始……", 0, 9075105, false, false);
      } else {
        cm.sendOkS("谨慎起见，还是不要乱动的好。");
      }
    } else if (status === V++) {
      cm.dispose();
    }
  }
}