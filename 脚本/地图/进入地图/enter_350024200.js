var status = -1;
var selectionLog = [];
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
      cm.npc_ChangeController(1540446, "oid=34876", -333, 144, 46, -383, -283, 1, false, 0, false);
      cm.updateInfoQuest(33128, "act1=350013000;act2=350024200");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(1540468, "oid=22710242", -80, -100, 5, -130, -30, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=22710242", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_SetSpecialAction("oid=22710242", "rJump", -1, 1);
        cm.inGameDirectionEvent_AskAnswerTime(600);
      } else {
        if (status === V++) {
          cm.setNpcSpecialActionReset("oid=22710242");
          cm.inGameDirectionEvent_AskAnswerTime(1500);
          cm.effect_NormalSpeechBalloon('嘻嘻', 1, 0, 0, 1500, 0, 0, 0, 0, 4, 1540468, cm.getPlayer().getId());
        } else {
          if (status === V++) {
            cm.npc_LeaveField("oid=22710242");
            cm.npc_LeaveField("oid=22710242");
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else if (status === V++) {
            cm.setInGameDirectionMode(false, true, false);
            cm.effect_NormalSpeechBalloon('在中央的柱子后面!', 1, 0, 1, 4000, 0, 0, 0, 0, 4, 0, cm.getPlayer().getId());
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