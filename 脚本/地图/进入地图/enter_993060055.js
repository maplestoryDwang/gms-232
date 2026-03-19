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
      cm.npc_ChangeController(3003633, 'oid=275904', -222, -742, 1, -272, -172, 0, false, 0, false);
      cm.npc_ChangeController(3003690, 'oid=275905', 108, -923, 16, 69, 158, 1, false, 0, false);
      cm.npc_ChangeController(3003693, "oid=275906", 109, -657, 23, 59, 159, 1, false, 0, false);
      cm.npc_ChangeController(3003692, "oid=275907", 190, -657, 23, 140, 240, 1, false, 0, false);
      cm.npc_ChangeController(3003691, "oid=275908", -491, -742, 1, -541, -441, 0, false, 0, false);
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.setAmbience("Ambience.img/BM1_wave", 200, 60);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.setAmbience("Ambience.img/BM1_wave", 200, 60);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 73, -620);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_ForcedFlip(-1);
        cm.inGameDirectionEvent_AskAnswerTime(300);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_ForcedFlip(0);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face2#凯琳，请进入云层，向着黑太阳前进。", 37, 3003651, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#没问题。我们诺特勒斯号会寻找最佳航线，提升高度。", 37, 3003673, true, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face2#拜托了。收到诺特勒斯号发出的信号之后，\r\n白色之矛也会跟随过去。", 37, 3003651, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#是，那就这么办吧。请跟着诺特勒斯号。", 37, 3003673, true, true);
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
                          cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 2000, 2000, -100, -620);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_同时移动镜头和人(1, 300);
                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#哈哈，你平安回来啦，#b#ho##k。\r\n多亏了你，我们才能顺利穿过未知的迷雾。", 37, 3003673, false, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.forceStartQuest(35621, '');
                                  cm.forceCompleteQuest(35621);
                                  cm.gainExp(171586691);
                                  cm.updateInfoQuest(35611, "d5=1;d6=1;d7=1;d8=1;mPark75=1;d30=1;d46=1;d74=1;medal=1;d48=1;d1=1;d4=1");
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