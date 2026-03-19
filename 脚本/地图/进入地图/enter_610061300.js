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
      cm.updateInfoQuest(61333, "act1=610061300");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(9201539, "oid=2837118", 1143, 94, 52, 1093, 1193, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2837118", 'summon', 0, 0);
      cm.inGameDirectionEvent_PushMoveInfo(0, 0, 100, -120);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_PushMoveInfo(0, 100, 1150, 30);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(10613);
        } else {
          if (status === V++) {
            cm.npc_setForceFlip("oid=2837118", 1);
            cm.inGameDirectionEvent_AskAnswerTime(1200);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face3#我也很遗憾，可怜的家伙。", 37, 9201539, false, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1200);
              } else {
                if (status === V++) {
                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 2000, 0, 1200, 150);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(1400);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face3#我愿意帮助你。", 37, 9201539, false, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face3#帮助你改变过去。", 37, 9201539, false, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(4200);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 4);
                                            cm.updateInfoQuest(61368, "1=1;2=1;3=1;4=1;5=1");
                                            cm.gainExp(Math.pow(cm.getLevel(), 3) / 4);
                                            cm.inGameDirectionEvent_AskAnswerTime(4200);
                                            cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                          } else if (status === V++) {
                                            cm.eventSKill(0);
                                            cm.warp(610061310, 0, true);
                                            cm.setInGameDirectionMode(false, true, false);
                                            cm.npc_LeaveField("oid=2837118");
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