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
      cm.npc_ChangeController(1540446, "oid=38026", 1524, 101, 7, 1474, 1574, 1, false, 0, false);
      cm.updateInfoQuest(33128, "act1=350013000;act2=350024300;act3=350033100;act4=350044000;act5=350053004");
      cm.updateInfoQuest(33233, "start=0;m11=0");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.npc_ChangeController(1540493, "oid=284729705", -800, 93, 1, -850, -750, 0, true, 0, false);
          cm.npc_SetSpecialAction("oid=284729705", "summon", 0, 0);
          cm.npc_SetSpecialAction("oid=284729705", "awaking", -1, 1);
          cm.npcMove(1540493, 400, 0, 1000);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.npc_setForceFlip("oid=284729705", -1);
            cm.inGameDirectionEvent_AskAnswerTime(600);
          } else {
            if (status === V++) {
              cm.npc_setForceFlip("oid=284729705", 1);
              cm.inGameDirectionEvent_AskAnswerTime(200);
            } else {
              if (status === V++) {
                cm.npcMove(1540493, 800, 0, 2000);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.npc_LeaveField("oid=284729705");
                    cm.npc_LeaveField("oid=284729705");
                    cm.inGameDirectionEvent_SetHideEffect(0);
                    cm.setPartner(1, 1540705, 80001633, 0);
                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(1400);
                    } else if (status === V++) {
                      cm.setInGameDirectionMode(false, true, false);
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