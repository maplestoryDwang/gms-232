function enter() {
  cm.openScriptNpc();
}
var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(e, N, z) {
  if (status == 0 && e == 0) {
    cm.dispose();
    return;
  }
  if (e == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = z;
  var H = -1;
  if (status <= H++) {
    cm.dispose();
  } else if (status === H++) {
    cm.dispose();
    cm.openNpc(9091014, "BOSS_至暗魔晶入场");
  }
}