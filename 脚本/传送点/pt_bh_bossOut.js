function enter() {
  cm.openNpc(9091010, "BOSS_斯乌入场");
}
var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(m, k, s) {
  if (status == 0 && m == 0) {
    cm.dispose();
    return;
  }
  if (m == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = s;
  var Q = -1;
  if (status <= Q++) {
    cm.dispose();
  } else if (status === Q++) {
    cm.dispose();
    cm.openNpc(9091010, "BOSS_斯乌入场");
  }
}