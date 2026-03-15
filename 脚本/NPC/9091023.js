var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(m, v, u) {
  if (status == 0 && m == 0) {
    cm.dispose();
    return;
  }
  if (m == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = u;
  var P = -1;
  if (status <= P++) {
    cm.dispose();
  } else if (status === P++) {
    cm.dispose();
    cm.openNpc(9091023, "BOSS_贝伦入场");
  } else {
    cm.dispose();
  }
}