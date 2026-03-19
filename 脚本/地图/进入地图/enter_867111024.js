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
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(9400031, "oid=19779833", 380, 13, 247, 330, 430, 0, true, false);
      cm.npc_SetSpecialAction("oid=19779833", "summon", 0, 0);
      cm.npc_ChangeController(9400032, "oid=19779834", 330, 13, 244, 280, 380, 0, true, false);
      cm.npc_SetSpecialAction("oid=19779834", "summon", 0, 0);
      cm.npc_ChangeController(9400033, "oid=19779835", 260, 13, 243, 210, 310, 0, true, false);
      cm.npc_SetSpecialAction("oid=19779835", "summon", 0, 0);
      cm.npc_ChangeController(9400034, "oid=19779836", 210, 13, 27, 160, 260, 0, true, false);
      cm.npc_SetSpecialAction("oid=19779836", "summon", 0, 0);
      cm.npc_ChangeController(9400035, "oid=19779837", 435, 13, 278, 385, 485, 1, true, false);
      cm.npc_SetSpecialAction("oid=19779837", "summon", 0, 0);
      cm.inGameDirectionEvent_PushMoveInfo(0, 0, 358, 120);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 358, 60);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("那我们就跟着动物的毛发走吧？", 37, 9400032, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("好，大家分散开来寻找吧。", 37, 9400031, true, true);
            } else if (status === V++) {
              cm.forceStartQuest(59723, '');
              cm.inGameDirectionEvent_SetHideEffect(0);
              cm.eventSKill(0);
              cm.warp(cm.getNumberFromQuestInfo(59744, "map"), 0);
              cm.setInGameDirectionMode(false, true, false);
              cm.setStandAloneMode(false);
              cm.npc_LeaveField("oid=19779833");
              cm.npc_LeaveField("oid=19779834");
              cm.npc_LeaveField("oid=19779835");
              cm.npc_LeaveField("oid=19779836");
              cm.npc_LeaveField("oid=19779837");
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