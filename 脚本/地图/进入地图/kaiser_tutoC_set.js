var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, false);
      while (cm.getLevel() < 10) {
        cm.getPlayer().levelUp();
      }
      cm.updateInfoQuest(25980, 'normal=#');
      cm.updateInfoQuest(25980, "normal=#;hard=#");
      cm.updateInfoQuest(39391, "level=1");
      cm.gainExp(1242);
      cm.changeJob(6100);
      cm.teachSkill(60000222, 0, -1);
      cm.updateInfoQuest(1073, "6100=10");
      cm.forceStartQuest(25807, '1');
      cm.teachSkill(60001229, 0, 1);
      cm.teachSkill(60001229, -1, 0);
      cm.teachSkill(60001216, 1, 1);
      cm.teachSkill(60001217, 1, 1);
      cm.teachSkill(60001218, 1, 1);
      cm.teachSkill(60000219, 1, 1);
      cm.teachSkill(60001225, 1, 1);
      cm.teachSkill(61001000, 1, 20);
      cm.teachSkill(61001101, 1, 20);
      cm.inGameDirectionEvent_AskAnswerTime(900);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.gainItem(1142484, 1);
        cm.forceStartQuest(29987, '');
        cm.forceCompleteQuest(29987);
        cm.fieldEffect_ScreenMsg("kaiser/text0");
        cm.inGameDirectionEvent_AskAnswerTime(4200);
      } else if (status === V++) {
        cm.dispose();
        cm.warp(940001200, 0, false);
        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
        cm.setInGameDirectionMode(false, true, false);
      }
    }
  }
}