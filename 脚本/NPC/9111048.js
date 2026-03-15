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
      cm.sendNormalTalk("不好意思！你选错了哦。请集中注意力，重新挑战！", 5, 9111018, false, true);
    } else if (status === V++) {
      cm.dispose();
      cm.warp(800024002, 0, false);
    }
  }
}