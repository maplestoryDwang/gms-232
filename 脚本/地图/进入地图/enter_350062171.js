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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(1540535, "oid=286501563", -450, -40, 6, -500, -400, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=286501563", "summon", 0, 0);
      cm.npc_ChangeController(1540536, "oid=286501564", -511, -40, 7, -561, -461, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=286501564", 'summon', 0, 0);
      cm.npc_ChangeController(1540537, "oid=286501565", -337, -40, 4, -387, -287, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=286501565", "summon", 0, 0);
      cm.npc_ChangeController(1540538, "oid=286501566", -272, -40, 4, -322, -222, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=286501566", "summon", 0, 0);
      cm.npc_ChangeController(1540539, "oid=286501567", 65, -40, 1, 15, 115, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=286501567", "summon", 0, 0);
      cm.npc_ChangeController(1540532, "oid=286501568", 155, -40, 3, 105, 205, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=286501568", "summon", 0, 0);
      cm.npc_ChangeController(1540533, "oid=286501569", -33, -40, 2, -83, 17, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=286501569", "summon", 0, 0);
      cm.npc_ChangeController(1540742, "oid=286501570", -182, -40, 5, -232, -132, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=286501570", 'summon', 0, 0);
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
            cm.fieldEffect_BackgroundCanvas(2, 125, 125, 125, 2000, 0, 0);
            cm.fieldEffect_BackgroundCanvas(3, 125, 125, 125, 2000, 0, 0);
            cm.fieldEffect_BackgroundCanvas(4, 125, 125, 125, 2000, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=286501570"], [0, 0, 0, 1, 0, 1, 0, 0]);
              cm.inGameDirectionEvent_AskAnswerTime(2000);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=286501563"], [0, 0, 0, 1, 0, 1, 0, 0]);
                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=286501564"], [0, 0, 0, 1, 0, 1, 0, 0]);
                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=286501565"], [0, 0, 0, 1, 0, 1, 0, 0]);
                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=286501566"], [0, 0, 0, 1, 0, 1, 0, 0]);
                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=286501567"], [0, 0, 0, 1, 0, 1, 0, 0]);
                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=286501568"], [0, 0, 0, 1, 0, 1, 0, 0]);
                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=286501569"], [0, 0, 0, 1, 0, 1, 0, 0]);
                cm.inGameDirectionEvent_AskAnswerTime(2000);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_PushMoveInfo(0, 50, -219, -180);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_BackgroundCanvas(2, 60, 60, 60, 3000, 0, 0);
                    cm.fieldEffect_BackgroundCanvas(3, 60, 60, 60, 3000, 0, 0);
                    cm.fieldEffect_BackgroundCanvas(4, 60, 60, 60, 3000, 0, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(4000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("老师，天空被染成了黑色。", 45, 1540536, false, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("格里梅尔……\r\n这就是你所说的……", 37, 2152001, false, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else if (status === V++) {
                              cm.dispose();
                              cm.warp(350062172, 0, true);
                              cm.npc_LeaveField("oid=286501563");
                              cm.npc_LeaveField("oid=286501563");
                              cm.npc_LeaveField("oid=286501564");
                              cm.npc_LeaveField("oid=286501564");
                              cm.npc_LeaveField("oid=286501565");
                              cm.npc_LeaveField("oid=286501565");
                              cm.npc_LeaveField("oid=286501566");
                              cm.npc_LeaveField("oid=286501566");
                              cm.npc_LeaveField("oid=286501567");
                              cm.npc_LeaveField("oid=286501567");
                              cm.npc_LeaveField("oid=286501568");
                              cm.npc_LeaveField("oid=286501568");
                              cm.npc_LeaveField("oid=286501569");
                              cm.npc_LeaveField("oid=286501569");
                              cm.npc_LeaveField("oid=286501570");
                              cm.npc_LeaveField("oid=286501570");
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