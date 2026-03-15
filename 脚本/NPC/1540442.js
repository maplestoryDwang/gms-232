var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else if (status === V++) {
    cm.effect_NormalSpeechBalloon("加油, 冒险岛联盟!!", 1, 0, 0, 2500, 0, 0, 0, 0, 4, 1540442, cm.getPlayer().getId());
    cm.dispose();
  }
}