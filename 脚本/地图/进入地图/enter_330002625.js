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
      cm.npc_ChangeController(1530060, "oid=40588467", 547, 58, 2, 497, 597, 1, true, false);
      cm.npc_SetSpecialAction("oid=40588467", 'summon', 0, 0);
      cm.npc_ChangeController(1530070, "oid=40588468", 447, 58, 1, 397, 497, 0, true, false);
      cm.npc_SetSpecialAction("oid=40588468", 'summon', 0, 0);
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.setAmbience("Ambience.img/bird", 100, 60);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1000);
          cm.effect_Text(["#fn黑体##fs26#几天后，办公室。"], [100, 2500, 4, 0, 0, 1, 4, 0, 0, 0]);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushMoveInfo(0, 150, 500, 128);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(3653);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("南哈特~南哈特~", 37, 1530060, false, true);
                cm.effect_Voice("Voice2.img/Friends/CH6_11/1", 100);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("怎么了？", 37, 1530070, true, true);
                  cm.effect_Voice("Voice2.img/Friends/CH6_11/2", 100);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("布吉的歌~你有布吉唱的原曲吗？", 37, 1530060, true, true);
                    cm.effect_Voice("Voice2.img/Friends/CH6_11/3", 100);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("在接受参加申请的时候，我收到了小样。", 37, 1530070, true, true);
                      cm.effect_Voice("Voice2.img/Friends/CH6_11/4", 100);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("唔，但是我没找到啊。", 37, 1530060, true, true);
                        cm.effect_Voice("Voice2.img/Friends/CH6_11/5", 100);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("我是按照收到的日期整理的。你去找找2月的文件吧。", 37, 1530070, true, true);
                          cm.effect_Voice("Voice2.img/Friends/CH6_11/6", 100);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/what", "oid=40588467"], [0, 0, 0, 1, 0, 1, 0, 0]);
                            cm.inGameDirectionEvent_AskAnswerTime(2500);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("嗯？2月？那不是已经过了申请的日期了吗？", 37, 1530060, false, true);
                              cm.effect_Voice("Voice2.img/Friends/CH6_11/7", 100);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom('……', 37, 1530070, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("如果南哈特没有接受申请，那布吉一开始就不能申请了，对吧？", 37, 1530060, true, true);
                                  cm.effect_Voice("Voice2.img/Friends/CH6_11/8", 100);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom('……', 37, 1530070, true, true);
                                    cm.effect_Voice("Voice2.img/Friends/CH6_11/9", 100);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("南~哈~特~", 37, 1530060, true, true);
                                      cm.effect_Voice("Voice2.img/Friends/CH6_11/10", 100);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("有话直说。", 37, 1530070, true, true);
                                        cm.effect_Voice("Voice2.img/Friends/CH6_11/11", 100);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("你不是说规定是最重要的吗？", 37, 1530060, true, true);
                                          cm.effect_Voice("Voice2.img/Friends/CH6_11/12", 100);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("有时候，也会有比规定更重要的东西，比如……", 37, 1530070, true, true);
                                            cm.effect_Voice("Voice2.img/Friends/CH6_11/13", 100);
                                          } else {
                                            if (status === V++) {
                                              cm.playSoundEffDirectly("Ambience.img/bird");
                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_PlayBGM("Bgm42/Catch Your Dreams！vocaless", 0, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom('比如？', 37, 1530060, false, true);
                                                  cm.effect_Voice("Voice2.img/Friends/CH6_11/14", 100);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("和好友们在一起的回忆。", 37, 1530070, true, true);
                                                    cm.effect_Voice("Voice2.img/Friends/CH6_11/15", 100);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_ProcessOnOffLayer("masking_up", "Map/Effect2.img/blackHeavenCinematic/masking", 0, 0, 0, 0, 30, 1, 1);
                                                        cm.fieldEffect_ProcessOnOffLayer("masking_down", "Map/Effect2.img/blackHeavenCinematic/masking", 0, 0, 0, 0, 30, 7, 1);
                                                        cm.fieldEffect_ProcessOnOffLayer('1', "Map/Effect2.img/spinoff2/5", 0, 2000, 0, 0, 12, 4, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_PushScaleInfo(4000, 1500, 4000, 0, 0);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.fieldEffect_ProcessOnOffLayer('1', '', 2, 1000, 0, 0, 0, 0, 0);
                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.fieldEffect_ProcessOnOffLayer("masking_up", '', 2, 500, 0, 0, 0, 0, 0);
                                                                cm.fieldEffect_ProcessOnOffLayer("masking_down", '', 2, 500, 0, 0, 0, 0, 0);
                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                              } else if (status === V++) {
                                                                cm.inGameDirectionEvent_SetHideEffect(0);
                                                                cm.forceStartQuest(33043, '');
                                                                cm.dispose();
                                                                cm.warp(330002630, 0);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;