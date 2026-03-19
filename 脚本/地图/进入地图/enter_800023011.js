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
      if (cm.getNumberFromQuestInfo(58762, "stage") >= 1) {
        cm.dispose();
        return;
      }
      cm.updateInfoQuest(58762, "stage=1");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.cameraSwitch_PushSwitchMoveInfo('next00', 3000);
      cm.inGameDirectionEvent_AskAnswerTime(3000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("传说之樱桃……在那里吗。", 57, 0, false, true);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
        } else if (status === V++) {
          cm.eventSKill(0);
          cm.setInGameDirectionMode(false, true, false);
          cm.dispose();
        }
      }
    }
  }
}