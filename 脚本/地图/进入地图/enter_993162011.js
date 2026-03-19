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
      cm.npc_ChangeController(3001978, "oid=434138", 2189, 121, 10, 2139, 2239, 1, false, 0, false);
      cm.npc_ChangeController(3001988, "oid=434139", 2297, 121, 10, 2247, 2347, 1, false, 0, false);
      cm.npc_ChangeController(3001952, 'oid=434140', 1869, 121, 7, 1819, 1919, 4, true, 0, false);
      cm.npc_ChangeController(3001960, 'oid=434141', 1938, 121, 7, 1888, 1942, 4, true, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 2200, 90);
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
            cm.sendNormalTalk_Bottom("#face0#看来他们马上要开始演奏了！", 36, 3001952, false, true, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face1#布乌，布！", 36, 3001960, true, true, 1);
            } else {
              if (status === V++) {
                cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 2);
                cm.inGameDirectionEvent_AskAnswerTime(1600);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_Monologue("~广场乐师之歌~\r\n", 0);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_Monologue("日薄西山的艺术之都！", 0);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_Monologue("啊！悲伤的里斯托尼亚！", 0);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_Monologue("能拯救此地的人，现在何处？", 0);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_Monologue("他不在摇摇欲坠的伯爵宅邸。", 0);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_Monologue("伯爵只关心王国艺术节。", 0);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_Monologue("压根儿不管百姓死活。", 1);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(1600);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#王国艺术节？", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#那是个由王国主办的历史悠久的活动，在秋天举行，\r\n届时会展示来自格兰蒂斯各地的艺术品。", 36, 3001952, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face4#其中最为精美的，自然要数里斯托尼亚王室公开的艺术品！\r\n不管从历史价值，还是艺术价值来看，都得到了极高的评价。", 36, 3001952, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#然而，如今里斯托尼亚王室已经消失……\r\n作为王国实际掌权者的伯爵家，接替了王室的职责。", 36, 3001952, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#在王国日渐倾颓的当下，居然盛大地筹备艺术节……\r\n他为什么要这样打肿脸充胖子？", 36, 3001952, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face9#虽说他可能只是为了炫耀……\r\n但也不能排除艺术节上可能会搞出什么意外举动。", 36, 3001952, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                              } else {
                                                if (status === V++) {
                                                  cm.forceCompleteQuest(39606);
                                                  cm.gainExp(805);
                                                  cm.gainExp(113);
                                                  cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                  cm.gainItem(4036657, -5);
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
                                                        cm.setStandAloneMode(false);
                                                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                        cm.setInGameDirectionMode(false, true, false);
                                                        cm.dispose();
                                                        cm.warp(410000300, 0, false);
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}