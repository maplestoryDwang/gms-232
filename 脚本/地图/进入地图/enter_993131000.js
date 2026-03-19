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
      if (cm.isQuestFinished(39714)) {
        cm.dispose();
        return;
      }
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2500, 0);
      cm.inGameDirectionEvent_AskAnswerTime(3500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom('这里是……拉克兰？', 57, 0, false, true);
      } else if (status === V++) {
        cm.eventSKill(0);
        cm.setInGameDirectionMode(false, true, false);
        cm.setStandAloneMode(false);
        cm.forceCompleteQuest(39714);
        cm.gainExp(20 * Math.pow(cm.getLevel(), 3));
        cm.dispose();
      }
    }
  }
}