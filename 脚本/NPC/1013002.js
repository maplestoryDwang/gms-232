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
    cm.updateInfoQuest(22014, "mo30=o;mo40=o;mo50=o;mo41=o;mo60=o;mo42=o");
    cm.effect_OnUserEff("Effect/OnUserEff.img/guideEffect/evanTutorial/evanBalloon60");
    cm.forceStartQuest(22011, '');
    cm.forceCompleteQuest(22011);
    cm.playerMessage(5, "获得了龙蛋。");
    cm.dispose();
    cm.warp(900090103, 0, false);
  }
}