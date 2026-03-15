var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(u, O, a) {
  if (status == 0 && u == 0) {
    cm.dispose();
    return;
  }
  if (u == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var k = -1;
  if (status <= k++) {
    cm.dispose();
  } else if (status === k++) {
    cm.dispose();
    cm.openNpc(9091018, "BOSS_黑魔法师入场");
  }
}