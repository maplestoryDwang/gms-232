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
    cm.effect_NormalSpeechBalloon('不要撤退！！战斗！！', 1, 0, 0, 2000, 1, 0, 0, 0, 4, 2550013, null, cm.getPlayer().getId());
    cm.dispose();
  }
}