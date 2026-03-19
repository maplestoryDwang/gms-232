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
      cm.npc_ChangeController(3000125, "oid=203317278", 1700, 0, 3, 1650, 1750, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=203317278", "summon", 0, 0);
      cm.npc_ChangeController(3000125, "oid=203317279", 2000, 0, 8, 1950, 2050, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=203317279", "summon", 0, 0);
      cm.npc_ChangeController(3000125, "oid=203317280", 2200, 0, 9, 2150, 2250, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=203317280", "summon", 0, 0);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.inGameDirectionEvent_MoveAction(1);
      cm.inGameDirectionEvent_AskAnswerTime(60);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_MoveAction(0);
        cm.inGameDirectionEvent_头顶图片(["Effect/Direction10.img/effect/story/BalloonMsg1/0"], [1200, 0, -120, 0, 0, 0, 0, 0]);
        cm.inGameDirectionEvent_AskAnswerTime(900);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushMoveInfo(0, 200, 2000, 0);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(600);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_头顶图片(["Effect/Direction10.img/effect/story/BalloonMsg2/0"], [1200, 0, -120, 0, 0, 0, 0, 0]);
              cm.inGameDirectionEvent_AskAnswerTime(900);
            } else {
              if (status === V++) {
                cm.npc_SetSpecialAction("oid=203317278", "skill1", 0, 1);
                cm.npc_SetSpecialAction("oid=203317279", 'skill1', 0, 1);
                cm.inGameDirectionEvent_AskAnswerTime(1500);
              } else {
                if (status === V++) {
                  cm.npc_ChangeController(3000125, "oid=203321118", 1850, 0, 6, 1800, 1900, 0, false, 0, false);
                  cm.npc_SetSpecialAction("oid=203321118", 'summon', 0, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(900);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction10.img/effect/story/BalloonMsg2/1"], [1200, 0, -120, 0, 0, 0, 0, 0]);
                    cm.inGameDirectionEvent_AskAnswerTime(900);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("(大事不妙……得赶紧回去报告。)", 17, 0, false, true);
                    } else if (status === V++) {
                      cm.npc_LeaveField("oid=203321118");
                      cm.npc_LeaveField("oid=203321118");
                      cm.forceStartQuest(25910, '1');
                      cm.eventSKill(0);
                      cm.setInGameDirectionMode(false, true, false);
                      cm.npc_LeaveField("oid=203317278");
                      cm.npc_LeaveField("oid=203317278");
                      cm.npc_LeaveField("oid=203317279");
                      cm.npc_LeaveField("oid=203317279");
                      cm.npc_LeaveField("oid=203317280");
                      cm.npc_LeaveField("oid=203317280");
                      cm.dispose();
                      cm.warp(400000000, 0, false);
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