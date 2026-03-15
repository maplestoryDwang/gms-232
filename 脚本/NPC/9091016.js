var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(O, k, J) {
  if (status == 0 && O == 0) {
    cm.dispose();
    return;
  }
  if (O == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = J;
  var M = -1;
  if (status <= M++) {
    cm.dispose();
  } else if (status === M++) {
    cm.dispose();
    cm.openNpc(9091012, "BOSS_觉醒希拉入场");
  } else {
    cm.dispose();
  }
}