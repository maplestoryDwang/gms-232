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
      cm.getMap().killAllMonsters(true);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.npc_ChangeController(9130068, "oid=32515551", -270, 77, 3, -320, -220, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=32515551", "summon", 0, 0);
      cm.npc_ChangeController(9130068, "oid=32515552", -180, 77, 9, -230, -130, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=32515552", "summon", 0, 0);
      cm.npc_ChangeController(9130068, "oid=32515553", -90, 77, 9, -140, -40, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=32515553", 'summon', 0, 0);
      cm.npc_ChangeController(9130068, "oid=32515554", 0, 77, 12, -50, 50, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=32515554", "summon", 0, 0);
      cm.npc_ChangeController(9130068, "oid=32515555", 90, 77, 12, 40, 140, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=32515555", "summon", 0, 0);
      cm.npc_ChangeController(9130069, "oid=32515556", 180, 77, 10, 130, 230, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=32515556", 'summon', 0, 0);
      cm.inGameDirectionEvent_头顶图片(["Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/18"], [0, 300, -120, 0, 0, 0, 0, 0]);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_头顶图片(["Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/19"], [0, 0, -120, 0, 0, 0, 0, 0]);
        cm.inGameDirectionEvent_AskAnswerTime(2000);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_头顶图片(["Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/20"], [0, 0, -120, 0, 0, 0, 0, 0]);
          cm.inGameDirectionEvent_AskAnswerTime(2000);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_头顶图片(["Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/21"], [0, 0, -120, 0, 0, 0, 0, 0]);
            cm.inGameDirectionEvent_AskAnswerTime(2000);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_头顶图片(["Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/22"], [0, 0, -120, 0, 0, 0, 0, 0]);
              cm.inGameDirectionEvent_AskAnswerTime(2000);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_头顶图片(["Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/23"], [0, 550, -120, 0, 0, 0, 0, 0]);
                cm.inGameDirectionEvent_AskAnswerTime(2000);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_头顶图片(["Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/24"], [0, 300, -120, 0, 0, 0, 0, 0]);
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_头顶图片(["Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/25"], [0, 0, -120, 0, 0, 0, 0, 0]);
                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                  } else if (status === V++) {
                    cm.npc_LeaveField("oid=32515551");
                    cm.npc_LeaveField("oid=32515551");
                    cm.npc_LeaveField("oid=32515552");
                    cm.npc_LeaveField("oid=32515552");
                    cm.npc_LeaveField("oid=32515553");
                    cm.npc_LeaveField("oid=32515553");
                    cm.npc_LeaveField("oid=32515554");
                    cm.npc_LeaveField("oid=32515554");
                    cm.npc_LeaveField("oid=32515555");
                    cm.npc_LeaveField("oid=32515555");
                    cm.npc_LeaveField("oid=32515556");
                    cm.npc_LeaveField("oid=32515556");
                    cm.spawnMobLimit(9421565, 1, -270, 83, 100);
                    cm.spawnMobLimit(9421565, 1, -180, 83, 100);
                    cm.spawnMobLimit(9421565, 1, -90, 83, 100);
                    cm.spawnMobLimit(9421565, 1, 0, 83, 100);
                    cm.spawnMobLimit(9421565, 1, 90, 83, 100);
                    cm.spawnMobLimit(9421566, 1, 180, 83, 100);
                    cm.eventSKill(0);
                    cm.setInGameDirectionMode(false, true, false);
                    cm.setStandAloneMode(false);
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