var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(G, D, p) {
  if (status == 0 && G == 0) {
    cm.dispose();
    return;
  }
  if (G == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = p;
  var N = -1;
  if (status <= N++) {
    cm.dispose();
  } else if (status === N++) {
    cm.dispose();
    cm.openNpc(9091008, "BOSS_希纳斯入场");
  } else {
    cm.dispose();
  }
}