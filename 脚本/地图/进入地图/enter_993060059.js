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
      if (cm.isQuestFinished(35626)) {
        cm.dispose();
        return;
      }
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 957, -400);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNormalTalk_Bottom("#face0#伊黛娜……那，那边有我们的船！！", 37, 3003661, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#请把船停下来。", 37, 3003674, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#是，伊黛娜！", 37, 3003661, true, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(1500);
            } else {
              if (status === V++) {
                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/tilt", 100);
                cm.inGameDirectionEvent_AskAnswerTime(1500);
              } else {
                if (status === V++) {
                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1400);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_PushScaleInfo(5000, 0, 1000, 5000, 957, 70);
                    } else {
                      if (status === V++) {
                        cm.effect_Text(["#fn黑体##fs18#虚空波涛，失事船"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0]);
                        cm.inGameDirectionEvent_AskAnswerTime(5000);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#你，您是……诺巴的伊黛娜大人……\r\n还有#b#ho##k大人……你们是来找我们的吗！？", 37, 3003660, false, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#（伊黛娜简单了讲述了目前联盟所处的情况。\r\n反抗者士兵纷纷点头表示理解。）", 37, 3003674, false, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#那个巨大怪兽弄坏了我们的船……\r\n但是经过修理，还好能动。", 37, 3003660, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#啊，在这之前……现在有很多敌人登上了这艘船……\r\n必须把他们全部清理掉。", 37, 3003660, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.forceCompleteQuest(35626);
                                      cm.gainExp(85793345);
                                      cm.updateInfoQuest(35611, "d5=1;d6=1;d7=1;d8=1;d9=1;menu=0;d10=1;mPark75=1;d11=1;d582=1;d30=1;di9=1;d46=1;d74=1;medal=1;d48=1;d1=1;d4=1");
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