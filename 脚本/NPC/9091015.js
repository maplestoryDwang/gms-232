var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(p, h, K) {
  if (status == 0 && p == 0) {
    cm.dispose();
    return;
  }
  if (p == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = K;
  var z = -1;
  if (status <= z++) {
    cm.dispose();
  } else {
    if (status === z++) {
      var R = cm.getNpc();
      cm.dispose();
      cm.openNpc(R, "BOSS_敦凯尔入场");
    } else {
      cm.dispose();
    }
  }
}