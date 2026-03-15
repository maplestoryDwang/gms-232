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
      cm.sendNormalTalk("呜呜……我想变成原来的样子。\r\n我只是想变得勇敢而已……现在好像连心都变得寒冷了……", 0, 2159019, false, false);
    } else if (status === V++) {
      cm.dispose();
    }
  }
}