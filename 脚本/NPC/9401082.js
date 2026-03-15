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
      cm.sendNormalTalk_Bottom("我们的型号比较古老，所以不能跟你分享部件了。\r\n我觉得大家都很了不起……", 36, 9401082, 0, 1);
    } else {
      cm.sendNormalTalk_Bottom("无论在哪里，做什么，只要能和#b夏娃#k在一起，我就会很幸福。", 36, 9401082, 0, 1);
    }
  } else {
    cm.dispose();
  }
}