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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_ProcessOnOffLayer('BlackOut', "Map/Effect2.img/BlackOut", 0, 0, 0, 0, 2000000, 4, 1, 0, 1, 0, 0);
        cm.fieldEffect_复合图片动画(["Effect/Direction25.img/Sellas/whale/skeleton", '1', '', "3500"], [0, 1, 0, 0, 0, 0, 0, 1, 0, 0]);
        cm.inGameDirectionEvent_AskAnswerTime(2000);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_Monologue("那天……很多东西消失了。", 1);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(3000);
          } else {
            if (status === V++) {
              cm.fieldEffect_PlayBGM("Bgm55/SinkingThings", 0, 0);
              cm.inGameDirectionEvent_AskAnswerTime(4000);
            } else {
              if (status === V++) {
                cm.fieldEffect_ProcessOnOffLayer('BlackOut', '', 2, 3500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(6500);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_Monologue("不管是船，货物，还是人……", 0);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_Monologue("无数的梦想沉没了。", 1);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(3500);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_Monologue("经过了漫长的岁月，如今……", 0);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_Monologue("当时的记忆也一点点地变得模糊了。", 1);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_Monologue("但惟有一点，绝对忘不掉的是……", 1);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(3500);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_复合图片动画(["Effect/Direction25.img/Sellas/whale/skeleton", '2', '3', '02'], [0, 0, 0, 0, 1, 10000, 0, 1, 0, 0]);
                                  cm.inGameDirectionEvent_AskAnswerTime(8000);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_Monologue("那眼睛……", 1);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_Monologue("仿佛根本不在意这些微不足道的生灵的悲剧，", 0);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_Monologue("愤怒，哀伤，怜悯……", 0);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_Monologue("丝毫没表露任何情绪的……", 1);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(3500);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_Monologue("是那双眼睛。", 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_ProcessOnOffLayer("BlackOut2", "Map/Effect2.img/BlackOut", 0, 3000, 0, 0, 2000000, 4, 1, 0, 1, 0, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1000, 0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1300);
                                                    } else if (status === V++) {
                                                      cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                      cm.setInGameDirectionMode(false, true, false);
                                                      cm.setStandAloneMode(false);
                                                      cm.dispose();
                                                      cm.warp(993185001, 0, true);
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}