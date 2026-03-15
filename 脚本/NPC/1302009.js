var status = -1;
function action(f, W, U) {
  if (f === 0) {
    status--;
  } else {
    status++;
  }
  if (cm.getNumberFromQuestInfo(30085, "portal") == 1) {
    if (cm.getMapId() == 106031500) {
      cm.warp(106031501, 0);
    }
  } else {
    cm.effect_NormalSpeechBalloon("再，再往前走几步，就到了！", 1, 0, 0, 2000, 0, 0);
  }
  cm.dispose();
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;