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
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(9400031, "oid=19785990", 460, 93, 7, 410, 510, 1, true, false);
      cm.npc_SetSpecialAction("oid=19785990", "summon", 0, 0);
      cm.npc_ChangeController(9400032, "oid=19785991", 280, 93, 7, 230, 330, 1, true, false);
      cm.npc_SetSpecialAction("oid=19785991", "summon", 0, 0);
      cm.npc_ChangeController(9400033, "oid=19785992", 390, 93, 7, 340, 440, 1, true, false);
      cm.npc_SetSpecialAction("oid=19785992", "summon", 0, 0);
      cm.npc_ChangeController(9400034, "oid=19785993", 570, 93, 7, 520, 620, 1, true, false);
      cm.npc_SetSpecialAction("oid=19785993", 'summon', 0, 0);
      cm.npc_ChangeController(9400035, "oid=19785994", 640, 93, 7, 590, 690, 1, true, false);
      cm.npc_SetSpecialAction("oid=19785994", 'summon', 0, 0);
      cm.npc_ChangeController(9400037, "oid=19785995", -475, -135, 4, -525, -425, 0, true, false);
      cm.npc_SetSpecialAction("oid=19785995", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=19785995", 'tube1', -1, 0);
      cm.inGameDirectionEvent_PushMoveInfo(0, 200, -480, -20);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(5679);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushScaleInfo(1000, 2000, 0, -480, -130);
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
                    cm.inGameDirectionEvent_AskAnswerTime(4200);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_PushMoveInfo(0, 200, -400, 80);
                        } else {
                          if (status === V++) {
                            cm.npc_SetForceMove("oid=19785991", -1, 450, 250);
                            cm.npc_SetForceMove("oid=19785992", -1, 400, 200);
                            cm.inGameDirectionEvent_AskAnswerTime(3200);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("奈奈！！奈奈！！！！", 37, 9400033, false, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face1#奈奈！是我啊，剑斗！我是剑斗！", 37, 9400032, true, true);
                              } else {
                                if (status === V++) {
                                  cm.npc_SetForceMove("oid=19785994", -1, 350, 250);
                                  cm.npc_SetForceMove("oid=19785993", -1, 400, 200);
                                  cm.npc_SetForceMove("oid=19785990", -1, 400, 250);
                                  cm.inGameDirectionEvent_AskAnswerTime(4200);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("剑斗，看来奈奈也变得和嘟嘟一样了。", 37, 9400031, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("必须破坏掉那个宝石，才能让它恢复理智。", 37, 9400035, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("好吧，赶快破坏掉那个项链吧。", 37, 9400034, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                        } else {
                                          if (status === V++) {
                                            cm.setNpcSpecialActionReset("oid=19785995");
                                            cm.npc_SetSpecialAction("oid=19785995", 'break', 0, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(2400);
                                          } else {
                                            if (status === V++) {
                                              cm.setNpcSpecialActionReset("oid=19785995");
                                              cm.npc_SetSpecialAction("oid=19785995", "regen", 0, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(2200);
                                            } else {
                                              if (status === V++) {
                                                cm.setNpcSpecialActionReset("oid=19785995");
                                                cm.npc_SetSpecialAction("oid=19785995", "trans", -1, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                              } else {
                                                if (status === V++) {
                                                  cm.setNpcSpecialActionReset("oid=19785995");
                                                  cm.npc_SetSpecialAction("oid=19785995", "attack", 0, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                } else {
                                                  if (status === V++) {
                                                    cm.setNpcSpecialActionReset("oid=19785995");
                                                    cm.npc_SetSpecialAction("oid=19785995", "trans", -1, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("奈奈开始暴走了，快点！", 37, 9400031, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(2400);
                                                      } else if (status === V++) {
                                                        cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 2);
                                                        cm.gainExp(Math.pow(cm.getLevel(), 3) / 2);
                                                        cm.updateInfoQuest(59763, "10=1;1=1;2=1;3=1;4=1;5=1;6=1;7=1;8=1;9=1");
                                                        cm.inGameDirectionEvent_SetHideEffect(0);
                                                        cm.setStandAloneMode(false);
                                                        cm.eventSKill(0);
                                                        cm.warp(867111270, 0);
                                                        cm.setInGameDirectionMode(false, true, false);
                                                        cm.playerMessage(5, "阻挡暴走的奈奈吧！");
                                                        cm.npc_LeaveField("oid=19785990");
                                                        cm.npc_LeaveField("oid=19785991");
                                                        cm.npc_LeaveField("oid=19785992");
                                                        cm.npc_LeaveField("oid=19785993");
                                                        cm.npc_LeaveField("oid=19785994");
                                                        cm.npc_LeaveField("oid=19785995");
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
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;