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
      cm.updateInfoQuest(61333, "act1=610061570;act2=610062450;act3=610063560");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(9201539, "oid=2737069", -1830, 837, 1, -1880, -1780, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2737069", 'summon', 0, 0);
      cm.npc_ChangeController(9201534, "oid=2737070", -1317, 772, 3, -1367, -1267, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2737070", "summon", 0, 0);
      cm.npc_ChangeController(9201575, "oid=2737071", -900, 772, 3, -950, -850, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2737071", "summon", 0, 0);
      cm.npc_ChangeController(9201576, "oid=2737072", -780, 772, 3, -830, -730, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2737072", "summon", 0, 0);
      cm.inGameDirectionEvent_同时移动镜头和人(2, 300);
      cm.inGameDirectionEvent_AskAnswerTime(3200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -1000, 800);
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
                cm.npc_SetForceMove("oid=2737070", 1, 100, 80);
                cm.inGameDirectionEvent_AskAnswerTime(4200);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("告诉我它在哪。", 37, 9201534, false, true);
                } else {
                  if (status === V++) {
                    cm.npc_SetForceMove("oid=2737071", -1, 50, 100);
                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("纳瑞坎！", 37, 9201575, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("父亲把幻日藏到哪去了？", 37, 9201534, true, true);
                      } else {
                        if (status === V++) {
                          cm.npc_SetForceMove("oid=2737072", -1, 50, 100);
                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("快停手吧，纳瑞坎！\r\n父亲让我们留下来阻止你，但我们不想伤害你。", 37, 9201576, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("请你离开吧。", 37, 9201576, true, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom('他们是谁？', 57, 0, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face4#纳瑞坎其他的兄弟姐妹。\r\n他的母亲收养过许多孤儿，把他们一起养大。", 37, 9201539, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face4#他们都成为了强大的战士，可以说她的教育非常成功。", 37, 9201539, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("命运让他们成为了一家人。\r\n这样的羁绊是没有那么容易被打破的。", 57, 0, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("幻日连这样的事物都能毁灭，太可怕了……", 57, 0, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face4#这是他们自己做出的选择。\r\n瞧不起纳瑞坎梦想的是他们。", 37, 9201539, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("为什么你眼中的纳瑞坎永远是受害者！\r\n他也有过选择的机会啊！", 57, 0, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face4#你是永远无法理解他的，蠢货……", 37, 9201539, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#你们不想伤害我？哈！", 37, 9201534, false, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npc_SetForceMove("oid=2737070", 1, 50, 50);
                                                      cm.sendNormalTalk_Bottom("#face0#你们倒是准备怎么伤害我？\r\n自从儿时以来，我就一直比你们要强。", 37, 9201534, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#你们凭什么阻止我？", 37, 9201534, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.npc_SetForceMove("oid=2737071", -1, 20, 100);
                                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("最后一次警告，纳瑞坎。\r\n别这样。", 37, 9201575, false, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#米勒德，我敬佩你的勇气。\r\n而且我承认，我并不想伤害你们。", 37, 9201534, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("只要你们告诉我父亲和苏巴尼把幻日藏在哪里，我就放过你们。", 37, 9201534, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("放过我们？是我们放过你。", 37, 9201575, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.npc_SetSpecialAction("oid=2737071", "attack", 0, 0);
                                                                    cm.npc_SetSpecialAction("oid=2737070", '防御', 0, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.npc_SetForceMove("oid=2737071", 1, 10, 300);
                                                                      cm.npc_setForceFlip("oid=2737071", -1);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("呃啊！", 37, 9201575, false, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("你心里也清楚自己是在送死。\r\n我就给你个痛快的好了。", 37, 9201534, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("我受够你的自大了！", 37, 9201575, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.npc_SetSpecialAction("oid=2737070", "attack2", -1, 0);
                                                                                cm.fieldEffect_BackgroundCanvas(4, 125, 125, 125, 2000, 0, 0);
                                                                                cm.fieldEffect_BackgroundCanvas(5, 125, 125, 125, 2000, 0, 0);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(800);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.fieldEffect_BackgroundCanvas(2, 125, 125, 125, 2000, 0, 0);
                                                                                  cm.fieldEffect_BackgroundCanvas(3, 125, 125, 125, 2000, 0, 0);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("小心！米勒德！", 37, 9201576, false, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                    } else if (status === V++) {
                                                                                      cm.forceCompleteQuest(61361);
                                                                                      cm.eventSKill(0);
                                                                                      cm.warp(610063570, 0, true);
                                                                                      cm.setInGameDirectionMode(false, true, false);
                                                                                      cm.npc_LeaveField("oid=2737069");
                                                                                      cm.npc_LeaveField("oid=2737069");
                                                                                      cm.npc_LeaveField("oid=2737070");
                                                                                      cm.npc_LeaveField("oid=2737070");
                                                                                      cm.npc_LeaveField("oid=2737071");
                                                                                      cm.npc_LeaveField("oid=2737071");
                                                                                      cm.npc_LeaveField("oid=2737072");
                                                                                      cm.npc_LeaveField("oid=2737072");
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