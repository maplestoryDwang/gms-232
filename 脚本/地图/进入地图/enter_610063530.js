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
      cm.updateInfoQuest(61333, "act1=610061570;act2=610062450;act3=610063530");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(9201539, "oid=2733182", -1830, 837, 1, -1880, -1780, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2733182", 'summon', 0, 0);
      cm.npc_ChangeController(9201535, "oid=2733183", -919, 772, 3, -969, -869, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2733183", "summon", 0, 0);
      cm.npc_ChangeController(9201546, "oid=2733184", -1250, 772, 3, -1300, -1200, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2733184", "summon", 0, 0);
      cm.inGameDirectionEvent_同时移动镜头和人(2, 300);
      cm.inGameDirectionEvent_AskAnswerTime(6200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -1100, 800);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1200);
            } else {
              if (status === V++) {
                cm.npc_SetForceMove("oid=2733184", 1, 50, 50);
                cm.sendNormalTalk_Bottom("又在烦恼了，父亲？", 37, 9201546, false, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                } else {
                  if (status === V++) {
                    cm.npc_setForceFlip("oid=2733183", -1);
                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("是的，纳瑞坎一日在外，我的烦恼就一日不减啊。", 37, 9201535, false, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("今天你不是应该去为母亲扫墓吗？\r\n大家都去了。", 37, 9201546, false, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                          } else {
                            if (status === V++) {
                              cm.npc_setForceFlip("oid=2733183", 1);
                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("我……忘了今天是她的忌日。", 37, 9201535, false, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("你没必要说谎。\r\n我知道你自从她去世后就一直数着日子。", 37, 9201546, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom('……', 37, 9201535, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_SetForceMove("oid=2733184", 1, 50, 50);
                                      cm.inGameDirectionEvent_AskAnswerTime(2200);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face1#我很想念母亲。", 37, 9201546, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face1#我也想她，儿子。", 37, 9201535, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_setForceFlip("oid=2733183", -1);
                                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face1#我也想啊。", 37, 9201535, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("纳瑞坎也跟我们承受着同等的痛苦，因此他才会那样。", 37, 9201546, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("或许我们能设法感化他……", 37, 9201546, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("你太天真了。\r\n我都见过他无数次了。\r\n他顽固得很，你是说服不了他的。", 37, 9201535, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("你得意识到，我们家对纳瑞坎的耐心在日渐减少。", 37, 9201546, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("我越来越多地听到斥责他的话了。", 37, 9201546, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("除非你立刻行动，不然我们迟早兄弟相残。\r\n这是我们都不愿意看到的。", 37, 9201546, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom('……', 37, 9201535, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.npc_SetForceMove("oid=2733184", 1, 50, 100);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("你要我如何帮你，父亲。\r\n我绝不推辞。", 37, 9201546, false, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.npc_setForceFlip("oid=2733183", 1);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.npc_setForceFlip("oid=2733183", -1);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("那就跟我来吧。", 37, 9201535, false, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom('什么地点？', 37, 9201546, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.npc_SetForceMove("oid=2733183", -1, 20, 50);
                                                                                      cm.sendNormalTalk_Bottom("我爱着我所有的孩子，但纳瑞坎在我心中一直很特殊。", 37, 9201535, false, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("你知道这点吧，苏巴尼？", 37, 9201535, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("知道。", 37, 9201546, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("我一直打算让他或者你当下一任幻日守护者。", 37, 9201535, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("充满慈悲之心……而又无比强大的守护者。", 37, 9201535, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom('……', 37, 9201546, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("纳瑞坎不会是最后一个想得到幻日的人呢。\r\n这里永远不会缺想要将幻日据为己有的野心家。", 37, 9201535, false, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.npc_setForceFlip("oid=2733183", 1);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("或许反转界没有幻日会更好。", 37, 9201535, false, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom('父亲，你不会是想……', 37, 9201546, true, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.npc_setForceFlip("oid=2733183", -1);
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("我已经通知了议会。\r\n即将把幻日转移到更安全的地点。", 37, 9201535, false, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("什么地点？", 37, 9201546, true, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("我发现了一个符合我们需求的遥远世界。\r\n将会和我最信任的几个人带着幻日一起前往那里。", 37, 9201535, true, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("我明白，父亲。\r\n我愿意遵从你的决定……但要是纳瑞坎依然紧追不舍呢？到时候该怎么办？", 37, 9201546, true, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("纳瑞坎已经拥有了一块幻日碎片。\r\n他现在跟我们一样能自由在时空中穿行。", 37, 9201546, true, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("那我就用幻日的力量驱逐他。\r\n永远驱逐。", 37, 9201535, false, true);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom('……', 37, 9201546, true, true);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("如果事情真的发展到这种地步，你必须告诉大家，说我杀了他。", 37, 9201535, false, true);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom("虽然我可能会为此送命……但我无法亲手杀死我的儿子。", 37, 9201535, true, true);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("父亲，你在说什么呢！\r\n纳瑞坎绝不会伤害你的！", 37, 9201546, true, true);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.npc_setForceFlip("oid=2733183", 1);
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.sendNormalTalk_Bottom("纳瑞坎并不打算对我们手下留情，我也要做好最坏的打算。", 37, 9201535, false, true);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("他可能会取下我的首级……甚至还会试图取下你的，苏巴尼。", 37, 9201535, true, true);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.sendNormalTalk_Bottom("怎么会……", 37, 9201546, true, true);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("不，你要抛弃你那些天真的想法。\r\n学着接受残酷的真相。", 37, 9201535, true, true);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.npc_setForceFlip("oid=2733183", -1);
                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.npc_SetForceMove("oid=2733183", -1, 350, 100);
                                                                                                                                                          cm.npc_setForceFlip("oid=2733184", -1);
                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(3200);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.npc_LeaveField("oid=2733183");
                                                                                                                                                            cm.npc_LeaveField("oid=2733183");
                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.sendNormalTalk_Bottom('纳瑞……', 37, 9201546, false, true);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.npc_SetForceMove("oid=2733184", -1, 250, 100);
                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.npc_LeaveField("oid=2733184");
                                                                                                                                                                    cm.npc_LeaveField("oid=2733184");
                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                                                        } else {
                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                            cm.npc_ChangeController(9201567, "oid=2736740", -1490, 842, 1, -1540, -1440, 1, true, 0, false);
                                                                                                                                                                            cm.npc_SetSpecialAction("oid=2736740", 'summon', 0, 0);
                                                                                                                                                                            cm.npc_ChangeController(9201567, "oid=2736741", -1350, 842, 1, -1400, -1300, 1, true, 0, false);
                                                                                                                                                                            cm.npc_SetSpecialAction("oid=2736741", "summon", 0, 0);
                                                                                                                                                                            cm.npc_ChangeController(9201567, "oid=2736742", -1308, 772, 3, -1358, -1258, 1, true, 0, false);
                                                                                                                                                                            cm.npc_SetSpecialAction("oid=2736742", "summon", 0, 0);
                                                                                                                                                                            cm.npc_ChangeController(9201567, "oid=2736743", -1114, 772, 3, -1164, -1064, 1, true, 0, false);
                                                                                                                                                                            cm.npc_SetSpecialAction("oid=2736743", "summon", 0, 0);
                                                                                                                                                                            cm.npc_ChangeController(9201567, "oid=2736744", -1146, 842, 1, -1196, -1096, 1, true, 0, false);
                                                                                                                                                                            cm.npc_SetSpecialAction("oid=2736744", "summon", 0, 0);
                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                                                          } else {
                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                              cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                                                            } else {
                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                cm.sendNormalTalk_Bottom("你应该没兵了吧……", 57, 0, false, true);
                                                                                                                                                                              } else {
                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face4#那你就想得太美了。\r\n我剩下的军队数都数不完。", 37, 9201539, true, true);
                                                                                                                                                                                } else {
                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                    cm.sendNormalTalk_Bottom("我要让你和纳瑞坎为此付出代价，你们给我记住了。", 57, 0, true, true);
                                                                                                                                                                                  } else {
                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                                                                    } else if (status === V++) {
                                                                                                                                                                                      cm.playerMessage(5, "你必须消灭所有怪兽才能前往下一区域。");
                                                                                                                                                                                      cm.eventSKill(0);
                                                                                                                                                                                      cm.dispose();
                                                                                                                                                                                      cm.openNpc("克拉齐亚_第三幕_战斗6");
                                                                                                                                                                                      cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                                      cm.npc_LeaveField("oid=2733182");
                                                                                                                                                                                      cm.npc_LeaveField("oid=2733182");
                                                                                                                                                                                      cm.npc_LeaveField("oid=2736740");
                                                                                                                                                                                      cm.npc_LeaveField("oid=2736740");
                                                                                                                                                                                      cm.npc_LeaveField("oid=2736741");
                                                                                                                                                                                      cm.npc_LeaveField("oid=2736741");
                                                                                                                                                                                      cm.npc_LeaveField("oid=2736742");
                                                                                                                                                                                      cm.npc_LeaveField("oid=2736742");
                                                                                                                                                                                      cm.npc_LeaveField("oid=2736743");
                                                                                                                                                                                      cm.npc_LeaveField("oid=2736743");
                                                                                                                                                                                      cm.npc_LeaveField("oid=2736744");
                                                                                                                                                                                      cm.npc_LeaveField("oid=2736744");
                                                                                                                                                                                    }
                                                                                                                                                                                  }
                                                                                                                                                                                }
                                                                                                                                                                              }
                                                                                                                                                                            }
                                                                                                                                                                          }
                                                                                                                                                                        }
                                                                                                                                                                      }
                                                                                                                                                                    }
                                                                                                                                                                  }
                                                                                                                                                                }
                                                                                                                                                              }
                                                                                                                                                            }
                                                                                                                                                          }
                                                                                                                                                        }
                                                                                                                                                      }
                                                                                                                                                    }
                                                                                                                                                  }
                                                                                                                                                }
                                                                                                                                              }
                                                                                                                                            }
                                                                                                                                          }
                                                                                                                                        }
                                                                                                                                      }
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}