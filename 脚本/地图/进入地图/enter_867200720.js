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
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(9400667, "oid=4238152", 450, 330, 2, 400, 500, 1, true, false);
      cm.npc_SetSpecialAction("oid=4238152", "summon", 0, 0);
      cm.npc_ChangeController(9400581, "oid=4238153", 620, 330, 2, 570, 670, 1, true, false);
      cm.npc_SetSpecialAction("oid=4238153", "summon", 0, 0);
      cm.npc_ChangeController(9400585, "oid=4238154", 0, 330, 2, -50, 50, 0, true, false);
      cm.npc_SetSpecialAction("oid=4238154", "summon", 0, 0);
      cm.npc_ChangeController(9400585, "oid=4238155", 60, 330, 2, 10, 110, 0, true, false);
      cm.npc_SetSpecialAction("oid=4238155", "summon", 0, 0);
      cm.npc_ChangeController(9400585, "oid=4238156", 110, 330, 2, 60, 160, 0, true, false);
      cm.npc_SetSpecialAction("oid=4238156", "summon", 0, 0);
      cm.npc_ChangeController(9400585, "oid=4238157", 640, 330, 2, 590, 690, 1, true, false);
      cm.npc_SetSpecialAction("oid=4238157", 'summon', 0, 0);
      cm.npc_ChangeController(9400585, "oid=4238158", 660, 330, 2, 610, 710, 1, true, false);
      cm.npc_SetSpecialAction("oid=4238158", "summon", 0, 0);
      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_OneTimeAction(7, 0);
        cm.npc_SetSpecialAction("oid=4238152", "die1", 0, 1);
        cm.inGameDirectionEvent_AskAnswerTime(300);
      } else {
        if (status === V++) {
          cm.fieldEffect_ScreenMsg("Map/EffectPL.img/MainStream/Skuas/screenEff/finishAttack");
          cm.inGameDirectionEvent_AskAnswerTime(2000);
        } else {
          if (status === V++) {
            cm.fieldEffect_PlayFieldSound("PL_3min/CubeBreak", 100);
            cm.npc_LeaveField("oid=4238152");
            cm.npc_LeaveField("oid=4238152");
            cm.sendNormalTalk_Bottom("怪物倒下了！！！！！！！！！！！！！！！！！", 37, 9400585, false, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(1440);
            } else {
              if (status === V++) {
                cm.npc_LeaveField("oid=4238154");
                cm.npc_LeaveField("oid=4238154");
                cm.npc_LeaveField("oid=4238155");
                cm.npc_LeaveField("oid=4238155");
                cm.npc_LeaveField("oid=4238156");
                cm.npc_LeaveField("oid=4238156");
                cm.npc_LeaveField("oid=4238157");
                cm.npc_LeaveField("oid=4238157");
                cm.npc_LeaveField("oid=4238158");
                cm.npc_LeaveField("oid=4238158");
                cm.npc_LeaveField("oid=4238153");
                cm.npc_LeaveField("oid=4238153");
                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
              } else if (status === V++) {
                cm.setNumberForQuestInfo(64006, 'Ec', 10);
                cm.dispose();
                cm.warp(867200500, 9);
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