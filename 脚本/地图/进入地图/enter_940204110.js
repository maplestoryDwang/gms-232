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
      cm.inGameDirectionEvent_ChangeEquipment([1103064]);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 368, 100);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(100);
      } else {
        if (status === V++) {
          cm.npc_ChangeController(3002119, "oid=37971741", 400, 135, 3, 350, 450, 1, false, false);
          cm.npc_SetSpecialAction("oid=37971741", 'summon', 0, 0);
          cm.npc_SetSpecialAction("oid=37971741", "retire", -1, 1);
          cm.sendNormalTalk_Bottom("#face0#呃嗬……", 37, 3002119, false, true);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
            cm.inGameDirectionEvent_MoveAction(2);
            cm.inGameDirectionEvent_PushScaleInfo(2000, 1000, 2000, 597, 100);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(2000);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_MoveAction(0);
                cm.inGameDirectionEvent_ForcedFlip(-1);
                cm.sendNormalTalk_Bottom("玛鲁，这里交给我。你快去见狐神！", 57, 0, false, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_ChangeEquipment([0]);
                  cm.npc_ChangeController(3002110, "oid=37972403", 828, 158, 2, 778, 878, 1, true, false);
                  cm.npc_SetSpecialAction("oid=37972403", "summon", 0, 0);
                  cm.sendNormalTalk_Bottom("#face0##b#h0#……#k谢谢你！", 37, 3002110, true, true);
                } else {
                  if (status === V++) {
                    cm.npc_SetForceMove("oid=37972403", 1, 500, 150);
                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.npc_LeaveField("oid=37972403");
                        cm.npc_LeaveField("oid=37972403");
                        cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                        cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(300);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                              cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                            } else if (status === V++) {
                              cm.dispose();
                              cm.warp(940204130, 0);
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