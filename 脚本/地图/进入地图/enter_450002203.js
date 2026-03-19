var status = -1;
function action(f, E, e) {
  status++;
  if (cm.isQuestFinished(34217) && !cm.isQuestFinished(34218))
    action1(f, E, e);
  else if (!cm.isQuestFinished(34201)) {
    action2(f, E, e);
  } else {
    cm.dispose();
    cm.warp(450002015, 0);
  }
}
function action1(f, E, e) {
  var V = -1;
  if (status <= V++)
    cm.dispose();
  else if (status === V++) {
    cm.curNodeEventEnd(true);
    cm.setInGameDirectionMode(true, false, true);
    cm.setStandAloneMode(true);
    cm.inGameDirectionEvent_SetHideEffect(1);
    cm.fieldEffect_ProcessOnOffLayer('0', 'Map/Effect2.img/ArcaneRiver2/fight', 0, 2000, 0, 0, -1, 4, 1);
    cm.inGameDirectionEvent_AskAnswerTime(4000);
  } else if (status === V++) {
    cm.fieldEffect_ProcessOnOffLayer('0', '', 2, 300, 0, 0, 0, 0, 0);
    cm.inGameDirectionEvent_AskAnswerTime(1000);
  } else if (status === V++) {
    cm.setStandAloneMode(false);
    cm.dispose();
    cm.warp(450002021, 0);
    cm.setInGameDirectionMode(false, false, false);
  }
}
function action2(f, E, e) {
  var V = -1;
  if (status <= V++)
    cm.dispose();
  else if (status === V++) {
    cm.curNodeEventEnd(true);
    cm.eventSKill(0);
    cm.setInGameDirectionMode(true, false, true);
    cm.inGameDirectionEvent_SetHideEffect(1);
    cm.playVideoByScript('ChuChu.avi');
  } else if (status === V++) {
    cm.fieldEffect_ProcessOnOffLayer('drop1', 'Map/Effect2.img/ArcaneRiver2/drop1', 0, 1500, 0, 0, 0, 4, 1, -1, 0, 0, 0);
    cm.inGameDirectionEvent_AskAnswerTime(2000);
    cm.curNodeEventEnd(true);
  } else if (status === V++)
    cm.sendNormalTalk_Bottom('额啊~~~~！！怎么这么高啊！！', 57, 0, false, true);
  else if (status === V++) {
    cm.fieldEffect_ProcessOnOffLayer('drop1', '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
    cm.fieldEffect_ProcessOnOffLayer('drop2', 'Map/Effect2.img/ArcaneRiver2/drop2', 0, 1500, 0, 0, 0, 4, 1, -1, 0, 0, 0);
    cm.inGameDirectionEvent_AskAnswerTime(2500);
  } else if (status === V++)
    cm.sendNormalTalk_Bottom('那…那是什么啊？！', 57, 0, false, true);
  else if (status === V++) {
    cm.fieldEffect_ProcessOnOffLayer('drop2', '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    cm.fieldEffect_ProcessOnOffLayer('drop3', 'Map/Effect2.img/ArcaneRiver2/drop3', 0, 1500, 0, 0, 0, 4, 1, -1, 0, 0, 0);
    cm.inGameDirectionEvent_AskAnswerTime(2000);
  } else if (status === V++)
    cm.sendNormalTalk_Bottom('呃……！', 57, 0, false, true);
  else if (status === V++) {
    cm.fieldEffect_ProcessOnOffLayer('drop3', '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    cm.dispose();
    cm.warp(450002200, 0, false);
    cm.inGameDirectionEvent_SetHideEffect(0);
    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
    cm.eventSKill(0);
    cm.setInGameDirectionMode(false, true, false);
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}