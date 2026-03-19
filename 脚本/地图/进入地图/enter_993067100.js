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
    cm.getTopMsgFont("必须攻击和破坏掉核心，才能继续进行。", 3, 20, 4, 0, 0);
    cm.spawnMobLimit(8644628, 1, 1, 156, 1);
    cm.dispose();
  }
}