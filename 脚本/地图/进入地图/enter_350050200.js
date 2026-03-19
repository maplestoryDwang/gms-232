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
      cm.updateInfoQuest(33222, "col4=0");
      cm.npc_ChangeController(1540710, "oid=284031839", 2400, -1100, 74, 2350, 2450, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=284031839", "summon", 0, 0);
      cm.npc_ChangeController(1540700, "oid=284031840", 2150, -1100, 73, 2100, 2200, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=284031840", "summon", 0, 0);
      cm.npc_ChangeController(1540701, "oid=284031841", 2220, -1100, 73, 2170, 2270, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=284031841", "summon", 0, 0);
      cm.npc_ChangeController(1540702, "oid=284031842", 2290, -1100, 74, 2240, 2340, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=284031842", "summon", 0, 0);
      cm.npc_ChangeController(1540452, "oid=284031843", 2120, -1030, 231, 2070, 2170, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=284031843", "summon", 0, 0);
      cm.npc_ChangeController(1540526, "oid=284031844", 2190, -1030, 231, 2140, 2240, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=284031844", "summon", 0, 0);
      cm.npc_ChangeController(1540611, "oid=284031845", 2260, -1030, 205, 2210, 2310, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=284031845", 'summon', 0, 0);
      cm.npc_ChangeController(1540453, "oid=284031846", 2360, -1030, 205, 2310, 2410, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=284031846", "summon", 0, 0);
      cm.npcMove(1540453, 0, -67, 0);
      cm.npc_setForceFlip("oid=284031840", -1);
      cm.npc_setForceFlip("oid=284031841", -1);
      cm.npc_setForceFlip("oid=284031842", -1);
      cm.npc_setForceFlip("oid=284031843", -1);
      cm.npc_setForceFlip("oid=284031844", -1);
      cm.npc_setForceFlip("oid=284031845", -1);
      cm.npc_setForceFlip("oid=284031846", -1);
      cm.npc_ChangeController(1540704, "oid=284031847", -2870, -1000, 140, -2920, -2820, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=284031847", 'summon', 0, 0);
      cm.npc_ChangeController(1540451, "oid=284031848", -2800, -1000, 133, -2850, -2750, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=284031848", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushMoveInfo(0, 2000, 2158, -900);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(3000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("啊，我看到了谋士和队长！", 37, 1540700, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#h0#！我在这里等你！", 37, 1540453, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_PushMoveInfo(1, 2000, 0, 0);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(3500);
                    } else if (status === V++) {
                      cm.setInGameDirectionMode(false, true, false);
                      cm.npc_LeaveField("oid=284031847");
                      cm.npc_LeaveField("oid=284031847");
                      cm.npc_LeaveField("oid=284031848");
                      cm.npc_LeaveField("oid=284031848");
                      cm.updateInfoQuest(33222, "save=1;col4=0");
                      cm.setPartner(1, 1540704, 80001632, 0);
                      cm.setPartner(1, 1540765, 80001601, 0);
                      cm.dispose();
                    }
                  }
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