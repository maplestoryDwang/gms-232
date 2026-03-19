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
      cm.updateInfoQuest(61333, "act1=610061570;act2=610062450");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.setAmbience("Ambience.img/rain", 100, 60);
      cm.npc_ChangeController(9201539, "oid=2693551", 3410, -70, 36, 3360, 3460, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2693551", 'summon', 0, 0);
      cm.npc_ChangeController(9201534, "oid=2693552", 3330, -70, 13, 3280, 3380, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2693552", "summon", 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 3560, -50);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1000);
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
                cm.inGameDirectionEvent_AskAnswerTime(1200);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face5#计划进展的……", 37, 9201539, false, true);
                } else {
                  if (status === V++) {
                    cm.npc_SetForceMove("oid=2693552", 1, 200, 80);
                    cm.inGameDirectionEvent_AskAnswerTime(2200);
                  } else {
                    if (status === V++) {
                      cm.npc_setForceFlip("oid=2693551", 1);
                      cm.inGameDirectionEvent_AskAnswerTime(2200);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                        cm.effect_NormalSpeechBalloon('??', 1, 0, 0, 2000, 1, 0, 0, 0, 4, 9201539, null, cm.getPlayer().getId());
                      } else {
                        if (status === V++) {
                          cm.npc_setForceFlip("oid=2693552", -1);
                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("……很顺利。非常顺利。", 37, 9201534, false, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(2200);
                                cm.effect_NormalSpeechBalloon('……', 1, 0, 0, 2400, 1, 0, 0, 0, 4, 9201539, null, cm.getPlayer().getId());
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face5#那你怎么愁眉苦脸的。", 37, 9201539, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.npc_setForceFlip("oid=2693552", 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(2200);
                                    cm.effect_NormalSpeechBalloon("...", 1, 0, 0, 2400, 1, 0, 0, 0, 4, 9201534, null, cm.getPlayer().getId());
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face5#这也就是所谓的家人吗？", 37, 9201539, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_SetForceMove("oid=2693552", 1, 100, 80);
                                        cm.inGameDirectionEvent_AskAnswerTime(4200);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("你的计划呢？\r\n我想知道你打算如何击败宗师们。", 37, 9201534, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face5#嗯……已经制定好了。", 37, 9201539, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face5#我已经强化了我用来使克拉奇安人变种的配方。\r\n现在就连宗师也会受到感染了。", 37, 9201539, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(2200);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_PushScaleInfo(20, 0, 4000, 800, 3650, -9);
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
                                                          cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("……很好。", 37, 9201534, false, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(4200);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_Monologue("\r\n\r\n\r\n\r\n#fs40#  第2幕. 1000多年前\r\n\r\n                    结束。", 1);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 4);
                                                                            cm.updateInfoQuest(61369, "1=1;2=1;3=1;4=1;5=1;6=1");
                                                                            cm.gainExp(Math.pow(cm.getLevel(), 3) / 4);
                                                                            cm.playerMessage(5, "你获得了1500荣耀EXP。");
                                                                            cm.updateInfoQuest(61330, "honor=1");
                                                                            cm.forceCompleteQuest(61330);
                                                                            cm.updateInfoQuest(61346, "act1=1;act2=1");
                                                                            cm.inGameDirectionEvent_AskAnswerTime(4200);
                                                                            cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                                                          } else if (status === V++) {
                                                                            cm.setStandAloneMode(false);
                                                                            cm.warp(610060000, 0, true);
                                                                            cm.eventSKill(0);
                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                            cm.npc_LeaveField("oid=2693551");
                                                                            cm.npc_LeaveField("oid=2693551");
                                                                            cm.npc_LeaveField("oid=2693552");
                                                                            cm.npc_LeaveField("oid=2693552");
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
                }
              }
            }
          }
        }
      }
    }
  }
}