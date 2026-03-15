var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (!cm.haveItem(4033893)) {
    cm.sendNormalTalk("没有水桶的话，无法盛水。", 16, 0, false, true);
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
  } else {
    if (status === V++) {
      cm.sendNormalTalk("罐子帽中已经盛满了水。快拿给修嘉吧。", 16, 0, false, true);
    } else if (status === V++) {
      cm.gainItem(4033893, -1);
      if (cm.isQuestActive(32318)) {
        cm.gainItem(4033896, 1);
      } else {
        cm.gainItem(4033894, 1);
      }
      cm.dispose();
    }
  }
}