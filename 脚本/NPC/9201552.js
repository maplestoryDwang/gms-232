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
    cm.sendNormalTalk_Bottom("是个空盒子。\r\n里面本来应该装有食物和其他紧急情况用的补给品才对。", 57, 9201552, false, false);
  } else {
    cm.dispose();
  }
}