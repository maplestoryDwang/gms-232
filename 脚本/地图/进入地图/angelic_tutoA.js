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
      cm.setInGameDirectionMode(true, true);
      cm.setStandAloneMode(true);
      while (cm.getLevel() < 10) {
        cm.getPlayer().levelUp();
      }
      cm.teachSkill(60011216, 1, 1);
      cm.teachSkill(60011218, 1, 1);
      cm.teachSkill(60011220, 1, 1);
      cm.teachSkill(60011221, 1, 1);
      cm.teachSkill(60011222, 1, 1);
      cm.changeJob(6500);
      cm.inGameDirectionEvent_AskAnswerTime(300);
    } else {
      if (status === V++) {
        cm.fieldEffect_ScreenMsg("kaiser/text0");
        cm.inGameDirectionEvent_AskAnswerTime(4200);
      } else if (status === V++) {
        cm.dispose();
        cm.warp(940011020, 0);
        cm.curNodeEventEnd(true);
        cm.setInGameDirectionMode(false, true);
        cm.setStandAloneMode(false);
      }
    }
  }
}