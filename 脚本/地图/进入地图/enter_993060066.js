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
      cm.npc_ChangeController(3003619, "oid=275960", -2444, -488, 2, -2494, -2394, 1, false, 0, false);
      cm.npc_ChangeController(3003659, 'oid=275961', -2205, -488, 2, -2255, -2155, 5, true, 0, false);
      cm.npc_ChangeController(3003659, "oid=275962", -2113, -488, 2, -2163, -2063, 5, true, 0, false);
      cm.npc_ChangeController(3003659, "oid=275963", -2018, -488, 2, -2068, -1968, 5, true, 0, false);
      cm.npc_ChangeController(3003659, "oid=275964", -1925, -488, 2, -1975, -1875, 5, true, 0, false);
      cm.npc_ChangeController(3003668, "oid=275965", -3273, -488, 1, -3292, -3192, 5, true, 0, false);
      cm.npc_ChangeController(3003668, 'oid=275966', -3069, -488, 1, -3144, -3044, 5, true, 0, false);
      cm.monadForceMove("white", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -2606, -998);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(300);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushScaleInfo(5000, 0, 1000, 5000, -2596, -600);
        } else {
          if (status === V++) {
            cm.effect_Text(["#fn黑体##fs18#不久后，别动队突击船"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0]);
            cm.monadForceMove("white", 1, 30);
            cm.inGameDirectionEvent_AskAnswerTime(30);
          } else {
            if (status === V++) {
              cm.fieldEffect_BackgroundCanvas(4, 100, 100, 100, 30, 0, 0);
              cm.fieldEffect_BackgroundCanvas(5, 100, 100, 100, 30, 0, 0);
              cm.fieldEffect_BackgroundCanvas(2, 100, 100, 100, 30, 0, 0);
              cm.fieldEffect_BackgroundCanvas(3, 100, 100, 100, 30, 0, 0);
              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/foxvalley/thunder", 100);
              cm.inGameDirectionEvent_AskAnswerTime(30);
            } else {
              if (status === V++) {
                cm.monadForceMove("white", 0, 30);
                cm.inGameDirectionEvent_AskAnswerTime(30);
              } else {
                if (status === V++) {
                  cm.fieldEffect_BackgroundCanvas(0, 255, 255, 255, 30, 0, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(30);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_BackgroundCanvas(4, 100, 100, 100, 30, 0, 0);
                    cm.fieldEffect_BackgroundCanvas(5, 100, 100, 100, 30, 0, 0);
                    cm.fieldEffect_BackgroundCanvas(2, 100, 100, 100, 30, 0, 0);
                    cm.fieldEffect_BackgroundCanvas(3, 100, 100, 100, 30, 0, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(30);
                  } else {
                    if (status === V++) {
                      cm.monadForceMove("white", 1, 30);
                      cm.inGameDirectionEvent_AskAnswerTime(300);
                    } else {
                      if (status === V++) {
                        cm.monadForceMove("white", 0, 900);
                        cm.inGameDirectionEvent_AskAnswerTime(300);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_BackgroundCanvas(0, 255, 255, 255, 90, 0, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(1990);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                          } else {
                            if (status === V++) {
                              cm.monadForceMove("white", 1, 30);
                              cm.inGameDirectionEvent_AskAnswerTime(30);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_BackgroundCanvas(4, 100, 100, 100, 30, 0, 0);
                                cm.fieldEffect_BackgroundCanvas(5, 100, 100, 100, 30, 0, 0);
                                cm.fieldEffect_BackgroundCanvas(2, 100, 100, 100, 30, 0, 0);
                                cm.fieldEffect_BackgroundCanvas(3, 100, 100, 100, 30, 0, 0);
                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/foxvalley/thunder", 100);
                                cm.inGameDirectionEvent_AskAnswerTime(30);
                              } else {
                                if (status === V++) {
                                  cm.monadForceMove("white", 0, 30);
                                  cm.inGameDirectionEvent_AskAnswerTime(30);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_BackgroundCanvas(0, 255, 255, 255, 30, 0, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(30);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_BackgroundCanvas(4, 100, 100, 100, 30, 0, 0);
                                      cm.fieldEffect_BackgroundCanvas(5, 100, 100, 100, 30, 0, 0);
                                      cm.fieldEffect_BackgroundCanvas(2, 100, 100, 100, 30, 0, 0);
                                      cm.fieldEffect_BackgroundCanvas(3, 100, 100, 100, 30, 0, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(30);
                                    } else {
                                      if (status === V++) {
                                        cm.monadForceMove("white", 1, 30);
                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                      } else {
                                        if (status === V++) {
                                          cm.monadForceMove("white", 0, 900);
                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_BackgroundCanvas(0, 255, 255, 255, 90, 0, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(1990);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0##b#ho##k，我们已经到达巨大怪兽附近。\r\n哈……根据报告，前方有大量敌人严阵以待。", 37, 3003659, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                              } else {
                                                if (status === V++) {
                                                  cm.monadForceMove("white", 1, 30);
                                                  cm.inGameDirectionEvent_AskAnswerTime(30);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_BackgroundCanvas(4, 100, 100, 100, 30, 0, 0);
                                                    cm.fieldEffect_BackgroundCanvas(5, 100, 100, 100, 30, 0, 0);
                                                    cm.fieldEffect_BackgroundCanvas(2, 100, 100, 100, 30, 0, 0);
                                                    cm.fieldEffect_BackgroundCanvas(3, 100, 100, 100, 30, 0, 0);
                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/foxvalley/thunder", 100);
                                                    cm.inGameDirectionEvent_AskAnswerTime(30);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.monadForceMove('white', 0, 30);
                                                      cm.inGameDirectionEvent_AskAnswerTime(30);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_BackgroundCanvas(0, 255, 255, 255, 30, 0, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(30);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_BackgroundCanvas(4, 100, 100, 100, 30, 0, 0);
                                                          cm.fieldEffect_BackgroundCanvas(5, 100, 100, 100, 30, 0, 0);
                                                          cm.fieldEffect_BackgroundCanvas(2, 100, 100, 100, 30, 0, 0);
                                                          cm.fieldEffect_BackgroundCanvas(3, 100, 100, 100, 30, 0, 0);
                                                          cm.inGameDirectionEvent_AskAnswerTime(30);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.monadForceMove("white", 1, 30);
                                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.monadForceMove("white", 0, 900);
                                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.fieldEffect_BackgroundCanvas(0, 255, 255, 255, 90, 0, 0);
                                                                cm.inGameDirectionEvent_AskAnswerTime(1990);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.forceCompleteQuest(35627);
                                                                  cm.gainExp(171586691);
                                                                  cm.updateInfoQuest(35611, "d5=1;d6=1;d7=1;d8=1;d9=1;menu=0;d10=1;mPark75=1;d11=1;d582=1;d12=1;d30=1;d13=1;di9=1;d46=1;d74=1;medal=1;d48=1;d1=1;d4=1");
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
                                                                        cm.setStandAloneMode(false);
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