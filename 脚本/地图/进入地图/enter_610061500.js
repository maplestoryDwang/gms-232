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
      cm.updateInfoQuest(61333, "act1=610061500");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(9201543, "oid=2861449", 1870, 95, 35, 1820, 1920, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2861449", "summon", 0, 0);
      cm.npc_ChangeController(9201534, "oid=2861450", 2080, 96, 37, 2030, 2130, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2861450", 'summon', 0, 0);
      cm.npc_ChangeController(9201546, "oid=2861451", 2183, 96, 41, 2133, 2233, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2861451", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=2861450", "catch1", -1, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 1950, 140);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(2200);
          } else {
            if (status === V++) {
              cm.userSetFieldFloating(610061500, 2, 2, 5);
              cm.inGameDirectionEvent_AskAnswerTime(1200);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_ForcedFlip(-1);
                cm.inGameDirectionEvent_AskAnswerTime(1200);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_ForcedFlip(1);
                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("卢坎不见了！\r\n他就是这样穿越到我们的时代的吗？", 57, 0, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom('其他宗师也都消失了！', 57, 0, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("或许他们也和卢坎一样在不同的时空中。", 57, 0, true, true);
                      } else {
                        if (status === V++) {
                          cm.addPopupSay(9201537, 2000, "你这发现可不得了！", '', 0);
                          cm.inGameDirectionEvent_AskAnswerTime(4200);
                        } else {
                          if (status === V++) {
                            cm.addPopupSay(9201537, 2000, "我觉得我摸清事情的来龙去脉了。", '', 0);
                            cm.inGameDirectionEvent_AskAnswerTime(4200);
                          } else {
                            if (status === V++) {
                              cm.addPopupSay(9201537, 2000, "你也是时候回来了。", '', 0);
                              cm.inGameDirectionEvent_AskAnswerTime(4200);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_ForcedFlip(-1);
                                cm.inGameDirectionEvent_同时移动镜头和人(1, 100);
                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_ForcedFlip(1);
                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("等下！纳瑞坎、苏巴尼，还有记忆里的其他人……\r\n我得知道他们到底出了什么事。", 57, 0, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.addPopupSay(9201537, 2000, "为什么？已经没意义了。\r\n你必须离开了。", '', 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(6200);
                                    } else {
                                      if (status === V++) {
                                        cm.addPopupSay(9201537, 2000, "要是你阅读卢坎没有亲身体验过的事，记忆之门会坍塌的。", '', 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(7200);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("他是绯红之心的忠实支持者，并且为了阻止恶人牺牲了自己。", 57, 0, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("告诉他他的朋友的遭遇无可厚非。", 57, 0, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                                            } else {
                                              if (status === V++) {
                                                cm.addPopupSay(9201537, 2000, "但这……算了，随你便。", '', 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(4200);
                                              } else {
                                                if (status === V++) {
                                                  cm.addPopupSay(9201537, 2000, "总之在记忆之门坍塌前离开，不然你就一辈子困在里面了。", '', 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(7200);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_同时移动镜头和人(2, 100);
                                                    cm.fieldEffect_ScreenMsg("Map/Effect2.img/blackHeavenBossDie2");
                                                    cm.fieldEffect_PlayFieldSound("BlackHeavenBoss/WhiteOut", 100);
                                                    cm.inGameDirectionEvent_AskAnswerTime(5200);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 3000, 0, 2080, 140);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
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
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.npc_SetSpecialAction("oid=2861449", 'break', 0, 0);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.npc_LeaveField("oid=2861449");
                                                                        cm.npc_LeaveField("oid=2861449");
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face2#你们摧毁了幻日？真是一群蠢货！", 37, 9201534, false, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.npc_setForceFlip("oid=2861450", 1);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face2#你们到底为何出此下策？\r\n整个大陆都会因此毁灭！", 37, 9201534, false, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face2#影响还会扩散开来。\r\n先是冒险岛世界，然后是反转界", 37, 9201534, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face2#你们毁灭了我们的世界。", 37, 9201534, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face2#真没想到你们竟然如此愚蠢！", 37, 9201534, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face2#你们嫉妒我获得了幻日之力，丧失了正常的判断力！", 37, 9201534, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face2#你们听见我说的话了吗？", 37, 9201534, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face2#你听见了吗，苏巴尼？听见了吗？", 37, 9201534, false, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face2#你我不再是兄弟了，纳瑞坎。", 37, 9201546, false, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face2#你做出了不可饶恕的行为。\r\n我现在唯一的愿望就是向你复仇。", 37, 9201546, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0#哈！你以为你比我强？\r\n这回可没人能帮你了，兄弟！", 37, 9201534, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face2#没人！", 37, 9201534, true, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face0#怎么了，嗯？\r\n你要坐在那儿，像小时候那样哭鼻子吗？", 37, 9201534, true, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face2#像个可悲的弱者那样，蹲在墙角？\r\n无助而失措地哭泣？", 37, 9201534, true, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.npc_SetSpecialAction("oid=2861451", "ready", -1, 0);
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("不，我要这么做。", 37, 9201546, false, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face2#住手！", 37, 9201534, false, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face2#你完了，纳瑞坎。", 37, 9201546, false, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.setNpcSpecialActionReset("oid=2861451");
                                                                                                                            cm.npc_SetSpecialAction("oid=2861451", "attack", 0, 0);
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.npc_SetSpecialAction("oid=2861451", "hurt", -1, 0);
                                                                                                                              cm.setNpcSpecialActionReset("oid=2861450");
                                                                                                                              cm.npc_SetSpecialAction("oid=2861450", "lock1", 0, 0);
                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(7200);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                                                              } else if (status === V++) {
                                                                                                                                cm.eventSKill(0);
                                                                                                                                cm.warp(610061510, 0, true);
                                                                                                                                cm.setInGameDirectionMode(false, true, false);
                                                                                                                                cm.npc_LeaveField("oid=2861450");
                                                                                                                                cm.npc_LeaveField("oid=2861450");
                                                                                                                                cm.npc_LeaveField("oid=2861451");
                                                                                                                                cm.npc_LeaveField("oid=2861451");
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
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}