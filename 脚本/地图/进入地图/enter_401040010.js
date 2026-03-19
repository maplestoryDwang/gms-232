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
      cm.setInGameDirectionMode(true, true, false);
      cm.inGameDirectionEvent_MoveAction(1);
      cm.inGameDirectionEvent_AskAnswerTime(30);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_MoveAction(0);
        cm.npc_ChangeController(3001011, "oid=1107699", -3187, 438, 12, -3237, -3137, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=1107699", "summon", 0, 0);
        cm.setSessionValue("kaiser", "1107699");
        cm.npc_ChangeController(3001016, "oid=1107700", -3137, 372, 22, -3187, -3087, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=1107700", "summon", 0, 0);
        cm.setSessionValue("pithas", "1107700");
        cm.npc_ChangeController(3001017, "oid=1107701", -3530, 432, 15, -3580, -3480, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=1107701", "summon", 0, 0);
        cm.setSessionValue("bel", '1107701');
        cm.npc_ChangeController(3001018, "oid=1107702", -2914, 364, 22, -2964, -2864, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=1107702", "summon", 0, 0);
        cm.setSessionValue("idea", "1107702");
        cm.npc_ChangeController(3000122, "oid=1107703", -3600, 372, 19, -3650, -3550, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=1107703", "summon", 0, 0);
        cm.setSessionValue("mob1", "1107703");
        cm.npc_ChangeController(3000122, "oid=1107704", -3700, 372, 14, -3750, -3650, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=1107704", 'summon', 0, 0);
        cm.setSessionValue("mob2", "1107704");
        cm.npc_ChangeController(3000122, "oid=1107705", -3800, 372, 11, -3850, -3750, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=1107705", "summon", 0, 0);
        cm.setSessionValue("mob3", '1107705');
        cm.npc_ChangeController(3000128, "oid=1107706", -3800, 124, 24, -3850, -3750, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=1107706", "summon", 0, 0);
        cm.setSessionValue('mob4', "1107706");
        cm.npc_ChangeController(3000125, "oid=1107707", -3708, 210, 33, -3758, -3658, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=1107707", "summon", 0, 0);
        cm.setSessionValue("mob5", "1107707");
        cm.sendNormalTalk("咦？黑市入口很吵嘛？尤兰斯哥……不对，尤兰斯为什么会提醒我呢？", 17, 0, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk('总之先去看看吧。', 17, 0, true, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(800);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_MoveAction(1);
              cm.inGameDirectionEvent_PushMoveInfo(0, 600, -3341, 452);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(2800);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(0);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("哇，这不是狂龙战士和贝德罗斯吗？怎么回事？先躲起来看个究竟。", 17, 3001100, false, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_MoveAction(4);
                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_PushMoveInfo(0, 600, -3341, 452);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1054);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("贝德罗斯……你怎么会和麦格纳斯的手下幽灵在一起？", 1, 3001011, false, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("呼，狂龙战士……你还记得第一次见麦格纳斯大人的情景吗？", 1, 3001017, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("你怎么突然这么说，什么麦格纳斯大人？", 1, 3001011, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("那时候，麦格纳斯大人正在逗弄觉醒为狂龙战士的你，看到他，我突然意识到，", 1, 3001017, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk("这才是真正强大的力量。", 1, 3001017, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk("之后我对一直以来追求的力量进行了思考。这种力量不是你，而是像麦格纳斯大人这样，绝对压倒性的强大力量。", 1, 3001017, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk("所以，你也要像麦格纳斯一样，背叛诺巴，成为麦格纳斯的手下吗？", 1, 3001011, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk("说话注意点，狂龙战士。再直呼一次麦格纳斯大人的大名，我的剑将带着无言的愤怒，把你的铠甲撕个稀巴烂。", 1, 3001017, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk("麦格纳斯大人的力量远远超过你的想象，他正在为实现远大理想而奋斗。和他在一起，会对真正的力量产生新的认识。", 1, 3001017, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk("从不守护任何事物，而只是把破坏作为目标的力量，怎么能称之为真正的力量， 贝德罗斯……麦格纳斯，那家伙沉醉于虚无的力量之中，背叛众人，视破坏为本职。", 1, 3001011, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk("哼，又这么称呼一次。你是听不懂警告啊。就是这样才……出手吧，狂龙战士。让你见识见识力量的差距。如果和我1:1决斗中，你能获得胜利，我就暂时放过你和那些你要守护的弱小家伙们。", 1, 3001017, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk("…我不想和你打，贝德罗斯。", 1, 3001011, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk("怎么，要重新思考了吗？难不成，天下独一无二的狂龙战士被我这个微不足道的骑士给吓到了？嗬哈哈。我也不想和摇尾乞怜的小狗打架。没办法了。只能让你和那些软骨关们一起去死啦。", 1, 3001017, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk("不能继续被你侮辱啦。从现在开始，你不再是我的朋友！放马过来吧，贝德罗斯。让我看看你那了不起的力量！", 1, 3001011, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk("现在决定开打了吗？嗬哈哈。让我来，教你一招吧！", 1, 3001017, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.npc_SetForceMove("oid=1107699", -1, 200, 100);
                                                            cm.npc_SetForceMove("oid=1107701", 1, 200, 100);
                                                            cm.fieldEffect_ScreenMsg("demonSlayer/whiteOut");
                                                            cm.inGameDirectionEvent_AskAnswerTime(3600);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.npc_SetForceMove("oid=1107699", 1, 200, 100);
                                                              cm.npc_SetForceMove("oid=1107701", -1, 200, 100);
                                                              cm.inGameDirectionEvent_AskAnswerTime(3600);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.npc_SetForceMove("oid=1107699", -1, 1, 100);
                                                                cm.npc_SetForceMove("oid=1107701", 1, 1, 100);
                                                                cm.inGameDirectionEvent_AskAnswerTime(600);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.fieldEffect_ScreenMsg("demonSlayer/whiteIn");
                                                                  cm.inGameDirectionEvent_AskAnswerTime(2100);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk("不错嘛，狂龙战士。比以前强多了。不过就你这点力量，在麦格纳斯可算不了什么。", 1, 3001017, false, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk("今天就先到这里吧？和你身边那些胆小鬼一起，瑟瑟发抖着等死吧。嗬哈哈！好了，全体撤退。", 1, 3001017, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(240);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.npc_LeaveField("oid=1107703");
                                                                          cm.inGameDirectionEvent_AskAnswerTime(240);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.npc_LeaveField("oid=1107704");
                                                                            cm.inGameDirectionEvent_AskAnswerTime(240);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.npc_LeaveField("oid=1107705");
                                                                              cm.inGameDirectionEvent_AskAnswerTime(240);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.npc_LeaveField("oid=1107706");
                                                                                cm.inGameDirectionEvent_AskAnswerTime(240);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.npc_LeaveField("oid=1107707");
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk("虽然这次失败了，但下次，下次我一定要把你这家伙献给 麦格纳斯大人。", 1, 3001017, false, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.npc_LeaveField("oid=1107701");
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk("也许是敌人的陷阱，狂龙战士。这次的行动太危险了。", 1, 3001018, false, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk("不过贝德罗斯在这大言不惭说了半天，也算拖延了一些时间。", 1, 3001018, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk("不要在意伊黛娜的话，狂龙战士！那家伙居然敢说这种话，就得教训教训她！干的好，狂龙战士！咯咯咯！", 1, 3001016, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk("贝德罗斯…", 1, 3001011, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.npc_LeaveField("oid=1107699");
                                                                                                    cm.npc_LeaveField("oid=1107700");
                                                                                                    cm.npc_LeaveField("oid=1107702");
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(0);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk("贝德罗斯？怎么会变成那样……", 17, 3001011, false, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk("#b#p3001100##k应该知道事情是怎么回事吧？", 17, 3001011, true, true);
                                                                                                      } else if (status === V++) {
                                                                                                        cm.forceStartQuest(31663, '1');
                                                                                                        cm.dispose();
                                                                                                        cm.warp(401040001, 0, false);
                                                                                                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
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
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}