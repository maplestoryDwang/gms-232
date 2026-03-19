var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else if (status === V++) {
    cm.addPopupSay(2155123, 3000, "#face0#呃啊！我先躲起来！", '', 0);
    cm.getTopMsgFont("请消灭所有的超级人造人. ", 3, 20, 20, 0, 0);
    cm.spawnMobLimit(8250030, 1, 1500, 88, 6);
    cm.spawnMobLimit(8250030, 1, 1550, 75, 6);
    cm.spawnMobLimit(8250030, 1, 1600, 42, 6);
    cm.dispose();
  }
}