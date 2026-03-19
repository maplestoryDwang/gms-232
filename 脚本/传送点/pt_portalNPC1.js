function enter() {
  cm.openNpc(2144018, "BOSS_阿卡伊勒入场");
}
var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(e, N, w) {
  if (status == 0 && e == 0) {
    cm.dispose();
    return;
  }
  if (e == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = w;
  var z = -1;
  if (status <= z++) {
    cm.dispose();
  } else if (status === z++) {
    cm.playerMessage(-1, "");
    cm.dispose();
  }
}