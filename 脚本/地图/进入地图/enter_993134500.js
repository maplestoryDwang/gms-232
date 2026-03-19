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
      if (cm.isQuestFinished(39721)) {
        cm.dispose();
        return;
      }
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face2#奇怪。我看不见老师的痕迹。", 37, 3004322, false, true);
          cm.effect_Voice("Voice5.img/CH1/Elwyn/18", 128);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face3#啊，空间正变得很不稳定！", 37, 3004323, true, true);
            cm.effect_Voice("Voice5.img/CH1/Lily/23", 128);
          } else if (status === V++) {
            cm.eventSKill(0);
            cm.setInGameDirectionMode(false, true, false);
            cm.setStandAloneMode(false);
            cm.forceCompleteQuest(39721);
            cm.gainExp(20 * Math.pow(cm.getLevel(), 3));
            cm.dispose();
          }
        }
      }
    }
  }
}