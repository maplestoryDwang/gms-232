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
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 20, -90);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(3003274, "oid=1754638", 50, -20, 1, 0, 100, 1, true, false);
        cm.npc_SetSpecialAction("oid=1754638", "summon", 0, 0);
        cm.npc_ChangeController(3003270, "oid=1754639", 115, -20, 1, 65, 165, 1, true, false);
        cm.npc_SetSpecialAction("oid=1754639", "summon", 0, 0);
        cm.npc_ChangeController(3003275, "oid=1754640", -110, -20, 5, -160, -60, 0, false, false);
        cm.npc_SetSpecialAction("oid=1754640", "summon", 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
          cm.sendNormalTalk_Bottom("好的，今天也辛苦了。你们…实力每天都在突飞猛进。如果看到小精灵们这么努力，双弩精灵肯定会觉得很欣慰的。", 37, 3003275, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face1#嘿嘿，这都是练习的结果。那个… 迪纳卡，话说！", 37, 3003274, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face1#我想要向双弩精灵展示这段时间修炼的成果！听说她马上就要回埃欧雷了…", 37, 3003274, true, true);
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
                      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -90, 10);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_PushScaleInfo(3000, 2000, 3000, 5, 10);
                        } else {
                          if (status === V++) {
                            cm.setNpcSpecialActionReset("oid=1754640");
                            cm.npc_SetSpecialAction("oid=1754640", "smile", 0, 0);
                            cm.sendNormalTalk_Bottom("哈哈，刚好她也说要到修炼场来看看。她说这段时间没能关心你们，她觉得很遗憾。", 37, 3003275, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face1#呀吼！真的吗？我，一定会更加努力练习的！现在开始做什么呢？增加射箭练习？增加跑步练习？还是… 什么呢？", 37, 3003274, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("赫丽娜也真的。充满热情是件好事，但会不会太过头了？", 37, 3003275, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face1#请不要担心，迪纳卡。我永远都精力充沛。那么，明天见！走吧，路西德！", 37, 3003274, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom('好的，明天见。', 37, 3003275, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#请慢走。", 37, 3003270, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_SetForceMove("oid=1754638", 1, 350, 160);
                                        cm.npc_SetForceMove("oid=1754639", 1, 350, 160);
                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_PushScaleInfo(3000, 2000, 3000, 560, 10);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face1#只是想想就很期待，不是吗？我要发挥这段时间磨练的实力！而且还是在双弩精灵面前！", 37, 3003274, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_SetForceMove("oid=1754638", 1, 160, 160);
                                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_SetForceMove("oid=1754638", -1, 1, 160);
                                                cm.sendNormalTalk_Bottom("#face1#很好，从明天开始我要加强训练！你也一起吧，嗯？", 37, 3003274, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#好的，从明天开始…", 37, 3003270, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#那么今天就好好休息吧！嘿嘿，再见，路西德！", 37, 3003274, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#嗯嗯… 再见，赫丽娜。", 37, 3003270, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.npc_SetForceMove("oid=1754638", 1, 600, 200);
                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.npc_SetForceMove("oid=1754639", 1, 20, 160);
                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
                                                            cm.fieldEffect_InsertCanvas(1, 50, 0, 0, 0, 1300, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#……", 37, 3003270, false, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                } else if (status === V++) {
                                                                  cm.dispose();
                                                                  cm.warp(940200101, 0);
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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