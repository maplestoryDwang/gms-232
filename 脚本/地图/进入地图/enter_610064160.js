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
      cm.updateInfoQuest(61333, "act1=610061570;act2=610062450;act3=610063590;act4=610064160");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(9201534, "oid=2747274", 2018, 95, 36, 1968, 2068, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2747274", "summon", 0, 0);
      cm.npc_ChangeController(9201535, "oid=2747275", 1818, 95, 35, 1768, 1868, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2747275", 'summon', 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 1900, 150);
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
              cm.npc_SetSpecialAction("oid=2747274", 'attack', 0, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1200);
            } else {
              if (status === V++) {
                cm.npc_setForceFlip("oid=2747275", -1);
                cm.npc_SetForceMove("oid=2747275", -1, 10, 300);
                cm.npc_setForceFlip("oid=2747275", 1);
                cm.inGameDirectionEvent_AskAnswerTime(1200);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("停止你徒劳的抵抗吧，父亲。", 37, 9201534, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#你到底为什么要继续战斗？", 37, 9201534, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("把幻日给我，我就能终止这毫无意义的悲剧循环。\r\n你也永远不必再承受这种痛苦。", 37, 9201534, true, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("纳瑞坎，你应该清楚，格罗娜并不想看到这样的世界。", 37, 9201535, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face2#你居然有脸说她的名字！母亲就是因你而死的！", 37, 9201534, true, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("那我还能说谁的名字？\r\n我已经一无所有了。", 37, 9201535, false, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("我战斗了一辈子，付出了沉重的代价。", 37, 9201535, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("守护者必须接受他们无法守护每个人的事实活下去。", 37, 9201535, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("我要守护幻日和需要它的人，因此，我不能死。", 37, 9201535, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("但或许，我对我的职责有个很大的误解……", 37, 9201535, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("现在我相信，这场悲剧循环可以被终止。为了你的兄弟、你的母亲还有你，我必须结束这一切。", 37, 9201535, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_SetForceMove("oid=2747274", -1, 20, 100);
                                            cm.inGameDirectionEvent_AskAnswerTime(2200);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face2#如你所愿。要是你觉得杀了我有用的话，就动手吧。", 37, 9201534, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("你不需要跟我说两遍！", 37, 9201536, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_ChangeController(9201536, "oid=2747572", 1669, 95, 34, 1619, 1719, 1, true, 0, false);
                                                  cm.npc_SetSpecialAction("oid=2747572", "summon", 0, 0);
                                                  cm.npc_SetForceMove("oid=2747572", 1, 130, 300);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                } else {
                                                  if (status === V++) {
                                                    cm.npc_SetSpecialAction("oid=2747572", 'attack', 0, 0);
                                                    cm.npc_SetSpecialAction("oid=2747274", '防御', 0, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npc_setForceFlip("oid=2747572", -1);
                                                      cm.npc_SetForceMove("oid=2747572", -1, 130, 300);
                                                      cm.npc_setForceFlip("oid=2747572", 1);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("说再多遍你也不是我的对手。", 37, 9201534, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.npc_SetSpecialAction("oid=2747275", 'attack', 0, 0);
                                                          cm.npc_SetSpecialAction("oid=2747274", '防御', 0, 0);
                                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(200);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.npc_setForceFlip("oid=2747274", 1);
                                                              cm.npc_SetForceMove("oid=2747274", 1, 20, 300);
                                                              cm.npc_setForceFlip("oid=2747274", -1);
                                                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#漂亮，父亲。", 37, 9201534, false, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.npc_SetSpecialAction("oid=2747274", "攻击2", 0, 0);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.npc_ChangeController(9201580, "oid=2747747", 2144, 95, 37, 2094, 2194, 1, true, 0, false);
                                                                    cm.npc_SetSpecialAction("oid=2747747", "summon", 0, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.npc_ChangeController(9201580, "oid=2747751", 2180, 95, 41, 2130, 2230, 1, true, 0, false);
                                                                      cm.npc_SetSpecialAction("oid=2747751", "summon", 0, 0);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.npc_ChangeController(9201580, "oid=2747779", 2220, 95, 41, 2170, 2270, 1, true, 0, false);
                                                                        cm.npc_SetSpecialAction("oid=2747779", "summon", 0, 0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.npc_ChangeController(9201580, "oid=2747800", 2250, 95, 41, 2200, 2300, 1, true, 0, false);
                                                                          cm.npc_SetSpecialAction("oid=2747800", "summon", 0, 0);
                                                                          cm.npc_ChangeController(9201580, "oid=2747801", 2300, 95, 40, 2250, 2350, 1, true, 0, false);
                                                                          cm.npc_SetSpecialAction("oid=2747801", "summon", 0, 0);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#我本是很讨厌仰视弱者的。", 37, 9201534, false, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.npc_SetForceMove("oid=2747274", 1, 150, 100);
                                                                              cm.npc_SetForceMove("oid=2747747", -1, 50, 300);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.npc_SetForceMove("oid=2747751", -1, 100, 300);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.npc_SetForceMove("oid=2747779", -1, 130, 300);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.npc_SetForceMove("oid=2747800", -1, 150, 300);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.npc_SetForceMove("oid=2747801", -1, 200, 300);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom('小心，绯红之心！', 37, 9201536, false, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.npc_SetForceMove("oid=2747572", -1, 100, 200);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.npc_SetForceMove("oid=2747275", -1, 100, 200);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                          } else if (status === V++) {
                                                                                            cm.eventSKill(0);
                                                                                            cm.warp(610064170, 0, true);
                                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                                            cm.npc_LeaveField("oid=2747274");
                                                                                            cm.npc_LeaveField("oid=2747275");
                                                                                            cm.npc_LeaveField("oid=2747572");
                                                                                            cm.npc_LeaveField("oid=2747747");
                                                                                            cm.npc_LeaveField("oid=2747751");
                                                                                            cm.npc_LeaveField("oid=2747779");
                                                                                            cm.npc_LeaveField("oid=2747800");
                                                                                            cm.npc_LeaveField("oid=2747801");
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