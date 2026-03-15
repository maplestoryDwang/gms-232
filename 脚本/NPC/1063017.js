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
      cm.askYesNo("欢迎回来，弗朗西斯主人。要进入主人的洞窟吗？", 0, 1063017);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("请慢走，弗朗西斯主人。", 0, 1063017, false, false);
      } else if (status === V++) {
        cm.dispose();
        cm.warp(910510202, 1, false);
      }
    }
  }
}