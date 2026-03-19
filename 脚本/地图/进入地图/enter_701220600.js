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
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(9310596, "oid=6197621", 579, 209, 7, 529, 629, 0, true, false);
      cm.npc_SetSpecialAction("oid=6197621", 'summon', 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_同时移动镜头和人(2, 250);
        cm.inGameDirectionEvent_AskAnswerTime(1500);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("噢？这是哪里？没想到藏经阁还有这样的地方。\n等下，那边有什么声音。", 57, 0, false, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_同时移动镜头和人(2, 300);
            cm.inGameDirectionEvent_PushMoveInfo(0, 300, -165, 212);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(3734);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("方丈大师！！！！！！！！！！！", 57, 0, false, true);
              } else {
                if (status === V++) {
                  cm.npc_setForceFlip("oid=6197621", -1);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction_CN.img/effect/tuto/BalloonMsg0/13", "oid=6197621"], [1500, 0, -120, 1, 0, 1, 0, 0]);
                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                  } else {
                    if (status === V++) {
                      cm.npc_SetForceMove("oid=6197621", -1, 200, 100);
                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                    } else {
                      if (status === V++) {
                        cm.npc_setForceFlip("oid=6197621", 0);
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#fs25#呃，你来这里做什么……\n你给我立马从这里出去。", 37, 9310596, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("(居然在这种密室里设置了祭坛……而且，那个好像是[妖怪之书] 啊？\n虽然#p9310053#说没什么……但我总觉得不对劲。那可不是我所认识的那个慈祥的#p9310053#啊。)", 57, 0, true, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("啊，#p9310579#给了我能够区分人类和妖怪的镜子] ！让我来照一下看看……？", 57, 0, false, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_同时移动镜头和人(2, 250);
                                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                                    cm.gainItem(4034725, -1);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(1600);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_ProcessOnOffLayer("cut", "Map/EffectCN.img/shaolin/CutScean", 0, 500, 0, 0, 12, 4, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_ProcessOnOffLayer("cut", '', 2, 500, 0, 0, 0, 0, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(1600);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_ChangeController(9310582, "oid=6198090", 852, 209, 8, 802, 902, 0, false, false);
                                              cm.npc_SetSpecialAction("oid=6198090", "summon", 0, 0);
                                              cm.npc_ChangeController(9310583, "oid=6198091", 806, 209, 8, 756, 856, 0, false, false);
                                              cm.npc_SetSpecialAction("oid=6198091", "summon", 0, 0);
                                              cm.sendNormalTalk_Bottom('美狐！！贵鬼！！', 57, 0, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction_CN.img/effect/tuto/BalloonMsg0/14"], [1200, 0, -100, 0, 0, 0, 0, 0]);
                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("你居然……一直都在骗我！九尾狐和鬼怪也是你绑架的！！", 57, 0, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("这……真是麻烦……呵呵\n不对，我得感谢你，真是得谢谢你啊，哈哈哈", 37, 9310596, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("你这话是什么意思！", 57, 0, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("把这个力量给我的人不正是你吗！#fs25#我指的正是这本[妖怪之书]！！有了它，就拥有了能够随心所欲使用妖怪之力的力量！", 37, 9310596, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("那……那本书……！！！！", 57, 0, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("呵呵呵……你最好别再跟着我了！", 37, 9310596, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.npc_setForceFlip("oid=6197621", 1);
                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.npc_SetForceMove("oid=6197621", 1, 780, 200);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_MoveAction(2);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_MoveAction(0);
                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/Direction_CN.img/effect/tuto/BalloonMsg0/12", "oid=6197621"], [1500, 0, -120, 1, 0, 1, 0, 0]);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.npc_SetSpecialAction("oid=6197621", "teleportation", -1, 1);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.npc_LeaveField("oid=6197621");
                                                                          cm.npc_LeaveField("oid=6197621");
                                                                          cm.inGameDirectionEvent_头顶图片(["Effect/Direction_CN.img/effect/tuto/BalloonMsg0/15"], [2400, 0, -100, 0, 0, 0, 0, 0]);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                        } else if (status === V++) {
                                                                          cm.setInGameDirectionMode(false, true, false);
                                                                          cm.npc_LeaveField("oid=6198090");
                                                                          cm.npc_LeaveField("oid=6198090");
                                                                          cm.npc_LeaveField("oid=6198091");
                                                                          cm.npc_LeaveField("oid=6198091");
                                                                          cm.dispose();
                                                                          cm.warp(701220601, 2);
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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