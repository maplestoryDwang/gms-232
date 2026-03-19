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
      cm.updateInfoQuest(61333, "act1=610061570;act2=610062430");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(9201535, "oid=2690621", -1530, 840, 1, -1580, -1480, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2690621", "summon", 0, 0);
      cm.npc_ChangeController(9201568, "oid=2690622", -1300, 840, 1, -1350, -1250, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2690622", "summon", 0, 0);
      cm.npc_ChangeController(9201569, "oid=2690623", -1600, 840, 1, -1650, -1550, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2690623", "summon", 0, 0);
      cm.npc_ChangeController(9201570, "oid=2690624", -1260, 840, 1, -1310, -1210, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2690624", "summon", 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -1420, 870);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1200);
          } else {
            if (status === V++) {
              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/text", 100);
              cm.inGameDirectionEvent_AskAnswerTime(6200);
              cm.effect_Text(["#fn黑体##fs18#二十多年前，反转界"], [100, 2200, 6, -50, -50, 1, 4, 0, 0, 0, 0]);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#从今天开始，他就是你的弟弟了，苏巴尼。快，向人家问好。", 37, 9201535, false, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                } else {
                  if (status === V++) {
                    cm.npc_SetForceMove("oid=2690624", 1, 5, 150);
                    cm.inGameDirectionEvent_AskAnswerTime(2200);
                  } else {
                    if (status === V++) {
                      cm.npc_setForceFlip("oid=2690624", 0);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom('……', 37, 9201570, false, true);
                      } else {
                        if (status === V++) {
                          cm.npc_setForceFlip("oid=2690622", 1);
                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                        } else {
                          if (status === V++) {
                            cm.npc_setForceFlip("oid=2690622", -1);
                            cm.sendNormalTalk_Bottom("他肯定是害羞了，亲爱的。", 37, 9201568, false, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face2#没什么好害羞的！自信一点！", 37, 9201535, false, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                } else {
                                  if (status === V++) {
                                    cm.npc_SetForceMove("oid=2690623", 1, 110, 100);
                                    cm.inGameDirectionEvent_AskAnswerTime(4200);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("我是纳瑞坎，很高兴见到你。", 37, 9201569, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom('……', 37, 9201570, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_setForceFlip("oid=2690622", 1);
                                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("你的弟弟都向你问好了，苏巴尼，你也该向人家问好吧。", 37, 9201568, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                } else {
                                                  if (status === V++) {
                                                    cm.npc_setForceFlip("oid=2690622", -1);
                                                    cm.npc_SetForceMove("oid=2690624", -1, 80, 50);
                                                    cm.inGameDirectionEvent_AskAnswerTime(4200);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("你——你好……我是苏巴尼……", 37, 9201570, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("不论发生什么事，兄弟之间都应该互相扶持、互相守护，明白吗？", 37, 9201535, false, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("呃……", 37, 9201570, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom('明白。', 37, 9201569, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.npc_setForceFlip("oid=2690623", -1);
                                                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom('父亲。', 37, 9201569, false, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                    } else if (status === V++) {
                                                                      cm.warp(610062440, 0, true);
                                                                      cm.eventSKill(0);
                                                                      cm.setInGameDirectionMode(false, true, false);
                                                                      cm.npc_LeaveField("oid=2690621");
                                                                      cm.npc_LeaveField("oid=2690621");
                                                                      cm.npc_LeaveField("oid=2690622");
                                                                      cm.npc_LeaveField("oid=2690622");
                                                                      cm.npc_LeaveField("oid=2690623");
                                                                      cm.npc_LeaveField("oid=2690623");
                                                                      cm.npc_LeaveField("oid=2690624");
                                                                      cm.npc_LeaveField("oid=2690624");
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