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
    cm.sendOk("\r\n  -- 欢迎来到#e【#n#b雅典娜禁地#k#e】#n副本；\r\n\r\n  -- 在这里，#e#d你与同伴#k#n将会面临一系列挑战；\r\n\r\n  -- 搜集四处散落的云片吧，我将送你去下一关。\r\n\r\n");
    cm.dispose();
  }
}