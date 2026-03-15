var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(L, J, Z) {
  if (status == 0 && L == 0) {
    cm.dispose();
    return;
  }
  if (L == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = Z;
  var F = -1;
  if (status <= F++) {
    cm.dispose();
  } else {
    if (status === F++) {
      var M = cm.getNpc();
      cm.dispose();
      cm.openNpc(M, "BOSS_麦格纳斯入场");
    } else {
      cm.dispose();
    }
  }
}