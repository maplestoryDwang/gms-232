var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(Q, H, B) {
  if (status == 0 && Q == 0) {
    cm.dispose();
    return;
  }
  if (Q == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = B;
  var z = -1;
  if (status <= z++) {
    cm.dispose();
  } else {
    if (status === z++) {
      var x = cm.getNpc();
      cm.dispose();
      cm.openNpc(x, "BOSS_戴米安入场");
    } else {
      cm.dispose();
    }
  }
}