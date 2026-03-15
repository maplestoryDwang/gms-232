var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(k, V, F) {
  if (status == 0 && k == 0) {
    cm.dispose();
    return;
  }
  if (k == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = F;
  var j = -1;
  if (status <= j++) {
    cm.dispose();
  } else if (status === j++) {
    cm.dispose();
    cm.openNpc(1064014, "BOSS_血腥女王入场");
  }
}