var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(r, A, m) {
  if (status == 0 && r == 0) {
    cm.dispose();
    return;
  }
  if (r == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = m;
  var j = -1;
  if (status <= j++) {
    cm.dispose();
  } else if (status === j++) {
    cm.dispose();
    cm.openNpc(1064015, "BOSS_贝伦入场");
  }
}