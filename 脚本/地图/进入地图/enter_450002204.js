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
      cm.forceStartQuest(34200, '');
      cm.forceCompleteQuest(34200);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_同时移动镜头和人(2, 2);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 570, 70);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(3003167, "oid=1837056", 796, -64, 1, 746, 846, 1, true, false);
        cm.npc_SetSpecialAction("oid=1837056", "summon", 0, 0);
        cm.inGameDirectionEvent_MoveAction(4);
        cm.emotion(7, 900000);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(3000);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushScaleInfo(3000, 1000, 5000, 610, 20);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(3000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("吼吼！！", 37, 3003150, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("……。", 57, 0, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom('快醒醒！喵喵！', 37, 3003150, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("啊……可恶的小喵喵怎么老跑出来捣乱啊……", 37, 3003150, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("总之……要想让这家伙清醒，可能还得再#b来一记猛的#k。", 37, 3003150, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face1##fs50#嗬嗬！！", 37, 3003150, true, true);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_InsertCanvas(1, 300, 255, 255, 255, 0, 0);
                              cm.emotion(0, -1);
                              cm.inGameDirectionEvent_MoveAction(0);
                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                cm.sendNormalTalk_Bottom("#face0#你起来啦！怎么样，清醒了吗？哈哈！", 37, 3003150, false, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("怎么回事…… 我刚刚好像正打算过#b河#k吧……", 57, 0, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face1#噢！你清醒过来啦！没错，这里到处都是#b河水#k！哈哈！", 37, 3003150, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom('好像不是这条河……', 57, 0, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom('话说，你是谁…啊…？', 57, 0, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("啊！我是这啾啾岛#b最棒的英雄#k，同时也是#b族长#k，我兼具无人能及的#b智慧与力量#k，村民们都很#b敬重#k我……", 37, 3003150, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#我就是#b瑞昂#k！喵喵！", 37, 3003150, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("喵喵？", 57, 0, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("啊……！我只是我的口头语！你不要在意！", 37, 3003150, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("啊…我还在想你明明长得像#b狮子#k，为什么会喵喵、喵喵地叫呢……", 57, 0, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("嗬！什么啊！你不是长得像#b狮子#k，你就是#b狮子#k嘛？！", 57, 0, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_同时移动镜头和人(1, 50);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_同时移动镜头和人(2, 1);
                                                        cm.sendNormalTalk_Bottom("#face0##b狮子#k？那是什么？吃的吗？哈哈，确实听上去好像很好吃！", 37, 3003150, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("但是你干嘛站那么远？过来一点！我来看看#b穆托给你造成的伤口#k！", 37, 3003150, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("快走开！额啊啊！", 57, 0, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_同时移动镜头和人(1, 50);
                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_同时移动镜头和人(2, 1);
                                                                cm.sendNormalTalk_Bottom("#face0#呵呵！这家伙好像被#b穆托#k伤到了脑袋！哈哈！好吧！先和我一起到村里去吧！到村里去吃点东西，再好好休息一下，应该就能醒过来！", 37, 3003150, false, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("村…村庄？这里也有村庄吗？", 57, 0, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("嗯！那还用说！#b啾啾村庄#k非常美丽！好了！随我来吧！", 37, 3003150, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.npc_SetForceMove("oid=1837056", 1, 320, 250);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom('怎…怎么回事…？', 57, 0, false, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("是的……！和之前在冒险岛世界中见到的东西相比，#b会说话和双脚走路的狮子#k只能算是普普通通……", 57, 0, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("先跟他去看看吧！", 57, 0, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_同时移动镜头和人(2, 800);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                              } else if (status === V++) {
                                                                                cm.dispose();
                                                                                cm.warp(450002000, 0);
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
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;