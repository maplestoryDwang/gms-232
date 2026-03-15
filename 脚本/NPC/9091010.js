var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(b, z, s) {
  if (status == 0 && b == 0) {
    cm.dispose();
    return;
  }
  if (b == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = s;
  var P = -1;
  if (status <= P++) {
    cm.dispose();
  } else {
    if (status === P++) {
      var v = cm.getNpc();
      cm.dispose();
      cm.openNpc(v, 'BOSS_斯乌入场');
    } else {
      cm.dispose();
    }
  }
}