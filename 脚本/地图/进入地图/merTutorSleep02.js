var status = -1;
function start() {
  status = -1;
  action(1, 0, 0);
}
;
function action(f, E, e) {
  status++;
  if (!cm.isQuestFinished(24008)) {
    action1(f, E, e);
  } else {
    cm.addPopupSay(0, 4000, "与头顶的`精灵竖琴`对话，可以前往`伟大的精灵`处。");
    cm.dispose();
    return;
  }
}
function action1(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.forceStartQuest(24008, '1');
      while (cm.getLevel() < 10) {
        cm.getPlayer().levelUp();
      }
      if (cm.getLevel() == 10) {
        cm.changeJob(2300);
      }
      cm.teachSkill(20021166, -1, 1);
      cm.teachSkill(20021181, -1, 1);
      cm.teachSkill(20020111, -1, 1);
      cm.dispose();
      cm.resetForcedStat();
      cm.getTopMsgFont("从那之后已经过了几百年……", 3, 20, 20, 0);
    }
  }
}
function action2(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
    } else {
      if (status === V++) {} else if (status === V++) {
        cm.warp(992000000, 0);
        cm.curNodeEventEnd(true);
        cm.setInGameDirectionMode(false, true);
        cm.setStandAloneMode(false);
        cm.dispose();
        cm.npc_LeaveField(2540000);
      } else {
        cm.dispose();
      }
    }
  }
}