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
      cm.updateInfoQuest(61333, "act1=610061570;act2=610062050");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(9201536, "oid=2664163", -1850, 97, 37, -1900, -1800, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2664163", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("就是这里吧……", 57, 0, false, true);
      } else {
        if (status === V++) {
          cm.npc_SetForceMove("oid=2664163", 1, 100, 80);
          cm.inGameDirectionEvent_AskAnswerTime(4200);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushMoveInfo(0, 200, 116, 160);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(10068);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushMoveInfo(0, 100, 116, -370);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(5306);
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
                          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
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
                                cm.sendNormalTalk_Bottom("好……破旧。", 37, 9201536, false, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else {
                                  if (status === V++) {
                                    cm.npc_setForceFlip("oid=2664163", -1);
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("即便是守护者的要塞这样的地方，也抵御不了岁月的侵蚀吗。", 37, 9201536, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_setForceFlip("oid=2664163", 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(2200);
                                            cm.effect_NormalSpeechBalloon('!!', 1, 0, 0, 2000, 1, 0, 0, 0, 4, 9201536, null, cm.getPlayer().getId());
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom('这……这种感觉……', 37, 9201536, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_SetForceMove("oid=2664163", 1, 400, 100);
                                                cm.inGameDirectionEvent_AskAnswerTime(4200);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_同时移动镜头和人(2, 350);
                                                  cm.inGameDirectionEvent_AskAnswerTime(4200);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -1300, 250);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                        cm.sendNormalTalk_Bottom("怎么了，卢坎？", 57, 0, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face2#这种绝望的感觉……\r\n我在绯红之心死去的时候，也有过这种感觉。", 37, 9201536, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.npc_setForceFlip("oid=2664163", -1);
                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("这里充满了那时的绝望感。", 37, 9201536, false, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("纳瑞坎不会真的逃出来了吧。", 57, 0, true, true);
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
                                                                          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 4);
                                                                            cm.updateInfoQuest(61369, "1=1");
                                                                            cm.gainExp(Math.pow(cm.getLevel(), 3) / 4);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(4200);
                                                                            cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                                                          } else if (status === V++) {
                                                                            cm.eventSKill(0);
                                                                            cm.warp(610062060, 0, true);
                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                            cm.npc_LeaveField("oid=2664163");
                                                                            cm.npc_LeaveField("oid=2664163");
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