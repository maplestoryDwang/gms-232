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
      cm.npc_ChangeController(2570101, "oid=38032411", 127, 154, 78, 77, 177, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=38032411", "summon", 0, 0);
      cm.npc_ChangeController(2570102, "oid=38032412", -112, 98, 44, -162, -62, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=38032412", "summon", 0, 0);
      cm.npc_ChangeController(2570103, "oid=38032413", 90, 46, 73, 40, 140, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=38032413", "summon", 0, 0);
      cm.npc_ChangeController(2570104, "oid=38032414", 230, 145, 78, 180, 280, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=38032414", "summon", 0, 0);
      cm.npc_ChangeController(2570105, "oid=38032415", -145, 154, 83, -195, -95, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=38032415", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=38032411", "attack", -1, 1);
      cm.npc_SetSpecialAction("oid=38032412", 'attack', -1, 1);
      cm.npc_SetSpecialAction("oid=38032413", "attack", -1, 1);
      cm.npc_SetSpecialAction("oid=38032414", "attack", -1, 1);
      cm.sendNormalTalk_Bottom("#face6#……团长！！", 36, 2570102, false, true, 1);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -30, 154);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(100);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 250, 0);
            cm.inGameDirectionEvent_AskAnswerTime(300);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom('……！！', 56, 0, false, true, 1);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1500);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face1#有敌人来袭。", 36, 2570101, false, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face6#但愿这次不是幻听。", 36, 2570105, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face6#……。", 36, 2570101, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face6#是真的。从四面八方过来的。", 36, 2570102, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 0, 154);
                          } else {
                            if (status === V++) {
                              cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -30, 27);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(300);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                  cm.inGameDirectionEvent_AskAnswerTime(3500);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1500, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                  } else if (status === V++) {
                                    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                    cm.forceCompleteQuest(37811);
                                    cm.updateInfoQuest(37811, "exp=1");
                                    cm.gainExp(5872020);
                                    cm.npc_LeaveField("oid=38032411");
                                    cm.npc_LeaveField("oid=38032412");
                                    cm.npc_LeaveField("oid=38032413");
                                    cm.npc_LeaveField("oid=38032414");
                                    cm.npc_LeaveField("oid=38032415");
                                    cm.dispose();
                                    cm.warp(308000017, 0, false);
                                    cm.setInGameDirectionMode(false, true, false);
                                    cm.setStandAloneMode(false);
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
  }
}