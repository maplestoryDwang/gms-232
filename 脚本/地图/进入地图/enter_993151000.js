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
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_PlayBGM("Bgm53/SanctuaryOfMitra", 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(2500);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_Monologue('英勇的骑士啊。', 0);
          cm.effect_Voice("Voice5.img/CH3/1_1", 128);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_Monologue("你要成为驱散黑暗的黎明之剑。", 0);
            cm.effect_Voice("Voice5.img/CH3/1_2", 128);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_Monologue("成为保护战友的阳光之盾。", 0);
              cm.effect_Voice("Voice5.img/CH3/1_3", 128);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_Monologue("成为严惩敌人的黄昏之焰。", 1);
                cm.effect_Voice("Voice5.img/CH3/1_4", 128);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                  cm.fieldEffect_ProcessOnOffLayer("BlackOut3", "Map/Effect2.img/BlackOut", 0, 50, 0, 0, 0, 4, 1, 0, 0, -1, 0);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_复合图片动画(["Effect/Direction23.img/spine/5/skeleton", 'animation', '', "knight"], [0, 1, 0, 90000, 0, 0, -1, 1]);
                    cm.fieldEffect_ProcessOnOffLayer("BlackOut3", '', 2, 1500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(3500);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_Monologue("起身吧。", 0);
                      cm.effect_Voice("Voice5.img/CH3/1_5", 128);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_Monologue("从现在开始，你就是密特拉之剑。", 1);
                        cm.effect_Voice("Voice5.img/CH3/1_6", 128);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(2500);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_取消复合图片动画('knight', 1, 700);
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_Monologue("你要坚信，黑夜的尽头即将到来。", 0);
                              cm.effect_Voice("Voice5.img/CH3/1_7", 128);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_Monologue("昏红的太阳很快会点燃东边的天空，冉冉升起……", 0);
                                cm.effect_Voice("Voice5.img/CH3/1_8", 128);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_Monologue('', 1);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_Hero9(0, 3000);
                                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_PlayBGM("Bgm00/Silence", 0, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face4#东方的天空……燃烧……", 37, 3004430, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_Hero9(100, 100);
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_PlayBGM("Bgm53/Apostles", 0, 0);
                                              cm.fieldEffect_ProcessOnOffLayer("BlackOut", "Map/Effect2.img/BlackOut", 0, 50, 0, 0, 0, 4, 1, 0, 0, -1, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_复合图片动画(["Effect/Direction23.img/spine/3/BurnningSky_00", "animation", '', "bubble"], [0, 1, 0, 90000, 0, 0, -1, 1]);
                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cernium3/burningSky", 100);
                                                cm.fieldEffect_ProcessOnOffLayer("BlackOut", '', 2, 1500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(4000);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face4#近天峰……", 37, 3004430, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face4##r闪电使徒……", 37, 3004430, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_ProcessOnOffLayer('BlackOut2', "Map/Effect2.img/BlackOut", 0, 500, 0, 0, 0, 4, 1, 0, 0, -1, 0);
                                                        cm.fieldEffect_Hero9(0, 500);
                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_PlayBGM("Bgm00/Silence", 0, 0);
                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                        } else if (status === V++) {
                                                          cm.eventSKill(0);
                                                          cm.dispose();
                                                          cm.warp(993151001, 0, false);
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