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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(9401277, "oid=2152898", 930, -33, 6, 880, 980, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2152898", "summon", 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.Hidden_background("obj01", 1, 1, 0, 0);
      cm.Hidden_background("obj02", 1, 1, 0, 0);
      cm.Hidden_background("obj03", 1, 1, 0, 0);
      cm.sendNewEffects(17, [0, 1000, 1500, 940, 0]);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.onSetBackEffect("obj01", 1, 256, 76800, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.onSetBackEffect('obj02', 1, 256, 76800, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.onSetBackEffect("obj03", 1, 256, 76800, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.npc_setForceFlip("oid=2152898", 1);
                  cm.sendNormalTalk_Bottom("#face6#其他建筑……也必须尽快重建。看着那些倒塌的建筑……心里总是……", 37, 9401277, false, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0##b慢慢地……坚持不懈地去做，是吧？", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face6#是啊……这里的牡丹花什么时候……可以再度绽放呢？", 37, 9401277, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0##b当然。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0##b（我一定要……成为那样的人。）", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face1#啊哈，这样明天的考试就没问题了，" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + '。', 37, 9401277, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face1#真希望明天早点到来。", 37, 9401277, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else if (status === V++) {
                                cm.npc_LeaveField("oid=2152898");
                                cm.dispose();
                                cm.warp(875003026, 0, false);
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
}