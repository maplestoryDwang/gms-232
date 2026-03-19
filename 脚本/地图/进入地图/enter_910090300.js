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
      cm.setSessionValue("kill_count", '0');
      cm.setAccountQuestInfo(6, "enter=202007");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.fieldEffect_PlayBGM("Bgm51.img/Pathfinder", 0, 0);
      cm.effect_Text(["#fn黑体##fs18#勇士部落的某个偏僻角落", ''], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0, 0]);
      cm.inGameDirectionEvent_AskAnswerTime(4000);
    } else {
      if (status === V++) {
        cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction22.img/effect/PF_lab/0", 0, 100, 0, -80, 1, 4, 0, -1, 0, 0, 0);
        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/pathfinder/door", 100);
        cm.inGameDirectionEvent_AskAnswerTime(4500);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 2);
          cm.inGameDirectionEvent_AskAnswerTime(1600);
        } else {
          if (status === V++) {
            cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 0, 2);
              cm.inGameDirectionEvent_AskAnswerTime(1200);
            } else {
              if (status === V++) {
                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1400);
              } else {
                if (status === V++) {
                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/secretmission3", 100);
                  cm.fieldEffect_ProcessOnOffLayer('01', "Effect/Direction22.img/effect/PF_lab/1", 0, 500, 0, -80, -12, 4, 0, -1, 0, 0, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_ProcessOnOffLayer('02', "Effect/Direction22.img/effect/PF_lab/2", 0, 500, 0, -80, 1, 4, 0, -1, 0, 0, 0);
                    cm.fieldEffect_ProcessOnOffLayer('01', '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face3#没想到荒山中竟然有这种路。", 37, 1013358, false, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face1#到底通往什么地方呢？真是越来越让人好奇了。", 37, 1013358, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_ProcessOnOffLayer('02', '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                          cm.fieldEffect_ProcessOnOffLayer('03', "Effect/Direction22.img/effect/PF_lab/3", 0, 500, 0, -80, 1, 4, 0, -1, 0, 0, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#看来已经很久没人来了。\r\n至少有几百年，甚至更久远。", 37, 1013358, false, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#是什么人隐藏起来的秘密通道吗？\r\n或者只是过了很长时间而被人遗忘的场所？", 37, 1013358, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face1#哦……看到尽头了。", 37, 1013358, false, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_ProcessOnOffLayer('03', '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                    cm.fieldEffect_ProcessOnOffLayer('04', "Effect/Direction22.img/effect/PF_lab/4", 0, 500, 0, -80, 1, 4, 0, -1, 0, 0, 0);
                                    cm.sendNormalTalk_Bottom("#face0#这个地方过去好像是什么人的研究室。", 37, 1013358, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#研究的古代文献和遗物，年代好像都非常久远。", 37, 1013358, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face6#确实都是古代的东西。", 37, 1013358, false, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face1#呵呵……竟然还有人对古代遗物感兴趣。\r\n跟我估计很谈得来。", 37, 1013358, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face3#但是那幅插图……", 37, 1013358, true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_ProcessOnOffLayer('04', '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer('05', "Effect/Direction22.img/effect/PF_lab/5", 0, 500, 0, -80, -12, 4, 0, -1, 0, 0, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#画的好像是古代的遗迹。", 37, 1013358, false, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face2#很久以前的研究室，以及比它更久远的遗物和资料……\r\n给人一种危险的感觉。", 37, 1013358, false, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face1#呵呵……真想快点确认一下。", 37, 1013358, false, true, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face1#那里还会有什么有趣的遗物在等待着我呢？", 37, 1013358, true, true, 1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_PushScaleInfo(2500, 0, 2000, 2500, 0, 0);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_ProcessOnOffLayer('05', '', 1, 2000, 85, 50, 0, 0, 0, 0, 0, 0, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(2500);
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
                                                                            cm.warp(910090301, 0, false);
                                                                            cm.setStandAloneMode(false);
                                                                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
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