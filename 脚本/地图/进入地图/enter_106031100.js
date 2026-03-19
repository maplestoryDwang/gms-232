var status = -1;
function action(f, E, e) {
  if (cm.isQuestFinished(30067)) {
    action拼图(f, E, e);
  } else if (cm.isQuestFinished(30058)) {
    action海盗(f, E, e);
  } else {
    action片头(f, E, e);
  }
}
function action片头(f, E, e) {
  status++;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.playerMessage(-1, "该内容可以在1024*768以上的分辨率下正常播放.");
      cm.inGameDirectionEvent_AskAnswerTime(3500);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(9500);
      } else if (status === V++) {
        cm.effect_Direction("Effect/Direction2.img/flowervioleta/opennig", 0, 0, 0);
        cm.eventSKill(0);
        cm.setInGameDirectionMode(false, true, false);
        cm.dispose();
        cm.warp(106031000, 0, true);
      }
    }
  }
}
function action海盗(f, E, e) {
  status++;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.fieldEffect_ScreenMsg("Map/Effect2.img/flowervioleta/viking");
      cm.inGameDirectionEvent_AskAnswerTime(3000);
    } else if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(false, true, false);
      cm.dispose();
      cm.warp(106030000, 0);
    }
  }
}
function action拼图(f, E, e) {
  status++;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.fieldEffect_ScreenMsg("Map/Effect2.img/flowervioleta/puzzle");
      cm.inGameDirectionEvent_AskAnswerTime(3000);
    } else if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(false, true, false);
      cm.forceStartQuest(30069, '');
      cm.dispose();
      cm.warp(106030600, 3);
      cm.forceCompleteQuest(30068);
      cm.forceStartQuest(30069);
      cm.gainItem(4034114, -10);
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;