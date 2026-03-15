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
  var V = cm.getMapId();
  var w = -1;
  if (status <= w++) {
    cm.dispose();
  } else {
    if (status === w++) {
      if (V == 867200110) {
        cm.openUI(1887);
        cm.dispose();
      } else {
        cm.askMenu("要返回大本营吗？#b\r\n#L0#返回大本营。#l\r\n#L1#与村民们在一起。#l", 4, 9400570);
      }
    } else if (status === w++) {
      if (U == 0) {
        cm.setQuestCustomData(867200400, cm.getMapId());
        cm.sendNormalTalk('记住当前位置。', 4, 9400570, false, true);
      } else {
        cm.dispose();
      }
    } else {
      cm.dispose();
      cm.warp(867200110, 0);
    }
  }
}