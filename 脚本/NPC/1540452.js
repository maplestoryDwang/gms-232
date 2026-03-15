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
  } else {
    if (status === V++) {
      var w = cm.getMapId();
      if (w == 350024100) {
        cm.sendOk("我们应该制定更严密的战略！");
      } else if (w == 350031003) {
        cm.effect_NormalSpeechBalloon("咳咳……", 1, 0, 500, 2000, 0, 0, 0, 0, 0, 1540452, cm.getPlayer().getId());
      }
      cm.dispose();
    } else {
      cm.dispose();
    }
  }
}