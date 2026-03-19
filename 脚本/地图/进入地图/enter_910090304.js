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
      cm.fieldEffect_PlayBGM("Bgm51.img/ThePartemRuins", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.sendNormalTalk_Bottom("#face4#呃……呃呃……", 37, 1013358, false, true, 1);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face4#差不多……到了……", 37, 1013358, false, true, 1);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.effect_Text(["#fn黑体##fs18#片刻后，大本营", ''], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0, 0]);
              cm.inGameDirectionEvent_AskAnswerTime(4500);
            } else {
              if (status === V++) {
                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/pathfinder/down", 100);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction22.img/effect/PF_baseC/0", 0, 500, 0, -80, 1, 4, 0, -1, 0, 0, 0);
                  cm.sendNormalTalk_Bottom("#face4#呼……呼……", 37, 1013358, false, true, 1);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face5##b（感觉身体在燃烧，好痛苦。\r\n到底……我到底发生了什么事 ……那种不祥的气息到底是什么。）#k", 37, 1013358, false, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face5##b（因为触碰了遗物？\r\n……难道是古代遗物的诅咒？）#k", 37, 1013358, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                          cm.fieldEffect_ProcessOnOffLayer('01', "Effect/Direction22.img/effect/PF_baseC/1", 0, 500, 0, -80, 1, 4, 0, -1, 0, 0, 0);
                          cm.sendNormalTalk_Bottom("#face5##b（老师的忠告是对的。\r\n是的，好奇心往往会伴随着危险……）#k", 37, 1013358, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_ProcessOnOffLayer('02', "Effect/Direction22.img/effect/PF_baseC/2", 0, 1500, 0, -80, 1, 4, 0, -1, 0, 0, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_ProcessOnOffLayer('02', '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                              cm.fieldEffect_ProcessOnOffLayer('03', "Effect/Direction22.img/effect/PF_baseC/3", 0, 2500, 0, -80, 1, 4, 0, -1, 0, 0, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("祝贺你，#b#ho##k。现在你终于要离开我的怀抱，踏上自己的冒险之路了。", 37, 3003658, false, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("相信你一定可以谱写出属于自己的传说。", 37, 3003658, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("因为你是我见过好奇心最强、最勇敢的冒险家。", 37, 3003658, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom('但是……', 37, 3003658, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("这一点同时也让我有点担心。", 37, 3003658, false, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("好奇心可以成为照亮新道路的火把，\r\n但偶尔也会成为招致灾难的火种。", 37, 3003658, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("冒险家，请你记住。\r\n好奇心的背后隐藏着危险。", 37, 3003658, true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("必须保持警惕，时刻提醒自己……", 37, 3003658, true, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_ProcessOnOffLayer('03', '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_ProcessOnOffLayer('04', "Effect/Direction22.img/effect/PF_baseC/2", 0, 1500, 0, -80, 1, 4, 0, -1, 0, 0, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_ProcessOnOffLayer('01', '', 2, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_ProcessOnOffLayer('04', '', 2, 3000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face5#但是……我……", 37, 1013358, false, true, 1);
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
                                                                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                  } else if (status === V++) {
                                                                    cm.dispose();
                                                                    cm.warp(910090305, 0, false);
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