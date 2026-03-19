function enter() {
  cm.openNpc(9091010, "BOSS_斯乌入场");
}
var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(v, J, E) {
  if (status == 0 && v == 0) {
    cm.dispose();
    return;
  }
  if (v == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = E;
  var k = -1;
  if (status <= k++) {
    cm.dispose();
  } else if (status === k++) {
    cm.playerMessage(-1, '');
    cm.dispose();
  }
}