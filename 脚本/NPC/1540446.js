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
      cm.askMenu("要回到联盟会场吗？\r\n\r\n#b#L0#回到联盟会场。#l\r\n#L1#现在不回去。", 4, 1540446);
    } else if (status === V++) {
      if (U == 0) {
        cm.updateInfoQuest(cm.getNpc(), cm.getMapId());
        cm.sendOk('已记录下当前的位置。');
      } else {
        cm.dispose();
      }
    } else {
      cm.warp(913050010, 0, false);
      cm.dispose();
    }
  }
}