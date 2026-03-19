function enter() {
  cm.openScriptNpc();
}
var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(p, Z, d) {
  if (status == 0 && p == 0) {
    cm.dispose();
    return;
  }
  if (p == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = d;
  var D = -1;
  if (status <= D++) {
    cm.dispose();
  } else if (status === D++) {
    cm.dispose();
    cm.openNpc(9091012, "BOSS_觉醒希拉入场");
  }
}