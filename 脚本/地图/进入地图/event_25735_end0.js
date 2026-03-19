var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
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
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.inGameDirectionEvent_AskAnswerTime(60);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_MoveAction(2);
        cm.inGameDirectionEvent_AskAnswerTime(60);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_MoveAction(0);
          cm.npc_ChangeController(3000110, "oid=30163557", 400, 0, 11, 350, 450, 0, true, 0, false);
          cm.npc_SetSpecialAction("oid=30163557", "summon", 0, 0);
          cm.npc_ChangeController(3000111, "oid=30163558", 450, 0, 11, 400, 500, 0, true, 0, false);
          cm.npc_SetSpecialAction("oid=30163558", 'summon', 0, 0);
          cm.npc_ChangeController(3000114, "oid=30163559", 500, 0, 10, 450, 550, 0, true, 0, false);
          cm.npc_SetSpecialAction("oid=30163559", "summon", 0, 0);
          cm.npc_ChangeController(3000119, "oid=30163560", 550, 0, 13, 500, 600, 0, true, 0, false);
          cm.npc_SetSpecialAction("oid=30163560", "summon", 0, 0);
          cm.inGameDirectionEvent_PushMoveInfo(0, 400, 420, -9);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("哈哈……想逃跑！！", 17, 0, false, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_头顶图片(["Effect/Direction9.img/effect/story/BalloonMsg0/3", "oid=30163558"], [1200, 0, -120, 1, 0, 1, 0, 0]);
              cm.inGameDirectionEvent_AskAnswerTime(1200);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_头顶图片(["Effect/Direction9.img/effect/story/BalloonMsg1/10", "oid=30163559"], [1200, 0, -120, 1, 0, 1, 0, 0]);
                cm.inGameDirectionEvent_AskAnswerTime(900);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_PushMoveInfo(0, 999999999, 3, -9);
                } else {
                  if (status === V++) {
                    cm.npc_SetForceMove("oid=30163557", 1, 300, 100);
                    cm.npc_SetForceMove("oid=30163558", 1, 300, 100);
                    cm.npc_SetForceMove("oid=30163559", 1, 300, 100);
                    cm.npc_SetForceMove("oid=30163560", 1, 300, 100);
                    cm.inGameDirectionEvent_MoveAction(2);
                    cm.inGameDirectionEvent_AskAnswerTime(900);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_头顶图片(["Effect/Direction9.img/effect/story/BalloonMsg1/12"], [1200, 0, -120, 0, 0, 0, 0, 0]);
                      cm.inGameDirectionEvent_AskAnswerTime(900);
                    } else {
                      if (status === V++) {
                        cm.npc_LeaveField("oid=30163557");
                        cm.npc_LeaveField("oid=30163557");
                        cm.npc_LeaveField("oid=30163558");
                        cm.npc_LeaveField("oid=30163558");
                        cm.npc_LeaveField("oid=30163559");
                        cm.npc_LeaveField("oid=30163559");
                        cm.npc_LeaveField("oid=30163560");
                        cm.npc_LeaveField("oid=30163560");
                        cm.inGameDirectionEvent_AskAnswerTime(600);
                      } else if (status === V++) {
                        cm.inGameDirectionEvent_MoveAction(0);
                        cm.eventSKill(0);
                        cm.setInGameDirectionMode(false, true, false);
                        cm.dispose();
                        cm.warp(940000030, 0, false);
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