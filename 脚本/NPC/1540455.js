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
      if (w == 350012010) {
        cm.effect_Voice("Voice3.img/BlackHeaven/3_dolfy/10", 100);
        cm.effect_NormalSpeechBalloon("呦, 队长. 你的屁股还好吧?\r\n我屁股上的毛都被烧光了. ", 1, 0, 0, 2000, 0, 0, 0, 0, 4, 1540455, cm.getPlayer().getId());
      } else if (w == 350020120) {
        cm.sendOk("队长！有没有想我们？");
      }
      cm.dispose();
    }
  }
}