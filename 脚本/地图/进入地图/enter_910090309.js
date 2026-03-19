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
      cm.fieldEffect_PlayFieldSound("Ambience.img/valley");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 50, -45);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(1013350, "oid=2818771", -900, -180, 0);
        cm.npc_SetSpecialAction(1013350, "summon");
        cm.sendNextNoESC_Bottom("#face0#好了！炸药做好了，勇士。来，拿着。", 1013350);
      } else {
        if (status === V++) {
          cm.sendNext_Bottom("#face0#好，放好之后，就快撤吧。一会儿点上火之后，就会爆炸。", 1013358);
        } else {
          if (status === V++) {
            cm.sendNextNoESC_Bottom("#face0#是，勇士！", 1013350);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
              cm.inGameDirectionEvent_AskAnswerTime(1200);
            } else {
              if (status === V++) {
                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1400);
              } else {
                if (status === V++) {
                  cm.Hidden_background("boom", 1);
                  cm.Hidden_background('0', 0);
                  cm.Hidden_background('1', 1);
                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/pathfinder/rock");
                  cm.inGameDirectionEvent_AskAnswerTime(900);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 2);
                    cm.inGameDirectionEvent_AskAnswerTime(1600);
                  } else {
                    if (status === V++) {
                      cm.Hidden_background("boom", 0);
                      cm.inGameDirectionEvent_AskAnswerTime(300);
                    } else {
                      if (status === V++) {
                        cm.sendNext_Bottom("#face3#……成功了吗？", 1013358);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, -550, -45);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 0, 2);
                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(1400);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(300);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_PushScaleInfo(2000, 1500, 2000, -600, 0);
                                } else {
                                  if (status === V++) {
                                    cm.npc_SetForceMove("oid=2818771", 1, 140, 180);
                                    cm.inGameDirectionEvent_同时移动镜头和人(2, 120);
                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_PushScaleInfo(1000, 1500, 1000, -400, 40);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNextNoESC_Bottom("#face0#啊……在那里，勇士！最后一块罗盘碎片！", 1013350);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNextNoESC_Bottom("#face2#三个罗盘碎片全都找到啦。\r\n现在回到高尔根家去吧，嘿嘿。", 1013350);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNext_Bottom("#face3##b（罗盘碎片顺利搞定。\r\n前两个还比较容易，最后一个要不是有那个孩子，估计会很难。）#k", 1013358);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNext_Bottom("#face0#还是帮了不少……", 1013358);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNextNoESC_Bottom("#face0#什么，勇士？", 1013350);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNext_Bottom("#face6#没什么。快走吧。", 1013358);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNextNoESC_Bottom("#face2#嗯……明明听你好像说了什么……\r\n不，没什么。快走吧。到高尔根家去吧～！", 1013350);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                            cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                  cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.setStandAloneMode(false);
                                                                    cm.setInGameDirectionMode(false, false, false);
                                                                    cm.forceCompleteQuest(35920);
                                                                    cm.warp(100051030);
                                                                    cm.dispose();
                                                                  } else if (status === V++) {
                                                                    cm.dispose();
                                                                  } else {
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;