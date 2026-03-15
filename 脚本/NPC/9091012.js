var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(G, h, m) {
  if (status == 0 && G == 0) {
    cm.dispose();
    return;
  }
  if (G == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = m;
  var K = -1;
  if (status <= K++) {
    cm.dispose();
  } else if (status === K++) {
    cm.dispose();
    cm.openNpc(9091012, "BOSS_路西德入场");
  } else {
    cm.dispose();
  }
}