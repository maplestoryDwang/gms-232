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
      cm.forceStartQuest(59742, '');
      cm.forceCompleteQuest(59742);
      cm.npc_ChangeController(9400031, "oid=19786799", -520, 93, 7, -570, -470, 0, true, false);
      cm.npc_SetSpecialAction("oid=19786799", "summon", 0, 0);
      cm.npc_ChangeController(9400032, "oid=19786800", -701, 93, 7, -751, -651, 0, true, false);
      cm.npc_SetSpecialAction("oid=19786800", 'summon', 0, 0);
      cm.npc_ChangeController(9400033, "oid=19786801", -590, 93, 7, -640, -540, 0, true, false);
      cm.npc_SetSpecialAction("oid=19786801", "summon", 0, 0);
      cm.npc_ChangeController(9400034, "oid=19786802", -640, 93, 7, -690, -590, 0, true, false);
      cm.npc_SetSpecialAction("oid=19786802", "summon", 0, 0);
      cm.npc_ChangeController(9400035, "oid=19786803", -440, 93, 7, -490, -390, 0, true, false);
      cm.npc_SetSpecialAction("oid=19786803", "summon", 0, 0);
      cm.npc_ChangeController(9400038, "oid=19786804", 265, 93, 9, 215, 315, 1, true, false);
      cm.npc_SetSpecialAction("oid=19786804", 'summon', 0, 0);
      cm.npc_SetForceMove("oid=19786799", 1, 250, 190);
      cm.npc_SetForceMove("oid=19786800", 1, 170, 230);
      cm.npc_SetForceMove("oid=19786801", 1, 230, 150);
      cm.npc_SetForceMove("oid=19786803", 1, 230, 240);
      cm.npc_SetForceMove("oid=19786802", 1, 210, 200);
      cm.inGameDirectionEvent_PushMoveInfo(0, 200, 200, 100);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(4815);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushScaleInfo(0, 3000, 0, 240, 120);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
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
                            cm.sendNormalTalk_Bottom("#face3#咳……", 37, 9400038, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("那家伙也是APORD的实验品吗？！我们快消灭它吧。", 37, 9400032, true, true);
                            } else {
                              if (status === V++) {
                                cm.npc_SetForceMove("oid=19786800", 1, 340, 250);
                                cm.inGameDirectionEvent_AskAnswerTime(3200);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("等，等等……！等一下！", 37, 9400031, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.npc_SetForceMove("oid=19786799", 1, 150, 250);
                                    cm.inGameDirectionEvent_AskAnswerTime(2200);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(2200);
                                      cm.effect_NormalSpeechBalloon('?', 1, 0, 0, 2000, 9400032, 9897148);
                                      cm.effect_NormalSpeechBalloon('?', 1, 0, 0, 2000, 9400033, 9897148);
                                      cm.effect_NormalSpeechBalloon('?', 1, 0, 0, 2000, 9400034, 9897148);
                                      cm.effect_NormalSpeechBalloon('?', 1, 0, 0, 2000, 9400035, 9897148);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("这只老虎，似乎……在说什么。", 37, 9400031, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_setForceFlip("oid=19786799", -1);
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("……陈，你能认出来吗？", 37, 9400031, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("难道……", 37, 9400035, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_SetForceMove("oid=19786803", 1, 170, 100);
                                                  cm.npc_setForceFlip("oid=19786799", 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(4200);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom('没错。', 37, 9400031, false, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face3#吼……咳……！！", 37, 9400038, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.npc_SetForceMove("oid=19786803", 1, 30, 100);
                                                        cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("灵灵……", 37, 9400035, false, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("灵灵！！！是我呀，听到……我的声音了吗？", 37, 9400035, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face3#……", 37, 9400038, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("灵灵！！", 37, 9400035, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("陈！灵灵和嘟嘟、奈奈不同，似乎对声音完全没有反应。", 37, 9400032, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("嗯……难道它已经失去了自我了吗……", 37, 9400033, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face1#在看到陈的瞬间……它用尽了最后的力气给我传递了信息……", 37, 9400031, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face1#它说虽然它变成了这样……但是……请你一定要认出它……", 37, 9400031, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("灵灵已经被绑架很久了……已经……晚了……", 37, 9400033, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.npc_setForceFlip("oid=19786803", -1);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.npc_setForceFlip("oid=19786803", 0);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face1#不！别这么说！灵灵，我……我来了……呜呜。你醒醒啊，灵灵！", 37, 9400035, false, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face3#吼吼吼吼吼", 37, 9400038, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.npc_SetSpecialAction("oid=19786804", "attack", 0, 0);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.npc_SetForceMove("oid=19786801", 1, 100, 100);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.npc_SetForceMove("oid=19786800", 1, 100, 100);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face0#我们先破坏掉那个宝石吧。", 37, 9400032, false, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2400);
                                                                                          } else if (status === V++) {
                                                                                            cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 2);
                                                                                            cm.gainExp(Math.pow(cm.getLevel(), 3) / 2);
                                                                                            cm.updateInfoQuest(59764, "1=1;2=1");
                                                                                            cm.inGameDirectionEvent_SetHideEffect(0);
                                                                                            cm.setStandAloneMode(false);
                                                                                            cm.eventSKill(0);
                                                                                            cm.warp(867111350, 0);
                                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                                            cm.playerMessage(5, "阻挡暴走的灵灵吧！");
                                                                                            cm.npc_LeaveField("oid=19786799");
                                                                                            cm.npc_LeaveField("oid=19786800");
                                                                                            cm.npc_LeaveField("oid=19786801");
                                                                                            cm.npc_LeaveField("oid=19786802");
                                                                                            cm.npc_LeaveField("oid=19786803");
                                                                                            cm.npc_LeaveField("oid=19786804");
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