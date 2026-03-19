function enter() {
  cm.openScriptNpc();
}
var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(C, w, H) {
  if (status == 0 && C == 0) {
    cm.dispose();
    return;
  }
  if (C == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = H;
  var N = -1;
  if (status <= N++) {
    cm.dispose();
  } else if (status === N++) {
    cm.dispose();
    cm.openNpc(9091002, "BOSS_麦格纳斯入场");
  }
}