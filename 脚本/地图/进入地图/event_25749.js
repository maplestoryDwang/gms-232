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
      cm.npc_ChangeController(3000134, "oid=31048812", 1500, 0, 7, 1450, 1550, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=31048812", "summon", 0, 0);
      cm.npc_ChangeController(3000135, "oid=31048813", 1600, 0, 11, 1550, 1650, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=31048813", "summon", 0, 0);
      cm.inGameDirectionEvent_头顶图片(["Effect/Direction9.img/effect/story/BalloonMsg0/6"], [1200, 0, -120, 0, 0, 0, 0, 0]);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_头顶图片(["Effect/Direction9.img/effect/story/BalloonMsg1/0"], [1200, 0, -120, 0, 0, 0, 0, 0]);
        cm.inGameDirectionEvent_PushMoveInfo(0, 400, 1350, -11);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(900);
        } else {
          if (status === V++) {
            cm.npc_ChangeController(3000136, "oid=31048869", 1700, 0, 14, 1650, 1750, 1, false, 0, false);
            cm.npc_SetSpecialAction("oid=31048869", "summon", 0, 0);
            cm.npc_ChangeController(3000137, "oid=31048870", 1800, 0, 15, 1750, 1850, 1, false, 0, false);
            cm.npc_SetSpecialAction("oid=31048870", 'summon', 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(900);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushMoveInfo(0, 999999999, 912, -11);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_头顶图片(["Effect/Direction9.img/effect/story/BalloonMsg0/7"], [1200, 0, -120, 0, 0, 0, 0, 0]);
                cm.inGameDirectionEvent_AskAnswerTime(1200);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("该不会马上就开始进攻吧？比预计的快多了！", 17, 0, false, true);
                } else if (status === V++) {
                  cm.npc_LeaveField("oid=31048812");
                  cm.npc_LeaveField("oid=31048812");
                  cm.npc_LeaveField("oid=31048813");
                  cm.npc_LeaveField("oid=31048813");
                  cm.npc_LeaveField("oid=31048869");
                  cm.npc_LeaveField("oid=31048869");
                  cm.npc_LeaveField("oid=31048870");
                  cm.npc_LeaveField("oid=31048870");
                  cm.eventSKill(0);
                  cm.setInGameDirectionMode(false, true, false);
                  cm.dispose();
                  cm.warp(400050000, 0, false);
                }
              }
            }
          }
        }
      }
    }
  }
}