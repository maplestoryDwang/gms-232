var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  if (cm.getNumberFromQuestInfo(61340, 'c') > 0) {
    action2(f, E, e);
  } else {
    action1(f, E, e);
  }
}
function action1(f, E, e) {
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
      cm.npc_ChangeController(9201536, "oid=2825964", -514, 220, 10, -564, -464, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2825964", 'summon', 0, 0);
      cm.sendNormalTalk_Bottom("这个地方怎么跟炼狱一般？", 37, 9201536, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("那么多非自然光……还有那些钢铁怪物……它们还会动的？", 37, 9201536, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("这些都是我造的。\r\n这个道具尤其特别。", 37, 9201537, true, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -150, 130);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                cm.inGameDirectionEvent_AskAnswerTime(4000);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("它能够阅读并分析大脑发射的电子信号，\r\n挖掘出你埋藏最深的记忆。", 37, 9201537, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("这就是我要对你用的道具啦！\r\n我要阅读你的潜意识，弄明白你到底是什么人。", 37, 9201537, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("别担心。\r\n这一点儿都不危险，也不会痛。", 37, 9201537, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("我先问一句……你为何要帮助我？", 37, 9201536, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("如果是出于高尚的目的，那再好不过。\r\n但要是你图谋不轨……", 37, 9201536, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("有道理。\r\n说起来你到底为啥要分析全克拉齐亚的通讯啊？", 57, 0, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("你这不是在偷听大家的私生活么？", 57, 0, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom('嘿，嘿，嘿！', 37, 9201537, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("这是#b艾斯拜德·斯利姆#k市长对我下达的命令啊。\r\n唉，我本来应该保密的。", 37, 9201537, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("我向他报告了卢坎的讯息，\r\n他就命令我来帮卢坎了。", 37, 9201537, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("他也没解释为什么……就让我去帮他。", 37, 9201537, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("你应该保密的？", 57, 0, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("所以吧……你为啥要告诉我们？", 57, 0, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("……该死！\r\n嘿，其实吧？", 37, 9201537, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("这一切都没有发生过！\r\n你们从没有来过这儿！", 37, 9201537, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                      cm.effect_NormalSpeechBalloon("...", 1, 0, 0, 4500, 1, 0, -20, 0, 4, 0, null, cm.getPlayer().getId());
                                                      cm.effect_NormalSpeechBalloon("...", 1, 0, 0, 2400, 1, 0, 0, 0, 4, 9201536, null, cm.getPlayer().getId());
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("……行行好嘛？\r\n那啥，我就是奉命来帮你。\r\n仅此而已！", 37, 9201537, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("要是我拒绝市长，他会扣我的研究经费的。", 37, 9201537, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("总之，趁早完事吧。", 37, 9201537, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("你们各站到一台机器里去。\r\n具体怎么操作，我待会儿再解释。", 37, 9201537, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.npc_setForceFlip("oid=2825964", -1);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("你怎么看，我的朋友#h0#？\r\n我们能相信他吗？", 37, 9201536, false, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("关键是，我们也没有其他选择了。\r\n而且惹我们也没啥好处。", 57, 0, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("市长这人也不错。", 57, 0, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("那么，我就相信你和你的判断吧。", 37, 9201536, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.npc_setForceFlip("oid=2825964", 1);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(4200);
                                                                          } else if (status === V++) {
                                                                            cm.updateInfoQuest(61340, "c=1");
                                                                            cm.warp(610061220, 0, true);
                                                                            cm.eventSKill(0);
                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                            cm.npc_LeaveField("oid=2825964");
                                                                            cm.npc_LeaveField("oid=2825964");
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
}
function action2(f, E, e) {
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
      cm.npc_ChangeController(9201536, "oid=2826976", -514, 220, 10, -564, -464, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2826976", 'summon', 0, 0);
      cm.npc_SetForceMove("oid=2826976", 1, 200, 100);
      cm.addPopupSay(9201537, 2000, "你们各站到一台机器里去。\r\n具体怎么操作，我待会儿再解释。", '', 0);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
      cm.curNodeEventEnd(true);
    } else if (status === V++) {
      cm.eventSKill(0);
      cm.setInGameDirectionMode(false, true, false);
      cm.dispose();
    }
  }
}