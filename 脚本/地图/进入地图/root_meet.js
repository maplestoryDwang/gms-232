var status = -1;
function action(f, E, e) {
  status++;
  if (cm.isQuestActive(30000)) {
    action30000(f, E, e);
  } else {
    cm.dispose();
  }
}
function action30000(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.npc_ChangeController(1064029, "oid=219666", 799, 215, 22, 749, 849, 1, false, false);
      cm.npc_ChangeController(1064001, "oid=219667", -17, 215, 20, -67, -17, 1, false, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_AskAnswerTime(3000);
      cm.curNodeEventEnd(true);
      cm.effect_Direction("Effect/Direction11.img/meet/Scene0", 0, 0, 0);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(6500);
        cm.effect_Direction("Effect/Direction11.img/meet/Scene1", 0, 0, 0);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(13000);
          cm.effect_Direction("Effect/Direction11.img/meet/Scene2", 0, 0, 0);
        } else if (status === V++) {
          cm.forceStartQuest(30000, '');
          cm.forceCompleteQuest(30000);
          cm.setInGameDirectionMode(false, true, false);
          cm.setStandAloneMode(false);
          cm.dispose();
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