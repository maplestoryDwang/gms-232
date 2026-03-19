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
      cm.npc_ChangeController(9400031, "oid=19787185", -470, 93, 7, -520, -420, 0, true, false);
      cm.npc_SetSpecialAction("oid=19787185", "summon", 0, 0);
      cm.npc_ChangeController(9400032, "oid=19787186", -560, 93, 7, -610, -510, 0, true, false);
      cm.npc_SetSpecialAction("oid=19787186", 'summon', 0, 0);
      cm.npc_ChangeController(9400033, "oid=19787187", -650, 93, 7, -700, -600, 0, true, false);
      cm.npc_SetSpecialAction("oid=19787187", "summon", 0, 0);
      cm.npc_ChangeController(9400034, "oid=19787188", -400, 93, 7, -450, -350, 0, true, false);
      cm.npc_SetSpecialAction("oid=19787188", 'summon', 0, 0);
      cm.npc_ChangeController(9400035, "oid=19787189", -180, 93, 7, -230, -130, 0, true, false);
      cm.npc_SetSpecialAction("oid=19787189", 'summon', 0, 0);
      cm.npc_ChangeController(9400038, "oid=19787190", 40, 93, 8, -10, 90, 1, true, false);
      cm.npc_SetSpecialAction("oid=19787190", 'summon', 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.npc_SetForceMove("oid=19787189", 1, 50, 50);
        cm.inGameDirectionEvent_AskAnswerTime(2200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
          cm.inGameDirectionEvent_AskAnswerTime(500);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -130, 120);
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
                    cm.sendNormalTalk_Bottom("……灵……灵灵……你听见……我的声音了吗……", 37, 9400035, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face3#嘤……嘤……呼噜噜……", 37, 9400038, true, true);
                    } else {
                      if (status === V++) {
                        cm.npc_SetForceMove("oid=19787185", 1, 200, 100);
                        cm.inGameDirectionEvent_AskAnswerTime(4200);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("陈……好久不见……", 37, 9400031, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face1#嗯……我来得太迟了吧？不过我没有忘记你哦。", 37, 9400035, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face4#呼噜噜，吭吭", 37, 9400038, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face1#它说……我也没有忘记你……我一直在等你……呜呜", 37, 9400031, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face4#吭吭……嘤嘤……嘤嘤", 37, 9400038, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face1#它说自己被带到这里后，被不断拷问，那些家伙还强行让它觉醒了……", 37, 9400031, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face1#虽然灵灵一直在努力地坚持……但是它的身体已经……呜呜，不行了……", 37, 9400031, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face1#灵灵！！你睁开眼睛啊，为什么总是闭上眼睛！", 37, 9400035, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face4#吭吭……吭……", 37, 9400038, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face1#呜呜……你为什么这么看着我啊，灵灵……你能活下去的，你能活下去！！", 37, 9400035, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face4#吭……", 37, 9400038, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("陈……", 37, 9400033, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("对不起……灵灵现在太痛苦了……现在只能……", 37, 9400034, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face1#不行，你在说什么啊！不行！！你不要……这么说……", 37, 9400035, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face1#我知道你很痛苦……但是我们现在能做的，就是送灵灵好好地离开……", 37, 9400032, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.askMenu_Bottom("#face0#'啊……灵灵……'\r\n#b(选择)#k\r\n\r\n#g#L0#让灵灵安稳地睡去吧。#l\r\n#g#L1#努力救活灵灵。#l", 37, 9400035);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face1#我不能……就这么……让你走……灵灵……", 37, 9400035, false, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face1#呃啊啊啊，你睁开眼睛啊，灵灵！！！！！睁开眼睛啊！！！灵……灵……", 37, 9400035, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face4#吭……吭……", 37, 9400038, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
                                                                cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.fieldEffect_ProcessOnOffLayer('0', "Map/EffectPL.img/MDIllust/illust4", 0, 1500, 0, 0, 14, 4, 0);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(5200);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.fieldEffect_ProcessOnOffLayer('0', '', 2, 1500, 0, 0, 0, 0, 0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(2200);
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
                                                                              cm.npc_SetSpecialAction("oid=19787190", "die", 0, 0);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.npc_LeaveField("oid=19787190");
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.npc_SetForceMove("oid=19787186", 1, 150, 100);
                                                                                  cm.npc_SetForceMove("oid=19787187", 1, 150, 100);
                                                                                  cm.npc_SetForceMove("oid=19787188", 1, 50, 100);
                                                                                  cm.npc_SetForceMove("oid=19787185", 1, 30, 100);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(4200);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("陈……", 37, 9400032, false, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("别太难过了……它肯定去了天堂……", 37, 9400033, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("也不要自责……这不是你的错……", 37, 9400034, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("那……那个……", 37, 9400031, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.npc_setForceFlip("oid=19787189", -1);
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom('？？', 37, 9400035, false, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face1#灵灵……说……谢谢你能……记住它……呜呜呜呜", 37, 9400031, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face1#灵灵……", 37, 9400035, false, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.npc_SetForceMove("oid=19787186", 1, 100, 100);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face0#陈，这种时候你更应该清醒一点，我们去为灵灵还有嘟嘟和奈奈报仇吧。", 37, 9400032, false, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face1#呜呜……", 37, 9400035, true, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("陈……", 37, 9400034, true, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face1#我们继续前进吧。不能让和灵灵一样的受害者再出现了。", 37, 9400035, true, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.forceCompleteQuest(59734);
                                                                                                                    cm.forceCompleteQuest(59735);
                                                                                                                    cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 2);
                                                                                                                    cm.gainExp(Math.pow(cm.getLevel(), 3) / 2);
                                                                                                                    cm.updateInfoQuest(59764, "1=1;2=1;3=1");
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(4200);
                                                                                                                  } else if (status === V++) {
                                                                                                                    cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                                                                                                    cm.inGameDirectionEvent_SetHideEffect(0);
                                                                                                                    cm.eventSKill(0);
                                                                                                                    cm.warp(867111040, 0);
                                                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                                                    cm.setStandAloneMode(false);
                                                                                                                    cm.npc_LeaveField("oid=19787185");
                                                                                                                    cm.npc_LeaveField("oid=19787186");
                                                                                                                    cm.npc_LeaveField("oid=19787187");
                                                                                                                    cm.npc_LeaveField("oid=19787188");
                                                                                                                    cm.npc_LeaveField("oid=19787189");
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