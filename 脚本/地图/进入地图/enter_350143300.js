var status = -1;
var selectionLog = [];
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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1500, 0, -200, 0);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("你在这里啊，戴米安。", 37, 1540927, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom('哥。', 37, 1540926, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("不用担心了，我已经帮你教训了那些坏家伙，现在他们再也不会欺负你了。", 37, 1540927, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("对不起，哥……\r\n我会不会有一天也能变得像哥哥一样强大呢？", 37, 1540926, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("不用担心，我会一直在你身旁的。", 37, 1540927, true, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_PushScaleInfo(8000, 1000, 8000, 100, 0);
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
                        cm.inGameDirectionEvent_AskAnswerTime(3500);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("走吧，戴米安，回家吧。", 37, 1540927, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#恩！", 37, 1540926, true, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 12000, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(6000);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_PlayFieldSound("Sound/Voice3.img/HofM/ACT4/NAR1/1", 128);
                                  cm.fieldEffect_ProcessOnOffLayer('1', "Map/Effect2.img/HofM/ACT4_text1/0", 0, 2500, 0, -70, 12, 7, 1);
                                  cm.inGameDirectionEvent_AskAnswerTime(3200);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_ProcessOnOffLayer('1', '', 2, 500, 0, 0, 0, 0, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_PlayFieldSound("Sound/Voice3.img/HofM/ACT4/NAR1/2", 128);
                                      cm.fieldEffect_ProcessOnOffLayer('2', "Map/Effect2.img/HofM/ACT4_text1/1", 0, 2500, 0, -70, 12, 7, 1);
                                      cm.inGameDirectionEvent_AskAnswerTime(4300);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_ProcessOnOffLayer('2', '', 2, 500, 0, 0, 0, 0, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_PlayFieldSound("Sound/Voice3.img/HofM/ACT4/NAR1/4", 128);
                                          cm.fieldEffect_ProcessOnOffLayer('4', "Map/Effect2.img/HofM/ACT4_text1/3", 0, 2500, 0, -70, 12, 7, 1);
                                          cm.inGameDirectionEvent_AskAnswerTime(5500);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_ProcessOnOffLayer('4', '', 2, 500, 0, 0, 0, 0, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else if (status === V++) {
                                            cm.dispose();
                                            cm.warp(350144050, 0, true);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;