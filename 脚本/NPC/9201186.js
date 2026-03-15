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
      if (cm.haveItem(4033192, 1)) {
        cm.sendNormalTalk("已到达外星人物质克隆器。你可以下来了。", 0, 9201186, false, true);
      } else {
        cm.sendNormalTalk("缺少#b#i4033192##z4033192##k，无法激活。", 0, 9201186, false, true);
        cm.dispose();
      }
    } else if (status === V++) {
      cm.gainItem(4033192, -1);
      cm.dispose();
      cm.warp(610040800, 0, false);
    }
  }
}