var status = -1;
function start() {
  status = -1;
  action(1, 0, 0);
}
;
function action(f, E, e) {
  status++;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.setInGameDirectionMode(true, true);
      cm.setStandAloneMode(true);
      cm.effect_Direction("Effect/Direction6.img/DemonTutorial/SceneLogo");
      cm.inGameDirectionEvent_AskAnswerTime(5500);
    } else if (status === V++) {
      cm.dispose();
      cm.warp(927000000, 0);
    } else {
      cm.dispose();
    }
  }
}