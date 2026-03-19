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
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_AskAnswerTime(1500);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_PlayBGM("Bgm50/SubterminalPoint", 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(3000);
      } else {
        if (status === V++) {
          cm.fieldEffect_复合图片动画(["Effect/Direction25.img/Dlep6/demon/0/skeleton", "start", "loop", '0'], [0, 0, 1, 0, 1, 0, -999, 1, 0, 0]);
          cm.inGameDirectionEvent_AskAnswerTime(4000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("是这个家伙啊。", 56, 0, false, true, 1);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(1500);
            } else {
              if (status === V++) {
                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cernium2/sworld", 100);
                cm.inGameDirectionEvent_AskAnswerTime(1200);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face1#恶魔听着，乖乖滚回地狱去吧。", 36, 2570101, false, true, 1);
                  cm.effect_Voice("Voice6.img/Library/hadin/06-01-hadin.mp3", 100);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(700);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(5000);
                      cm.effect_Text(["#r#fn黑体##fs26#ΘΞζδΩΨξφΔΣ", ''], [100, 2500, 4, 0, 0, 1, 4, 0, 0, 0, 0, 0]);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#我完全不懂他在说什么。这里有人懂恶魔语吗？", 36, 2570105, false, true, 1);
                        cm.effect_Voice("Voice6.img/Library/ed/06-03-ed.1.mp3", 100);
                      } else {
                        if (status === V++) {
                          cm.setAccountQuestInfo(252, "count=38989;T=20210420230158");
                          cm.sendNormalTalk_Bottom("#face1#这我不懂，但我知道如何杀死恶魔。", 36, 2570102, true, true, 1);
                          cm.effect_Voice("Voice6.img/Library/ain/06-04-ain.2.mp3", 100);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#立即，执行任务。", 36, 2570104, true, true, 1);
                            cm.effect_Voice("Voice6.img/Library/qu/30-2-qu.mp3", 100);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face1#我是恶魔猎手瑞恩！！", 36, 2570103, true, true, 1);
                              cm.effect_Voice("Voice6.img/Library/ryan/06-06-ryan.mp3", 100);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("进攻！！", 56, 0, false, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(700);
                                  } else {
                                    if (status === V++) {
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
                                            cm.updateInfoQuest(49007, "QET=AK33Yz021wE$");
                                            cm.updateInfoQuest(49007, "QET=AK33Yz021wE$");
                                            cm.updateInfoQuest(49007, "QET=AK33Yz021wE$");
                                            cm.forceStartQuest(49007, '');
                                            cm.fieldEffect_Hero9(0, 3000);
                                            cm.inGameDirectionEvent_AskAnswerTime(3500);
                                          } else if (status === V++) {
                                            cm.fieldEffect_PlayBGM("Bgm00/Silence", 0, 0);
                                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                            cm.dispose();
                                            cm.warp(308090006, 0, true);
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