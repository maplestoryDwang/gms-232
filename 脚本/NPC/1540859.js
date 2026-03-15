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
      cm.sendNormalTalk_Bottom("嘿嘿，我们是一见钟情，今天就是我们交往的第一天。", 36, 1540859, false, true);
    } else if (status === V++) {
      cm.sendNormalTalk_Bottom("在队伍中的命中注定的相遇，是不是超浪漫的啊？", 36, 1540859, true, false);
    } else {
      cm.dispose();
    }
  }
}