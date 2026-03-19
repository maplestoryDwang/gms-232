var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  if (cm.isQuestFinished(15417)) {
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
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1800, 0, -2500, 30);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(300);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1500);
          cm.effect_Text(["#fn黑体##fs18#在不远的过去……魔族的营地"], [100, 1500, 6, -50, -50, 1, 4, 0, 0, 0, 0]);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.npc_ChangeController(1540917, "oid=11951259", -2970, 20, 20, -3020, -2920, 0, true, 0, false);
            cm.npc_SetSpecialAction("oid=11951259", "summon", 0, 0);
            cm.npc_ChangeController(1540918, "oid=11951260", -2300, -20, 27, -2350, -2250, 1, true, 0, false);
            cm.npc_SetSpecialAction("oid=11951260", "summon", 0, 0);
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1200);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1400);
            } else {
              if (status === V++) {
                cm.npc_SetForceMove("oid=11951259", 1, 320, 250);
                cm.inGameDirectionEvent_AskAnswerTime(2000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("阿尔提多！你怎么一个人来了？戴米安怎么样了？", 45, 1540918, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("去召集……士兵……", 37, 1540917, true, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(300);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                          cm.npc_LeaveField("oid=11951259");
                          cm.npc_LeaveField("oid=11951259");
                          cm.npc_LeaveField("oid=11951260");
                          cm.npc_LeaveField("oid=11951260");
                          cm.npc_ChangeController(1540917, "oid=11951661", -2858, -283, 1, -2908, -2808, 0, true, 0, false);
                          cm.npc_SetSpecialAction("oid=11951661", "summon", 0, 0);
                          cm.npc_ChangeController(1540918, "oid=11951662", -2200, -4, 27, -2250, -2150, 1, true, 0, false);
                          cm.npc_SetSpecialAction("oid=11951662", "summon", 0, 0);
                          cm.npc_ChangeController(1540919, "oid=11951663", -2280, -4, 27, -2330, -2230, 1, true, 0, false);
                          cm.npc_SetSpecialAction("oid=11951663", "summon", 0, 0);
                          cm.npc_ChangeController(1540919, "oid=11951664", -2360, -4, 27, -2410, -2310, 1, true, 0, false);
                          cm.npc_SetSpecialAction("oid=11951664", 'summon', 0, 0);
                          cm.npc_ChangeController(1540920, "oid=11951665", -2440, -4, 26, -2490, -2390, 1, true, 0, false);
                          cm.npc_SetSpecialAction("oid=11951665", "summon", 0, 0);
                          cm.npc_ChangeController(1540920, "oid=11951666", -2520, -4, 26, -2570, -2470, 1, true, 0, false);
                          cm.npc_SetSpecialAction("oid=11951666", "summon", 0, 0);
                          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1100, 0, -2639, -50);
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
                                cm.sendNormalTalk_Bottom("诸位……有个令人悲伤的消息要告诉大家……", 45, 1540917, false, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("戴米安……被敌人#r打败#k了。", 45, 1540917, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("什么……？你说戴米安……被打败了……！", 45, 1540918, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("你们应该还记得，要建造一个让我们#b混血魔族#k认可的世界……\r\n这曾是#b戴米安许诺的约定#k。", 45, 1540917, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("但是戴米安的这个用#r强大力量#k向世人宣誓我们存在的理想……\r\n却在#r更强大的力量#k面前受挫了。", 45, 1540917, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("也许……光靠我们的力量，就想要证明我们的这个#r尝试本身#k就是个错误……", 45, 1540917, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#b我们的旅途#k就只能到这里了……", 45, 1540917, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("所有士兵整理好营地。\r\n我们将返回故乡#b绯红#k……", 45, 1540917, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_LeaveField("oid=11951661");
                                                  cm.npc_LeaveField("oid=11951661");
                                                  cm.npc_LeaveField("oid=11951662");
                                                  cm.npc_LeaveField("oid=11951662");
                                                  cm.npc_LeaveField("oid=11951663");
                                                  cm.npc_LeaveField("oid=11951663");
                                                  cm.npc_LeaveField("oid=11951664");
                                                  cm.npc_LeaveField("oid=11951664");
                                                  cm.npc_LeaveField("oid=11951665");
                                                  cm.npc_LeaveField("oid=11951665");
                                                  cm.npc_LeaveField("oid=11951666");
                                                  cm.npc_LeaveField("oid=11951666");
                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                  cm.npc_ChangeController(1540917, "oid=11952282", -1560, -4, 25, -1610, -1510, 0, true, 0, false);
                                                  cm.npc_SetSpecialAction("oid=11952282", 'summon', 0, 0);
                                                  cm.npc_ChangeController(1540918, "oid=11952283", -1340, -4, 25, -1390, -1290, 1, true, 0, false);
                                                  cm.npc_SetSpecialAction("oid=11952283", "summon", 0, 0);
                                                  cm.npc_ChangeController(1540919, "oid=11952284", -1000, -4, 21, -1050, -950, 1, true, 0, false);
                                                  cm.npc_SetSpecialAction("oid=11952284", "summon", 0, 0);
                                                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1800, 0, -1500, 30);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(1300);
                                                      cm.effect_Text(["#fn黑体##fs18#几个小时后……"], [100, 1800, 6, -50, -50, 1, 4, 0, 0, 0, 0]);
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
                                                            cm.sendNormalTalk_Bottom("阿尔提多……#b返回#k准备已经结束了……", 45, 1540918, false, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("好吧……我们来这里已经很长时间了……\r\n回去吧，回到等待我们的#b家人#k怀里……", 45, 1540917, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.npc_SetForceMove("oid=11952284", -1, 400, 250);
                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("阿尔提多，请#r稍等#k片刻！！", 37, 1540919, false, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom('部分士兵消失不见了！', 37, 1540919, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("这是什么意思？", 45, 1540917, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("我也不知道……每个部队都有#r相当一部分人#k消失不见了。\r\n根据报告，据说有一部分人再次回到了#r世界树#k。", 37, 1540919, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("此事真是蹊跷……我要#r亲自去确认一下。#k\r\n你继续做好#b回去的准备#k，在这里等待。", 45, 1540917, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                            } else if (status === V++) {
                                                                              cm.warp(105300305, 0, true);
                                                                              cm.npc_LeaveField("oid=11952282");
                                                                              cm.npc_LeaveField("oid=11952282");
                                                                              cm.npc_LeaveField("oid=11952283");
                                                                              cm.npc_LeaveField("oid=11952283");
                                                                              cm.npc_LeaveField("oid=11952284");
                                                                              cm.npc_LeaveField("oid=11952284");
                                                                              cm.dispose();
                                                                              cm.updateInfoQuest(15417, "first=1");
                                                                              cm.forceStartQuest(15417, '');
                                                                              cm.forceCompleteQuest(15417);
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1800, 0, -2460, 30);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(300);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1500);
          cm.effect_Text(["#fn黑体##fs18#现在……魔族的营地"], [100, 1500, 6, -50, -50, 1, 4, 0, 0, 0, 0]);
        } else {
          if (status === V++) {
            cm.npc_ChangeController(1540917, "oid=11955115", -1750, 20, 23, -1800, -1700, 1, true, 0, false);
            cm.npc_SetSpecialAction("oid=11955115", "summon", 0, 0);
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1200);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1400);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("刚刚……那个#b幻影#k……是怎么回事？", 57, 0, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("你……难道就是听到了我的口信的#b战士#k吗？", 45, 1540917, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom('你是谁？', 57, 0, false, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_同时移动镜头和人(2, 500);
                        cm.inGameDirectionEvent_PushScaleInfo(1500, 0, 1800, 1500, -1860, 30);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1800);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("你是？！刚刚幻影里的……！", 57, 0, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("收起你的#r杀气#k……\r\n我会召唤你并不是为了和你作战。", 45, 1540917, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("现在这里只留下了我和少数我的贴身护卫，\r\n我已经先行将幻影中所见到的我的那些部下全都送回了故乡#b绯红#k。", 45, 1540917, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("可是决心留下来的我的#r剩余部下#k……\r\n正打算复活戴米安所拥有的#r魔剑之力#k，再次让世界树堕落下去。", 45, 1540917, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("他们都是我#r亲手训练出来的……#k我实在是不忍心亲手去解决了他们。\r\n如果不能消灭了他们，我也不能#r放任他们独自待下去……#k\r\n这毕竟是我播下的恶种……", 45, 1540917, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#b这个世界最强的战士#k啊……我请求你，\r\n希望能借助你的力量，让我从前的部下找回#r战士最后的荣光#k。", 45, 1540917, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("这也是……我这个没出息的指挥官能够送给那些部下的#r最后的礼物#k了……", 45, 1540917, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("即便是为了阻止你们的世界再次遭遇#r战争的威胁#k……\r\n也请你一定要答应我的请求。", 45, 1540917, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("如果你需要帮助就来找我，毕竟我是最了解他们的……\r\n在这里的状况全都解决之前，我会#r一直留在这里的。#k", 45, 1540917, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                              } else if (status === V++) {
                                                cm.eventSKill(0);
                                                cm.setInGameDirectionMode(false, true, false);
                                                cm.npc_LeaveField("oid=11955115");
                                                cm.npc_LeaveField("oid=11955115");
                                                cm.dispose();
                                                cm.warp(105300000, 0, true);
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}