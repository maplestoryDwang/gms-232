var status = -1;
function action(F, x, o) {
  status++;
  if (cm.isQuestActive(30003)) {
    action30003(F, x, o);
  } else {
    actionDefault(F, x, o);
  }
}
function action30003(F, x, o) {
  var e = -1;
  if (status <= e++) {
    cm.dispose();
  } else {
    if (status === e++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === e++) {
        cm.sendNormalTalk("出口没有任何问题啊？重新回去吧。", 3, 0, false, true);
      } else {
        if (status === e++) {
          cm.inGameDirectionEvent_AskAnswerTime(500);
        } else if (status === e++) {
          cm.updateInfoQuest(30003, "portaluse=2");
          cm.dispose();
          cm.warp(910700200, 0);
          cm.setInGameDirectionMode(false, true, false);
          cm.setStandAloneMode(false);
        }
      }
    }
  }
}
function actionDefault(F, x, o) {
  var e = -1;
  if (status <= e++) {
    cm.dispose();
  } else {
    if (status === e++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_PushMoveInfo(0, 200, 1300, -232);
      cm.curNodeEventEnd(true);
    } else {
      if (status === e++) {
        cm.inGameDirectionEvent_AskAnswerTime(4028);
      } else {
        if (status === e++) {
          cm.sendNormalTalk("四周的雾很浓，看不清东西。不知道会有什么东西出现，必须小心一点。", 3, 0, false, true);
        } else {
          if (status === e++) {
            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
          } else {
            if (status === e++) {
              cm.inGameDirectionEvent_AskAnswerTime(0);
            } else if (status === e++) {
              cm.setStandAloneMode(false);
              cm.setInGameDirectionMode(false, true, false);
              cm.dispose();
            }
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