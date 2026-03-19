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
      if (cm.isQuestFinished(35903) && cm.getQuestStatus(35904) == 0) {
        cm.updateInfoQuest(35948, '06=h1');
        cm.curNodeEventEnd(true);
        cm.setInGameDirectionMode(true, false, true);
        cm.setStandAloneMode(true);
        cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
        cm.inGameDirectionEvent_SetHideEffect(0);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        cm.dispose();
        return;
      }
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.sendNextNoESC_Bottom("#face3#草丛中好像有什么东西在动。去确认一下吧。", 1013358);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.sendNextNoESC_Bottom("#face1#呃……救，救救我。我的头……卡在地上了。", 1013306);
            } else {
              if (status === V++) {
                cm.sendNextNoESC_Bottom("#face1##b（先把他弄出来吧。说不定能找到什么线索。）#k", 1013358);
              } else if (status === V++) {
                cm.forceCompleteQuest(35903);
                cm.inGameDirectionEvent_SetHideEffect(0);
                cm.fieldEffect_InsertCanvas(1, 0, 0, 0, 0, 1500, 0);
                cm.curNodeEventEnd(true);
                cm.setInGameDirectionMode(false, true);
                cm.setStandAloneMode(false);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
                cm.dispose();
              }
            }
          }
        }
      }
    }
  }
}