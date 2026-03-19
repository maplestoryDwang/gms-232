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
      cm.inGameDirectionEvent_SetHideEffect(0);
      cm.fieldEffect_PlayBGM("Bgm22.img/PowerStation", 0, 0);
      cm.npc_ChangeController(2159435, "oid=1136640", 315, 10, 3, 265, 365, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=1136640", "summon", 0, 0);
      cm.npc_ChangeController(2159436, "oid=1136641", 230, 10, 5, 180, 280, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=1136641", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(500);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNormalTalk("怎么回事，弗朗西斯！你人偶的线缠到我身上了！", 1, 2159436, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("哎呀，是你妨碍了本天才的攻击！", 1, 2159435, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("你们俩全都给我停下！格里梅尔是谁？你们所说的复活又是怎么回事？快跟我说清楚。", 17, 2159435, true, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("呵呵……长这么大，竟然被这种小毛孩威胁。你以为我们刚才尽全力了吗？", 1, 2159436, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("没错，我们还没有展现真正的力量呢。你不知道我发挥出真正力量的时候有多可怕吧？", 1, 2159435, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("看你好像是刚成为骑士的小毛孩……以你那种实力竟敢入侵这里，笑死人了。", 1, 2159436, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk('没错，没错。', 1, 2159435, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("你给我让开，弗朗西斯。", 1, 2159436, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("……嗯。", 1, 2159435, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("玩笑开得差不多了，该结束了。", 1, 2159436, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("你没发现吗？我是怕你逃走，才故意和你周旋两下的……你已经是瓮中之鳖了。", 1, 2159436, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk('#b(……！)#k', 17, 2159436, true, true);
                              } else {
                                if (status === V++) {
                                  cm.npc_ChangeController(2159437, "oid=1136647", 600, 10, 6, 550, 650, 1, true, 0, false);
                                  cm.npc_SetSpecialAction("oid=1136647", "summon", 0, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(100);
                                } else {
                                  if (status === V++) {
                                    cm.npc_ChangeController(2159437, "oid=1136648", 400, 10, 4, 350, 450, 1, true, 0, false);
                                    cm.npc_SetSpecialAction("oid=1136648", "summon", 0, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(100);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_ChangeController(2159437, "oid=1136649", 400, -290, 21, 350, 450, 1, true, 0, false);
                                      cm.npc_SetSpecialAction("oid=1136649", "summon", 0, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(100);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_ChangeController(2159437, "oid=1136652", 500, -290, 23, 450, 550, 1, true, 0, false);
                                        cm.npc_SetSpecialAction("oid=1136652", "summon", 0, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(100);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_ChangeController(2159437, "oid=1136653", 800, 10, 8, 750, 850, 1, true, 0, false);
                                          cm.npc_SetSpecialAction("oid=1136653", "summon", 0, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(100);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_ChangeController(2159437, "oid=1136654", 500, 10, 7, 450, 550, 1, true, 0, false);
                                            cm.npc_SetSpecialAction("oid=1136654", "summon", 0, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(100);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_ChangeController(2159437, "oid=1136655", 700, 10, 9, 650, 750, 1, true, 0, false);
                                              cm.npc_SetSpecialAction("oid=1136655", "summon", 0, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(100);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_ChangeController(2159437, "oid=1136656", 300, -290, 22, 250, 350, 1, true, 0, false);
                                                cm.npc_SetSpecialAction("oid=1136656", "summon", 0, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(100);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_PushMoveInfo(0, 200, 400, -50);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1672);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(100);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(0);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk("#b(哎呀……好像进入黑色之翼的巢穴太深了。)#k", 17, 2159436, false, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk("呵呵呵……你最好还是别想逃走。在你乱打一气的时候，周围已经被包围了。", 1, 2159436, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk("哇，你真聪明……真不愧是个大坏蛋，巴洛克。", 1, 2159435, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk("别吵，弗朗西斯。\n\r\n好了，我们该怎么料理这位新手骑士大爷呢？", 1, 2159436, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk("……嗯，先把他倒吊在我的房间里，然后我们再好好想想。刚好我对冒险骑士团没什么好感……呵呵呵。", 1, 2159436, false, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.npc_SetForceMove("oid=1136641", -1, 30, 100);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk("……咦？！", 1, 2159436, false, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.fieldEffect_PlayBGM("Bgm22.img/UndergroundPlace", 0, 0);
                                                                            cm.npc_ChangeController(2159382, "oid=1136661", 100, -290, 20, 50, 150, 0, true, 0, false);
                                                                            cm.npc_SetSpecialAction("oid=1136661", "summon", 0, 0);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.npc_ChangeController(2159388, "oid=1136662", -30, 10, 14, -80, 20, 0, false, 0, false);
                                                                              cm.npc_SetSpecialAction("oid=1136662", "summon", 0, 0);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.npc_ChangeController(2159386, "oid=1136663", -100, 10, 13, -150, -50, 0, true, 0, false);
                                                                                cm.npc_SetSpecialAction("oid=1136663", "summon", 0, 0);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.npc_ChangeController(2159385, "oid=1136664", -200, 10, 15, -250, -150, 0, false, 0, false);
                                                                                  cm.npc_SetSpecialAction("oid=1136664", "summon", 0, 0);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.npc_ChangeController(2159387, "oid=1136665", 0, -290, 31, -50, 50, 0, true, 0, false);
                                                                                    cm.npc_SetSpecialAction("oid=1136665", "summon", 0, 0);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_PushMoveInfo(0, 180, 180, -50);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(737);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk("喂，黑色之翼的干部大爷们，好久不见！", 1, 2159385, false, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk("啊啊啊，怎么来了这么多可怕的家伙……！", 1, 2159435, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk("切……可恶的家伙们！", 1, 2159436, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk("队长，该怎么办呢？虽然可以在这里教训教训他们，但是也许会有更强的家伙出现。", 1, 2159386, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk("没错，现在不是打架的时候。带上这个只知道惹麻烦的骑士，先撤退吧。", 1, 2159382, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk("OK，队长的判断总是对的。", 1, 2159388, true, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk("#b(这些人是……反抗者？但是怎么感觉这么眼熟呢？？)#k", 17, 2159388, true, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk('哼，打算逃走了吗！', 1, 2159436, true, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk("竟然说我们逃走？这只是战略撤退而已。下次一定会好好收拾你们的，别担心。明白了吗？你这个塌肩膀。", 1, 2159385, true, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk('塌，塌肩膀……？', 1, 2159436, true, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk('好了，准备撤退！', 1, 2159382, true, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk("OK，交给我吧！", 1, 2159387, true, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/tuto/smog", 'oid=0'], [3300, 550, 0, 1, 0, 1, 1, 0, 0]);
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(3300);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.npc_LeaveField("oid=1136661");
                                                                                                                      cm.npc_LeaveField("oid=1136664");
                                                                                                                      cm.npc_LeaveField("oid=1136665");
                                                                                                                      cm.npc_LeaveField("oid=1136662");
                                                                                                                      cm.npc_LeaveField("oid=1136663");
                                                                                                                      cm.inGameDirectionEvent_SetHideEffect(1);
                                                                                                                      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(800);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.fieldEffect_PlayBGM("Bgm22.img/LowGradeOre", 0, 0);
                                                                                                                        cm.inGameDirectionEvent_PushMoveInfo(0, 180, 300, -50);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(667);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk("那个熊仔的面具……真想要……", 1, 2159435, false, true);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk("都这个时候了还说什么人偶！", 1, 2159436, true, true);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                } else if (status === V++) {
                                                                                                                                  cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                                  cm.setInGameDirectionMode(false, true, false);
                                                                                                                                  cm.npc_LeaveField("oid=1136640");
                                                                                                                                  cm.npc_LeaveField("oid=1136641");
                                                                                                                                  cm.npc_LeaveField("oid=1136647");
                                                                                                                                  cm.npc_LeaveField("oid=1136648");
                                                                                                                                  cm.npc_LeaveField("oid=1136649");
                                                                                                                                  cm.npc_LeaveField("oid=1136652");
                                                                                                                                  cm.npc_LeaveField("oid=1136653");
                                                                                                                                  cm.npc_LeaveField("oid=1136654");
                                                                                                                                  cm.npc_LeaveField("oid=1136655");
                                                                                                                                  cm.npc_LeaveField("oid=1136656");
                                                                                                                                  cm.dispose();
                                                                                                                                  cm.warp(930030010, 0, false);
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}