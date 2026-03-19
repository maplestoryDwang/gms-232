var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (cm.isQuestFinished(1801)) {
    action2(f, E, e);
  } else {
    action1(f, E, e);
  }
}
function action1(f, E, e) {
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
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.curNodeEventEnd(true);
      cm.effect_Direction("Effect/Direction5.img/evolvingDereciton/Scene0", 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(5000);
    } else if (status === V++) {
      cm.dispose();
      cm.warp(310010000, 0, false);
      cm.setInGameDirectionMode(false, true, false);
    }
  }
}
function action2(f, E, e) {
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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_AskAnswerTime(1500);
      cm.curNodeEventEnd(true);
      cm.effect_Direction("Effect/Direction5.img/evolvingDereciton/Scene1", 0, 0, 0);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_PushScaleInfo(3000, 1500, 3000, 120, 110);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(11000);
        } else if (status === V++) {
          cm.dispose();
          cm.warp(957020006, 0, true);
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