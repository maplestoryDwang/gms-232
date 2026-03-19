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
      cm.npc_ChangeController(3004906, 'oid=363587', 958, 31, 2, 914, 1008, 0, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.npc_ChangeController(3004929, 'oid=568419', 1032, 20, 2, 982, 1082, 0, false, 0, false);
        cm.npc_SetSpecialAction('oid=568419', "summon", 0, 0);
        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 1108, 3);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#可以吗？", 36, 3004906, false, true, 1);
          cm.effect_Voice("Voice6.img/kain/29/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/1', 100);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1500);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#虽然恶意或记忆之类的东西……想抽出多少就可以抽出多少，但是……", 36, 3004905, false, true, 1);
              cm.effect_Voice("Voice6.img/kain/29/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/2', 100);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/morass/hug", 100);
                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_PlayBGM("Bgm53/Apostles", 0, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(2500);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#让我抽掉死亡未免太过了吧。", 36, 3004929, false, true, 1);
                          cm.effect_Voice("Voice6.img/kain/29/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/3', 100);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(2500);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1500, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(2500);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_屏幕渐入插图B(['00', "Effect/Direction26.img/kain/spine/boss/skeleton", '', 'loopend2'], [1, 0, 0, 0, 2500, 0, 0, 0, 0, 0, 1, 0, 0]);
                                  cm.inGameDirectionEvent_AskAnswerTime(4000);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/kain/spine_boss", 100);
                                      cm.fieldEffect_Hero9(0, 5000);
                                      cm.fieldEffect_屏幕渐入插图B(['00', "Effect/Direction26.img/kain/spine/boss/skeleton", 'loop', 'loopend'], [1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0]);
                                      cm.inGameDirectionEvent_AskAnswerTime(3500);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_屏幕渐入插图B(['00', "Effect/Direction26.img/kain/spine/boss/skeleton", "loopend", "loopend2"], [1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0]);
                                        cm.inGameDirectionEvent_AskAnswerTime(5000);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(5000);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_屏幕渐入插图B(['00', "Effect/Direction26.img/kain/spine/boss/skeleton", "eyesopen", "eyesopen_loop"], [1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0]);
                                            cm.inGameDirectionEvent_AskAnswerTime(2500);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_屏幕渐入插图B(['00', "Effect/Direction26.img/kain/spine/boss/skeleton", '', "eyesopen_loop"], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0]);
                                              cm.inGameDirectionEvent_AskAnswerTime(2500);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/secretmission3", 100);
                                                cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                cm.fieldEffect_屏幕渐入插图消失B(['00'], [1, 300]);
                                                cm.inGameDirectionEvent_AskAnswerTime(5000);
                                              } else if (status === V++) {
                                                cm.npc_LeaveField("oid=568419");
                                                cm.dispose();
                                                cm.warp(993164041, 0, true);
                                                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
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