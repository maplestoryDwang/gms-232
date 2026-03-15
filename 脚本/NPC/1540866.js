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
    cm.sendNormalTalk_Bottom("哎哟，我朋友原本说好要一起来的，可一个小时都没有消息了……完全联系不上啊？这家伙总是这个样子……", 36, 1540866, false, false);
  } else {
    cm.dispose();
  }
}