function enter() {
  cm.openScriptNpc();
}
var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(h, J, Y) {
  if (status == 0 && h == 0) {
    cm.dispose();
    return;
  }
  if (h == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = Y;
  var K = -1;
  if (status <= K++) {
    cm.dispose();
  } else if (status === K++) {
    cm.dispose();
    cm.openNpc(9091015, "BOSS_敦凯尔入场");
  }
}