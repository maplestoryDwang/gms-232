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
  if (cm.getMapId() == 306050300) {
    cm.effect_NormalSpeechBalloon("都结束了……", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 2550015, null, cm.getPlayer().getId());
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
    cm.sendOk("（力战而死的士兵尸体。）");
  } else {
    cm.dispose();
  }
}