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
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2500, 0, 2100, 70);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(2155122, "oid=1284391", 2100, 40, 32, 2050, 2150, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=1284391", "summon", 0, 0);
        cm.npc_ChangeController(2155125, "oid=1284392", 2180, 40, 35, 2130, 2230, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=1284392", "summon", 0, 0);
        cm.npc_setForceFlip("oid=1284392", -1);
        cm.npc_ChangeController(2155126, "oid=1284393", 1970, 40, 33, 1920, 2020, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=1284393", "summon", 0, 0);
        cm.npc_ChangeController(2155127, "oid=1284394", 1920, 40, 31, 1870, 1970, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=1284394", "summon", 0, 0);
        cm.npc_ChangeController(2155128, "oid=1284395", 1870, 40, 31, 1820, 1920, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=1284395", "summon", 0, 0);
        cm.npc_ChangeController(2155129, "oid=1284396", 1840, 40, 30, 1790, 1890, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=1284396", 'summon', 0, 0);
        cm.npc_ChangeController(1540751, "oid=1284397", 1820, 40, 30, 1770, 1870, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=1284397", "summon", 0, 0);
        cm.npc_ChangeController(1540751, "oid=1284398", 1770, 40, 30, 1720, 1820, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=1284398", 'summon', 0, 0);
        cm.npc_ChangeController(1540751, "oid=1284399", 1730, 40, 29, 1680, 1780, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=1284399", "summon", 0, 0);
        cm.npc_setForceFlip("oid=1284395", 1);
        cm.npc_setForceFlip("oid=1284396", 1);
        cm.npc_setForceFlip("oid=1284398", 1);
        cm.npc_setForceFlip("oid=1284399", 1);
        cm.npc_ChangeController(1540751, "oid=1284400", 2230, 40, 34, 2180, 2280, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=1284400", "summon", 0, 0);
        cm.npc_ChangeController(2155130, "oid=1284401", 2270, 40, 34, 2220, 2320, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=1284401", 'summon', 0, 0);
        cm.npc_ChangeController(1540751, "oid=1284402", 2340, 40, 36, 2290, 2390, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=1284402", "summon", 0, 0);
        cm.npc_setForceFlip("oid=1284400", -1);
        cm.npc_setForceFlip("oid=1284401", -1);
        cm.npc_setForceFlip("oid=1284402", -1);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("唉，差点就大事不好了。\r\n我还是第一次看到超级人造人在黑色天堂外面行动。\r\n究竟发生了什么事情…", 37, 2155125, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("嗯，就是说…嗯…", 37, 2155122, true, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(300);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushScaleInfo(200, 0, 2800, 200, 2150, 100);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1284392"], [0, 0, 0, 1, 0, 1, 0, 0]);
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("儿，儿子？", 37, 2155125, false, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/whatl", "oid=1284391"], [0, 0, 0, 1, 0, 1, 0, 0]);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("噢！这又是…。谁啊？", 37, 2155122, false, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_PushScaleInfo(500, 0, 2500, 500, 2100, 70);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("啊…原来不是啊，长得一点都不像。\r\n我真是老糊涂了，哈哈哈。\r\n…这机器人是谁？", 37, 2155125, false, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("我来为你说明。", 57, 0, true, true);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 800, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 2100, 50);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 3000, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("也就是说，那声巨响是这个机器人坠落的声音…\r\n是这样吗？\r\n还有，超级人造人们在追踪它？", 37, 2155125, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1284393"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                            cm.npc_SetForceMove("oid=1284393", 1, 70, 40);
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_ForcedFlip(1);
                                              cm.inGameDirectionEvent_同时移动镜头和人(1, 30);
                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("哎呦，你看看它的头。我还是第一次见到伤势如此严重的机器人。\r\n唉，这可如何是好？这芯片完全损坏了。\r\n这样的话，所有记忆会变得乱七八糟的…", 37, 2155126, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_setForceFlip("oid=1284391", -1);
                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("这个吗？嗯…就是说。怎么会这样？\r\n啊…话说，我有点着急。\r\n我得尽快去某个地方…啊，是什么地方来着。呃！我的头。", 37, 2155122, false, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.npc_SetSpecialAction("oid=1284391", 'pain', -1, 1);
                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("嗯…它的状态好像很糟糕。\r\n看来在修好芯片之前，我们得好好照顾它。\r\n你就把它交给我们吧，我们会给它起个名字。你以后…", 37, 2155125, false, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.setNpcSpecialActionReset("oid=1284391");
                                                            cm.inGameDirectionEvent_AskAnswerTime(100);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.npc_setForceFlip("oid=1284391", 1);
                                                              cm.sendNormalTalk_Bottom("#face1#名字？我……啊，叫什么来着。\r\n但是我真的真的必须回去了。\r\n我必须马上回去。但是……有人知道那里在什么地方吗？", 37, 2155123, false, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_PushScaleInfo(200, 0, 2500, 200, 2050, 70);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("…你真是笨蛋。", 37, 2155127, false, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.npc_setForceFlip("oid=1284391", -1);
                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1284391"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1284393"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.npc_setForceFlip("oid=1284393", -1);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("天啊，你怎么这么对初次见面的机器人说话啊！", 37, 2155126, false, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#是吗？说它笨蛋有些太过分了？", 37, 2155123, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.npc_setForceFlip("oid=1284391", 1);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("不过，你说你是谁？\r\n我…我说过要去那个地方吧？", 37, 2155122, false, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.npc_setForceFlip("oid=1284393", 1);
                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=1284392"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=1284393"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=1284395"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=1284396"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=1284398"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=1284399"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=1284400"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=1284401"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=1284402"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                  cm.effect_OnUserEff("Effect/OnUserEff.img/emotion/ddam");
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                    cm.effect_NormalSpeechBalloon("...", 1, 0, 0, 1100, 1, 0, 0, 0, 4, 2155126, null, cm.getPlayer().getId());
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("…笨蛋…这个名字不可爱吗？", 37, 2155126, false, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 800, 0);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                      } else if (status === V++) {
                                                                                        cm.eventSKill(0);
                                                                                        cm.warp(310070000, 4, false);
                                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                                        cm.forceStartQuest(39298, '2');
                                                                                        cm.updateInfoQuest(39200, "gExpCheck=1;0q=1;1q=1;2q=1");
                                                                                        cm.forceStartQuest(39202, '');
                                                                                        cm.gainExp(60623436);
                                                                                        cm.updateInfoQuest(39202, "gExpCheck=1");
                                                                                        cm.forceCompleteQuest(39202);
                                                                                        cm.npc_LeaveField("oid=1284391");
                                                                                        cm.npc_LeaveField("oid=1284391");
                                                                                        cm.npc_LeaveField("oid=1284392");
                                                                                        cm.npc_LeaveField("oid=1284392");
                                                                                        cm.npc_LeaveField("oid=1284393");
                                                                                        cm.npc_LeaveField("oid=1284393");
                                                                                        cm.npc_LeaveField("oid=1284394");
                                                                                        cm.npc_LeaveField("oid=1284394");
                                                                                        cm.npc_LeaveField("oid=1284395");
                                                                                        cm.npc_LeaveField("oid=1284395");
                                                                                        cm.npc_LeaveField("oid=1284396");
                                                                                        cm.npc_LeaveField("oid=1284396");
                                                                                        cm.npc_LeaveField("oid=1284397");
                                                                                        cm.npc_LeaveField("oid=1284397");
                                                                                        cm.npc_LeaveField("oid=1284398");
                                                                                        cm.npc_LeaveField("oid=1284398");
                                                                                        cm.npc_LeaveField("oid=1284399");
                                                                                        cm.npc_LeaveField("oid=1284399");
                                                                                        cm.npc_LeaveField("oid=1284400");
                                                                                        cm.npc_LeaveField("oid=1284400");
                                                                                        cm.npc_LeaveField("oid=1284401");
                                                                                        cm.npc_LeaveField("oid=1284401");
                                                                                        cm.npc_LeaveField("oid=1284402");
                                                                                        cm.npc_LeaveField("oid=1284402");
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