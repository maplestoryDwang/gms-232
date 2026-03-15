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
      cm.askMenu("谢谢你打败#b老海盗#k拯救了我的性命。有什么可以帮助你的吗？\r\n#b#L2#离开这里。#l", 0, 2094001);
    } else if (status === V++) {
      cm.warp(251010404, 0, false);
      cm.dispose();
    }
  }
}