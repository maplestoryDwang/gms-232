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
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(9400642, "oid=7621754", 950, -20, 20, 900, 1000, 0, true, false);
      cm.npc_SetSpecialAction("oid=7621754", 'summon', 0, 0);
      cm.npc_ChangeController(9400666, "oid=7621755", 720, -20, 19, 670, 770, 0, true, false);
      cm.npc_SetSpecialAction("oid=7621755", 'summon', 0, 0);
      cm.npc_ChangeController(9400675, "oid=7621756", 540, -20, 17, 490, 590, 0, true, false);
      cm.npc_SetSpecialAction("oid=7621756", "summon", 0, 0);
      cm.npc_ChangeController(9400674, "oid=7621757", 460, -20, 17, 410, 510, 0, true, false);
      cm.npc_SetSpecialAction("oid=7621757", "summon", 0, 0);
      cm.npc_ChangeController(9400676, "oid=7621758", 300, -20, 16, 250, 350, 0, true, false);
      cm.npc_SetSpecialAction("oid=7621758", "summon", 0, 0);
      cm.npc_ChangeController(9400642, "oid=7621759", 200, -20, 15, 150, 250, 0, true, false);
      cm.npc_SetSpecialAction("oid=7621759", "summon", 0, 0);
      cm.npc_ChangeController(9400672, "oid=7621760", 150, -20, 15, 100, 200, 0, true, false);
      cm.npc_SetSpecialAction("oid=7621760", "summon", 0, 0);
      cm.npc_ChangeController(9400674, "oid=7621761", 80, -20, 15, 30, 130, 0, true, false);
      cm.npc_SetSpecialAction("oid=7621761", "summon", 0, 0);
      cm.npc_ChangeController(9400668, "oid=7621762", -100, -20, 14, -150, -50, 0, true, false);
      cm.npc_SetSpecialAction("oid=7621762", 'summon', 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(250);
        } else {
          if (status === V++) {
            cm.npc_SetSpecialAction("oid=7621755", 'flame', 0, 0);
            cm.npc_SetForceMove("oid=7621756", 1, 50, 50);
            cm.npc_SetForceMove("oid=7621758", 1, 50, 50);
            cm.inGameDirectionEvent_AskAnswerTime(1500);
          } else {
            if (status === V++) {
              cm.npc_SetSpecialAction("oid=7621754", 'skill1', 0, 0);
              cm.npc_SetSpecialAction("oid=7621761", "skill1", 0, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1500);
            } else {
              if (status === V++) {
                cm.npc_SetSpecialAction("oid=7621756", "skill1", 0, 0);
                cm.npc_SetSpecialAction("oid=7621757", 'skill1', 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(2000);
              } else {
                if (status === V++) {
                  cm.npc_SetSpecialAction("oid=7621755", "flame", 0, 0);
                  cm.npc_SetForceMove("oid=7621757", 1, 50, 50);
                  cm.sendNormalTalk_Bottom("#b(……居然……我们必须阻止它们！) ", 57, 0, false, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else if (status === V++) {
                      cm.warp(867201821, 1);
                      cm.setInGameDirectionMode(false, true, false);
                      cm.updateInfoQuest(64088, "coll1=1;coll2=1;coll3=1;coll4=1;coll5=1;chk1=1;chk2=1");
                      cm.npc_LeaveField("oid=7621754");
                      cm.npc_LeaveField("oid=7621754");
                      cm.npc_LeaveField("oid=7621755");
                      cm.npc_LeaveField("oid=7621755");
                      cm.npc_LeaveField("oid=7621756");
                      cm.npc_LeaveField("oid=7621756");
                      cm.npc_LeaveField("oid=7621757");
                      cm.npc_LeaveField("oid=7621757");
                      cm.npc_LeaveField("oid=7621758");
                      cm.npc_LeaveField("oid=7621758");
                      cm.npc_LeaveField("oid=7621759");
                      cm.npc_LeaveField("oid=7621759");
                      cm.npc_LeaveField("oid=7621760");
                      cm.npc_LeaveField("oid=7621760");
                      cm.npc_LeaveField("oid=7621761");
                      cm.npc_LeaveField("oid=7621761");
                      cm.npc_LeaveField("oid=7621762");
                      cm.npc_LeaveField("oid=7621762");
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