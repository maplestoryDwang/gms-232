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
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.npc_ChangeController(3001958, "oid=6696609", 1591, 100, 3, 1541, 1641, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=6696609", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=6696609", "special4", -1, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 1820, -421);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 1500, 3000, 1591, 90);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(3500);
              cm.effect_Text(["#fn黑体##fs18#几天后，广场附近", ''], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0, 0]);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face6##fc0xFFbfbfbf#(说来你也许不信，直到几天前，我还是\r\n占据里斯托尼亚王国……顶尖地位的男人。)", 36, 3001957, false, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face6##fc0xFFbfbfbf#(因为想做番大事，欠了太多债，结果……\r\n但是，我还有办法翻盘。)", 36, 3001957, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face6##fc0xFFbfbfbf#(只要将这把钥匙交给干部……就这种小国，\r\n哼哼……我转眼就能重头来过！)", 36, 3001957, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face6#呼……路上出了点问题，所以迟了。", 36, 3001957, true, true, 1);
                      cm.effect_Voice("Voice2.img/adele/present/I/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/1', 100);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face6#但我把东西完好地带……", 36, 3001957, true, true, 1);
                        cm.effect_Voice("Voice2.img/adele/present/I/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/2', 100);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1500, 1000, 1512, 90);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/secretmission4", 100);
                                cm.npc_ChangeController(3001956, "oid=6698565", 1434, 100, 2, 1384, 1484, 0, false, 0, false);
                                cm.npc_SetSpecialAction("oid=6698565", "summon", 0, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face6#嗬，天啊~！", 36, 3001957, false, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face6#你、你正是我一直寻觅的梦中情人……\r\n这高傲的眼神，瞬间就让我的心为你沉沦了~！", 36, 3001957, false, true, 1);
                                      cm.effect_Voice("Voice2.img/adele/present/I/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/3', 100);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face3#瞎扯什么呢……\r\n快把东西交出来。", 36, 3001870, true, true, 1);
                                        cm.effect_Voice("Voice2.img/adele/present/I/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/4', 100);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face6#啊，谨遵吩咐……", 36, 3001957, true, true, 1);
                                          cm.effect_Voice("Voice2.img/adele/present/I/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/5', 100);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 2);
                                            cm.inGameDirectionEvent_AskAnswerTime(1600);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face6##fc0xFFbfbfbf#(掏出装着钥匙的箱子，交给了高等翼人干部。\r\n然而，从里面开出来的却是……)", 36, 3001957, false, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom('#face0#？', 36, 3001870, true, true, 1);
                                                cm.effect_Voice("Voice2.img/adele/present/I/" + (cm.getPlayer().getGender() == 0 ? 'Male' : 'Female') + '/6', 100);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom('#face2#布乌？', 36, 3001960, true, true, 1);
                                                  cm.effect_Voice("Voice2.img/adele/present/I/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/7', 100);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face6#……", 36, 3001957, true, true, 1);
                                                    cm.effect_Voice("Voice2.img/adele/present/I/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/8', 100);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face6#嗬，这不应该啊……我的钥匙呢，去哪了？", 36, 3001957, true, true, 1);
                                                      cm.effect_Voice("Voice2.img/adele/present/I/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/9', 100);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face3#你在和我开玩笑吗！？", 36, 3001870, false, true, 1);
                                                          cm.effect_Voice("Voice2.img/adele/present/I/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/10', 100);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face6#这肯定是出了差错……再给我点时间……", 36, 3001957, true, true, 1);
                                                            cm.effect_Voice("Voice2.img/adele/present/I/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/11", 100);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face3#啧，浪费时间。我们走！", 36, 3001870, true, true, 1);
                                                              cm.effect_Voice("Voice2.img/adele/present/I/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/12', 100);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face6#干部，等、等一下，呜呜……", 36, 3001957, true, true, 1);
                                                                cm.effect_Voice("Voice2.img/adele/present/I/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/13", 100);
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
                                                                          cm.npc_LeaveField("oid=6696609");
                                                                          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 1512, 90);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.npc_ChangeController(3001959, "oid=6701332", 1650, 100, 3, 1600, 1700, 1, true, 1000, false);
                                                                              cm.npc_SetSpecialAction("oid=6701332", 'summon', 0, 0);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.npc_SetForceMove("oid=6701332", -1, 50, 120);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face0#最终没能弄到古代的钥匙啊。", 36, 3001959, false, true, 1);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#事情的责任全在于伯爵，我要趁此机会和他脱离关系了。", 36, 3001959, true, true, 1);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face0#好，收尾的事情就交给你处理，别留后患。", 36, 3001870, true, true, 1);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face0#我会继续密切关注钥匙的下落。", 36, 3001959, false, true, 1);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face1##fc0xFFbfbfbf#(那我们后会有期，阿黛尔。你要开始紧张起来了哦？)", 36, 3001870, false, true, 1);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face2##fc0xFFbfbfbf#(到时候，绝不会轻易结束的。)", 36, 3001870, true, true, 1);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
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
                                                                                                            cm.warp(993162048, 0, false);
                                                                                                            cm.setStandAloneMode(false);
                                                                                                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                                                            cm.npc_LeaveField("oid=6698565");
                                                                                                            cm.npc_LeaveField("oid=6701332");
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