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
      cm.updateInfoQuest(61333, "act1=610061570;act2=610062220");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(9201559, "oid=2676787", -320, 380, 7, -370, -270, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2676787", "summon", 0, 0);
      cm.npc_ChangeController(9201560, "oid=2676788", -620, 380, 5, -670, -570, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2676788", "summon", 0, 0);
      cm.npc_ChangeController(9201561, "oid=2676789", -405, 380, 9, -455, -355, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=2676789", 'summon', 0, 0);
      cm.npc_ChangeController(9201562, "oid=2676790", -680, 380, 2, -730, -630, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=2676790", "summon", 0, 0);
      cm.npc_ChangeController(9201563, "oid=2676791", -73, 380, 13, -123, -23, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=2676791", "summon", 0, 0);
      cm.npc_ChangeController(9201564, "oid=2676792", -140, 380, 10, -190, -90, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=2676792", "summon", 0, 0);
      cm.npc_ChangeController(9201565, "oid=2676793", -5, 380, 13, -55, 45, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2676793", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("话说，我今天早上感觉不太对劲……有点恶心……", 37, 9201562, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("你也是？\r\n我也觉得恶心……不知道是怎么回事……", 37, 9201560, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("呃……嘎……", 37, 9201561, true, true);
          } else {
            if (status === V++) {
              cm.npc_SetSpecialAction("oid=2676789", "hurt", -1, 0);
              cm.inGameDirectionEvent_AskAnswerTime(4200);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -350, 380);
              } else {
                if (status === V++) {
                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                    cm.npc_setForceFlip("oid=2676788", 1);
                    cm.sendNormalTalk_Bottom("你——怎么了？\r\n嘿，醒醒！出什么事了？", 37, 9201559, false, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                    } else {
                      if (status === V++) {
                        cm.setNpcSpecialActionReset("oid=2676789");
                        cm.npc_LeaveField("oid=2676789");
                        cm.npc_LeaveField("oid=2676789");
                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                      } else {
                        if (status === V++) {
                          cm.npc_ChangeController(9201567, "oid=2677044", -405, 380, 9, -455, -355, 1, true, 0, false);
                          cm.npc_SetSpecialAction("oid=2677044", 'summon', 0, 0);
                          cm.npc_setForceFlip("oid=2677044", 1);
                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                        } else {
                          if (status === V++) {
                            cm.npc_setForceFlip("oid=2676787", -1);
                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                          } else {
                            if (status === V++) {
                              cm.npc_setForceFlip("oid=2676791", -1);
                              cm.npc_setForceFlip("oid=2676792", -1);
                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                              cm.effect_NormalSpeechBalloon("！！！", 1, 0, 0, 2400, 1, 0, 0, 0, 4, 9201559, null, cm.getPlayer().getId());
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom('啊——啊！', 37, 9201560, false, true);
                              } else {
                                if (status === V++) {
                                  cm.npc_SetForceMove("oid=2677044", 1, 10, 100);
                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("嘿！醒醒！", 37, 9201559, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("呃……有点不对劲……", 37, 9201560, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_SetSpecialAction("oid=2676788", 'hurt', -1, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(4200);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_LeaveField("oid=2676788");
                                              cm.npc_LeaveField("oid=2676788");
                                              cm.npc_ChangeController(9201566, "oid=2677291", -620, 200, 5, -670, -570, 1, true, 0, false);
                                              cm.npc_SetSpecialAction("oid=2677291", "summon", 0, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                cm.effect_NormalSpeechBalloon("！！！", 1, 0, 0, 2400, 1, 0, 0, 0, 4, 9201562, null, cm.getPlayer().getId());
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("怪物！人们变成怪物了！", 37, 9201562, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                    } else if (status === V++) {
                                                      cm.inGameDirectionEvent_SetHideEffect(0);
                                                      cm.warp(610062225, 0, false);
                                                      cm.eventSKill(0);
                                                      cm.setInGameDirectionMode(false, true, false);
                                                      cm.npc_LeaveField("oid=2676787");
                                                      cm.npc_LeaveField("oid=2676787");
                                                      cm.npc_LeaveField("oid=2676790");
                                                      cm.npc_LeaveField("oid=2676790");
                                                      cm.npc_LeaveField("oid=2676791");
                                                      cm.npc_LeaveField("oid=2676791");
                                                      cm.npc_LeaveField("oid=2676792");
                                                      cm.npc_LeaveField("oid=2676792");
                                                      cm.npc_LeaveField("oid=2676793");
                                                      cm.npc_LeaveField("oid=2676793");
                                                      cm.npc_LeaveField("oid=2677044");
                                                      cm.npc_LeaveField("oid=2677044");
                                                      cm.npc_LeaveField("oid=2677291");
                                                      cm.npc_LeaveField("oid=2677291");
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
        }
      }
    }
  }
}