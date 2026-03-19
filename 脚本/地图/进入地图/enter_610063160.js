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
      cm.updateInfoQuest(61333, "act1=610061570;act2=610062450;act3=610063160");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(9201567, "oid=2714289", 420, -70, 10, 370, 470, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2714289", "summon", 0, 0);
      cm.npc_ChangeController(9201566, "oid=2714290", 348, -70, 38, 298, 398, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2714290", "summon", 0, 0);
      cm.npc_ChangeController(9201566, "oid=2714291", 326, -70, 38, 276, 376, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2714291", 'summon', 0, 0);
      cm.inGameDirectionEvent_QTE(1);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_OneTimeAction(16, 0);
        cm.inGameDirectionEvent_AskAnswerTime(200);
      } else {
        if (status === V++) {
          cm.npc_SetSpecialAction("oid=2714289", "hurt", 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(500);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_OneTimeAction(5, 0);
            cm.npc_LeaveField("oid=2714289");
            cm.npc_LeaveField("oid=2714289");
            cm.inGameDirectionEvent_AskAnswerTime(200);
          } else {
            if (status === V++) {
              cm.npc_SetSpecialAction("oid=2714290", 'hurt', 0, 0);
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_OneTimeAction(16, 0);
                cm.npc_LeaveField("oid=2714290");
                cm.npc_LeaveField("oid=2714290");
                cm.npc_SetSpecialAction("oid=2714291", "hurt", 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.npc_LeaveField("oid=2714291");
                  cm.npc_LeaveField("oid=2714291");
                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                } else {
                  if (status === V++) {
                    cm.npc_ChangeController(9201567, "oid=2714411", 1269, -70, 35, 1219, 1319, 1, true, 0, false);
                    cm.npc_SetSpecialAction("oid=2714411", "summon", 0, 0);
                    cm.npc_ChangeController(9201566, "oid=2714412", 1220, -70, 35, 1170, 1270, 1, true, 0, false);
                    cm.npc_SetSpecialAction("oid=2714412", 'summon', 0, 0);
                    cm.npc_ChangeController(9201567, "oid=2714413", 1190, -70, 18, 1140, 1240, 1, true, 0, false);
                    cm.npc_SetSpecialAction("oid=2714413", "summon", 0, 0);
                    cm.npc_ChangeController(9201567, "oid=2714414", 1120, -70, 23, 1070, 1170, 1, true, 0, false);
                    cm.npc_SetSpecialAction("oid=2714414", 'summon', 0, 0);
                    cm.npc_ChangeController(9201566, "oid=2714415", 1050, -70, 23, 1000, 1100, 1, true, 0, false);
                    cm.npc_SetSpecialAction("oid=2714415", "summon", 0, 0);
                    cm.npc_SetForceMove("oid=2714411", -1, 450, 300);
                    cm.npc_SetForceMove("oid=2714412", -1, 350, 300);
                    cm.npc_SetForceMove("oid=2714413", -1, 290, 300);
                    cm.npc_SetForceMove("oid=2714414", -1, 200, 300);
                    cm.npc_SetForceMove("oid=2714415", -1, 190, 300);
                    cm.inGameDirectionEvent_AskAnswerTime(2200);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("没完没了了你还……既然如此……", 57, 0, false, true);
                    } else {
                      if (status === V++) {
                        cm.npc_ChangeController(9201535, "oid=2714493", -20, -70, 37, -70, 30, 0, true, 0, false);
                        cm.npc_SetSpecialAction("oid=2714493", 'summon', 0, 0);
                        cm.npc_SetForceMove("oid=2714493", 1, 600, 300);
                        cm.inGameDirectionEvent_AskAnswerTime(2200);
                      } else {
                        if (status === V++) {
                          cm.npc_SetSpecialAction("oid=2714493", "attack", 0, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                        } else {
                          if (status === V++) {
                            cm.npc_SetSpecialAction("oid=2714411", "hurt", 0, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.npc_LeaveField("oid=2714411");
                              cm.npc_LeaveField("oid=2714411");
                              cm.npc_SetSpecialAction("oid=2714412", "hurt", 0, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                              if (status === V++) {
                                cm.npc_LeaveField("oid=2714412");
                                cm.npc_LeaveField("oid=2714412");
                                cm.npc_SetSpecialAction("oid=2714413", 'hurt', 0, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === V++) {
                                  cm.npc_LeaveField("oid=2714413");
                                  cm.npc_LeaveField("oid=2714413");
                                  cm.npc_SetSpecialAction("oid=2714414", "hurt", 0, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else {
                                  if (status === V++) {
                                    cm.npc_LeaveField("oid=2714414");
                                    cm.npc_LeaveField("oid=2714414");
                                    cm.npc_SetSpecialAction("oid=2714415", 'hurt', 0, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_LeaveField("oid=2714415");
                                      cm.npc_LeaveField("oid=2714415");
                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("绯红之心！", 57, 0, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_setForceFlip("oid=2714493", -1);
                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("克拉奇安人全都沦为我儿子的傀儡了吗？\r\n对不起……要是我能再强大一点……", 37, 9201535, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom('……', 57, 0, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("这些都是我教子无方引起的。\r\n上次为此付出生命的是我。", 37, 9201535, false, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("这次是我的儿子。", 37, 9201535, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("不是这样的。\r\n你已经尽力了。", 57, 0, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("要是真这样该多好。", 57, 0, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.npc_setForceFlip("oid=2714493", 1);
                                                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("要是我明白纳瑞坎为什么会……\r\n我没料到他真的会伤害家人。", 37, 9201535, false, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom('……', 57, 0, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.npc_setForceFlip("oid=2714493", -1);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("……抓紧时间吧。", 37, 9201535, false, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("我们还有机会阻止纳瑞坎。\r\n我必须心无旁骛。", 37, 9201535, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.npc_setForceFlip("oid=2714493", 1);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                            } else if (status === V++) {
                                                                              cm.npc_SetForceMove("oid=2714493", 1, 500, 150);
                                                                              cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 4);
                                                                              cm.updateInfoQuest(61370, "1=1;2=1");
                                                                              cm.gainExp(Math.pow(cm.getLevel(), 3) / 4);
                                                                              cm.eventSKill(0);
                                                                              cm.setInGameDirectionMode(false, true, false);
                                                                              cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
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