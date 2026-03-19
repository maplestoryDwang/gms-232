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
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.fieldEffect_PlayBGM("Bgm47/AsylumPiano", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1500);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.setAmbience("Bgm47.img/AsylumAmbiencePiano", 100, 60);
        cm.fieldEffect_ProcessOnOffLayer("text0", "Effect/Direction14.img/illium/prologueText/0", 0, 1000, 0, -50, 13, 4, 1, -1, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(5000);
      } else {
        if (status === V++) {
          cm.fieldEffect_ProcessOnOffLayer("text0", '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.fieldEffect_ProcessOnOffLayer("text1", "Effect/Direction14.img/illium/prologueText/1", 0, 1000, 0, -50, 13, 4, 1, -1, 0, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(5000);
          } else {
            if (status === V++) {
              cm.fieldEffect_ProcessOnOffLayer("text1", '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.fieldEffect_复合图片动画(["Effect/Direction14.img/illium/prologue/0/skeleton", "animation", '', 'prologue'], [0, 0, 1, 0, 0, 0, 0, 1, 0, 0]);
                cm.fieldEffect_ProcessOnOffLayer('text2', "Effect/Direction14.img/illium/prologueText/2", 0, 1000, 0, 150, 13, 4, 1, -1, 0, 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(7000);
              } else {
                if (status === V++) {
                  cm.fieldEffect_ProcessOnOffLayer("text2", '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_ProcessOnOffLayer("text3", "Effect/Direction14.img/illium/prologueText/3", 0, 1000, 0, 150, 13, 4, 1, -1, 0, 0, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(5000);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_ProcessOnOffLayer("text3", '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(800);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_ProcessOnOffLayer("text4", "Effect/Direction14.img/illium/prologueText/4", 0, 1000, 0, 150, 13, 4, 1, -1, 0, 0, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(4000);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_ProcessOnOffLayer("text4", '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_ProcessOnOffLayer("text5", "Effect/Direction14.img/illium/prologueText/5", 0, 1000, 0, 150, 13, 4, 1, -1, 0, 0, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(5000);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_ProcessOnOffLayer("text5", '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_ProcessOnOffLayer("text6", "Effect/Direction14.img/illium/prologueText/6", 0, 1000, 0, 150, 13, 4, 1, -1, 0, 0, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(7000);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_ProcessOnOffLayer("text6", '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_ProcessOnOffLayer('text7', "Effect/Direction14.img/illium/prologueText/7", 0, 1000, 0, 150, 13, 4, 1, -1, 0, 0, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(5000);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_ProcessOnOffLayer("text7", '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_ProcessOnOffLayer("text8", "Effect/Direction14.img/illium/prologueText/8", 0, 1000, 0, 150, 13, 4, 1, -1, 0, 0, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(4500);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_ProcessOnOffLayer('text8', '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_ProcessOnOffLayer('text9', "Effect/Direction14.img/illium/prologueText/9", 0, 1000, 0, 150, 13, 4, 1, -1, 0, 0, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(5000);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_ProcessOnOffLayer('text9', '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_ProcessOnOffLayer("BlackOut", "Map/Effect2.img/BlackOut", 0, 3000, 0, 0, 13, 4, 1, -1, 0, 0, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_取消复合图片动画("prologue", 0, 0);
                                                  cm.fieldEffect_ProcessOnOffLayer("BlackOut", '', 2, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                    cm.inGameDirectionEvent_PushScaleInfo(0, 1, 256000, -256, -129, -129);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                                      } else if (status === V++) {
                                                        cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                        cm.inGameDirectionEvent_SetHideEffect(0);
                                                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                        cm.dispose();
                                                        cm.warp(940202008, 0, true);
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