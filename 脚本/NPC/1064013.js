var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(o, v, Z) {
  if (status == 0 && o == 0) {
    cm.dispose();
    return;
  }
  if (o == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = Z;
  var T = -1;
  if (status <= T++) {
    cm.dispose();
  } else if (status === T++) {
    cm.dispose();
    cm.openNpc(1064013, "BOSS_半半入场");
  }
}