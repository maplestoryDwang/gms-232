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
      if (!cm.isQuestFinished(58721) || cm.isQuestFinished(58722)) {
        cm.dispose();
        return;
      }
      cm.forceCompleteQuest(58722);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
      cm.sendNormalTalk_Bottom("发生了什么事……？", 57, 0, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_PushMoveInfo(0, 300, 1225, -30);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(999);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("看样子好像出事了……。", 57, 0, false, true);
          } else {
            if (status === V++) {
              cm.cameraSwitch_PushSwitchMoveInfo('next00', 3000);
              cm.sendNormalTalk_Bottom("我先去那边看看吧。", 57, 0, true, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushMoveInfo(1, 3000, 0, 0);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(3500);
                } else if (status === V++) {
                  cm.eventSKill(0);
                  cm.setInGameDirectionMode(false, true, false);
                  cm.dispose();
                }
              }
            }
          }
        }
      }
    }
  }
}