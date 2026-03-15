var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(n, d, A) {
  if (status == 0 && n == 0) {
    cm.dispose();
    return;
  }
  if (n == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = A;
  var D = -1;
  if (status <= D++) {
    cm.dispose();
  } else if (status === D++) {
    cm.dispose();
    cm.openNpc(9091021, "BOSS_血腥女王入场");
  } else {
    cm.dispose();
  }
}