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
      cm.inGameDirectionEvent_AskAnswerTime(2000);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNormalTalk_Bottom("#face0#等等，艾德。", 36, 2570102, false, true, 1);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#嗯？", 36, 2570105, true, true, 1);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#谢谢你的帮助。但是……这次希望你活下去。", 36, 2570102, true, true, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face3#行，我会记住的。", 36, 2570105, true, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#……。", 36, 2570102, true, true, 1);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face3#……。", 36, 2570102, false, true, 1);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(3500);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_PlayBGM("Bgm50/SubterminalPoint", 0, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_复合图片动画(["Effect/Direction25.img/Dlep6/demon/0/skeleton", "start", "loop", '0'], [0, 0, 1, 0, 1, 0, 0, 1, 0, 0]);
                          cm.inGameDirectionEvent_AskAnswerTime(5000);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(8500);
                          } else {
                            if (status === V++) {
                              cm.effect_Text(["#r#fn黑体##fs26#ΘΞζδΩΨξφΔΣ", ''], [100, 2500, 4, 0, 0, 1, 4, 0, 0, 0, 0, 0]);
                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cernium2/sworld", 100);
                              cm.inGameDirectionEvent_AskAnswerTime(700);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face1#恶魔听着，滚回地狱去吧……", 36, 2570101, false, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.effect_Voice("Voice6.img/Library/hadin/08-02-hadin.mp3", 100);
                                  cm.sendNormalTalk_Bottom("#face1#呀啊啊啊！！", 36, 2570105, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face4#啊，一起走！", 36, 2570101, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(700);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_取消复合图片动画('0', 1, 500);
                                        cm.fieldEffect_复合图片动画(["Effect/Direction25.img/Dlep6/demon/1/skeleton", "start", "loop", '1'], [0, 0, 1, 0, 1, -10, -1000, 1, 0, 0]);
                                        cm.fieldEffect_取消复合图片动画('0', 1, 300);
                                        cm.inGameDirectionEvent_AskAnswerTime(2500);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction25.img/Dlep6/effect/1", 0, 1000, 30, 2, 2000, 4, 0, -1, 1, -1, 1);
                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/morass/tana_skill2", 100);
                                          cm.inGameDirectionEvent_AskAnswerTime(4500);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_取消复合图片动画('1', 1, 10);
                                            cm.inGameDirectionEvent_AskAnswerTime(4500);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face1#嘁，又是黑暗……！", 36, 2570102, false, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face1#大伙儿在哪儿呢？！", 36, 2570103, true, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 91, 124);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("冷静点！这全都是#r恶魔制造出的幻影#k。", 56, 0, false, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.setAccountQuestInfo(252, "count=39902;T=20210420231711");
                                                          cm.sendNormalTalk_Bottom("大家注意不要互相攻击！", 56, 0, true, true, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face1#我们是在一起训练了几年的交情！", 36, 2570101, true, true, 1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face1#我可以清楚地分辨出谁是谁！", 36, 2570101, true, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face4#哦……是吗？哇！！", 36, 2570103, true, true, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                } else if (status === V++) {
                                                                  cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                  cm.dispose();
                                                                  cm.warp(308000260, 0, false);
                                                                  cm.setInGameDirectionMode(false, true, false);
                                                                  cm.setStandAloneMode(false);
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