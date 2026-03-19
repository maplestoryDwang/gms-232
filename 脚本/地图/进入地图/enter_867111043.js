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
      cm.npc_ChangeController(9400031, "oid=19789113", -300, 316, 3, -350, -250, 0, true, false);
      cm.npc_SetSpecialAction("oid=19789113", 'summon', 0, 0);
      cm.npc_ChangeController(9400032, "oid=19789114", -100, 316, 9, -150, -50, 0, true, false);
      cm.npc_SetSpecialAction("oid=19789114", "summon", 0, 0);
      cm.npc_ChangeController(9400033, "oid=19789115", 100, 316, 13, 50, 150, 1, true, false);
      cm.npc_SetSpecialAction("oid=19789115", "summon", 0, 0);
      cm.npc_ChangeController(9400034, "oid=19789116", 0, 316, 15, -50, 50, 1, true, false);
      cm.npc_SetSpecialAction("oid=19789116", "summon", 0, 0);
      cm.npc_ChangeController(9400035, "oid=19789117", -180, 316, 9, -230, -130, 0, true, false);
      cm.npc_SetSpecialAction("oid=19789117", 'summon', 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(500);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNormalTalk_Bottom("好，赏金也分完了，现在怎么办？", 37, 9400034, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("我还得处理剩下的那些家伙。宇宙飞船还没有停止运转，还在继续生产克隆动物。", 37, 9400034, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#那么……我也……为了不再发生灵灵那样的事情，我来帮你吧。在这里搜查一下，应该就能找到解决问题的办法。", 37, 9400035, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("我们得先回枫叶山丘，说明之前的事情经过。", 37, 9400032, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("我还得消灭宇宙飞船中剩下的克隆动物。", 37, 9400033, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("那你们是要我一个人走吗……", 37, 9400032, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("我们是照顾你，为了让你能和奈奈两个人单独在一起。", 37, 9400033, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("我才不需要这种照顾……", 37, 9400032, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face2#我也要和你们一起留在这里，搜查宇宙飞船，找到解决的方法。", 37, 9400031, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("好，大家出发吧。", 37, 9400034, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("啊，等等……等一下！！", 37, 9400031, true, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                              if (status === V++) {
                                cm.npc_SetForceMove("oid=19789113", 1, 30, 150);
                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                              } else {
                                if (status === V++) {
                                  cm.npc_setForceFlip("oid=19789114", -1);
                                  cm.npc_setForceFlip("oid=19789117", -1);
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom('？？', 57, 0, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("那个……不知道你们还记不记得……", 37, 9400031, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("我们不是一起消灭了宇宙APORD，经历了困难的同伴吗？", 37, 9400031, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face2#我们就进行一下正式成立橡果侦探团的仪式吧！怎么样？", 37, 9400031, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face2#我觉得能这样和冒险岛的英雄们在一起，是我的荣幸。", 37, 9400031, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("啊，你之前说的侦探团啊……", 37, 9400035, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("我们很忙啊，一定要做这种事情吗……？", 37, 9400034, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("别到了最后还耍脾气嘛……大家都要走上各自的道路，我们就再活跃一次嘛~", 37, 9400032, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face2#啊，只要一下下就行！大家一起唱一次主题歌吧！", 37, 9400031, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face2#我已经写好了，我们的主题歌！来来，一起唱吧！开始……！", 37, 9400031, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.npc_SetSpecialAction("oid=19789113", "fighting", -1, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                      } else if (status === V++) {
                                                        cm.inGameDirectionEvent_SetHideEffect(0);
                                                        cm.eventSKill(0);
                                                        cm.warp(867111044, 0, true);
                                                        cm.setInGameDirectionMode(false, true, false);
                                                        cm.setStandAloneMode(false);
                                                        cm.npc_LeaveField("oid=19789113");
                                                        cm.npc_LeaveField("oid=19789114");
                                                        cm.npc_LeaveField("oid=19789115");
                                                        cm.npc_LeaveField("oid=19789116");
                                                        cm.npc_LeaveField("oid=19789117");
                                                        cm.dispose();
                                                        cm.forceCompleteQuest(59739);
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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