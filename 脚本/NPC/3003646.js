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
      if (cm.getQuestStatus(35623) > 0 && cm.getQuestStatus(35626) == 0) {
        cm.askMenu("坐着小型飞船就能前往你想去的甲板。\r\n要去哪儿呢？\r\n\r\n#b#L0##m993060058##k#l\r\n\r\n#L10#不使用小型飞船。#l", 24, 3003646);
      } else if (cm.getQuestStatus(35626) > 0 && !cm.isQuestFinished(35627)) {
        cm.askMenu("坐着小型飞船就能前往你想去的甲板。\r\n要去哪儿呢？\r\n\r\n#b#L1##m993060059##k#l\r\n\r\n#L10#不使用小型飞船。#l", 24, 3003646);
      } else {
        cm.sendOkS("不需要坐这艘船了。");
      }
    } else {
      if (status === V++) {
        cm.dispose();
        if (U == 0) {
          cm.warp(993060058, 1, false);
        } else if (U == 1) {
          cm.warp(993060059, 1, false);
        }
      }
    }
  }
}