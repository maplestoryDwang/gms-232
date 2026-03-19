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
      cm.npc_ChangeController(3001937, "oid=434117", 287, 5, 19, 237, 337, 1, false, 0, false);
      cm.setSessionValue('kill_count', '0');
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.forceCompleteQuest(39600);
      cm.setAmbience("Ambience.img/warfare2", 100, 60);
      cm.fieldEffect_PlayBGM("Bgm53/ForEinherjar", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
    } else {
      if (status === V++) {
        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/adele/swordEff2", 100);
        cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction18.img/effect/adele/etc/sword/2", 0, 1000, 0, 0, 1, 4, 0, -1, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1200);
          cm.effect_Text(["#fn黑体##fs30##fc0xFFd8d8d8#我在主君面前燃起盟誓之火，郑重起誓，", ''], [30, 4000, 4, 0, 0, 0, 4, 3, 0, 0, 0, 0]);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(2000);
            cm.effect_Voice("Voice2.img/adele/past/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/1', 100);
          } else {
            if (status === V++) {
              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/adele/swordEff2", 100);
              cm.inGameDirectionEvent_AskAnswerTime(2000);
            } else {
              if (status === V++) {
                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/adele/swordEff0", 100);
                cm.fieldEffect_ProcessOnOffLayer('01', "Effect/Direction18.img/effect/adele/etc/sword/3", 0, 1000, 0, 0, 1, 4, 0, -1, 0, 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                  cm.effect_Text(["#fn黑体##fs30##fc0xFFd8d8d8#我们是光荣的勇猛之剑。", ''], [30, 3000, 4, 0, 0, 0, 4, 3, 0, 0, 0, 0]);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                    cm.effect_Voice("Voice2.img/adele/past/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/2', 100);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/adele/swordEff2", 100);
                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/adele/swordEff1", 100);
                        cm.fieldEffect_ProcessOnOffLayer('02', "Effect/Direction18.img/effect/adele/etc/sword/4", 0, 1000, 0, 0, 1, 4, 0, -1, 0, 0, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                        cm.effect_Text(["#fn黑体##fs30##fc0xFFd8d8d8#誓要毫不留情地斩断不正与邪恶之风，勇往直前，决不后退。", ''], [30, 4500, 4, 0, 0, 0, 4, 3, 0, 0, 0, 0]);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                          cm.effect_Voice("Voice2.img/adele/past/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/3', 100);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/adele/swordEff2", 100);
                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/adele/swordEff1", 100);
                              cm.fieldEffect_ProcessOnOffLayer('03', "Effect/Direction18.img/effect/adele/etc/sword/2", 0, 1000, 0, 0, 1, 4, 0, -1, 0, 0, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                cm.effect_Text(["#fn黑体##fs30##fc0xFFd8d8d8#哪怕粉身碎骨，也定保主君周全。", "SampleType00"], [30, 3000, 4, 0, 0, 0, 4, 3, 0, 0, 0, 0]);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(5000);
                                  cm.effect_Voice("Voice2.img/adele/past/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/4', 100);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                    cm.fieldEffect_ProcessOnOffLayer('01', '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                    cm.fieldEffect_ProcessOnOffLayer('02', '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                    cm.fieldEffect_ProcessOnOffLayer('03', '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/adele/sword_return", 100);
                                      cm.fieldEffect_ProcessOnOffLayer('04', "Effect/Direction18.img/effect/adele/etc/sword/1", 0, 1000, 0, 0, 1, 4, 0, -1, 0, 0, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(1120);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_ProcessOnOffLayer('04', '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/adele/memory_in", 100);
                                        cm.fieldEffect_复合图片动画(["Effect/Direction18.img/effect/adele/spine/etc/7/skeleton", "new", '', '00'], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0]);
                                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_复合图片动画(["Effect/Direction18.img/effect/adele/spine/etc/5/skeleton", "new", '', '5'], [0, 1, 0, 0, 0, 0, 0, 1, 0, 0]);
                                          cm.fieldEffect_复合图片动画(["Effect/Direction18.img/effect/adele/spine/etc/6/skeleton", "new", '', '6'], [0, 1, 0, 0, 0, 0, 0, 1, 0, 0]);
                                          cm.fieldEffect_ProcessOnOffLayer('02', "Effect/Direction18.img/effect/adele/spine/past_job/0/0", 0, 1000, 0, -80, 1, 4, 0, -1, 0, 0, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                        } else {
                                          if (status === V++) {
                                            cm.effect_Voice("Voice2.img/adele/past/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/5', 100);
                                            cm.effect_Text(["#fn黑体##fs30##fc0xFF8d8d8d#只要再坚持一会儿，援军就到了。", ''], [10, 100, 7, 0, -60, 0, 4, 3, 0, 0, -1, 1]);
                                          } else {
                                            if (status === V++) {
                                              cm.effect_Voice("Voice2.img/adele/past/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/6', 100);
                                              cm.effect_Text(["#fn黑体##fs30##fc0xFF8d8d8d#在此之前……我们一定要守住大门。", ''], [10, 100, 7, 0, -60, 0, 4, 3, 0, 0, -1, 1]);
                                            } else {
                                              if (status === V++) {
                                                cm.effect_Voice("Voice2.img/adele/past/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/9', 100);
                                                cm.effect_Text(["#fn黑体##fs30#我们总共就剩这些人了吗？", ''], [10, 100, 7, 0, -60, 0, 4, 3, 0, 0, -1, 1]);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/adele/foot_night", 100);
                                                  cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                    cm.effect_Voice("Voice2.img/adele/past/B/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/3', 100);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_ProcessOnOffLayer('02', '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/adele/memory_in", 100);
                                                        cm.fieldEffect_复合图片动画(["Effect/Direction18.img/effect/adele/spine/etc/7/skeleton", "new", '', '00'], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0]);
                                                        cm.fieldEffect_取消复合图片动画('5', 0, 0);
                                                        cm.fieldEffect_取消复合图片动画('6', 0, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_Hero9(0, 2000);
                                                          cm.inGameDirectionEvent_AskAnswerTime(2300);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                            cm.fieldEffect_Hero9(-1, 500);
                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.playSoundEffDirectly("Ambience.img/warfare2");
                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face2#又是那个梦……记忆在渐渐消失。", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face2#时间……过去多久了呢……", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.playVideoByScript("AdeleTuto1.avi");
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
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                              cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                            } else if (status === V++) {
                                                                              cm.warp(993162002, 0, false);
                                                                              cm.setStandAloneMode(false);
                                                                              cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                              cm.setInGameDirectionMode(false, true, false);
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
                }
              }
            }
          }
        }
      }
    }
  }
}