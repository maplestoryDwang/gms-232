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
      cm.forceCompleteQuest(64158);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(9400581, "oid=3692990", -630, 330, 1, -680, -580, 0, true, false);
      cm.npc_SetSpecialAction("oid=3692990", "summon", 0, 0);
      cm.npc_ChangeController(9400585, "oid=3692991", -685, 330, 1, -735, -635, 0, true, false);
      cm.npc_SetSpecialAction("oid=3692991", "summon", 0, 0);
      cm.npc_ChangeController(9400585, "oid=3692992", -665, 330, 1, -715, -615, 0, true, false);
      cm.npc_SetSpecialAction("oid=3692992", "summon", 0, 0);
      cm.npc_ChangeController(9400585, "oid=3692993", -715, 330, 1, -765, -665, 0, true, false);
      cm.npc_SetSpecialAction("oid=3692993", "summon", 0, 0);
      cm.npc_ChangeController(9400585, "oid=3692994", -765, 330, 1, -815, -715, 0, true, false);
      cm.npc_SetSpecialAction("oid=3692994", "summon", 0, 0);
      cm.npc_ChangeController(9400585, "oid=3692995", -815, 330, 1, -865, -765, 0, true, false);
      cm.npc_SetSpecialAction("oid=3692995", "summon", 0, 0);
      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face0#停下！", 37, 9400581, false, true);
      } else {
        if (status === V++) {
          cm.npc_SetForceMove("oid=3692991", 1, 630, 250);
          cm.npc_SetForceMove("oid=3692992", 1, 630, 200);
          cm.npc_SetForceMove("oid=3692993", 1, 630, 220);
          cm.npc_SetForceMove("oid=3692994", 1, 630, 230);
          cm.npc_SetForceMove("oid=3692995", 1, 630, 200);
          cm.npc_SetForceMove("oid=3692990", 1, 700, 250);
          cm.inGameDirectionEvent_ForcedFlip(-1);
          cm.inGameDirectionEvent_AskAnswerTime(4000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#归队！", 37, 9400581, false, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(1440);
            } else {
              if (status === V++) {
                cm.npc_LeaveField("oid=3692991");
                cm.npc_LeaveField("oid=3692991");
                cm.npc_LeaveField("oid=3692992");
                cm.npc_LeaveField("oid=3692992");
                cm.npc_LeaveField("oid=3692993");
                cm.npc_LeaveField("oid=3692993");
                cm.npc_LeaveField("oid=3692994");
                cm.npc_LeaveField("oid=3692994");
                cm.npc_LeaveField("oid=3692995");
                cm.npc_LeaveField("oid=3692995");
                cm.npc_LeaveField("oid=3692990");
                cm.npc_LeaveField("oid=3692990");
                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
              } else if (status === V++) {
                cm.setNumberForQuestInfo(64006, 'Ec', 4);
                cm.dispose();
                cm.warp(867200550, 3);
                cm.setInGameDirectionMode(false, true, false);
              }
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