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
      cm.sendNormalTalk_Bottom("#face3#我很幸福，现在我才知道什么是幸福。", 36, 9401081, 0, 1);
    } else {
      cm.sendNormalTalk_Bottom("我现在还在获得帮助，没有我能做的事情吗……？", 36, 9401081, 0, 1);
    }
  } else {
    cm.dispose();
  }
}