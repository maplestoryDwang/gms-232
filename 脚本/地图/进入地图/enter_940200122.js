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
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 740, -80);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(3003275, "oid=1797770", -191, -310, 18, -241, -141, 1, false, false);
        cm.npc_SetSpecialAction("oid=1797770", 'summon', 0, 0);
        cm.npc_ChangeController(3003276, "oid=1797771", -106, -310, 18, -156, -56, 1, false, false);
        cm.npc_SetSpecialAction("oid=1797771", "summon", 0, 0);
        cm.npc_ChangeController(3003277, "oid=1797772", -13, -310, 18, -63, 37, 1, false, false);
        cm.npc_SetSpecialAction("oid=1797772", 'summon', 0, 0);
        cm.npc_ChangeController(3003279, "oid=1797773", 766, -100, 155, 716, 816, 1, false, false);
        cm.npc_SetSpecialAction("oid=1797773", "summon", 0, 0);
        cm.npc_ChangeController(3003280, "oid=1797774", 863, -20, 232, 813, 913, 1, false, false);
        cm.npc_SetSpecialAction("oid=1797774", "summon", 0, 0);
        cm.npc_ChangeController(3003282, "oid=1797775", 702, -20, 232, 652, 752, 0, false, false);
        cm.npc_SetSpecialAction("oid=1797775", 'summon', 0, 0);
        cm.npc_ChangeController(3003281, "oid=1797776", 586, -20, 231, 536, 636, 0, false, false);
        cm.npc_SetSpecialAction("oid=1797776", "summon", 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
          cm.sendNormalTalk_Bottom("我困了…… 好害怕……", 37, 3003280, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("会没事的…我们一定会再见面的。", 37, 3003281, true, true);
          } else {
            if (status === V++) {
              cm.npc_ChangeController(3003295, "oid=1797779", 766, -100, 155, 716, 816, 1, false, 2000, false);
              cm.npc_SetSpecialAction("oid=1797779", "summon", 0, 0);
              cm.npc_ChangeController(3003296, "oid=1797780", 863, -20, 232, 813, 913, 1, false, 1000, false);
              cm.npc_SetSpecialAction("oid=1797780", "summon", 0, 0);
              cm.npc_ChangeController(3003298, "oid=1797781", 702, -20, 232, 652, 752, 0, false, 500, false);
              cm.npc_SetSpecialAction("oid=1797781", "summon", 0, 0);
              cm.npc_ChangeController(3003297, "oid=1797782", 586, -20, 231, 536, 636, 0, false, 2000, false);
              cm.npc_SetSpecialAction("oid=1797782", 'summon', 0, 0);
              cm.inGameDirectionEvent_AskAnswerTime(2500);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushScaleInfo(2000, 1000, 2000, -80, -180);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("我们约好了，一定要再见。", 37, 3003275, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("经过漫长的岁月，再强烈的诅咒最终也会消失…", 37, 3003276, true, true);
                    } else {
                      if (status === V++) {
                        cm.npc_ChangeController(3003292, "oid=1797783", -191, -310, 18, -241, -141, 1, false, 1000, false);
                        cm.npc_SetSpecialAction("oid=1797783", "summon", 0, 0);
                        cm.npc_ChangeController(3003293, "oid=1797784", -106, -310, 18, -156, -56, 1, false, 2000, false);
                        cm.npc_SetSpecialAction("oid=1797784", "summon", 0, 0);
                        cm.npc_ChangeController(3003294, "oid=1797785", -13, -310, 18, -63, 37, 1, false, 1500, false);
                        cm.npc_SetSpecialAction("oid=1797785", "summon", 0, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                      } else {
                        if (status === V++) {
                          cm.sendNewEffects(17, [2000, 1000, 1000, -1500, -180]);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else if (status === V++) {
                              cm.npc_LeaveField("oid=1797770");
                              cm.npc_LeaveField("oid=1797771");
                              cm.npc_LeaveField("oid=1797772");
                              cm.npc_LeaveField("oid=1797773");
                              cm.npc_LeaveField("oid=1797774");
                              cm.npc_LeaveField("oid=1797775");
                              cm.npc_LeaveField("oid=1797776");
                              cm.npc_LeaveField("oid=1797779");
                              cm.npc_LeaveField("oid=1797780");
                              cm.npc_LeaveField("oid=1797781");
                              cm.npc_LeaveField("oid=1797782");
                              cm.npc_LeaveField("oid=1797783");
                              cm.npc_LeaveField("oid=1797784");
                              cm.npc_LeaveField("oid=1797785");
                              cm.dispose();
                              cm.warp(940200123, 0);
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