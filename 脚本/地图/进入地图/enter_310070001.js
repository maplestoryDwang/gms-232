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
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 3100, -30);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(2155122, "oid=1281303", 3630, 40, 50, 3580, 3680, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=1281303", "summon", 0, 0);
        cm.npc_ChangeController(2155125, "oid=1281304", 2250, 40, 34, 2200, 2300, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=1281304", 'summon', 0, 0);
        cm.npc_ChangeController(1540751, "oid=1281305", 2113, -441, 72, 2063, 2163, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=1281305", "summon", 0, 0);
        cm.npc_ChangeController(1540751, "oid=1281306", 2447, -824, 91, 2397, 2497, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=1281306", "summon", 0, 0);
        cm.npc_setForceFlip("oid=1281306", -1);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face1#你要跑到哪里啊？", 37, 2155123, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("嗬，嗬。快到了。", 57, 0, true, true);
          } else {
            if (status === V++) {
              cm.npc_SetForceMove("oid=1281303", -1, 400, 260);
              cm.inGameDirectionEvent_同时移动镜头和人(1, 400);
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === V++) {
                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
                cm.inGameDirectionEvent_AskAnswerTime(2000);
              } else {
                if (status === V++) {
                  cm.npc_setForceFlip("oid=1281303", 1);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_ForcedFlip(1);
                    cm.npc_ChangeController(2155113, "oid=1281970", 3700, 40, 54, 3650, 3750, 0, true, 0, false);
                    cm.npc_SetSpecialAction("oid=1281970", "summon", 0, 0);
                    cm.npc_ChangeController(2155113, "oid=1281971", 3650, 40, 54, 3600, 3700, 0, true, 0, false);
                    cm.npc_SetSpecialAction("oid=1281971", "summon", 0, 0);
                    cm.npc_ChangeController(2155113, "oid=1281972", 3600, 40, 50, 3550, 3650, 0, true, 0, false);
                    cm.npc_SetSpecialAction("oid=1281972", "summon", 0, 0);
                    cm.npc_setForceFlip("oid=1281970", -1);
                    cm.npc_setForceFlip("oid=1281971", -1);
                    cm.npc_setForceFlip("oid=1281972", -1);
                    cm.inGameDirectionEvent_AskAnswerTime(300);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 300, 3300, -30);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("继续追击中", 37, 2155113, false, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 300, 3100, -30);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1281303"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === V++) {
                                  cm.npc_setForceFlip("oid=1281303", -1);
                                  cm.inGameDirectionEvent_ForcedFlip(-1);
                                  cm.inGameDirectionEvent_AskAnswerTime(100);
                                } else {
                                  if (status === V++) {
                                    cm.npc_SetForceMove("oid=1281303", -1, 1000, 260);
                                    cm.inGameDirectionEvent_同时移动镜头和人(1, 1050);
                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_PushScaleInfo(300, 0, 2000, 300, 2250, 50);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_LeaveField("oid=1281306");
                                          cm.sendNormalTalk_Bottom("喂！这里！马上就到了！", 37, 2155125, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_setForceFlip("oid=1281303", 1);
                                            cm.inGameDirectionEvent_ForcedFlip(1);
                                            cm.inGameDirectionEvent_PushScaleInfo(300, 0, 3000, 300, 2250, 70);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("很好！大家注意，就是现在！", 37, 2155125, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_SetForceMove("oid=1281970", -1, 560, 260);
                                                  cm.npc_SetForceMove("oid=1281971", -1, 560, 260);
                                                  cm.npc_SetForceMove("oid=1281972", -1, 560, 260);
                                                  cm.inGameDirectionEvent_PushScaleInfo(200, 0, 2800, 200, 2110, -420);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npc_SetSpecialAction("oid=1281305", 'point', -1, 1);
                                                      cm.inGameDirectionEvent_AskAnswerTime(700);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_PushScaleInfo(200, 0, 2500, 200, 2440, -750);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(700);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.npc_setForceFlip("oid=1281306", 1);
                                                            cm.inGameDirectionEvent_AskAnswerTime(100);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.npc_SetSpecialAction("oid=1281306", "point", -1, 1);
                                                              cm.inGameDirectionEvent_AskAnswerTime(650);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_PushScaleInfo(200, 0, 1500, 800, 2750, -30);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.npc_ChangeController(2155124, "oid=1283584", 2750, 40, 42, 2700, 2800, 0, false, 0, false);
                                                                    cm.npc_SetSpecialAction("oid=1283584", 'summon', 0, 0);
                                                                    cm.npc_SetSpecialAction("oid=1283584", "down", -1, 1);
                                                                    cm.npc_ChangeController(2155124, "oid=1283585", 2800, 40, 42, 2750, 2850, 0, false, 0, false);
                                                                    cm.npc_SetSpecialAction("oid=1283585", "summon", 0, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_PushScaleInfo(500, 0, 2000, 1500, 2870, 60);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.npc_SetSpecialAction("oid=1283585", "down", -1, 1);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(400);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.npc_ChangeController(2155124, "oid=1283587", 2890, 40, 41, 2840, 2940, 0, false, 0, false);
                                                                          cm.npc_SetSpecialAction("oid=1283587", "summon", 0, 0);
                                                                          cm.npc_SetSpecialAction("oid=1283587", "down", -1, 1);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1281972"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                            cm.npc_SetSpecialAction("oid=1283584", "stay", -1, 1);
                                                                            cm.npc_SetSpecialAction("oid=1283585", "stay", -1, 1);
                                                                            cm.npc_SetSpecialAction("oid=1283587", "stay", -1, 1);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("追踪失败。追踪失败。接下来行动是……", 37, 2155113, false, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("…我知道了。\r\n全体返回。", 37, 2155113, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.npc_setForceFlip("oid=1281970", 1);
                                                                                    cm.npc_setForceFlip("oid=1281971", 1);
                                                                                    cm.npc_setForceFlip("oid=1281972", 1);
                                                                                    cm.npc_SetForceMove("oid=1281970", 1, 660, 260);
                                                                                    cm.npc_SetForceMove("oid=1281971", 1, 660, 260);
                                                                                    cm.npc_SetForceMove("oid=1281972", 1, 660, 260);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1500, 0);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                    } else if (status === V++) {
                                                                                      cm.eventSKill(0);
                                                                                      cm.warp(310070002, 0, false);
                                                                                      cm.npc_LeaveField("oid=1281303");
                                                                                      cm.npc_LeaveField("oid=1281303");
                                                                                      cm.npc_LeaveField("oid=1281304");
                                                                                      cm.npc_LeaveField("oid=1281304");
                                                                                      cm.npc_LeaveField("oid=1281305");
                                                                                      cm.npc_LeaveField("oid=1281305");
                                                                                      cm.npc_LeaveField("oid=1281306");
                                                                                      cm.npc_LeaveField("oid=1281970");
                                                                                      cm.npc_LeaveField("oid=1281970");
                                                                                      cm.npc_LeaveField("oid=1281971");
                                                                                      cm.npc_LeaveField("oid=1281971");
                                                                                      cm.npc_LeaveField("oid=1281972");
                                                                                      cm.npc_LeaveField("oid=1281972");
                                                                                      cm.npc_LeaveField("oid=1283584");
                                                                                      cm.npc_LeaveField("oid=1283584");
                                                                                      cm.npc_LeaveField("oid=1283585");
                                                                                      cm.npc_LeaveField("oid=1283585");
                                                                                      cm.npc_LeaveField("oid=1283587");
                                                                                      cm.npc_LeaveField("oid=1283587");
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