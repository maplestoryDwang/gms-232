var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  if (cm.getPlayer().getGender() == 0) {
    var V = 1531000;
  } else {
    var V = 1531052;
  }
  ;
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var O = -1;
  if (status <= O++) {
    cm.dispose();
  } else {
    if (status === O++) {
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setAmbience("Ambience.img/flyingdeck", 150, 60);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -185, 0);
    } else {
      if (status === O++) {
        cm.curNodeEventEnd(true);
        cm.onActionBarResult(6, -1);
        cm.fieldEffect_ProcessOnOffLayer("masking_up", "Map/Effect2.img/blackHeavenCinematic/masking", 0, 500, 0, 0, 30, 1, 1, -1, 0, 0, 0);
        cm.fieldEffect_ProcessOnOffLayer("masking_down", "Map/Effect2.img/blackHeavenCinematic/masking", 0, 500, 0, -35, 30, 7, 1, -1, 0, 0, 0);
        cm.fieldEffect_ProcessOnOffLayer("p1a", "Map/Effect2.img/kinesis/rescue_p1", 0, 500, -300, 200, 20, 4, 1, -1, 0, 0, 0);
        cm.fieldEffect_ProcessOnOffLayer("p2a", "Map/Effect2.img/kinesis/rescue_p2", 0, 500, 300, 100, 20, 4, 1, -1, 0, 0, 0);
        cm.fieldEffect_ProcessOnOffLayer("p3a", "Map/Effect2.img/kinesis/rescue_p3", 0, 500, -250, -150, 20, 4, 1, -1, 0, 0, 0);
        cm.fieldEffect_ProcessOnOffLayer("p4a", "Map/Effect2.img/kinesis/rescue_p4", 0, 500, 350, -100, 20, 4, 1, -1, 0, 0, 0);
        cm.fieldEffect_ProcessOnOffLayer('p1a', '', 1, 20000, -50, -500, 0, 0, 0, 0, 0, 0, 0);
        cm.fieldEffect_ProcessOnOffLayer("p2a", '', 1, 20000, 100, -500, 0, 0, 0, 0, 0, 0, 0);
        cm.fieldEffect_ProcessOnOffLayer('p3a', '', 1, 20000, 20, -500, 0, 0, 0, 0, 0, 0, 0);
        cm.fieldEffect_ProcessOnOffLayer("p4a", '', 1, 20000, 20, -500, 0, 0, 0, 0, 0, 0, 0);
        cm.sendNormalTalk_Bottom("#face4#身体就好像变成了一根羽毛，这是怎么一回事呢？？", 37, 1531002, false, true);
      } else {
        if (status === O++) {
          cm.sendNormalTalk_Bottom("……看来这辈子都不用担心体重的问题了。", 37, V, true, true);
        } else {
          if (status === O++) {
            cm.sendNormalTalk_Bottom("#face4#现在可不是开玩笑的时候，我害怕啊！", 37, 1531002, true, true);
          } else {
            if (status === O++) {
              cm.playSoundEffDirectly("Ambience.img/flyingdeck");
              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/lightup", 100);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === O++) {
                cm.fieldEffect_PlayBGM("Bgm16/TimeTemple", 0, 0);
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(300);
              } else {
                if (status === O++) {
                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 250, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(300);
                } else {
                  if (status === O++) {
                    cm.inGameDirectionEvent_PushScaleInfo(4000, 0, 2000, 4000, -185, 50);
                  } else {
                    if (status === O++) {
                      cm.inGameDirectionEvent_AskAnswerTime(4000);
                    } else {
                      if (status === O++) {
                        cm.sendNormalTalk_Bottom("#face" + cm.getPlayer().getGender() + "#来，现在行了吧？\r\n只要有我的能力在，你就不用担心。", 37, 1531063, false, true);
                      } else {
                        if (status === O++) {
                          cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 200, 90);
                        } else {
                          if (status === O++) {
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === O++) {
                              cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                              cm.inGameDirectionEvent_PushScaleInfo(4000, 0, 2000, 4000, 200, 190);
                            } else {
                              if (status === O++) {
                                cm.inGameDirectionEvent_AskAnswerTime(3500);
                              } else {
                                if (status === O++) {
                                  cm.sendNormalTalk_Bottom("#face" + cm.getPlayer().getGender() + "#所以说，你不要动，老老实实地待在我身边。", 37, 1531063, false, true);
                                } else {
                                  if (status === O++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === O++) {
                                      cm.sendNormalTalk_Bottom("#face2##fs12#手，手……", 37, 1531002, false, true);
                                    } else {
                                      if (status === O++) {
                                        cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                      } else {
                                        if (status === O++) {
                                          cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                        } else {
                                          if (status === O++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else {
                                            if (status === O++) {
                                              cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                            } else {
                                              if (status === O++) {
                                                cm.inGameDirectionEvent_PushScaleInfo(10000, 0, 1500, 2147483647, 2147483647, 2147483647);
                                              } else {
                                                if (status === O++) {
                                                  cm.sendNormalTalk_Bottom("#face2#你说什么？听不太清楚。", 37, V, false, true);
                                                } else {
                                                  if (status === O++) {
                                                    cm.sendNormalTalk_Bottom("#face2#牵住我的手，我害怕啊。", 37, 1531002, true, true);
                                                  } else {
                                                    if (status === O++) {
                                                      cm.sendNormalTalk_Bottom("#face2#若是使用念力，可以不用牵手的啊？", 37, V, true, true);
                                                    } else {
                                                      if (status === O++) {
                                                        cm.sendNormalTalk_Bottom("#face0##fs24#那也要牵着，傻瓜！", 37, 1531002, true, true);
                                                      } else {
                                                        if (status === O++) {
                                                          cm.sendNormalTalk_Bottom("#face2#好吧，好吧。", 37, V, true, true);
                                                        } else {
                                                          if (status === O++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                          } else {
                                                            if (status === O++) {
                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/toair", 100);
                                                              cm.fieldEffect_BackgroundCanvas(1, 0, 0, 0, 0, 0, 0);
                                                              cm.fieldEffect_ProcessOnOffLayer("hand", "Map/Effect2.img/kinesis/rescue_hand", 0, 2000, 0, 0, 18, 4, 1, -1, 0, 0, 0);
                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                            } else {
                                                              if (status === O++) {
                                                                cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                              } else {
                                                                if (status === O++) {
                                                                  cm.fieldEffect_ProcessOnOffLayer("randompp0", "Map/Effect2.img/kinesis/rescue_p2", 0, 500, -663, 315, 16, 4, 0, -1, 0, 0, 0);
                                                                  cm.fieldEffect_ProcessOnOffLayer("randompp0", '', 1, 2821, -142, -768, 0, 0, 0, 0, 0, 0, 0);
                                                                  cm.fieldEffect_ProcessOnOffLayer('randompp1', "Map/Effect2.img/kinesis/rescue_p3", 0, 500, -134, 382, 16, 4, 0, -1, 0, 0, 0);
                                                                  cm.fieldEffect_ProcessOnOffLayer("randompp1", '', 1, 5308, -10, -768, 0, 0, 0, 0, 0, 0, 0);
                                                                  cm.fieldEffect_ProcessOnOffLayer("randompp2", "Map/Effect2.img/kinesis/rescue_p3", 0, 500, 227, 282, 16, 4, 0, -1, 0, 0, 0);
                                                                  cm.fieldEffect_ProcessOnOffLayer('randompp2', '', 1, 4904, -365, -768, 0, 0, 0, 0, 0, 0, 0);
                                                                  cm.fieldEffect_ProcessOnOffLayer("randompp3", "Map/Effect2.img/kinesis/rescue_p2", 0, 500, 348, 314, 16, 4, 0, -1, 0, 0, 0);
                                                                  cm.fieldEffect_ProcessOnOffLayer("randompp3", '', 1, 5287, 413, -768, 0, 0, 0, 0, 0, 0, 0);
                                                                  cm.fieldEffect_ProcessOnOffLayer("randompp4", "Map/Effect2.img/kinesis/rescue_p4", 0, 500, -336, 310, 16, 4, 0, -1, 0, 0, 0);
                                                                  cm.fieldEffect_ProcessOnOffLayer("randompp4", '', 1, 2954, -640, -768, 0, 0, 0, 0, 0, 0, 0);
                                                                  cm.fieldEffect_ProcessOnOffLayer('randompp5', "Map/Effect2.img/kinesis/rescue_p2", 0, 500, 122, 297, 16, 4, 0, -1, 0, 0, 0);
                                                                  cm.fieldEffect_ProcessOnOffLayer("randompp5", '', 1, 3086, 736, -768, 0, 0, 0, 0, 0, 0, 0);
                                                                  cm.fieldEffect_ProcessOnOffLayer("randompp6", "Map/Effect2.img/kinesis/rescue_p4", 0, 500, -130, 284, 16, 4, 0, -1, 0, 0, 0);
                                                                  cm.fieldEffect_ProcessOnOffLayer('randompp6', '', 1, 3883, -443, -768, 0, 0, 0, 0, 0, 0, 0);
                                                                  cm.fieldEffect_ProcessOnOffLayer("randompp7", "Map/Effect2.img/kinesis/rescue_p3", 0, 500, -501, 382, 16, 4, 0, -1, 0, 0, 0);
                                                                  cm.fieldEffect_ProcessOnOffLayer("randompp7", '', 1, 5885, 339, -768, 0, 0, 0, 0, 0, 0, 0);
                                                                  cm.fieldEffect_ProcessOnOffLayer("randompp8", "Map/Effect2.img/kinesis/rescue_p3", 0, 500, -325, 336, 16, 4, 0, -1, 0, 0, 0);
                                                                  cm.fieldEffect_ProcessOnOffLayer("randompp8", '', 1, 4943, 379, -768, 0, 0, 0, 0, 0, 0, 0);
                                                                  cm.fieldEffect_ProcessOnOffLayer('randompp9', "Map/Effect2.img/kinesis/rescue_p4", 0, 500, 293, 368, 16, 4, 0, -1, 0, 0, 0);
                                                                  cm.fieldEffect_ProcessOnOffLayer("randompp9", '', 1, 6178, -541, -768, 0, 0, 0, 0, 0, 0, 0);
                                                                  cm.fieldEffect_ProcessOnOffLayer("randompp10", "Map/Effect2.img/kinesis/rescue_p2", 0, 500, 105, 293, 16, 4, 0, -1, 0, 0, 0);
                                                                  cm.fieldEffect_ProcessOnOffLayer("randompp10", '', 1, 6952, -698, -768, 0, 0, 0, 0, 0, 0, 0);
                                                                  cm.fieldEffect_ProcessOnOffLayer('randompp11', "Map/Effect2.img/kinesis/rescue_p2", 0, 500, 81, 252, 16, 4, 0, -1, 0, 0, 0);
                                                                  cm.fieldEffect_ProcessOnOffLayer('randompp11', '', 1, 4556, 434, -768, 0, 0, 0, 0, 0, 0, 0);
                                                                  cm.fieldEffect_ProcessOnOffLayer("randompp12", "Map/Effect2.img/kinesis/rescue_p4", 0, 500, 623, 267, 16, 4, 0, -1, 0, 0, 0);
                                                                  cm.fieldEffect_ProcessOnOffLayer('randompp12', '', 1, 4938, -327, -768, 0, 0, 0, 0, 0, 0, 0);
                                                                  cm.fieldEffect_ProcessOnOffLayer("randompp13", "Map/Effect2.img/kinesis/rescue_p2", 0, 500, 186, 272, 16, 4, 0, -1, 0, 0, 0);
                                                                  cm.fieldEffect_ProcessOnOffLayer("randompp13", '', 1, 5433, -2, -768, 0, 0, 0, 0, 0, 0, 0);
                                                                  cm.fieldEffect_ProcessOnOffLayer("randompp14", "Map/Effect2.img/kinesis/rescue_p4", 0, 500, 314, 373, 16, 4, 0, -1, 0, 0, 0);
                                                                  cm.fieldEffect_ProcessOnOffLayer("randompp14", '', 1, 5468, 773, -768, 0, 0, 0, 0, 0, 0, 0);
                                                                  cm.fieldEffect_ProcessOnOffLayer("randompp15", "Map/Effect2.img/kinesis/rescue_p4", 0, 500, -754, 295, 16, 4, 0, -1, 0, 0, 0);
                                                                  cm.fieldEffect_ProcessOnOffLayer("randompp15", '', 1, 5854, 747, -768, 0, 0, 0, 0, 0, 0, 0);
                                                                  cm.fieldEffect_ProcessOnOffLayer('randompp16', "Map/Effect2.img/kinesis/rescue_p2", 0, 500, 188, 258, 16, 4, 0, -1, 0, 0, 0);
                                                                  cm.fieldEffect_ProcessOnOffLayer('randompp16', '', 1, 4745, -400, -768, 0, 0, 0, 0, 0, 0, 0);
                                                                  cm.fieldEffect_ProcessOnOffLayer("randompp17", "Map/Effect2.img/kinesis/rescue_p4", 0, 500, 170, 376, 16, 4, 0, -1, 0, 0, 0);
                                                                  cm.fieldEffect_ProcessOnOffLayer("randompp17", '', 1, 6219, 453, -768, 0, 0, 0, 0, 0, 0, 0);
                                                                  cm.fieldEffect_ProcessOnOffLayer("randompp18", "Map/Effect2.img/kinesis/rescue_p4", 0, 500, 533, 312, 16, 4, 0, -1, 0, 0, 0);
                                                                  cm.fieldEffect_ProcessOnOffLayer("randompp18", '', 1, 6814, -160, -768, 0, 0, 0, 0, 0, 0, 0);
                                                                  cm.fieldEffect_ProcessOnOffLayer('randompp19', "Map/Effect2.img/kinesis/rescue_p4", 0, 500, 609, 342, 16, 4, 0, -1, 0, 0, 0);
                                                                  cm.fieldEffect_ProcessOnOffLayer("randompp19", '', 1, 3368, -735, -768, 0, 0, 0, 0, 0, 0, 0);
                                                                  cm.fieldEffect_ProcessOnOffLayer("randompp20", "Map/Effect2.img/kinesis/rescue_p3", 0, 500, 322, 373, 16, 4, 0, -1, 0, 0, 0);
                                                                  cm.fieldEffect_ProcessOnOffLayer('randompp20', '', 1, 4366, 759, -768, 0, 0, 0, 0, 0, 0, 0);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(4500);
                                                                } else {
                                                                  if (status === O++) {
                                                                    cm.fieldEffect_ProcessOnOffLayer('hand', '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                    cm.fieldEffect_ProcessOnOffLayer('masking_up', '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                    cm.fieldEffect_ProcessOnOffLayer("masking_down", '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                    cm.fieldEffect_ProcessOnOffLayer("randompp0", '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                    cm.fieldEffect_ProcessOnOffLayer('randompp1', '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                    cm.fieldEffect_ProcessOnOffLayer("randompp2", '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                    cm.fieldEffect_ProcessOnOffLayer("randompp3", '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                    cm.fieldEffect_ProcessOnOffLayer("randompp4", '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                    cm.fieldEffect_ProcessOnOffLayer("randompp5", '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                    cm.fieldEffect_ProcessOnOffLayer("randompp6", '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                    cm.fieldEffect_ProcessOnOffLayer("randompp7", '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                    cm.fieldEffect_ProcessOnOffLayer("randompp8", '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                    cm.fieldEffect_ProcessOnOffLayer('randompp9', '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                    cm.fieldEffect_ProcessOnOffLayer('randompp10', '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                    cm.fieldEffect_ProcessOnOffLayer("randompp11", '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                    cm.fieldEffect_ProcessOnOffLayer("randompp12", '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                    cm.fieldEffect_ProcessOnOffLayer("randompp13", '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                    cm.fieldEffect_ProcessOnOffLayer("randompp14", '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                    cm.fieldEffect_ProcessOnOffLayer("randompp15", '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                    cm.fieldEffect_ProcessOnOffLayer("randompp16", '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                    cm.fieldEffect_ProcessOnOffLayer("randompp17", '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                    cm.fieldEffect_ProcessOnOffLayer('randompp18', '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                    cm.fieldEffect_ProcessOnOffLayer('randompp19', '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                    cm.fieldEffect_ProcessOnOffLayer("randompp20", '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                    cm.fieldEffect_PlayFieldSound("Sound/Voice3.img/Kinesis/news_05", 100);
                                                                    cm.getTopMsgFont("真是令人激动的新闻。", 3, 20, 20, 0, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                                  } else {
                                                                    if (status === O++) {
                                                                      cm.getTopMsgFont("让全世界人都非常恐慌的陷坑空洞，其内部发生的异常现象忽然停止了。", 3, 20, 20, 0, 0);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                                    } else {
                                                                      if (status === O++) {
                                                                        cm.getTopMsgFont("同时，失踪的数千居民全部平安归来", 3, 20, 20, 0, 0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                                      } else {
                                                                        if (status === O++) {
                                                                          cm.getTopMsgFont("这件事既让人惊奇又让人欣慰。", 3, 20, 20, 0, 0);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                                        } else {
                                                                          if (status === O++) {
                                                                            cm.inGameDirectionEvent_SetHideEffect(0);
                                                                            cm.setStandAloneMode(false);
                                                                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                          } else {
                                                                            if (status === O++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                                            } else if (status === O++) {
                                                                              cm.eventSKill(0);
                                                                              cm.warp(331001000, 0, true);
                                                                              cm.setInGameDirectionMode(false, true, false);
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