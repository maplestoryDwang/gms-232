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
    if (cm.isQuestFinished(64932)) {
      cm.sendNormalTalk_Bottom("#b杰斯#k复活了，我真的好嗨森。", 36, 9401073, 0, 1);
    } else {
      cm.sendNormalTalk_Bottom("我们已经做好#b走出世界#k的准备了！\r\n很神奇，我们擅长的东西都不相同。", 36, 9401073, 0, 1);
    }
  } else {
    cm.dispose();
  }
}