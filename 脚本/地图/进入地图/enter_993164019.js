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
      cm.npc_ChangeController(3004912, "oid=363554", 859, -994, 77, 809, 909, 1, false, 0, false);
      cm.npc_ChangeController(3004913, 'oid=363555', 984, -1127, 86, 934, 1034, 1, false, 0, false);
      cm.npc_ChangeController(3004913, 'oid=363556', 803, -1062, 85, 753, 853, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.fieldEffect_Hero8(1);
      cm.inGameDirectionEvent_AskAnswerTime(1500);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.npc_ChangeController(3004917, 'oid=566617', 691, -900, 73, 641, 741, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=566617", "summon", 0, 0);
        cm.npc_ChangeController(3004908, "oid=566618", 559, -900, 73, 509, 609, 0, false, 0, false);
        cm.npc_SetSpecialAction('oid=566618', "summon", 0, 0);
        cm.npc_ChangeController(3004912, 'oid=566619', 830, -900, 73, 780, 880, 1, true, 0, false);
        cm.npc_SetSpecialAction('oid=566619', 'summon', 0, 0);
        cm.npc_ChangeController(3004912, 'oid=566620', 900, -900, 73, 850, 950, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=566620", 'summon', 0, 0);
        cm.npc_SetSpecialAction("oid=566617", 'die', -1, 1);
        cm.npc_SetSpecialAction("oid=566618", "call", -1, 1);
        cm.setAmbience("Ambience.img/heavyrain", 100, 60);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 680, -1626);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
            cm.inGameDirectionEvent_AskAnswerTime(1200);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1400);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1500);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face2#你……这……", 36, 3004917, false, true, 1);
                  cm.effect_Voice("Voice6.img/kain/18/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/1', 100);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face2#这帮该死的……德拉卡兹……", 36, 3004917, true, true, 1);
                    cm.effect_Voice("Voice6.img/kain/18/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/2', 100);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/DLep4/sword4", 100);
                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/koong", 100);
                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_PushScaleInfo(4000, 0, 1500, 4000, 680, -900);
                          } else {
                            if (status === V++) {
                              cm.setAmbience("Ambience.img/heavyrain", 80, 60);
                              cm.fieldEffect_PlayBGM("Bgm56/TheDispossessed", 0, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(6500);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#已经将记忆回收回来了。", 36, 3004908, false, true, 1);
                                cm.effect_Voice("Voice6.img/kain/18/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/4', 100);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#我将用安全方式报废#b记忆石#k。", 36, 3004908, true, true, 1);
                                  cm.effect_Voice("Voice6.img/kain/18/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/5', 100);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face3#唔……！", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_PushScaleInfo(300, 0, 1500, 300, 300, -690);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_setForceFlip("oid=566618", -1);
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#……", 36, 3004908, false, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#是，原型没事，我会准备归队后的重置……", 36, 3004908, false, true, 1);
                                                      cm.effect_Voice("Voice6.img/kain/18/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/7', 100);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face2#让开。", 36, 3004904, false, true, 1);
                                                          cm.effect_Voice("Voice6.img/kain/18/" + (cm.getPlayer().getGender() == 0 ? 'Male' : 'Female') + '/9', 100);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.npc_ChangeController(3004904, "oid=566808", 50, -700, 76, 0, 100, 0, true, 300, false);
                                                              cm.npc_SetSpecialAction("oid=566808", "summon", 0, 0);
                                                              cm.npc_SetSpecialAction('oid=566808', "attack", -1, 1);
                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.fieldEffect_PlayBGM("Bgm00/Silence", 0, 0);
                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 250, 2);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ReverseCity/gunshot", 100);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#唔……！", 36, 3004908, false, true, 1);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face4#不行！记忆石……", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                                                        cm.effect_Voice("Voice6.img/kain/18/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/10", 100);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.fieldEffect_屏幕渐入插图B(['00', "Effect/Direction26.img/kain/spine/memoryDrop/skeleton", '', 'animation'], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0]);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(4500);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.fieldEffect_屏幕渐入插图消失B(['00'], [0, 0]);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.npc_SetSpecialAction('oid=566618', "die", -1, 1);
                                                                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 680, -900);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.npc_setForceFlip('oid=566618', 1);
                                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/morass/break_stone", 100);
                                                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/morass/tana_skill3", 100);
                                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/Direction26.img/kain/effect/4", "oid=0"], [0, 602, -870, 1, 0, 1, 1, 0, 0]);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 2);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                      } else if (status === V++) {
                                                                                        cm.npc_LeaveField("oid=566617");
                                                                                        cm.npc_LeaveField("oid=566618");
                                                                                        cm.npc_LeaveField("oid=566619");
                                                                                        cm.npc_LeaveField("oid=566620");
                                                                                        cm.npc_LeaveField("oid=566808");
                                                                                        cm.dispose();
                                                                                        cm.warp(993164020, 0, true);
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
        }
      }
    }
  }
}