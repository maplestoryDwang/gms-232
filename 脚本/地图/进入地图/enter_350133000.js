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
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 0, 0);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.setAmbience("Ambience.img/secretmissionbase", 100, 60);
        cm.setAmbience("Ambience.img/gravity", 100, 60);
        cm.sendNormalTalk_Bottom("#face2#龙神，回答我！龙神！", 37, 1540880, false, true);
        cm.effect_Voice("Voice3.img/HofM/ACT3/ED/1", 128);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face4#等下，看看那上面！", 37, 1540878, true, true);
          cm.effect_Voice("Voice3.img/HofM/ACT3/ED/2", 128);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face3#那是……！", 37, 1540879, true, true);
            cm.effect_Voice("Voice3.img/HofM/ACT3/ED/3", 128);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushScaleInfo(6000, 1000, 6000, 385, 280);
            } else {
              if (status === V++) {
                cm.setAmbience("Ambience.img/flyingdeck", 100, 60);
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1200);
              } else {
                if (status === V++) {
                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(1400);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(4000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face4#弗里德留给我们最后的遗产……正在坠落。", 37, 1540878, false, true);
                      cm.effect_Voice("Voice3.img/HofM/ACT3/ED/4", 128);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/secretmission4", 100);
                          cm.playSoundEffDirectly("Ambience.img/gravity");
                          cm.playSoundEffDirectly("Ambience.img/flyingdeck");
                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_Monologue("#fs34#\r\n\r\n\r\n\r\n\r\n冒险岛世界\r\n#fs28#- 接下来的故事", 1);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/fears14", 100);
                                  cm.fieldEffect_复合图片动画(["Map/Effect2.img/HofM/ACT3_dem/004", "animation", '', ''], [1, 0, 1, 0, 0, 0, 0, 0]);
                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act3/ending", 100);
                                  cm.inGameDirectionEvent_AskAnswerTime(15000);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/heartattack", 100);
                                    cm.fieldEffect_ProcessOnOffLayer("dem", "Map/Effect2.img/HofM/ACT3_next", 0, 500, 0, 0, 6, 4, 1);
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_ProcessOnOffLayer("dem", '', 2, 3000, 0, 0, 0, 0, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                                    } else if (status === V++) {
                                      cm.playerMessage(5, "获得7000点声望。");
                                      cm.updateInfoQuest(33909, "1_5=1;1=1;2=1;3=1;4=0");
                                      cm.updateInfoQuest(33932, "1_5=1;1=1;2=1;3=1");
                                      cm.updateInfoQuest(15249, "ring=3");
                                      cm.forceCompleteQuest(33913);
                                      cm.finishAchievement(1200);
                                      cm.gainItem(3017014, 1);
                                      cm.dispose();
                                      cm.onActionBarResult(6, -1);
                                      cm.mapleHeroBecomeNpc(-1, 1);
                                      cm.warp(913050010, 0, true);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;