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
      cm.forceForfeitQuest(59742);
      cm.forceStartQuest(59742, '');
      cm.forceCompleteQuest(59742);
      cm.npc_ChangeController(9400031, "oid=19787802", -640, 93, 1, -690, -590, 0, true, false);
      cm.npc_SetSpecialAction("oid=19787802", "summon", 0, 0);
      cm.npc_ChangeController(9400032, "oid=19787803", -720, 93, 1, -770, -670, 0, true, false);
      cm.npc_SetSpecialAction("oid=19787803", "summon", 0, 0);
      cm.npc_ChangeController(9400033, "oid=19787804", -800, 93, 1, -850, -750, 0, true, false);
      cm.npc_SetSpecialAction("oid=19787804", "summon", 0, 0);
      cm.npc_ChangeController(9400034, "oid=19787805", -400, 93, 1, -450, -350, 0, true, false);
      cm.npc_SetSpecialAction("oid=19787805", "summon", 0, 0);
      cm.npc_ChangeController(9400035, "oid=19787806", -506, 93, 1, -556, -456, 0, true, false);
      cm.npc_SetSpecialAction("oid=19787806", "summon", 0, 0);
      cm.npc_SetForceMove("oid=19787802", 1, 160, 150);
      cm.npc_SetForceMove("oid=19787803", 1, 160, 130);
      cm.npc_SetForceMove("oid=19787805", 1, 130, 120);
      cm.npc_SetForceMove("oid=19787804", 1, 120, 100);
      cm.npc_SetForceMove("oid=19787806", 1, 150, 150);
      cm.inGameDirectionEvent_AskAnswerTime(3200);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_PushMoveInfo(0, 100, 460, -100);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(4686);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(2200);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
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
                        cm.sendNormalTalk_Bottom("里面还有没能逃出来的动物……", 37, 9400035, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#究竟什么人才会干出这种事情？", 37, 9400031, true, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                          } else {
                            if (status === V++) {
                              cm.npc_SetForceMove("oid=19787804", 1, 450, 150);
                              cm.inGameDirectionEvent_AskAnswerTime(5200);
                            } else {
                              if (status === V++) {
                                cm.npc_setForceFlip("oid=19787804", -1);
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("我们先帮助这里被关住的动物吧？", 37, 9400033, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.npc_setForceFlip("oid=19787804", 0);
                                    cm.npc_SetForceMove("oid=19787805", 1, 200, 150);
                                    cm.inGameDirectionEvent_AskAnswerTime(4200);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("嗯……我们先帮着这些动物回到原来的地方吧。", 37, 9400034, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("好，我们快点让这些动物看到温暖的阳光吧！！", 37, 9400032, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_SetForceMove("oid=19787802", 1, 600, 150);
                                          cm.npc_SetForceMove("oid=19787803", 1, 500, 150);
                                          cm.npc_SetForceMove("oid=19787806", 1, 400, 100);
                                          cm.npc_SetForceMove("oid=19787804", 1, 400, 100);
                                          cm.npc_SetForceMove("oid=19787805", 1, 400, 150);
                                          cm.inGameDirectionEvent_AskAnswerTime(3200);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_ChangeController(9400041, "oid=19788056", 770, 93, 3, 720, 820, 0, true, false);
                                            cm.npc_SetSpecialAction("oid=19788056", "summon", 0, 0);
                                            cm.inGameDirectionEvent_PushMoveInfo(0, 100, 460, 130);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(4598);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                cm.effect_NormalSpeechBalloon("!!!", 1, 0, 0, 1500, 9400034, 9897148);
                                                cm.effect_NormalSpeechBalloon('!!!', 1, 0, 0, 1500, 9400032, 9897148);
                                                cm.effect_NormalSpeechBalloon('!!!', 1, 0, 0, 1500, 9400031, 9897148);
                                                cm.effect_NormalSpeechBalloon("!!!", 1, 0, 0, 1500, 9400033, 9897148);
                                                cm.effect_NormalSpeechBalloon("!!!", 1, 0, 0, 1500, 9400035, 9897148);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_setForceFlip("oid=19788056", -1);
                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                  cm.effect_NormalSpeechBalloon('!!!', 1, 0, 0, 1500, 9400041, 9897148);
                                                } else {
                                                  if (status === V++) {
                                                    cm.npc_setForceFlip("oid=19788056", 1);
                                                    cm.npc_SetForceMove("oid=19788056", 1, 20, 250);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npc_LeaveField("oid=19788056");
                                                      cm.npc_SetForceMove("oid=19787802", 1, 800, 200);
                                                      cm.npc_SetForceMove("oid=19787803", 1, 500, 200);
                                                      cm.npc_SetForceMove("oid=19787806", 1, 400, 200);
                                                      cm.npc_SetForceMove("oid=19787804", 1, 300, 200);
                                                      cm.npc_SetForceMove("oid=19787805", 1, 300, 200);
                                                      cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.forceCompleteQuest(59736);
                                                          cm.forceCompleteQuest(59737);
                                                          cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 2);
                                                          cm.gainExp(Math.pow(cm.getLevel(), 3) / 2);
                                                          cm.updateInfoQuest(59764, "1=1;2=1;3=1;5=1");
                                                          cm.inGameDirectionEvent_AskAnswerTime(4200);
                                                        } else if (status === V++) {
                                                          cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                                          cm.eventSKill(0);
                                                          cm.warp(867111041, 0);
                                                          cm.setInGameDirectionMode(false, true, false);
                                                          cm.setStandAloneMode(false);
                                                          cm.npc_LeaveField("oid=19787802");
                                                          cm.npc_LeaveField("oid=19787803");
                                                          cm.npc_LeaveField("oid=19787804");
                                                          cm.npc_LeaveField("oid=19787805");
                                                          cm.npc_LeaveField("oid=19787806");
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
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;