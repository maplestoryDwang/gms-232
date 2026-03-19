var status = -1;
function action(f, E, e) {
  status++;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_PushMoveInfo(0, 100, -600, 0);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.playerMessage(-1, "经过通道后，隐藏着的妖精森林就显露了出来。");
          cm.inGameDirectionEvent_AskAnswerTime(3800);
        } else {
          if (status === V++) {
            cm.fieldEffect_ScreenMsg("temaD/enter/fairyAcademy");
            cm.inGameDirectionEvent_AskAnswerTime(2800);
          } else if (status === V++) {
            if (cm.isQuestFinished(32104)) {
              cm.warp(101070010, 0);
            } else {
              cm.warp(101070000, 0);
            }
            cm.inGameDirectionEvent_SetHideEffect(0);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(false, true, false);
            cm.dispose();
          }
        }
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;