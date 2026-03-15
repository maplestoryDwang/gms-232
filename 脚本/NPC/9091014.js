var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(D, I, Z) {
  if (status == 0 && D == 0) {
    cm.dispose();
    return;
  }
  if (D == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = Z;
  var r = -1;
  if (status <= r++) {
    cm.dispose();
  } else {
    if (status === r++) {
      var a = cm.getNpc();
      cm.dispose();
      cm.openNpc(a, "BOSS_至暗魔晶入场");
    } else {
      cm.dispose();
    }
  }
}