var status = -1;
function action(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(9400042, "oid=1710276", 1380, 707, 1);
      cm.npc_SetSpecialAction("oid=1710276", 'summon');
      cm.npc_ChangeController(9400043, "oid=1710277", 1080, 640, 0);
      cm.npc_SetSpecialAction("oid=1710277", "summon");
      cm.npc_ChangeController(9400044, "oid=1710278", 1530, 706, 1);
      cm.npc_SetSpecialAction("oid=1710278", "summon");
      cm.npc_ChangeController(9400045, "oid=1710279", 1712, 708, 1);
      cm.npc_SetSpecialAction("oid=1710279", "summon");
      cm.npc_ChangeController(9400046, "oid=1710280", 956, 705, 0);
      cm.npc_SetSpecialAction("oid=1710280", 'summon');
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
      cm.inGameDirectionEvent_AskAnswerTime(500);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_PushScaleInfo(150, 1400, 500, 1300, 650);
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
                cm.inGameDirectionEvent_AskAnswerTime(2400);
              } else {
                if (status === V++) {
                  cm.sendNextNoESC_Bottom("嘟嘟居然消失了……谁会做出这种事来……！", 9400042);
                } else {
                  if (status === V++) {
                    cm.sendNextNoESC_Bottom("出了这么大的事，我们不应该叫来我们村的英雄吗？！", 9400043);
                  } else {
                    if (status === V++) {
                      cm.sendNextNoESC_Bottom('是啊，必须找她……！', 9400042);
                    } else {
                      if (status === V++) {
                        cm.sendNextNoESC_Bottom("好的！现在就去！", 9400044);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(2400);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                              if (status === V++) {
                                cm.npc_ChangeController(9400031, "oid=1710566", 1280, 705, 0);
                                cm.npc_SetSpecialAction("oid=1710566", "summon");
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
                                      cm.sendNextNoESC_Bottom("拜托了……只有你才能解决这件事情……！", 9400042);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNextNoESC_Bottom("作为我们村勇敢的林之灵……这件事能不能拜托给你呢？", 9400042);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNextNoESC_Bottom("#face0#天啊！嘟嘟居然被绑架了……谁会做出这种事情！", 9400031);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNextNoESC_Bottom("拜托了……请你一定要找回我们的嘟嘟！", 9400042);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNextNoESC_Bottom("我看到抓走嘟嘟的那个飞行物似乎是往那边飞走了……", 9400042);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNextNoESC_Bottom("嘟嘟从来没有离开过村子……它肯定会很害怕的，真是担心啊……", 9400042);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_ChangeController(9400065, "oid=1710703", 1134, 687, 0);
                                                  cm.npc_SetSpecialAction("oid=1710703", "summon");
                                                  cm.sendNextNoESC_Bottom("那边……是冒险岛世界！为什么要把嘟嘟带到冒险岛世界去呢？", 9400065);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNextNoESC_Bottom("请不要担心，村长，还有各位村民。我是名侦探代号BT！我一定会把嘟嘟找回来的！", 9400031);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.npc_SetSpecialAction("oid=1710566", "fighting");
                                                          cm.inGameDirectionEvent_AskAnswerTime(2400);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.forceCompleteQuest(59702);
                                                                  cm.updateInfoQuest(59761, "1=1;2=1;3=1");
                                                                  cm.inGameDirectionEvent_AskAnswerTime(4200);
                                                                } else if (status === V++) {
                                                                  cm.effect_Voice("Field.img/masteryBook/EnchantSuccess");
                                                                  cm.warp(cm.getNumberFromQuestInfo(59744, "map"), 0);
                                                                  cm.inGameDirectionEvent_SetHideEffect(0);
                                                                  cm.setInGameDirectionMode(false, false, false);
                                                                  cm.setStandAloneMode(false);
                                                                  cm.npc_LeaveField("oid=1710276");
                                                                  cm.npc_LeaveField("oid=1710277");
                                                                  cm.npc_LeaveField("oid=1710278");
                                                                  cm.npc_LeaveField("oid=1710279");
                                                                  cm.npc_LeaveField("oid=1710280");
                                                                  cm.npc_LeaveField("oid=1710566");
                                                                  cm.npc_LeaveField("oid=1710703");
                                                                  cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 2);
                                                                  cm.gainExp(Math.pow(cm.getLevel(), 3) / 2);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;