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
      cm.npc_ChangeController(9400031, "oid=19779113", -410, 163, 269, -460, -360, 1, true, false);
      cm.npc_SetSpecialAction("oid=19779113", 'summon', 0, 0);
      cm.npc_ChangeController(9400032, "oid=19779114", -520, 169, 219, -570, -470, 1, true, false);
      cm.npc_SetSpecialAction("oid=19779114", "summon", 0, 0);
      cm.npc_ChangeController(9400033, "oid=19779115", -610, 181, 215, -660, -560, 0, true, false);
      cm.npc_SetSpecialAction("oid=19779115", 'summon', 0, 0);
      cm.npc_ChangeController(9400034, "oid=19779116", -701, 181, 228, -751, -651, 0, true, false);
      cm.npc_SetSpecialAction("oid=19779116", 'summon', 0, 0);
      cm.npc_ChangeController(9400035, "oid=19779117", 435, 13, 278, 385, 485, 1, true, false);
      cm.npc_SetSpecialAction("oid=19779117", "summon", 0, 0);
      cm.sendNormalTalk_Bottom("终于到了，我们快点搜集情报吧。", 37, 9400034, false, true);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNormalTalk_Bottom("嗯……我在这里看到了一个眼神飘忽的人啊？", 37, 9400033, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("谁？谁？", 37, 9400032, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("那边~大家都看到了吗？感觉他像是迷路的羔羊一样啊？", 37, 9400033, true, true);
          } else {
            if (status === V++) {
              cm.npc_setForceFlip("oid=19779113", 1);
              cm.npc_setForceFlip("oid=19779114", 1);
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushMoveInfo(0, 200, 358, 120);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(3344);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                  } else {
                    if (status === V++) {
                      cm.updateInfoQuest(49018, "QET=YFKM8dWB1QE$");
                      cm.updateInfoQuest(49018, "QET=YFKM8dWB1QE$");
                      cm.updateInfoQuest(49018, "QET=YFKM8dWB1QE$");
                      cm.forceStartQuest(49018, '');
                      cm.npc_SetForceMove("oid=19779113", 1, 720, 250);
                      cm.npc_setForceFlip("oid=19779113", 0);
                      cm.npc_SetForceMove("oid=19779114", 1, 770, 220);
                      cm.npc_setForceFlip("oid=19779114", 0);
                      cm.npc_SetForceMove("oid=19779115", 1, 790, 220);
                      cm.npc_SetForceMove("oid=19779116", 1, 840, 220);
                      cm.inGameDirectionEvent_同时移动镜头和人(2, 570);
                      cm.inGameDirectionEvent_AskAnswerTime(5000);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_PushScaleInfo(2000, 2000, 0, 358, 60);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1200);
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
                                  cm.sendNormalTalk_Bottom("你好！！你是不是弄丢了什么？", 37, 9400031, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("是动物呢……还是动物呢……", 37, 9400031, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom('嗬！你怎么知道！！', 37, 9400035, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("你都写在脸上了啊！（微笑~)", 37, 9400033, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("其实我们正在寻找失踪的动物。可以祈雨的叫做嘟嘟的青蛙和灵物乌龟奈奈。", 37, 9400031, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("而且，我们正在追查绑架犯……APORD。", 37, 9400031, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("我们是冒险岛第一的侦探团，我是代号BT！", 37, 9400031, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("这边是代号剑斗，代号神那！他们是我的同伴！", 37, 9400031, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face1#都让你别这么叫了……", 37, 9400032, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("这位是我的助手，代号#h0#！", 37, 9400031, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom('……', 57, 0, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("我身边的助手具备能解读动物语言的出色本领！！！", 37, 9400031, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("原来如此，我叫“陈”。其实我正在寻找灵灵。", 37, 9400035, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("代号陈！请你说得仔细点！", 37, 9400031, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("灵灵？", 37, 9400034, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#是的，它就像我的朋友一样……是只叫做灵灵的老虎。哼，只要一想起来，我就气得不得了。", 37, 9400035, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("灵灵是不是拥有什么能力呢？", 37, 9400031, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("这个嘛，我只是很喜欢这只老虎……现在想不起来它有什么能力。", 37, 9400035, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("但是，怎么会……", 37, 9400031, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("灵灵是我第一次来到冒险岛世界时遇到的朋友。我在森林里发现它受了伤，倒在地上，就给它治疗了一下。", 37, 9400035, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(2400);
                                                                        } else if (status === V++) {
                                                                          cm.inGameDirectionEvent_SetHideEffect(0);
                                                                          cm.eventSKill(0);
                                                                          cm.warp(867111022, 0, true);
                                                                          cm.setInGameDirectionMode(false, true, false);
                                                                          cm.setStandAloneMode(false);
                                                                          cm.npc_LeaveField("oid=19779113");
                                                                          cm.npc_LeaveField("oid=19779114");
                                                                          cm.npc_LeaveField("oid=19779115");
                                                                          cm.npc_LeaveField("oid=19779116");
                                                                          cm.npc_LeaveField("oid=19779117");
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;