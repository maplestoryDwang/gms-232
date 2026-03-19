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
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 0, 0);
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
            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/lightup", 100);
            cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 1000, 3000, -794, -680);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face7#再快点……", 37, 3001951 - cm.getPlayer().getGender(), false, true, 1);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_Hero9(0, 1000);
                      cm.inGameDirectionEvent_AskAnswerTime(1300);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                        cm.fieldEffect_Hero9(100, 500);
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/wind", 100);
                          cm.fieldEffect_PlayBGM("Bgm53/RomanticSunset", 0, 0);
                          cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction18.img/effect/adele/illust/present/5/0", 0, 500, 0, 0, 1, 4, 1, -1, 0, 0, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face2#阿黛尔……", 36, 3001954, false, true, 1);
                              cm.effect_Voice("Voice2.img/adele/present/H/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/11", 100);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face4#你的翅膀，是怎么回事？", 36, 3001954, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
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
                                          cm.fieldEffect_复合图片动画(["Effect/Direction18.img/effect/adele/spine/present/5/1/skeleton", '1', '', '01'], [0, 1, 1, 0, 0, 0, 0, 1, 0, -80]);
                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#虽然嘴上说你可以离开，但老实说，我不想你走……", 36, 3001954, false, true, 1);
                                            cm.effect_Voice("Voice2.img/adele/present/H/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/12", 100);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#我很庆幸能再次见到你。", 36, 3001954, true, true, 1);
                                              cm.effect_Voice("Voice2.img/adele/present/H/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/13", 100);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#谢谢你，成为我的骑士，愿意信任我……", 36, 3001954, true, true, 1);
                                                cm.effect_Voice("Voice2.img/adele/present/H/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/14", 100);
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
                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/Firework/start", 100);
                                                          cm.setAmbience("Ambience.img/fireworks_adele", 200, 60);
                                                          cm.fieldEffect_复合图片动画(["Effect/Direction18.img/effect/adele/spine/present/5/1/skeleton", '2', '', '02'], [0, 1, 1, 0, 0, 0, 0, 1, 0, -80]);
                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face7#不是消失了吗！？", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1);
                                                            cm.effect_Voice("Voice2.img/adele/present/H/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/15", 100);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#噗嗤……阿黛尔，那是艺术节的焰火！", 36, 3001954, true, true, 1);
                                                              cm.effect_Voice("Voice2.img/adele/present/H/" + (cm.getPlayer().getGender() == 0 ? 'Male' : 'Female') + "/16", 100);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#静静欣赏一下，很美吧？", 36, 3001954, true, true, 1);
                                                                cm.effect_Voice("Voice2.img/adele/present/H/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + "/17", 100);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#……挺精彩的。", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                                                  cm.effect_Voice("Voice2.img/adele/present/H/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/18", 100);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#我还是第一次在这种地方看焰火。这情景，一辈子都不会忘的。\r\n回去也要向布鲁和拉迪炫耀一下……", 36, 3001954, true, true, 1);
                                                                    cm.effect_Voice("Voice2.img/adele/present/H/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/19', 100);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
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
                                                                              cm.fieldEffect_取消复合图片动画('01', 1, 0);
                                                                              cm.fieldEffect_取消复合图片动画('02', 1, 0);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/Firework/start", 100);
                                                                                cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(看你这么高兴，应该很喜欢看焰火吧。\r\n杰罗姆，其实我根本没感觉那焰火有多美。)", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face3##fc0xFFbfbfbf#(但自从认识你之后，我也渐渐会笑了。\r\n我心里也开始萌生出名为幸福的情感了吗？)", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/Firework/start", 100);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_SetHideEffect(0);
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
                                                                                            cm.warp(993162047, 0, false);
                                                                                            cm.setStandAloneMode(false);
                                                                                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
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
            }
          }
        }
      }
    }
  }
}