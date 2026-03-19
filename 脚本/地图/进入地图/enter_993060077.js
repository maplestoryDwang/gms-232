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
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.OverlapScreenDetail19(0, 1000, 3000, 1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(300);
        } else {
          if (status === V++) {
            cm.fieldEffect_RemoveOverlapScreenDetail(1000);
            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -6004, -888);
          } else {
            if (status === V++) {
              cm.fieldEffect_复合图片动画(["Effect/Direction20.img/effect/BM1_WS_spine/W_sp", "animation", '', '02'], [0, 0, 0, 0, 0, 0, 0, 1]);
              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM1/WS", 100);
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 0, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(5000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face3#舰炮发射！！", 37, 3003656, false, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(1600);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_取消复合图片动画('02', 1, 1000);
                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -2470, -593);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(300);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 0, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(1400);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("(结界变弱了，进入巨大怪兽的内部，打碎核心吧。)\r\n #r※ 如果未能打破核心，需要放弃任务后重新领取。#k", 57, 0, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.updateInfoQuest(35611, "d5=1;d6=1;d7=1;d8=1;d9=1;menu=0;mPark75=1;d10=1;d582=1;d11=1;d30=1;d12=1;di9=1;d13=1;d14=1;d15=1;d46=1;medal=1;d74=1;d48=1;d1=1;d4=1");
                                          cm.forceCompleteQuest(35630);
                                          cm.gainExp(171586691);
                                          cm.forceStartQuest(35631, '');
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
                                                cm.warp(993067100, 0, false);
                                                cm.setStandAloneMode(false);
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