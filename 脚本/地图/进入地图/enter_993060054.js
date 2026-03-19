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
      cm.npc_ChangeController(3003659, "oid=275884", -3126, -508, 6, -3176, -3076, 4, true, 0, false);
      cm.npc_ChangeController(3003659, 'oid=275885', -3027, -508, 6, -3077, -2977, 4, true, 0, false);
      cm.npc_ChangeController(3003659, 'oid=275886', -2926, -508, 6, -2976, -2876, 4, true, 0, false);
      cm.npc_ChangeController(3003659, 'oid=275887', -2823, -508, 6, -2873, -2773, 4, true, 0, false);
      cm.npc_ChangeController(3003659, "oid=275888", -2719, -508, 6, -2769, -2669, 4, true, 0, false);
      cm.npc_ChangeController(3003659, "oid=275889", -2614, -508, 6, -2664, -2564, 4, true, 0, false);
      cm.npc_ChangeController(3003656, "oid=275890", -2233, -508, 6, -2283, -2183, 4, true, 0, false);
      cm.npc_ChangeController(3003659, "oid=275891", -2513, -508, 6, -2563, -2463, 4, true, 0, false);
      cm.npc_ChangeController(3003668, 'oid=275892', -1099, -480, 2, -1148, -1048, 4, true, 0, false);
      cm.npc_ChangeController(3003668, 'oid=275893', -990, -480, 2, -990, -916, 5, true, 0, false);
      cm.npc_ChangeController(3003668, 'oid=275894', -822, -480, 15, -842, -742, 5, true, 0, false);
      cm.npc_ChangeController(3003668, "oid=275895", -645, -480, 15, -694, -594, 3, true, 0, false);
      cm.npc_ChangeController(3003651, "oid=275896", -2344, -508, 6, -2394, -2294, 4, true, 0, false);
      cm.npc_ChangeController(3003659, 'oid=275897', -1841, -480, 3, -1891, -1816, 5, true, 0, false);
      cm.npc_ChangeController(3003659, "oid=275898", -1755, -480, 1, -1776, -1705, 5, true, 0, false);
      cm.npc_ChangeController(3003659, 'oid=275899', -1666, -480, 1, -1716, -1616, 5, true, 0, false);
      cm.npc_ChangeController(3003659, "oid=275900", -1574, -480, 1, -1624, -1524, 5, true, 0, false);
      cm.npc_ChangeController(3003659, "oid=275901", -1479, -480, 1, -1529, -1429, 5, true, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.setAmbience("Ambience.img/BM1_wave", 200, 60);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -2200, -1296);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(2000);
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
              cm.inGameDirectionEvent_AskAnswerTime(3000);
              cm.effect_Text(["#fn黑体##fs18#几小时后，月桥上空"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0]);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushScaleInfo(5000, 0, 1000, 5000, -2200, -589);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(6000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#黑太阳在那片云的上面。\r\n不祥的预感变得更强烈了。", 37, 3003651, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face1#黑魔法师……就在……", 37, 3003656, true, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.npc_ChangeController(3003659, "oid=2204244", -1938, -490, 3, -1988, -1888, 1, true, 1000, false);
                          cm.npc_SetSpecialAction("oid=2204244", 'summon', 0, 0);
                          cm.npc_SetForceMove("oid=2204244", -1, 100, 150);
                          cm.inGameDirectionEvent_AskAnswerTime(3000);
                        } else {
                          if (status === V++) {
                            cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(300);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -2275, -435);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#锁链的袭击次数明显变少了。\r\n其他飞船也报告说恢复了平静。", 37, 3003659, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face1#好的，知道了。请继续关注其他飞船的情况。", 37, 3003656, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#是，女皇陛下！", 37, 3003659, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                            } else {
                                              if (status === V++) {
                                                cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                      cm.npc_LeaveField("oid=2204244");
                                                      cm.npc_LeaveField("oid=2204244");
                                                      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -2275, -435);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#凯琳说，现在好像可以提高高度，\r\n进入到云层中去了。", 37, 3003651, false, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#但让人担心的是，前面是暴风地带。\r\n我们不知道能否平安通过那里……", 37, 3003651, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#但现在除了继续前进之外，我们别无选择。\r\n我们能做的，就是坚定信心，避免发生动摇。", 37, 3003651, false, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.effect_Text(["#fn黑体##fs18#另一边，诺特勒斯号护卫舰"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0]);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0##b#ho##k，现在我们已经脱离了迷雾。\r\n敌人的攻击也减少了。", 37, 3003685, false, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#其他舰船似乎也是如此……\r\n#b#ho##k应该可以回到诺特勒斯号了。", 37, 3003685, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                      cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                    } else if (status === V++) {
                                                                                      cm.dispose();
                                                                                      cm.warp(993060055, 0, false);
                                                                                      cm.setStandAloneMode(false);
                                                                                      cm.setInGameDirectionMode(false, true, false);
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}