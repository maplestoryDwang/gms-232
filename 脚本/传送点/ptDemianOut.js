function enter() {
  cm.openScriptNpc();
}
var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(B, S, l) {
  if (status == 0 && B == 0) {
    cm.dispose();
    return;
  }
  if (B == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = l;
  var g = -1;
  if (status <= g++) {
    cm.dispose();
  } else if (status === g++) {
    cm.dispose();
    cm.openNpc(9091011, "BOSS_戴米安入场");
  }
}