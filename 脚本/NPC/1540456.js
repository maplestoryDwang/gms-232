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
        cm.effect_Voice("Voice3.img/BlackHeaven/3_liffy/5", 100);
        cm.effect_NormalSpeechBalloon("请替我向女皇问好. ", 1, 0, 0, 2000, 0, 0, 0, 0, 4, 1540456, cm.getPlayer().getId());
      } else if (w == 350020120) {
        cm.sendOk("队长，你来啦！");
      }
      cm.dispose();
    }
  }
}