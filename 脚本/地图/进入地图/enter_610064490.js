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
      cm.updateInfoQuest(61333, "act1=610061570;act2=610062450;act3=610063590;act4=610064490");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(9201536, "oid=2759057", 1468, 95, 64, 1418, 1518, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2759057", "summon", 0, 0);
      cm.npc_ChangeController(9201545, "oid=2759058", 1404, 95, 63, 1354, 1454, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2759058", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("找到了……接下来我们要怎么处理它？", 57, 0, false, true);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("我要把它藏起来，藏到很远很远的地方。\r\n履行我对绯红之心的承诺。", 37, 9201536, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("不摧毁它吗？", 57, 0, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("我有过这个打算……但考虑到我自身的能力和摧毁它产生的余波，还是放弃了。", 37, 9201536, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#别担心，我保证它不会再给你和你的世界带来麻烦。", 37, 9201536, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("卢坎……", 57, 0, true, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("绯红之心说，除了我以为的任何人都不可持有幻日。", 37, 9201536, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("但他并没有说不能分享它的力量。", 37, 9201536, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("因此，我想与你分享这份力量。\r\n幻日的力量。", 37, 9201536, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("怎么分享？", 57, 0, true, true);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(1600);
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
                                        cm.sendNormalTalk_Bottom('？', 57, 0, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("这就是我给你的临别礼物了。\r\n#b有空检查下背包吧。#k", 37, 9201536, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("什么……", 57, 0, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("嘿！你们在里面干什么呢，赶紧给我出来！", 37, 9201577, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("这地方是很危险的！", 37, 9201577, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("我们就在这里分别吧。\r\n我……不知道该说什么好了。", 37, 9201536, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("没关系，卢坎，我们会再见的。", 57, 0, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#既然这样，那我就期待那一天的来临吧。", 37, 9201536, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.npc_setForceFlip("oid=2759057", 1);
                                                            cm.npc_setForceFlip("oid=2759058", 1);
                                                            cm.npc_SetForceMove("oid=2759057", 1, 300, 200);
                                                            cm.npc_SetForceMove("oid=2759058", 1, 300, 200);
                                                            cm.inGameDirectionEvent_AskAnswerTime(3200);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.npc_LeaveField("oid=2759057");
                                                              cm.npc_LeaveField("oid=2759057");
                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.npc_LeaveField("oid=2759058");
                                                                cm.npc_LeaveField("oid=2759058");
                                                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                } else if (status === V++) {
                                                                  cm.eventSKill(0);
                                                                  cm.warp(610064500, 0, true);
                                                                  cm.setInGameDirectionMode(false, true, false);
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