var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (cm.isQuestFinished(32309)) {
    cm.dispose();
    return;
  }
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
    cm.forceStartQuest(32309, "11111");
    cm.playerMessage(-1, "存在着带有闪光红色宝石的神秘光柱。");
    cm.sendNormalTalk("存在着带有闪光红色宝石的神秘光柱。", 16, 0, false, true);

    cm.dispose();
  }
}