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
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 0, 0);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(300);
      } else {
        if (status === V++) {
          cm.setAmbience("Ambience.img/warfare2", 100, 60);
          cm.fieldEffect_复合图片动画(["Effect/Direction18.img/effect/adele/spine/etc/5/skeleton", 'new', '', '5'], [0, 1, 0, 0, 0, 0, 0, 1, 0, 0]);
          cm.fieldEffect_复合图片动画(["Effect/Direction18.img/effect/adele/spine/etc/6/skeleton", "new", '', '6'], [0, 1, 0, 0, 0, 0, 0, 1, 0, 0]);
          cm.effect_Voice("Voice2.img/adele/past/B/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/1', 100);
          cm.effect_Text(["#fn黑体##fs30#死守大门！", ''], [10, 100, 7, 0, -60, 0, 4, 3, 0, 0, -1, 1]);
        } else {
          if (status === V++) {
            cm.effect_Voice("Voice2.img/adele/past/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/2', 100);
            cm.effect_Text(["#fn黑体##fs30#处决叛徒！", ''], [10, 100, 7, 0, -60, 0, 4, 3, 0, 0, -1, 1]);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(1500);
              cm.effect_Voice("Voice2.img/adele/past/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/3', 100);
            } else {
              if (status === V++) {
                cm.effect_Voice("Voice2.img/adele/past/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/4', 100);
                cm.effect_Text(["#fn黑体##fs30#为了主君……", ''], [10, 100, 7, 0, -60, 0, 4, 3, 0, 0, -1, 1]);
              } else {
                if (status === V++) {
                  cm.effect_Voice("Voice2.img/adele/past/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/5', 100);
                  cm.effect_Text(["#fn黑体##fs30#守住大门……", ''], [10, 100, 7, 0, -60, 0, 4, 3, 0, 0, -1, 1]);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_PushScaleInfo(4000, 0, 1000, 4000, 0, 760);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                      cm.effect_Text(["#fn黑体##fs30##fc0xFF8d8d8d#大门前面的我军兵力有十余人……", ''], [50, 3500, 7, 0, -60, 0, 4, 3, 0, 0, 0, 0]);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(3500);
                        cm.effect_Voice("Voice2.img/adele/past/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/7', 100);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                          cm.effect_Text(["#fn黑体##fs30##fc0xFF8d8d8d#照这个情况，瞬间就会被攻破。", ''], [50, 3500, 7, 0, -60, 0, 4, 3, 0, 0, 0, 0]);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(6000);
                            cm.effect_Voice("Voice2.img/adele/past/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/8', 100);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.effect_Voice("Voice2.img/adele/past/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/9', 100);
                                cm.effect_Text(["#fn黑体##fs30##fc0xFF8d8d8d#不行……不能就这样失守。", ''], [10, 100, 7, 0, -60, 0, 4, 3, 0, 0, -1, 1]);
                              } else {
                                if (status === V++) {
                                  cm.effect_Voice("Voice2.img/adele/past/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/10', 100);
                                  cm.effect_Text(["#fn黑体##fs30##fc0xFF8d8d8d#一定要……守住大门！", ''], [10, 100, 7, 0, -60, 0, 4, 3, 0, 0, -1, 1]);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_ProcessOnOffLayer('02', "Effect/Direction18.img/effect/adele/spine/past_job/0/0", 0, 1000, 0, -80, 1, 4, 0, -1, 0, 0, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.effect_Voice("Voice2.img/adele/past/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/11", 100);
                                          cm.effect_Text(["#fn黑体##fs30##fc0xFF8d8d8d#你们就这点骨气？", ''], [10, 100, 7, 0, -60, 0, 4, 3, 0, 0, -1, 1]);
                                        } else {
                                          if (status === V++) {
                                            cm.effect_Voice("Voice2.img/adele/past/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/12", 100);
                                            cm.effect_Text(["#fn黑体##fs30##fc0xFF8d8d8d#当初的盟誓……就这么不堪一击。", ''], [10, 100, 7, 0, -60, 0, 4, 3, 0, 0, -1, 1]);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                            } else {
                                              if (status === V++) {
                                                cm.effect_Voice("Voice2.img/adele/past/A/" + (cm.getPlayer().getGender() == 0 ? 'Male' : 'Female') + "/13", 100);
                                                cm.effect_Text(["#fn黑体##fs30##fc0xFF8d8d8d#居然如此轻易地背弃了誓言！", ''], [10, 100, 7, 0, -60, 0, 4, 3, 0, 0, -1, 1]);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_ProcessOnOffLayer('02', '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/adele/memory_in", 100);
                                                    cm.fieldEffect_复合图片动画(["Effect/Direction18.img/effect/adele/spine/etc/7/skeleton", "new", '', '00'], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0]);
                                                    cm.fieldEffect_取消复合图片动画('5', 0, 0);
                                                    cm.fieldEffect_取消复合图片动画('6', 0, 0);
                                                    cm.forceStartQuest(39652, '');
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
                                                          cm.warp(410000300, 0, false);
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