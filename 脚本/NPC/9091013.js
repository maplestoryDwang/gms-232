var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(P, E, M) {
  if (status == 0 && P == 0) {
    cm.dispose();
    return;
  }
  if (P == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = M;
  var u = -1;
  if (status <= u++) {
    cm.dispose();
  } else if (status === u++) {
    cm.dispose();
    cm.openNpc(9091012, "BOSS_路西德入场");
  } else {
    cm.dispose();
  }
}