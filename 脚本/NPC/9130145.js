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
      cm.askMenu("请选择要挑战#e<BOSS：森兰丸>#n\r\n的难度。\r\n#L0# 森兰丸<普通>#l\r\n#L1# 森兰丸<困难>#l", 0, 9130145);
    } else if (status === V++) {
      cm.dispose();
      cm.warp(807300100, 1, false);
    }
  }
}