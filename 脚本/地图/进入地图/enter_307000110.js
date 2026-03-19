var status = -1;
function action(f, E, e) {
  if (cm.getNumberFromQuestInfo(32970, 'e2') == 0) {
    action1(f, E, e);
  } else if (cm.isQuestActive(32977)) {
    action2(f, E, e);
  } else {
    cm.dispose();
  }
}
function action1(f, E, e) {
  status++;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -11, -77);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(4000);
      cm.curNodeEventEnd(true);
      cm.effect_Text(["#fn黑体##fs18#第二天"], [100, 2200, 6, -50, -50, 1, 4, 0, 0, 0]);
    } else {
      if (status === V++) {
        cm.SitOnDummyPortableChair(3018034, 1);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("影鹿角，再放一点磨得很细的骨粉，\r\n少许苍穹甘草根，少许泥鳅眼珠……", 57, 0, false, true);
          } else {
            if (status === V++) {
              cm.updateInfoQuest(32999, "10=h0;01=h1;02=h0;20=h0;11=h0;21=h0;12=h0;03=h0;13=h0;04=h0;14=h0;05=h0;15=h0;06=h0;16=h0;07=h0;17=h0;18=h0;19=h0");
              cm.updateInfoQuest(32999, "10=h0;01=h1;02=h0;20=h0;11=h0;21=h0;12=h0;03=h0;13=h0;04=h0;14=h0;05=h0;15=h0;06=h0;16=h0;07=h0;17=h1;18=h0;19=h0");
              cm.updateInfoQuest(32999, "10=h0;01=h1;02=h0;20=h0;11=h0;21=h0;12=h0;03=h1;13=h0;04=h0;14=h0;05=h0;15=h0;06=h0;16=h0;07=h0;17=h1;18=h0;19=h0");
              cm.sendNormalTalk_Bottom("呼……搞定了。中和剂准备好了……\r\n啊，已经这么晚了吗？快出去吧。", 57, 0, true, true);
            } else if (status === V++) {
              cm.dispose();
              cm.updateInfoQuest(32970, "s1=1;s2=1;e1=1;e2=1");
              cm.warp(307000110, 0, false);
              cm.setStandAloneMode(false);
              cm.eventSKill(0);
              cm.setInGameDirectionMode(false, true, false);
              cm.dispose();
            }
          }
        }
      }
    }
  }
}
function action2(f, E, e) {
  status++;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 56, -293);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.updateInfoQuest(32999, "10=h0;01=h1;02=h0;20=h0;11=h1;21=h0;12=h0;03=h1;13=h0;04=h0;14=h0;05=h0;15=h0;06=h0;16=h0;07=h0;08=h1;17=h1;18=h0;19=h0");
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 128, -224);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_ForcedFlip(1);
        cm.setStandAloneMode(true);
        cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(4000);
        cm.effect_Text(["#fn黑体##fs18#第二天"], [100, 2200, 6, -50, -50, 1, 4, 0, 0, 0]);
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
              cm.sendNormalTalk_Bottom("真是奇怪。之前明明是张白纸……", 57, 0, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("嗯……#b消除一切虚假，显露真相#k……\r\n消除什么虚假呢？", 57, 0, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("耶，行了。一定是想做什么恶作剧。", 57, 0, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("这里也有人写了字。写的是#fn？？？？##b“一定是恶作剧！”#k", 57, 0, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("不管它。好好干活吧。", 57, 0, true, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_同时移动镜头和人(2, 150);
                          cm.inGameDirectionEvent_AskAnswerTime(2500);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom('啊……等等？！这……', 57, 0, false, true);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                              cm.inGameDirectionEvent_ForcedFlip(-1);
                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#fs20#这不是我的笔迹吗？！！", 57, 0, false, true);
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
                                    } else if (status === V++) {
                                      cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                      cm.setStandAloneMode(false);
                                      cm.eventSKill(0);
                                      cm.setInGameDirectionMode(false, true, false);
                                      cm.updateInfoQuest(32999, "10=h0;01=h1;02=h0;20=h0;11=h0;21=h0;12=h0;03=h1;13=h0;04=h0;14=h0;05=h0;15=h0;06=h0;16=h0;07=h0;08=h1;17=h1;18=h0;19=h0");
                                      cm.updateInfoQuest(32999, "10=h0;01=h1;02=h0;20=h0;11=h0;21=h0;12=h0;03=h1;13=h0;04=h0;14=h0;05=h0;15=h0;06=h0;16=h0;07=h0;08=h1;17=h1;18=h0;19=h1");
                                      cm.updateInfoQuest(32977, "exp=1");
                                      cm.gainExp(1091797);
                                      cm.forceCompleteQuest(32977);
                                      cm.fieldEffect_PlayBGM("Bgm33.img/NastyLiar", 0, 0);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;