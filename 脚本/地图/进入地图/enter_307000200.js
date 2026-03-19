var status = -1;
function action(f, E, e) {
  if (cm.getNumberFromQuestInfo(32972, 'e1') == 1 && cm.getNumberFromQuestInfo(32972, 'e2') == 0) {
    action1(f, E, e);
  } else if (cm.isQuestFinished(32987) && cm.getQuestStatus(32988) == 0) {
    cm.dispose();
    cm.playerMessage(-1, "被拦住而无法离开。");
    cm.playerMessage(5, "被拦住而无法离开。");
    cm.warp(307000100, 1, true);
  } else {
    cm.dispose();
  }
}
function action1(f, E, e) {
  status++;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.sendNormalTalk_Bottom("糟了……我到底做了什么？", 57, 0, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("要是受到影子诅咒就糟了……必须马上回去查一下图鉴！", 57, 0, true, true);
      } else if (status === V++) {
        cm.updateInfoQuest(32972, "exp=1;e1=1;e2=1");
        cm.dispose();
      }
    }
  }
}
function action2(f, E, e) {
  status++;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
    } else if (status === V++) {
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;