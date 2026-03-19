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
      cm.npc_ChangeController(3002111, "oid=258455", 1052, -15, 289, 1002, 1102, 1, false, false);
      cm.npc_ChangeController(3002112, "oid=258456", 909, -10, 289, 859, 959, 1, false, false);
      cm.npc_ChangeController(3002113, "oid=258457", 977, -13, 289, 927, 1027, 1, false, false);
      cm.npc_ChangeController(3002123, "oid=258458", 773, -6, 289, 723, 823, 1, false, false);
      cm.npc_ChangeController(3002115, "oid=258459", 1128, -3, 288, 1078, 1178, 1, false, false);
      cm.monadForceMove("white", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.setStandAloneMode(true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(3002117, "oid=37862104", 707, -17, 290, 657, 757, 0, false, false);
      cm.npc_SetSpecialAction("oid=37862104", "summon", 0, 0);
      cm.npc_ChangeController(3002116, "oid=37862105", 634, -2, 290, 584, 684, 0, false, false);
      cm.npc_SetSpecialAction("oid=37862105", "summon", 0, 0);
      cm.npc_ChangeController(3002114, "oid=37862106", 534, 28, 290, 484, 584, 0, false, false);
      cm.npc_SetSpecialAction("oid=37862106", 'summon', 0, 0);
      cm.npc_ChangeController(3002114, "oid=37862107", 534, 28, 290, 484, 584, 0, false, false);
      cm.npc_SetSpecialAction("oid=37862107", "summon", 0, 0);
      cm.npc_ChangeController(3002126, "oid=37862108", 900, 197, 278, 850, 950, 1, false, false);
      cm.npc_SetSpecialAction("oid=37862108", "summon", 0, 0);
      cm.npcMove(3002126, 0, -100, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 860, -35);
      cm.curNodeEventEnd(true);
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
            cm.sendNormalTalk_Bottom("#face1#我这辈子都没见过这么大的雨。", 37, 3002111, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face1#真是场壮观的暴雨……再这样下去……也许会有点危险……", 37, 3002112, true, true);
            } else {
              if (status === V++) {
                cm.monadForceMove("white", 1, 30);
                cm.inGameDirectionEvent_AskAnswerTime(30);
              } else {
                if (status === V++) {
                  cm.fieldEffect_BackgroundCanvas(4, 100, 100, 100, 30, 0, 0);
                  cm.fieldEffect_BackgroundCanvas(5, 100, 100, 100, 30, 0, 0);
                  cm.fieldEffect_BackgroundCanvas(2, 100, 100, 100, 30, 0, 0);
                  cm.fieldEffect_BackgroundCanvas(3, 100, 100, 100, 30, 0, 0);
                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/foxvalley/thunder", 100);
                  cm.inGameDirectionEvent_AskAnswerTime(30);
                } else {
                  if (status === V++) {
                    cm.monadForceMove('white', 0, 30);
                    cm.inGameDirectionEvent_AskAnswerTime(30);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_BackgroundCanvas(0, 255, 255, 255, 30, 0, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(30);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_BackgroundCanvas(4, 100, 100, 100, 30, 0, 0);
                        cm.fieldEffect_BackgroundCanvas(5, 100, 100, 100, 30, 0, 0);
                        cm.fieldEffect_BackgroundCanvas(2, 100, 100, 100, 30, 0, 0);
                        cm.fieldEffect_BackgroundCanvas(3, 100, 100, 100, 30, 0, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(30);
                      } else {
                        if (status === V++) {
                          cm.monadForceMove('white', 1, 30);
                          cm.inGameDirectionEvent_AskAnswerTime(300);
                        } else {
                          if (status === V++) {
                            cm.monadForceMove("white", 0, 300);
                            cm.inGameDirectionEvent_AskAnswerTime(300);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_BackgroundCanvas(0, 255, 255, 255, 90, 0, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(1390);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#呃啊！刚才是什么？", 37, 3002114, false, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face1#闪电……？我们村竟然会有闪电？", 37, 3002112, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face1#玛鲁的话……是真的吗？", 37, 3002111, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.npcMove(3002126, 0, -150, 7000);
                                      cm.inGameDirectionEvent_AskAnswerTime(4000);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face1#水，水……！？", 37, 3002113, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face1#呃啊！！！好可怕！！！！！", 37, 3002116, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_ChangeController(3002110, "oid=37866149", -60, -60, 191, -110, -10, 1, true, false);
                                              cm.npc_SetSpecialAction("oid=37866149", 'summon', 0, 0);
                                              cm.inGameDirectionEvent_同时移动镜头和人(2, 300);
                                              cm.npc_setForceFlip("oid=37866149", 1);
                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_SetForceMove("oid=37866149", 1, 140, 150);
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
                                                      cm.npcMove(3002126, -400, 0, 0);
                                                      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 112, 110);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face14#快点！大家必须躲到高处去！", 37, 3002110, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.npc_SetSpecialAction("oid=37866149", "stand", -1, 1);
                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_PushScaleInfo(1000, 1000, 1000, 540, 0);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.npc_setForceFlip("oid=37862104", -1);
                                                                cm.npc_setForceFlip("oid=37862105", -1);
                                                                cm.npc_setForceFlip("oid=37862107", -1);
                                                                cm.sendNormalTalk_Bottom("#face1#玛鲁！你没事吧？", 37, 3002111, false, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face14#必须爬到狐狸树上去！快！", 37, 3002110, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face1#好，快走吧！快！", 37, 3002112, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.forceCompleteQuest(34757);
                                                                      cm.gainExp(16918334);
                                                                      cm.updateInfoQuest(34757, 'exp=1');
                                                                      cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                      cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                        } else if (status === V++) {
                                                                          cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                          cm.setStandAloneMode(false);
                                                                          cm.dispose();
                                                                          cm.warp(940204106, 0);
                                                                          cm.setInGameDirectionMode(false, true, false);
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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