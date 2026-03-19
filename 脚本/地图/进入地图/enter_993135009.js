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
      cm.userSetFieldFloating(993135009, 0, 0, 0);
      cm.Hidden_background("cernium_ship", 1, 0, 0, 0);
      cm.Hidden_background("cernium_ship2", 1, 0, 0, 0);
      cm.fieldEffect_ProcessOnOffLayer("map0", "Effect/Direction23.img/map/0", 0, 0, 0, -73, -1, 4, 0, 0, 0, 1, 0);
      cm.fieldEffect_ProcessOnOffLayer("map1", "Effect/Direction23.img/map/1", 0, 0, 0, -73, -2, 4, 0, 0, 0, 1, 0);
      cm.fieldEffect_ProcessOnOffLayer("map2", "Effect/Direction23.img/map/2", 0, 0, 0, -73, -3, 4, 0, 0, 0, 1, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 891, -600);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(3004322, "oid=2830304", 800, -500, 7, 750, 850, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=2830304", "summon", 0, 0);
        cm.npc_ChangeController(3004323, "oid=2830305", 1000, -500, 11, 950, 1050, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=2830305", "summon", 0, 0);
        cm.fieldEffect_PlayBGM("Bgm50/SubterminalPoint", 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
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
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face3#什么嘛，怎么搞的？", 37, 3004322, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("我也不明白。我的心绪似乎被这边的某处吸引着……", 57, 0, true, true);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_ProcessOnOffLayer("map0", 'lt', 3, 1500, 750, 0, 0, 0, 0, 0, 0, 0, 0);
                    cm.fieldEffect_ProcessOnOffLayer('map0', 'rt', 3, 750, 375, 0, 0, 0, 0, 0, 0, 0, 0);
                    cm.fieldEffect_ProcessOnOffLayer("map0", 'lb', 3, 750, 375, 0, 0, 0, 0, 0, 0, 0, 0);
                    cm.fieldEffect_ProcessOnOffLayer("map0", 'rb', 3, 375, 182, 0, 0, 0, 0, 0, 0, 0, 0);
                    cm.fieldEffect_ProcessOnOffLayer("eff", "Effect/Direction23.img/effect/0", 0, 0, 0, 0, -20, 4, 0, -1, 0, -1, 1);
                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/borderless/transitions_fast", 100);
                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2830304"], [0, 0, -20, 1, 0, 1, 0, 0]);
                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2830305"], [0, 0, -20, 1, 0, 1, 0, 0]);
                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_ProcessOnOffLayer("map1", 'lt', 3, 1500, 750, 0, 0, 0, 0, 0, 0, 0, 0);
                      cm.fieldEffect_ProcessOnOffLayer("map1", 'rt', 3, 750, 375, 0, 0, 0, 0, 0, 0, 0, 0);
                      cm.fieldEffect_ProcessOnOffLayer("map1", 'lb', 3, 750, 375, 0, 0, 0, 0, 0, 0, 0, 0);
                      cm.fieldEffect_ProcessOnOffLayer("map1", 'rb', 3, 375, 182, 0, 0, 0, 0, 0, 0, 0, 0);
                      cm.fieldEffect_ProcessOnOffLayer("eff", "Effect/Direction23.img/effect/0", 0, 0, 0, 0, -20, 4, 0, -1, 0, -1, 1);
                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/borderless/transitions_fast", 100);
                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                    } else {
                      if (status === V++) {
                        cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                        cm.fieldEffect_ProcessOnOffLayer("map2", 'lt', 3, 1500, 750, 0, 0, 0, 0, 0, 0, 0, 0);
                        cm.fieldEffect_ProcessOnOffLayer("map2", 'rt', 3, 750, 375, 0, 0, 0, 0, 0, 0, 0, 0);
                        cm.fieldEffect_ProcessOnOffLayer("map2", 'lb', 3, 750, 375, 0, 0, 0, 0, 0, 0, 0, 0);
                        cm.fieldEffect_ProcessOnOffLayer('map2', 'rb', 3, 375, 182, 0, 0, 0, 0, 0, 0, 0, 0);
                        cm.fieldEffect_ProcessOnOffLayer("eff", "Effect/Direction23.img/effect/0", 0, 0, 0, 0, -20, 4, 0, -1, 0, -1, 1);
                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/borderless/transitions_fast", 100);
                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 891, -430);
                      } else {
                        if (status === V++) {
                          cm.Hidden_background("cernium_ship", 1, 1, 0, 0);
                          cm.fieldEffect_ProcessOnOffLayer('map0', '', 2, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                          cm.fieldEffect_ProcessOnOffLayer("map1", '', 2, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                          cm.fieldEffect_ProcessOnOffLayer("map2", '', 2, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                          cm.npc_LeaveField("oid=2830304");
                          cm.npc_LeaveField("oid=2830304");
                          cm.npc_LeaveField("oid=2830305");
                          cm.npc_LeaveField("oid=2830305");
                          cm.npc_ChangeController(3004322, "oid=2831558", 895, -500, 3, 845, 945, 0, true, 0, false);
                          cm.npc_SetSpecialAction("oid=2831558", 'summon', 0, 0);
                          cm.npc_ChangeController(3004323, "oid=2831559", 895, -500, 3, 845, 945, 0, true, 0, false);
                          cm.npc_SetSpecialAction("oid=2831559", "summon", 0, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(300);
                        } else {
                          if (status === V++) {
                            cm.userSetFieldFloating(993135009, 3, 3, 1);
                            cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom('！！！', 57, 0, false, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face3#现在老师和我们正在朝黑魔法师前进！", 37, 3004323, true, true);
                                cm.effect_Voice("Voice5.img/CH1/Lily/24", 128);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face3#什么？！这是真的吗？", 37, 3004322, true, true);
                                  cm.effect_Voice("Voice5.img/CH1/Elwyn/19", 128);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face3##h0#！这是你去找黑魔法师的过程！！", 37, 3004323, true, true);
                                    cm.effect_Voice("Voice5.img/CH1/Lily/25", 128);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("啊！既然如此……接下来的情节就应该是……！！", 57, 0, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                        cm.Hidden_background("cernium_ship", 1, 0, 0, 0);
                                        cm.Hidden_background("cernium_ship2", 1, 1, 0, 0);
                                        cm.setAmbience("Ambience.img/crusherStay", 100, 60);
                                        cm.userSetFieldFloating(993135009, 10, 10, 1);
                                        cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face3#我们逃跑吧！快！", 37, 3004322, false, true);
                                            cm.effect_Voice("Voice5.img/CH1/Elwyn/20", 128);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face3#不行，已经来不及了！", 37, 3004323, true, true);
                                              cm.effect_Voice("Voice5.img/CH1/Lily/26", 128);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1300);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction20.img/effect/BM3_effect/10"], [0, 894, -400, 1, 0, 1, 1, 0]);
                                                  cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1000, 0);
                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion10", 100);
                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                } else if (status === V++) {
                                                  cm.warp(993135010, 0, false);
                                                  cm.eventSKill(0);
                                                  cm.setInGameDirectionMode(false, true, false);
                                                  cm.setStandAloneMode(false);
                                                  cm.npc_LeaveField("oid=2831558");
                                                  cm.npc_LeaveField("oid=2831558");
                                                  cm.npc_LeaveField("oid=2831559");
                                                  cm.npc_LeaveField("oid=2831559");
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
    }
  }
}