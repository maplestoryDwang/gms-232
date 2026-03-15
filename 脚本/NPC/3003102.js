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
      cm.sendNormalTalk("如果看着记忆之树的话，我的心情会很好。", 0, 3003102, false, true);
    } else if (status === V++) {
      cm.sendNormalTalk("好像把空荡荡的心一点一点地填满…… 一样。", 0, 3003102, true, false);
      cm.dispose();
    }
  }
}