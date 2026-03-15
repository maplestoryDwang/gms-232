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
    cm.askMenu("想要回到故事开始的地方吗？\r\n\r\n#b#L0#是的，拜托了。#l\r\n#L1#不必了。", 4, 9201533);
  } else {
    if (U == 0) {
      cm.setQuestCustomData(9201533, cm.getMapId());
      cm.warp(610060000, 0);
    }
    cm.dispose();
  }
}