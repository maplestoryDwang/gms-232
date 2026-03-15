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
      if (cm.isQuestFinished(31241) && !cm.isQuestFinished(31245)) {
        cm.sendNormalTalk('……', 4, 2074000, false, true);
      } else if (cm.isQuestFinished(30455)) {
        cm.sendNormalTalk("总算能安心一会了。", 4, 2074000, false, true);
      } else {
        cm.sendNormalTalk("如果继续放任玉石胡作非为，那童话村不知道会变成什么样。如果不阻止这件事，整个玩具城都危险了。", 4, 2074000, false, true);
      }
    } else {
      cm.dispose();
    }
  }
}