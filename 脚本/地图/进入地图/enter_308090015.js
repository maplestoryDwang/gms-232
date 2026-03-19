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
      cm.npc_ChangeController(2570108, "oid=38029008", 167, 120, 2, 117, 217, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=38029008", "summon", 0, 0);
      cm.npc_ChangeController(2570106, "oid=38029009", 388, 122, 2, 338, 438, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=38029009", 'summon', 0, 0);
      cm.npc_ChangeController(2570100, "oid=38029010", 229, 108, 2, 179, 279, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=38029010", "summon", 0, 0);
      cm.npc_ChangeController(2570130, "oid=38029011", 480, 170, 8, 430, 530, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=38029011", "summon", 0, 0);
      cm.npc_ChangeController(2570130, "oid=38029012", 550, 170, 8, 500, 600, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=38029012", "summon", 0, 0);
      cm.npc_ChangeController(2570130, "oid=38029013", 115, 170, 5, 65, 165, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=38029013", 'summon', 0, 0);
      cm.npc_ChangeController(2570130, "oid=38029014", 45, 170, 5, -5, 95, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=38029014", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_SetSpecialAction("oid=38029009", "attack2", -1, 1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 320, 116);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(4000);
        cm.effect_Text(["#fn黑体##fs18#在很久以前的那天……", ''], [100, 2200, 6, -50, -50, 1, 4, 0, 0, 0, 0, 0]);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face1#让开！！！", 36, 2570106, false, true, 1);
          cm.effect_Voice("Voice6.img/Library/king/14-02-king.mp3", 100);
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
                cm.inGameDirectionEvent_AskAnswerTime(1500);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#我不能那么做。", 36, 2570100, false, true, 1);
                  cm.effect_Voice("Voice6.img/Library/kel/14-03-kel.mp3", 100);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face1#还不快让开！\r\n那家伙……他会全部抢走的！不管是这个国家！还是鲁碧安！！", 36, 2570106, true, true, 1);
                    cm.effect_Voice("Voice6.img/Library/king/14-04-king.mp3", 100);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#就算是国王，\r\n私自挥剑杀害王族也是不可宽恕的事情。", 36, 2570100, true, true, 1);
                      cm.effect_Voice("Voice6.img/Library/kel/14-07-kel.mp3", 100);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face1#让开！！你的任务是保护我！！", 36, 2570106, true, true, 1);
                        cm.effect_Voice("Voice6.img/Library/king/14-08-king.mp3", 100);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#我现在正是在保护陛下。杀害王族的事……", 36, 2570100, true, true, 1);
                          cm.effect_Voice("Voice6.img/Library/kel/14-09-kel.mp3", 100);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face1#是吗？现在干脆不把我这个国王放在眼里了是吧？！", 36, 2570106, true, true, 1);
                            cm.effect_Voice("Voice6.img/Library/king/14-10-king.mp3", 100);
                          } else {
                            if (status === V++) {
                              cm.effect_Voice("Voice6.img/Library/king/14-11-king.mp3", 100);
                              cm.sendNormalTalk_Bottom("#face1#你是觉得……！那个来路不明的庶子不久将会成为国王吗？！", 36, 2570106, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#陛下！我不是这意思……", 36, 2570100, true, true, 1);
                                cm.effect_Voice("Voice6.img/Library/kel/14-12-kel.mp3", 100);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face1#快把士兵叫来！！这家伙要……他要造反！！", 36, 2570106, true, true, 1);
                                  cm.effect_Voice("Voice6.img/Library/king/14-13-king.mp3", 100);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_SetSpecialAction("oid=38029011", "attack", -1, 1);
                                      cm.npc_SetSpecialAction("oid=38029012", "attack", -1, 1);
                                      cm.npc_SetSpecialAction("oid=38029013", "attack", -1, 1);
                                      cm.npc_SetSpecialAction("oid=38029014", 'attack', -1, 1);
                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cernium2/sworld", 100);
                                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face3#请你让开，老师。\r\n照这样下去，你我都难逃一死。", 36, 2570108, false, true, 1);
                                        cm.effect_Voice("Voice6.img/Library/prince/14-14-prince.mp3", 100);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#我不能让。王子殿下，请你三思……", 36, 2570100, true, true, 1);
                                          cm.effect_Voice("Voice6.img/Library/kel/14-15-kel.mp3", 100);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#我没事。", 36, 2570108, true, true, 1);
                                            cm.effect_Voice("Voice6.img/Library/prince/14-16-prince.mp3", 100);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#但请你答应我一件事。", 36, 2570108, true, true, 1);
                                              cm.effect_Voice("Voice6.img/Library/prince/14-17-prince.mp3", 100);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face3#如果我死了……", 36, 2570108, true, true, 1);
                                                cm.effect_Voice("Voice6.img/Library/prince/14-18-prince.mp3", 100);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_PlayBGM("Bgm55/WhiteNight", 0, 0);
                                                  cm.fieldEffect_ProcessOnOffLayer('01', "Effect/Direction25.img/Dlep6/effect/0", 0, 2000, 10, 10, 20, 4, 0, 0, 0, 0, -1);
                                                  cm.sendNormalTalk_Bottom("#face3#宝石……鲁碧……", 36, 2570108, true, true, 1);
                                                  cm.effect_Voice("Voice6.img/Library/prince/14-19-prince.mp3", 100);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face2#请保护……", 36, 2570108, true, true, 1);
                                                    cm.effect_Voice("Voice6.img/Library/prince/14-20-prince.mp3", 100);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/DLep4/sword4", 100);
                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_ProcessOnOffLayer('02', "Effect/Direction25.img/Dlep6/ilust/0", 0, 2000, 0, 0, 0, 4, 1, -1, 0, 0, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face2#老师……", 36, 2570108, false, true, 1);
                                                              cm.effect_Voice("Voice6.img/Library/prince/14-21-prince.mp3", 100);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#不，不是的……当时国王……陛下的剑没有劈下……", 36, 2570100, false, true, 1);
                                                                  cm.effect_Voice("Voice6.img/Library/kel/14-22-kel.mp3", 100);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face2#你为什么……抛弃了我。", 36, 2570108, true, true, 1);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.effect_Voice("Voice6.img/Library/prince/14-23-prince.mp3", 100);
                                                                      cm.fieldEffect_ProcessOnOffLayer('02', '', 2, 1500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                      cm.fieldEffect_ProcessOnOffLayer('03', "Effect/Direction25.img/Dlep6/ilust/9", 0, 2000, 0, 0, 1, 4, 1, -1, 0, 0, 0);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#王子……？！", 36, 2570100, false, true, 1);
                                                                        cm.effect_Voice("Voice6.img/Library/kel/14-24-kel.mp3", 100);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#你为什么……抛弃了我。", 36, 2570107, true, true, 1);
                                                                          cm.effect_Voice("Voice6.img/Library/prince/14-25-prince.mp3", 100);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#不。我……王子殿下，我绝不会对你……", 36, 2570100, true, true, 1);
                                                                            cm.effect_Voice("Voice6.img/Library/kel/14-26-kel.1.mp3", 100);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#你应该知道吧。", 36, 2570107, true, true, 1);
                                                                              cm.effect_Voice("Voice6.img/Library/prince/14-27-prince.mp3", 100);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#当时……我去找你的原因……", 36, 2570107, true, true, 1);
                                                                                cm.effect_Voice("Voice6.img/Library/prince/14-28-prince.mp3", 100);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.fieldEffect_ProcessOnOffLayer('03', '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(700);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.fieldEffect_ProcessOnOffLayer('04', "Effect/Direction25.img/Dlep6/ilust/6/0", 0, 500, 0, -80, 0, 4, 1, -1, 0, 0, 0);
                                                                                    cm.fieldEffect_ProcessOnOffLayer('05', "Effect/Direction25.img/Dlep6/ilust/6/2", 0, 500, 0, -80, 1, 4, 1, -1, 0, 0, 0);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face0##r王位簒夺者的下场#k无非这两种之一。", 36, 2570107, false, true, 1);
                                                                                      cm.effect_Voice("Voice6.img/Library/prince/03-30-prince.mp3", 100);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#要么死，要么成为国王。", 36, 2570107, true, true, 1);
                                                                                        cm.effect_Voice("Voice6.img/Library/prince/03-31-prince.mp3", 100);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#老师，我……", 36, 2570107, false, true, 1);
                                                                                            cm.effect_Voice("Voice6.img/Library/prince/03-32-prince.2.mp3", 100);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face2#……老师……", 36, 2570107, false, true, 1);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom('#face2#……。', 36, 2570107, true, true, 1);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                  } else if (status === V++) {
                                                                                                    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                    cm.npc_LeaveField("oid=38029008");
                                                                                                    cm.npc_LeaveField("oid=38029009");
                                                                                                    cm.npc_LeaveField("oid=38029010");
                                                                                                    cm.npc_LeaveField("oid=38029011");
                                                                                                    cm.npc_LeaveField("oid=38029012");
                                                                                                    cm.npc_LeaveField("oid=38029013");
                                                                                                    cm.npc_LeaveField("oid=38029014");
                                                                                                    cm.dispose();
                                                                                                    cm.warp(308090016, 0, false);
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