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
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -825, -25);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.npc_ChangeController(2074151, "oid=1942746", -740, -74, 98, -790, -690, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=1942746", "summon", 0, 0);
        cm.sendNormalTalk_Bottom("#face4#……额……头……", 37, 2074151, false, true);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
          cm.inGameDirectionEvent_AskAnswerTime(2500);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face3#……尾狐！", 37, 2074151, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face3#尾狐啊！", 37, 2074151, true, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face3#尾狐！九尾狐！", 37, 2074151, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face4#……", 37, 2074151, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face5#…………", 37, 2074151, true, true);
                      } else {
                        if (status === V++) {
                          cm.npc_SetSpecialAction("oid=1942746", "cry", -1, 1);
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face6#尾狐啊！！！尾狐啊！", 37, 2074151, false, true);
                            } else if (status === V++) {
                              cm.dispose();
                              cm.warp(224000067, 1);
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