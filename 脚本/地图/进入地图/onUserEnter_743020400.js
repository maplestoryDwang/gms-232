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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.forceStartQuest(29900, '');
      cm.effect_Direction("Effect/Direction100.img/BackGroundDirection/intro3_1", 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(4000);
    } else if (status === V++) {
      cm.dispose();
      cm.warp(743020000, 0);
      cm.setInGameDirectionMode(false, false, false);
    } else {
      cm.dispose();
    }
  }
}