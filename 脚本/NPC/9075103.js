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
    if (cm.rand(1, 2) == 1) {
      cm.sendNormalTalk("链接2，系统正在启动。咳勒勒勒。", 0, 9075103, false, false);
    } else {
      cm.sendNormalTalk("链接2系统正常启动，有奇怪形态的怪物接近！很难看。", 0, 9075103, false, false);
    }
    cm.dispose();
  }
}