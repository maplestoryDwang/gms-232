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
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, -1230, -280);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1500);
      } else {
        if (status === V++) {
          cm.forceStartQuest(34232, '');
          cm.forceCompleteQuest(34232);
          cm.inGameDirectionEvent_ForcedFlip(1);
          cm.npc_ChangeController(3003480, "oid=2009864", -1414, -190, 28, -1464, -1364, 0, true, false);
          cm.npc_SetSpecialAction("oid=2009864", "summon", 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(500);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("斜塔……还能见到那天的痕迹……", 57, 0, false, true);
            } else {
              if (status === V++) {
                cm.npc_SetForceMove("oid=2009864", 1, 210, 140);
                cm.inGameDirectionEvent_AskAnswerTime(4000);
              } else {
                if (status === V++) {
                  cm.npc_setForceFlip("oid=2009864", -1);
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#这里可以感觉到她的强大力量……但就只有这些了。", 37, 3003480, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom('就只有这些了？', 57, 0, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face10#这里好像不是正确的路。只能感觉到她强烈的愤怒。", 37, 3003480, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face10#没有看到其他线索。", 37, 3003480, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#我们先回到特鲁埃博广场去，再好好想想。被这里的力量压制着，感觉很不舒服。", 37, 3003480, true, true);
                          } else {
                            if (status === V++) {
                              cm.npc_SetForceMove("oid=2009864", -1, 230, 140);
                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === V++) {
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
                                        cm.npc_LeaveField("oid=2009864");
                                        cm.dispose();
                                        cm.warp(450006130, 3, true);
                                        cm.setStandAloneMode(false);
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