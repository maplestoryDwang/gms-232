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
        cm.effect_Voice("Voice3.img/BlackHeaven/3_guffy/1", 100);
        cm.effect_NormalSpeechBalloon("辛苦你了. \r\n你上次的表现真是了不起. ", 1, 0, 0, 2000, 0, 0, 0, 0, 4, 1540454, cm.getPlayer().getId());
      } else if (w == 350020120) {
        cm.sendOk("队长！我们又见面啦！");
      }
      cm.dispose();
    }
  }
}