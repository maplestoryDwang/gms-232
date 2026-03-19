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
      cm.npc_ChangeController(9400668, "oid=3697185", 450, 330, 2, 400, 500, 1, true, false);
      cm.npc_SetSpecialAction("oid=3697185", "summon", 0, 0);
      cm.npc_ChangeController(9400583, "oid=3697186", 120, 330, 2, 70, 170, 0, true, false);
      cm.npc_SetSpecialAction("oid=3697186", "summon", 0, 0);
      cm.npc_ChangeController(9400585, "oid=3697187", -50, 330, 2, -100, 0, 0, true, false);
      cm.npc_SetSpecialAction("oid=3697187", 'summon', 0, 0);
      cm.npc_ChangeController(9400585, "oid=3697188", 10, 330, 2, -40, 60, 0, true, false);
      cm.npc_SetSpecialAction("oid=3697188", "summon", 0, 0);
      cm.npc_ChangeController(9400585, "oid=3697189", 60, 330, 2, 10, 110, 0, true, false);
      cm.npc_SetSpecialAction("oid=3697189", "summon", 0, 0);
      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_OneTimeAction(7, 0);
        cm.npc_SetSpecialAction("oid=3697185", "die1", 0, 1);
        cm.inGameDirectionEvent_AskAnswerTime(300);
      } else {
        if (status === V++) {
          cm.fieldEffect_ScreenMsg("Map/EffectPL.img/MainStream/Skuas/screenEff/finishAttack");
          cm.inGameDirectionEvent_AskAnswerTime(1500);
        } else {
          if (status === V++) {
            cm.npc_LeaveField("oid=3697185");
            cm.npc_LeaveField("oid=3697185");
            cm.fieldEffect_PlayFieldSound("PL_3min/CubeBreak", 100);
            cm.sendNormalTalk_Bottom("#face0#你没事吧？", 37, 9400583, false, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_ForcedFlip(-1);
              cm.sendNormalTalk_Bottom("#face0#多亏你救了我们，村民们全都很平安！", 37, 9400583, true, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1440);
              } else {
                if (status === V++) {
                  cm.npc_LeaveField("oid=3697187");
                  cm.npc_LeaveField("oid=3697187");
                  cm.npc_LeaveField("oid=3697188");
                  cm.npc_LeaveField("oid=3697188");
                  cm.npc_LeaveField("oid=3697189");
                  cm.npc_LeaveField("oid=3697189");
                  cm.npc_LeaveField("oid=3697186");
                  cm.npc_LeaveField("oid=3697186");
                  cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                } else if (status === V++) {
                  cm.setNumberForQuestInfo(64006, 'Ec', 10);
                  cm.dispose();
                  cm.warp(867200550, 9);
                  cm.setInGameDirectionMode(false, true, false);
                }
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