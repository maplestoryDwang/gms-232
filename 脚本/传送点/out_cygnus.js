function enter() {
  cm.openScriptNpc();
}
var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(m, Q, c) {
  if (status == 0 && m == 0) {
    cm.dispose();
    return;
  }
  if (m == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = c;
  var o = -1;
  if (status <= o++) {
    cm.dispose();
  } else if (status === o++) {
    cm.dispose();
    cm.openNpc(9091008, 'BOSS_希纳斯入场');
  }
}