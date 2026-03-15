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
      cm.sendNormalTalk("……现在建立了联盟，责任感就更重了。真正的战斗现在才刚刚开始……千万不能松懈。", 0, 1105013, false, false);
    } else {
      cm.dispose();
    }
  }
}