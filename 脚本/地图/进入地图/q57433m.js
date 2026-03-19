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
      cm.setStandAloneMode(true);
      cm.npc_ChangeController(9130068, "oid=20965442", -180, 77, 1, -230, -130, 1, false, false);
      cm.npc_SetSpecialAction("oid=20965442", 'summon', 0, 0);
      cm.npc_ChangeController(9130068, "oid=20965443", -90, 77, 3, -140, -40, 1, false, false);
      cm.npc_SetSpecialAction("oid=20965443", "summon", 0, 0);
      cm.npc_ChangeController(9130068, "oid=20965444", 0, 77, 5, -50, 50, 1, false, false);
      cm.npc_SetSpecialAction("oid=20965444", "summon", 0, 0);
      cm.npc_ChangeController(9130068, "oid=20965445", 90, 77, 7, 40, 140, 1, false, false);
      cm.npc_SetSpecialAction("oid=20965445", "summon", 0, 0);
      cm.npc_ChangeController(9130068, "oid=20965446", 180, 77, 6, 130, 230, 1, false, false);
      cm.npc_SetSpecialAction("oid=20965446", "summon", 0, 0);
      cm.npc_ChangeController(9130069, "oid=20965447", 270, 77, 10, 220, 320, 1, false, false);
      cm.npc_SetSpecialAction("oid=20965447", "summon", 0, 0);
      cm.inGameDirectionEvent_头顶图片(["Effect/DirectionJP3.img/effect/kannaTuto/balloonMsg/13"], [0, 300, -120, 0, 0, 0, 0, 0]);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_头顶图片(["Effect/DirectionJP3.img/effect/kannaTuto/balloonMsg/14"], [0, 0, -120, 0, 0, 0, 0, 0]);
        cm.inGameDirectionEvent_AskAnswerTime(2000);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_头顶图片(["Effect/DirectionJP3.img/effect/kannaTuto/balloonMsg/15"], [0, 0, -120, 0, 0, 0, 0, 0]);
          cm.inGameDirectionEvent_AskAnswerTime(2000);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_头顶图片(["Effect/DirectionJP3.img/effect/kannaTuto/balloonMsg/16"], [0, 0, -120, 0, 0, 0, 0, 0]);
            cm.inGameDirectionEvent_AskAnswerTime(2000);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_头顶图片(["Effect/DirectionJP3.img/effect/kannaTuto/balloonMsg/17"], [0, 0, -120, 0, 0, 0, 0, 0]);
              cm.inGameDirectionEvent_AskAnswerTime(2000);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_头顶图片(["Effect/DirectionJP3.img/effect/kannaTuto/balloonMsg/18"], [0, 550, -120, 0, 0, 0, 0, 0]);
                cm.inGameDirectionEvent_AskAnswerTime(2000);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_头顶图片(["Effect/DirectionJP3.img/effect/kannaTuto/balloonMsg/19"], [0, 300, -120, 0, 0, 0, 0, 0]);
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_头顶图片(["Effect/DirectionJP3.img/effect/kannaTuto/balloonMsg/20"], [0, 0, -120, 0, 0, 0, 0, 0]);
                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                  } else if (status === V++) {
                    cm.npc_LeaveField("oid=20965442");
                    cm.npc_LeaveField("oid=20965442");
                    cm.npc_LeaveField("oid=20965443");
                    cm.npc_LeaveField("oid=20965443");
                    cm.npc_LeaveField("oid=20965444");
                    cm.npc_LeaveField("oid=20965444");
                    cm.npc_LeaveField("oid=20965445");
                    cm.npc_LeaveField("oid=20965445");
                    cm.npc_LeaveField("oid=20965446");
                    cm.npc_LeaveField("oid=20965446");
                    cm.npc_LeaveField("oid=20965447");
                    cm.npc_LeaveField("oid=20965447");
                    cm.spawnMobLimit(9421565, 5, 180, 224, 5);
                    cm.spawnMobLimit(9421566, 1, 270, 224, 1);
                    cm.setInGameDirectionMode(false, true, false);
                    cm.forceStartQuest(57433, "001000");
                    cm.forceStartQuest(57433, "001001");
                    cm.forceStartQuest(57433, "002001");
                    cm.forceStartQuest(57433, "003001");
                    cm.forceStartQuest(57433, "004001");
                    cm.forceStartQuest(57433, "005001");
                    cm.updateInfoQuest(57433, "005001");
                    cm.setStandAloneMode(false);
                    cm.dispose();
                  } else {
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;