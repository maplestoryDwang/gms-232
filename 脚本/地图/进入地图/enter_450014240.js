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
      if (cm.getNumberFromQuestInfo(37618, 'clear') == 0 || cm.isQuestFinished(37618)) {
        cm.Hidden_background("reverse_boss2", 1, cm.isQuestFinished(37619) ? 1 : 0, 0, 0);
        cm.Hidden_background("reverse_boss", 1, cm.isQuestFinished(37619) ? 0 : 1, 0, 0);
        cm.dispose();
        return;
      }
      cm.Hidden_background("reverse_boss2", 1, 0, 0, 0);
      cm.Hidden_background("reverse_boss", 1, 1, 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(2500);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("那个就是重力装置吗？", 56, 0, false, true, 1);
        } else if (status === V++) {
          cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
          cm.setInGameDirectionMode(false, true, false);
          cm.setStandAloneMode(false);
          cm.updateInfoQuest(37600, "01=h0;10=h0;11=h0;02=h1;12=h0;13=h0;14=h0;15=h0;16=h0;17=h0;18=h0;09=h0;19=h0");
          cm.forceCompleteQuest(37618);
          cm.gainExp(17565641);
          cm.dispose();
        }
      }
    }
  }
}