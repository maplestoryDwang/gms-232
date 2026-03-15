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
      cm.askYesNo("喵～你想离开这里吗？", 0, 1040002);
    } else if (status === V++) {
      cm.dispose();
      cm.warp(101030000, 0, false);
    } else {
      cm.dispose();
    }
  }
}