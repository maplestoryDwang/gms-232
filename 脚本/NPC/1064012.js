var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(D, Q, F) {
  if (status == 0 && D == 0) {
    cm.dispose();
    return;
  }
  if (D == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = F;
  var x = -1;
  if (status <= x++) {
    cm.dispose();
  } else if (status === x++) {
    cm.dispose();
    cm.openNpc(1064012, "BOSS_皮埃尔入场");
  }
}