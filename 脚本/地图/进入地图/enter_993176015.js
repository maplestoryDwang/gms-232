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
      cm.fieldEffect_PlayBGM("Bgm00/Silence", 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 230, -2500);
      cm.npc_ChangeController(3004651, "oid=123747945", 0, 0, 3, -50, 50, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=123747945", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=123747945", 'special2', -1, 1);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.fieldEffect_PlayBGM("Bgm54.img/MemoryOfSunset", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 0, 0);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.setAmbience("SoundEff.img/ReverseCity/windLoop", 100, 100);
        cm.inGameDirectionEvent_AskAnswerTime(2000);
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
              cm.inGameDirectionEvent_AskAnswerTime(3000);
            } else {
              if (status === V++) {
                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/radionoise", 100);
                cm.inGameDirectionEvent_Monologue("#fc0xFFAAAAAA#贝……唧……尔……（唧）", 1);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_Monologue("#fc0xFFAAAAAA#贝尔……我们还在……等……你……（唧）", 0);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_Monologue("#fc0xFFAAAAAA#快……回来……（唧）", 1);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(3500);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_Monologue("嗯……", 0);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_Monologue("我这就回去了……", 1);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/morass/tana_skill2", 100);
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_ProcessOnOffLayer('WhiteOut', "Map/Effect2.img/WhiteOut", 0, 500, 0, 0, 100, 4, 0, -1, 0, 0, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_PlayFieldSound("Sound/Skill.img/1111002/Use", 100);
                                        cm.playSoundEffDirectly("SoundEff.img/ReverseCity/windLoop");
                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 250, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(250);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(6000);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ReverseCity/bomb2", 100);
                                            cm.inGameDirectionEvent_AskAnswerTime(4000);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction24.img/illust2/1", 0, 0, 0, 0, 3, 4, 0, -1, 0, 0, 0);
                                              cm.fieldEffect_ProcessOnOffLayer("WhiteOut", '', 2, 15000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(12000);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_Monologue('拉索尔，那个……', 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_Monologue("是的，那个就是我们盼望已久的……", 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_Monologue("夕阳……", 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 3000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                          } else if (status === V++) {
                                                            cm.warp(450014050, 0, true);
                                                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                            cm.setInGameDirectionMode(false, true, false);
                                                            cm.setStandAloneMode(false);
                                                            cm.forceCompleteQuest(37619);
                                                            cm.gainExp(26348461);
                                                            cm.updateInfoQuest(37600, "01=h0;10=h0;20=h0;11=h0;02=h1;12=h0;13=h0;14=h0;15=h0;16=h0;17=h0;18=h0;09=h0;19=h0");
                                                            cm.npc_LeaveField("oid=123747945");
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
        }
      }
    }
  }
}