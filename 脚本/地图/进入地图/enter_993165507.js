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
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(3005102, 'oid=619829', -565, 264, 1, -615, -515, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=619829", "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -419, 330);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.npc_SetForceMove("oid=619829", 1, 300, 100);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 2000, 2000, -204, 330);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#有那么一小会儿我放着风筝，把其他烦恼都忘了呢。", 37, 3005102, false, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#眼下还有正事，我有笔钱非还不可。", 37, 3005102, true, true, 1);
              } else {
                if (status === V++) {
                  cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
                  cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 1300, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(1600);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#对我来说它真的非常珍贵。", 37, 3005100, false, true, 1);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_InsertCanvas11(0, 0, 0, 0, 0, 0);
                      cm.fieldEffect_InsertCanvas(1, 1, 255, 255, 255, 200, 0);
                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(1600);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#我还是别胡思乱想了。", 37, 3005102, false, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#要先去后巷搞清楚铃铛的价值。", 37, 3005102, true, true, 1);
                        } else if (status === V++) {
                          cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                          cm.setInGameDirectionMode(false, true, false);
                          cm.setStandAloneMode(false);
                          cm.npc_LeaveField("oid=619829");
                          cm.dispose();
                          cm.warp(993165508, 0, true);
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