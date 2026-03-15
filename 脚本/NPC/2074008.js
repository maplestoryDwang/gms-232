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
    if (cm.isQuestFinished(30420)) {
      cm.sendNormalTalk("……我是不是应该去卖年糕呢……", 4, 2074008, false, true);
    } else {
      cm.sendNormalTalk("哎呦，我的腰啊……", 4, 2074008, false, true);
    }
  } else {
    cm.dispose();
  }
}