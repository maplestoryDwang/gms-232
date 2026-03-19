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
    cm.getTopMsgFont("在传送口点击键盘的[↑]键就能前往与传送口连接的地方。", 3, 20, 20, 0, 0);
    cm.dispose();
  }
}