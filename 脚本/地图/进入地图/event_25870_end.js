var status = -1;
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  status++;
  var V = cm.getJob();
  if (V == 6001 || V == 6500 || V == 6510 || V == 6511 || V == 6512) {
    action1(f, E, e);
  } else if (V == 6000 || V == 6100 || V == 6110 || V == 6111 || V == 6112) {
    action2(f, E, e);
  } else {
    cm.dispose();
  }
}
function action1(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.inGameDirectionEvent_MoveAction(1);
      cm.inGameDirectionEvent_AskAnswerTime(60);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_MoveAction(0);
        cm.npc_ChangeController(3000138, "oid=210381706", 1350, 0, 13, 1300, 1400, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=210381706", 'summon', 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(900);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushMoveInfo(0, 800, 1700, 0);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(900);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_OneTimeAction(62, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1500);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("(真的打不过他吗？狂龙战士和贝德罗斯被击到哪里去了？)", 17, 3000138, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("嗬嗬，有两下子，受了我的攻击竟还能坚持。是我真的变弱不少？还是你这家伙比较耐打？", 1, 3000138, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("麦格纳斯……我不会放过你！", 17, 3000138, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("小女娃挺有魄力嘛，我喜欢！", 1, 3000138, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("我讨厌你！！", 17, 3000138, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("虽说是个漂亮的小女娃，可你挑衅了我，绝不能轻饶。受死吧！！", 1, 3000138, true, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_头顶图片(["Effect/Direction10.img/effect/story/BalloonMsg0/2"], [1200, 0, -120, 0, 0, 0, 0, 0]);
                            cm.inGameDirectionEvent_AskAnswerTime(600);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_PushMoveInfo(0, 1000, 2100, 0);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                              } else {
                                if (status === V++) {
                                  cm.npc_ChangeController(3000107, "oid=210386837", 2200, 0, 8, 2150, 2250, 1, true, 0, false);
                                  cm.npc_SetSpecialAction("oid=210386837", "summon", 0, 0);
                                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction10.img/effect/story/BalloonMsg1/14", "oid=210386837"], [1200, 0, -120, 1, 0, 1, 0, 0]);
                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("麦格纳斯！！麦格纳斯在这里！！骑士团全员来这里集合！！", 1, 3000107, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_PushMoveInfo(0, 1000, 1650, 0);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk("是卡塔利安啊。之前的小毛孩长大许多嘛。现在我的情况占下风，就放你们一马，但今天的失败我不会忘记的。你们就尽情享受这一时的胜利吧。", 1, 3000138, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_SetSpecialAction("oid=210381706", "teleportation", 0, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(450);
                                          } else if (status === V++) {
                                            cm.npc_LeaveField("oid=210381706");
                                            cm.npc_LeaveField("oid=210381706");
                                            cm.forceStartQuest(25911, '1');
                                            cm.eventSKill(0);
                                            cm.setInGameDirectionMode(false, true, false);
                                            cm.npc_LeaveField("oid=210386837");
                                            cm.npc_LeaveField("oid=210386837");
                                            cm.dispose();
                                            cm.warp(400000000, 0, false);
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function action2(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.inGameDirectionEvent_MoveAction(1);
      cm.inGameDirectionEvent_AskAnswerTime(60);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_MoveAction(0);
        cm.npc_ChangeController(3000138, "oid=31071965", 1500, 0, 5, 1450, 1550, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=31071965", "summon", 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(900);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushMoveInfo(0, 800, 1650, -3);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(900);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_OneTimeAction(62, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1500);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("怎么会这样……他们三个一起攻上来，我却什么招式也使不出来。", 17, 3000138, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("(爆莉萌天使和贝德罗斯被刚才的攻击弹飞了？)", 17, 3000138, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("怎么，刚刚那副骄傲自信的气势怎么没了？", 1, 3000138, true, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_PushMoveInfo(0, 1000, 2100, -3);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                      } else {
                        if (status === V++) {
                          cm.npc_ChangeController(3000107, "oid=31072655", 2200, 0, 8, 2150, 2250, 1, true, 0, false);
                          cm.npc_SetSpecialAction("oid=31072655", 'summon', 0, 0);
                          cm.inGameDirectionEvent_头顶图片(["Effect/Direction9.img/effect/story/BalloonMsg1/16", "oid=31072655"], [1200, 0, -120, 1, 0, 1, 0, 0]);
                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("麦格纳斯！！麦格纳斯在这里！！骑士团全员来这里集合！！", 1, 3000107, false, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_PushMoveInfo(0, 1000, 1650, -3);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("是卡塔利安啊。之前的小毛孩长大许多嘛。现在我的情况占下风，就放你们一马，但今天的失败我不会忘记的。你们就尽情享受这一时的胜利吧。", 1, 3000138, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.npc_SetSpecialAction("oid=31071965", "teleportation", 0, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(450);
                                  } else if (status === V++) {
                                    cm.npc_LeaveField("oid=31071965");
                                    cm.npc_LeaveField("oid=31071965");
                                    cm.eventSKill(0);
                                    cm.setInGameDirectionMode(false, true, false);
                                    cm.npc_LeaveField("oid=31072655");
                                    cm.npc_LeaveField("oid=31072655");
                                    cm.dispose();
                                    cm.warp(400000000, 0, false);
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}