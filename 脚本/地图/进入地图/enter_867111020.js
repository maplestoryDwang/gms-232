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
      cm.npc_ChangeController(9400031, "oid=19779028", 1354, 1920, 379, 1304, 1404, 0, true, false);
      cm.npc_SetSpecialAction("oid=19779028", "summon", 0, 0);
      cm.npc_ChangeController(9400032, "oid=19779029", 1270, 1920, 378, 1220, 1320, 0, true, false);
      cm.npc_SetSpecialAction("oid=19779029", "summon", 0, 0);
      cm.npc_ChangeController(9400033, "oid=19779030", 1140, 1920, 375, 1090, 1190, 0, true, false);
      cm.npc_SetSpecialAction("oid=19779030", "summon", 0, 0);
      cm.npc_ChangeController(9400034, "oid=19779031", 1500, 1920, 381, 1450, 1550, 1, true, false);
      cm.npc_SetSpecialAction("oid=19779031", 'summon', 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
      cm.inGameDirectionEvent_AskAnswerTime(500);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_PushMoveInfo(0, 0, 1300, 1890);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(0);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1200);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 1300, 1980);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1200);
              } else {
                if (status === V++) {
                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1400);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("首先，从这段时间追查的线索来看，APORD应该是从这里前往了魔法密林。", 37, 9400034, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("情报员也提到了魔法密林，我们先去魔法密林看看吧？", 37, 9400034, true, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(2200);
                        } else if (status === V++) {
                          cm.inGameDirectionEvent_SetHideEffect(0);
                          cm.eventSKill(0);
                          cm.warp(867111021, 0);
                          cm.setInGameDirectionMode(false, true, false);
                          cm.setStandAloneMode(false);
                          cm.npc_LeaveField("oid=19779028");
                          cm.npc_LeaveField("oid=19779029");
                          cm.npc_LeaveField("oid=19779030");
                          cm.npc_LeaveField("oid=19779031");
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
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;