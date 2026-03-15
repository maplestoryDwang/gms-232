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
      cm.sendNormalTalk_Bottom("等一下，发生什么事情了？", 36, 1540890, false, true);
    } else if (status === V++) {
      cm.sendNormalTalk_Bottom("从这里开始就是控制地区，未经许可是不允许进入的，请回吧。", 36, 1540890, true, false);
    } else {
      cm.dispose();
    }
  }
}