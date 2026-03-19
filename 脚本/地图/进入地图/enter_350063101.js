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
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(1540535, "oid=286837208", -450, -40, 6, -500, -400, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=286837208", 'summon', 0, 0);
      cm.npc_ChangeController(1540536, "oid=286837209", -511, -40, 7, -561, -461, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=286837209", "summon", 0, 0);
      cm.npc_ChangeController(1540537, "oid=286837210", -337, -40, 4, -387, -287, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=286837210", "summon", 0, 0);
      cm.npc_ChangeController(1540538, "oid=286837211", -272, -40, 4, -322, -222, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=286837211", "summon", 0, 0);
      cm.npc_ChangeController(1540539, "oid=286837212", 65, -40, 1, 15, 115, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=286837212", 'summon', 0, 0);
      cm.npc_ChangeController(1540532, "oid=286837213", 155, -40, 3, 105, 205, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=286837213", "summon", 0, 0);
      cm.npc_ChangeController(1540533, "oid=286837214", -33, -40, 2, -83, 17, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=286837214", "summon", 0, 0);
      cm.npc_ChangeController(1540742, "oid=286837215", -182, -40, 5, -232, -132, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=286837215", "summon", 0, 0);
      cm.fieldEffect_BackgroundCanvas(2, 125, 125, 125, 0, 0, 0);
      cm.fieldEffect_BackgroundCanvas(3, 125, 125, 125, 0, 0, 0);
      cm.fieldEffect_BackgroundCanvas(4, 125, 2125, 125, 0, 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.fieldEffect_BackgroundCanvas(2, 255, 255, 255, 2000, 0, 0);
          cm.fieldEffect_BackgroundCanvas(3, 255, 255, 255, 2000, 0, 0);
          cm.fieldEffect_BackgroundCanvas(4, 255, 255, 255, 2000, 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(3000);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushMoveInfo(0, 50, -212, -40);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom('天亮了！', 37, 1540536, false, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("成功了……这真是太好了。", 37, 2152001, false, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_PushMoveInfo(0, 100, -212, -500);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 2000, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                        } else if (status === V++) {
                          cm.dispose();
                          cm.warp(350063200, 0, true);
                          cm.inGameDirectionEvent_SetHideEffect(0);
                          cm.setInGameDirectionMode(false, true, false);
                          cm.npc_LeaveField("oid=286837208");
                          cm.npc_LeaveField("oid=286837208");
                          cm.npc_LeaveField("oid=286837209");
                          cm.npc_LeaveField("oid=286837209");
                          cm.npc_LeaveField("oid=286837210");
                          cm.npc_LeaveField("oid=286837210");
                          cm.npc_LeaveField("oid=286837211");
                          cm.npc_LeaveField("oid=286837211");
                          cm.npc_LeaveField("oid=286837212");
                          cm.npc_LeaveField("oid=286837212");
                          cm.npc_LeaveField("oid=286837213");
                          cm.npc_LeaveField("oid=286837213");
                          cm.npc_LeaveField("oid=286837214");
                          cm.npc_LeaveField("oid=286837214");
                          cm.npc_LeaveField("oid=286837215");
                          cm.npc_LeaveField("oid=286837215");
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